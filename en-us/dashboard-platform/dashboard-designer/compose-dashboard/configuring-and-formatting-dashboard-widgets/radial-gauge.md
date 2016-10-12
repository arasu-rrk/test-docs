---
layout: post
title: Configuring and Formatting Radial Gauge with Syncfusion Dashboard Designer
description: How to configure and format radial gauge with Syncfusion Dashboard Designer
platform: dashboard-platform
control: Radial Gauge
documentation: ug
---

# Radial Gauge

Radial Gauge allows you to measure processing efficiency through key performance indicators like Value and Goal. To showcase a radial gauge, a minimum requirement of 1 actual or target value is needed.

![](images/radialgauge_img1.png)

## How to configure flat table data to Radial Gauge?

To construct a radial gauge, a minimum requirement of 1 column is needed. You can visualize both measure, calculated measure and dimension column data in radial gauge control.

The following procedure illustrates data configuration of Radial Gauge.

Drag and drop `Radial Gauge` control icon from the Tool box into design panel. You can find control in Toolbox by search.

![](images/radialgauge_img2.png)

After control added in design panel, click **Assign Data** button at Design Tools Pane to open the Data configuration pane.

![](images/radialgauge_img3.png)

Bind column through drag and drop element from `Measures` section to `Actual Value`.

![](images/radialgauge_img4.png)

Drag and Drop the elements from section to `Target Value`.

![](images/radialgauge_img5.png)

You can use aggregate function to change the `Actual Value` of the radial gauge widget.

![](images/radialgauge_img6.png)

You can use `Filter` option to filter the data by specifying the filter condition.

![](images/radialgauge_img7.png)

`Measure Filter` will be shown to set the `Ranges`.

![](images/radialgauge_img8.png)

You can clear the filter by selecting the `Clear` option.

![](images/radialgauge_img9.png)

You can format the elements by selecting the `Format` option.

![](images/radialgauge_img10.png)

`Measure Formatting` window will be shown to change the measure.

![](images/radialgauge_img11.png)

You can change the `Target Value` by changing the settings.

![](images/radialgauge_img12.png)

`Filters` can be applied to the `Target Value` by changing the filter condition.

![](images/radialgauge_img13.png)

You can clear the filter by selecting the `Clear` option.

![](images/radialgauge_img14.png)

Drag and Drop the elements from sections to `Series`.

![](images/radialgauge_img15.png)

Here, is an illustration

![](images/radialgauge_img16.png)

## How to configure the SSAS data to Radial Gauge?

To construct a radial gauge, a minimum requirement of 1 column is needed. You can visualize both measure, calculated measure and dimension column data in radial gauge control.

Following steps illustrates configuration of SSAS data to Radial Gauge.

Drag and drop `Radial Gauge` control icon from the Tool box into design panel. You can find control in Toolbox by search.

![](images/radialgauge_img2.png)
 
After control added in design panel, click `Assign Data` button at Design Tools Pane to open the Data configuration pane.

![](images/radialgauge_img3.png)
 
Drag and drop a column under `Measures` category into `Actual Value`.

![](images/actualvalue.png)
 
Drag and drop a column under `Measures` category into `Target Value`.

![](images/targetvalue.png)
 
Define the filter criteria to match through choosing `Edit` option in `Filter` menu item.

![](images/ssaseditmeasurefilter.png)
 
The `Measure filter` dialog will be shown where you can choose the filter condition and apply the condition value.

![](images/ssasmeasurefilter.png)

Select `Clear` option to clear the defined filter.
 
![](images/ssasclearmeasurefilter.png)

Select `Format` option to define the display format to the values in the column through `Measure Formatting` window.

![](images/ssasmeasureformat1.png) 

Choose the options you need and click `OK`.

![](images/ssasmeasureformat2.png)
 
Add a dimension level or hierarchy into `Series` section through drag and drop.

![](images/seriesvalue.png)

Define filter criteria through `Filter(s)…` menu item in the `Settings` drop down menu.
 
![](images/seriesfilter.png)

To know more about filters, refer [here](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/configuring-widget-filters).

Here, is an illustration

![](images/radialgauge_img22.png)

## How to format Radial Gauge?

You can format the radial gauge for better illustration of the view that you require, through the settings available in `Properties` pane.

**General Settings**

![](images/radialgauge_img17.png)

**Header**

This allows you to set the container header text.

**Description**

This allows you to set description for this radial gauge widget, whose visibility will be denoted by `i` icon, hovering which will display this description in tooltip.

**Basic Settings**

![](images/radialgauge_img18.png)

**Range Color** setting allows you to customize the range color of Gauge widget. Click the color to drop down the list of palette colors and select one to apply to the range.

**Custom Range** setting allows you to customize the range start and range end values of Gauge widget. Enable the Minimum and/or Maximum value boxes for editing through selecting respective checkbox.

![](images/radialgauge_imgbasicsetting18.png)

N> Range Start Value should be always greater than range end value.

**Direction** setting allows you to define the quality of value through specifying whether higher value should be treated as good or bad.

**Filter Settings**

![](images/radialgauge_img20.png)

**Act as Master**

This allows you to define this gauge widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard. This option is available only when a column in `Series` section is configured.

**Ignore Filter Actions**

This allows you to define this gauge widget to ignore responding to the filter actions applied on other widgets in dashboard.

**Link Settings**

You can enable linking and configure to navigate either to a published dashboard URL or to a general URL with or without parameters. For more details, refer [Linking](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/linking-urls-and-dashboards). 

**Container Appearance**

![](images/radialgauge_img21.png)

**Title Alignment**

This allows you to handle the alignment of widget title to either left, center or right.

**Title Color** 

This allows you to apply text color to the widget title.

**Show Border**

This allows you to toggle the visibility of border surrounding the widget.

**Corner Radius**

This allows you to apply the specified radius to the widget corners. Value can be between 0 and 10.

**Show Maximize**

This allows you to enable/disable the maximized mode of this radial gauge widget. The visibility of the maximize icon in widget header will be defined based on this setting. Clicking this icon in viewer will show the maximized view of the radial gauge widget.

**CSV Export**

This allows you to enable/disable the CSV export option for this radial gauge widget. Enabling this allows you to export the summarized data of the widget view to CSV format.

**Excel Export**

This allows you to enable/disable the Excel export option for this radial gauge widget. Enabling this allows you to export the summarized data of the widget view to XLSX format.

**Image Export**

This allows you to enable/disable the image export option for this radial gauge widget. Enabling this allows you to export the view of the widget to image format (*.JPG) in viewer.

**Enable Comment**

This allows you to enable/disable comment for dashboard widget. For more details refer [here](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/commenting-dashboard-and-widget)



