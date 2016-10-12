---
layout: post
title: Get Groups - Get the list of groups from Dashboard Server.
description: Learn how to get the list of groups from Dashboard Server.
platform: dashboard-platform
documentation: ug
---

# Get All Groups

This section explains on how to get the list of groups from Dashboard Server API.

## Description:
Get the list group details from the dashboard server.

## URL:
/api/get-groups

## Method:
POST

## Parameters:
The required parameters are,
* UserName
* PassWord


## Code Snippet:
```csharp
     private static List<GroupResponse> GetAllGroups()
        {
            var userName = "guest";
            var passWord = "demo";

            var itemRequest = new ItemRequest
            {
                UserName = userName,
                Password = passWord
            };

            using (var proxy = new CustomWebClient())
            {
                var ser = new DataContractJsonSerializer(typeof(ItemRequest));
                var mem = new MemoryStream();
                ser.WriteObject(mem, itemRequest);
                proxy.Headers["Content-type"] = "application/json";
                proxy.Encoding = Encoding.UTF8;

                var data = Encoding.UTF8.GetString(mem.ToArray(), 0, (int)mem.Length);

                var rdata = proxy.UploadString(new Uri(SyncfusionReportServerUrl + "/api/get-groups"), "POST", data);

                var result = JsonConvert.DeserializeObject<ItemResponse>(rdata);

                return result.GroupList;
            }
        }
```

## Result:
The API response with the GroupList property holds the group list.                    