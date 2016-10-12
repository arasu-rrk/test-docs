---
layout: post
title: Get Dashboards - Get the list of Dashboards from Dashboard Server.
description: Learn how to get the list of Dashboards from Dashboard Server.
platform: dashboard-platform
documentation: ug
---

# Get Dashboards

This section explains on how to get the dashboard list using Dashboard Server API.

## Description:
Get the list of dashboards from dashboard server.

## URL:
/dashboardserverapi/get-dashboards

## Method:
POST

## Parameters:
The required parameters are,
* UserName 
* PassWord
* ItemType



## Code Snippet:
```csharp
    public static ItemResponse GetDashboards()
        {
            var userName = "guest";
            var passWord = "demo";
            var itemRequest = new ItemRequest
            {
                UserName = userName,
                Password = passWord,
                ItemType = ItemType.Dashboard
            };
           
            using (var proxy = new CustomWebClient())
            {
                var ser = new DataContractJsonSerializer(typeof(ItemRequest));
                var mem = new MemoryStream();
                ser.WriteObject(mem, itemRequest);
                proxy.Headers["Content-type"] = "application/json";
                proxy.Encoding = Encoding.UTF8;
                var data = Encoding.UTF8.GetString(mem.ToArray(), 0, (int)mem.Length);

                var rdata = proxy.UploadString(new Uri(SyncfusionReportServerUrl + "/dashboardserverapi/get-dashboards"),
                    "POST", data);
                var response = JsonConvert.DeserializeObject<ItemResponse>(rdata);
                var result = JsonConvert.DeserializeObject<EntityData<ItemDetail>>(response.ResponseContent.ToString());

                return response;
            }
        }
```

##Result:
The API response with the ResponseContent property holds the dashboard list.		