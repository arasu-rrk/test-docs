---
layout: post
title: Get All Users - Get the user list from Dashboard Server.
description: Learn how to get the user list from Dashboard Server.
platform: dashboard-platform
documentation: ug
---

# Get All Users

This section explains on how to get the list of users from Dashboard Server API.

## Description:
Get the all the users count and its details from dashboard server.

## URL:
/api/get-users

## Method:
POST

## Parameters:
The required parameters are,
* UserName
* PassWord


## Code Snippet:
```csharp
    private static List<UserDetailResponse> GetAllUsers()
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

                var rdata = proxy.UploadString(new Uri(SyncfusionReportServerUrl + "/api/get-users"), "POST", data);

                var result = JsonConvert.DeserializeObject<ItemResponse>(rdata);

                return result.UserList;
            }
        }
```

## Result:
The JSON object with the UserList property holds the user list.                      
        