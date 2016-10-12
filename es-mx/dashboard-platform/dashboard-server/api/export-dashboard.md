---
layout: post
title: Export Dashboard - Export the dashboard in the given format from Dashboard Server.
description: Learn how to export the dashboard in the given format from Dashboard Server.
platform: dashboard-platform
documentation: ug
---
# Export Dashboard

This section explains on how to export Dashboard with Dashboard Server API.

## Description:
Export dashboards as image when you invoke export dashboard API.

## URL:
/dashboardserverapi/export-dashboard

## Method:
POST

## Parameters:
The required parameters are,
* UserName
* PassWord
* ItemId
* ExportTypeId
* ItemType
* DashboardName


## Code Snippet:
```csharp
      public static ItemResponse ExportDashboard()
       {
            var userName = "guest";
            var passWord = "demo";
            var itemId = Guid.Parse("b27be556-6a1f-452f-af3c-77528de6d939");
            var exporttypeId = ExportType.Image;
            var dashboardName = "Patient Experience Detail";
            var itemRequest = new ItemRequest
            {
                UserName = userName,
                Password = passWord,
                ItemId = itemId,
                ExportTypeId = exporttypeId,
                ItemType = ItemType.Dashboard,
                ReportName = dashboardName
            };

            using (var proxy = new CustomWebClient())
            {
                var ser = new DataContractJsonSerializer(typeof(ItemRequest));
                var mem = new MemoryStream();
                ser.WriteObject(mem, itemRequest);
                proxy.Headers["Content-type"] = "application/json";
                proxy.Encoding = Encoding.UTF8;
                var data = Encoding.UTF8.GetString(mem.ToArray(), 0, (int)mem.Length);

                var rdata = proxy.UploadString(new Uri(SyncfusionReportServerUrl + "/dashboardserverapi/export-dashboard"), "POST", data);

                var result = JsonConvert.DeserializeObject<ItemResponse>(rdata);
                File.WriteAllBytes("Test", result.FileContent);
                return result;
            }
      }
      ```

## Result:
The JSON object with the filecontent property has exported image as bytes.      

              