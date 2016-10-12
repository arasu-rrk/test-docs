---
layout: post
title: Get Widgets - Get the widget list from Dashboard Server.
description: Learn how to get the widget list from Dashboard Server.
platform: dashboard-platform
documentation: ug
---

# Get Widgets

This section explains on how to get the widget list using Dashboard Server API.

## Description:
Get the widgets in the dashboard server.

## URL:
/dashboardserverapi/get-widgets

## Method:
POST

## Parameters:
The required parameters are,
* UserName
* PassWord
* ItemType


## Code Snippet:
```csharp
    public static ItemResponse GetWidgets()
        {
            var userName = "guest";
            var passWord = "demo";
            var itemRequest = new ItemRequest
            {
                UserName = userName,
                Password = passWord,
                ItemType = ItemType.Widget
            };

            using (var proxy = new CustomWebClient())
            {
                var ser = new DataContractJsonSerializer(typeof(ItemRequest));
                var mem = new MemoryStream();
                ser.WriteObject(mem, itemRequest);
                proxy.Headers["Content-type"] = "application/json";
                proxy.Encoding = Encoding.UTF8;
                var data = Encoding.UTF8.GetString(mem.ToArray(), 0, (int)mem.Length);

                var rdata = proxy.UploadString(new Uri(SyncfusionReportServerUrl + "/dashboardserverapi/get-widgets"),
                    "POST", data);
                var response = JsonConvert.DeserializeObject<ItemResponse>(rdata);
                var result = JsonConvert.DeserializeObject<EntityData<ItemDetail>>(response.ResponseContent.ToString());

                return response;
            }
        }
```

## Result:
The API response with the ResponseContent property holds the dashboard list.