---
layout: post
title: Get UserList from Group - Get the user list of groups from Dashboard Server.
description: Learn how to get the user list of groups from Dashboard Server.
platform: dashboard-platform
documentation: ug
---
      
# Get User list From Group

This section explains on how to get the user list of group from Dashboard Server API.

## Description:
Get the user counts from specified group.

## URL:
/api/get-users-from-group

## Method:
POST

## Parameters:
The required parameters are,
* UserName
* PassWord
* GroupId


## Code Snippet:
```csharp
     public static ItemResponse GetUserListfromGroup()
        {
            var userName = "guest";
            var passWord = "demo";
            var groupId = 2;
            var itemRequest = new ItemRequest
            {
                UserName = userName,
                Password = passWord,
                GroupId = groupId
            };

            using (var proxy = new CustomWebClient())
            {
                var ser = new DataContractJsonSerializer(typeof(ItemRequest));
                var mem = new MemoryStream();
                ser.WriteObject(mem, itemRequest);
                proxy.Headers["Content-type"] = "application/json";
                proxy.Encoding = Encoding.UTF8;
                var data = Encoding.UTF8.GetString(mem.ToArray(), 0, (int)mem.Length);

                var rdata = proxy.UploadString(new Uri(SyncfusionReportServerUrl + "/api/get-users-from-group"), "POST", data);

                var result = JsonConvert.DeserializeObject<ItemResponse>(rdata);//The users from the requested group is available at UserList.
                return result;
            }

        }
```
 
## Result:
The JSON object with UserList property holds the user list of the group.                     
       