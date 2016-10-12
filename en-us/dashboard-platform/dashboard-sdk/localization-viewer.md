---
layout: post
title: Localization of Syncfusion Dashboard Viewer
description: How to localize Syncfusion Dashboard Viewer
platform: dashboard-platform
documentation: ug
---

# Localization 

Localization is the process of translating an application’s user interface based on specific cultures. 

## Localizing Dashboard Viewer

You can localize the Syncfusion Dashboard Viewer by placing an XML file (.xml) with predefined settings modified as per your preferred culture, into the `Resources` folder within the samples installed location of Dashboard Platform SDK.
 
To localize the `Syncfusion Dashboard Viewer` to a specific culture, follow the below steps.

Open the `Syncfusion.DashboardViewer.Resource.xml` file from the following location using the `Text Editor` such as `Notepad++`.

`%localappdata%\Syncfusion\Dashboard\Samples\Common\Resources\`

Duplicate the tag element `DashboardServiceResource` along with its contents under `Resources` tag and set the target culture value to the `Culture` attribute in the duplicated element. 

Edit the values of each element under `ServiceResource` and `ViewerResource` tag elements based on the target culture.

In the Dashboard Viewer widget definition added to an application, introduce the `localizationSettings` object with inner objects `enableCustomLanguage`, `resourcePath` and `culture` set with respective values like shown below.

### Example

    {% highlight js %}

       $('#dashboard').ejDashboardViewer(
       { 
          url: 'service URL', 
          report: 'path of the report',
          localizationSettings: {
                enableCustomLanguage: true,//set true or false
                resourcePath: "..//path//Syncfusion.DashboardViewer.Resource.xml ", //file path of the Syncfusion.DashboardViewer.Resource.xml file
                culture: "en-US"   //culture of the customized language
            }, 
       });

    {% endhighlight %}

N> If any of the values is missing in the XML file, the default culture value will be loaded for that particular name. If the target culture itself is missing in the XML file, the default culture will be loaded.

