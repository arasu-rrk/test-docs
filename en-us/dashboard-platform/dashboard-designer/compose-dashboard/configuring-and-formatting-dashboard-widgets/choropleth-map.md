---
layout: post
title: Configuring and Formatting Choropleth Map with Syncfusion Dashboard Designer
description: How to configure and format Choropleth map with Syncfusion Dashboard Designer
platform: dashboard-platform
control: Choropleth Map
documentation: ug
---

# Choropleth Map

Choropleth Map allows you to showcase quantitative values encoded through color scale. 

## How to configure flat table data into Choropleth map?

To plot a choropleth map, a minimum requirement of 1 value and 1 shape is needed. This holds one additional block `Calculations` in Data Pane. Dropping a dimension will display each region split by each of its item.

The following procedure illustrates data configuration of Choropleth Map.

Drag and drop `Choropleth Map` control icon from the Tool box into design panel. You can find control in Toolbox by search.

![](images/choroplethmap_img1.png)

After control added in design panel, click `Assign Data` button at Design Tools Pane to open the Data configuration pane.

![](images/choroplethmap_img2.png)

Bind column through drag and drop element from `Measures` section to `Value`.

![](images/choroplethmap_img3.png)

Drag and Drop the elements from sections to `Shape`.

![](images/choroplethmap_img4.png)

You can use the aggregation function to change the `Value` of the column.

![](images/choroplethmap_img5.png)

You can use the `Filter` option to enable filters by selecting the `Edit` option.

![](images/choroplethmap_img6.png)

`Measure Filter` window will be shown.

![](images/choroplethmap_img7.png)

You can clear the filter by selecting the `Clear` option.

![](images/choroplethmap_img8.png)

You can format the values by selecting the `Format` option.

![](images/choroplethmap_img9.png)

`Measure Formatting` window will be shown.

![](images/choroplethmap_img10.png)

You can use the filters by selecting the `Filter(s)…` option to rank to the elements.

![](images/choroplethmap_img11.png)

You can select the specific country to filter the element and `CheckAll` is used either to check all the data or to select the specific data. `Include` and `Exclude` is used to include and exclude the elements by selecting the radio button and click the `Apply` button.

![](images/choroplethmap_img12.png)

You can select the Condition option to change the `Column` elements and `Summary` type by selecting the required column name and summary type.

![](images/choroplethmap_img13.png)

![](images/choroplethmap_img14.png)

You can select the `Rank` option to enable filters and select the `Mode` either top or bottom.

![](images/choroplethmap_img15.png)

You can change the `Count` value to filter the top elements and change the column and summary type as required and click `OK` button.

![](images/choroplethmap_img16.png)

You can clear the filters by selecting the `Show All Records` options.

![](images/choroplethmap_img17.png)

Drag and Drop the elements from sections to `Calculations`.

![](images/choroplethmap_img18.png)

Here is an illustration,

![](images/choroplethmap_img19.png)

## How to configure SSAS data to Choropleth map?

To plot a choropleth map, a minimum requirement of 1 value and 1 shape is needed. This holds one additional block `Calculations` in Data Pane. Dropping a dimension will display each region split by each of its item.

Following steps illustrates configuration of SSAS data to Choropleth Map.

Drag and drop `Choropleth Map` control icon from the Tool box into design panel. You can find control in Toolbox by search.
 
![](images/choroplethmap_img1.png)

After control added in design panel, click `Assign Data` button at Design Tools Pane to open the Data configuration pane.

![](images/choroplethmap_img2.png)

Drag and drop a column under `Measures` category into `Value`.

![](images/bubblemap_img26.png)
 
Drag and drop a dimension level or hierarchy column under `Dimensions` category into `Shape`.

![](images/bubblemap_img27.png) 

Define the filter criteria to match through choosing `Edit` option in `Filter` menu item.

![](images/ssaseditmeasurefilter.png)
 
The `Measure filter` dialog will be shown where you can choose the filter condition and apply the condition value.

![](images/ssasmeasurefilterconditions.png)

Select `Clear` option to clear the defined filter.

![](images/ssasclearmeasurefilter.png)
 
Select `Format` option to define the display format to the values in the column through Measure `Formatting window`.

![](images/ssasmeasureformat1.png)

Define filter criteria through `Filter(s)…` menu item in the Settings drop down menu.

![](images/bubblemap_img28.png)

Select `Filter(s)…` to launch the `Filters` window. 

![](images/ssasdimensionfilter2.png)

Define the filter Condition and `Rank` and Click `OK`.

![](images/ssasdimensionfilter3.png)

To show all records again click on `Show All Records`.

![](images/bubblemap_img30.png)
 
Drag and drop a dimension level or hierarchy column under `Dimensions` category into `Calculations`.

![](images/choroplethmap_img31.png)
 
Here is an illustration,
 
![](images/choroplethmap_img32.png)

## How to format choropleth map?

You can format the choropleth map for better illustration of the view that you require, through the settings available in `Properties` pane.

**General Settings**

![](images/choroplethmap_img20.png)

**Header**

This allows you to set title for this choropleth map widget.

**Description**

This allows you to set description for this choropleth map widget, whose visibility will be denoted by `i` icon, hovering which will display this description in tooltip.

**Basic Settings**

![](images/choroplethmap_img21.png)

**Enable Navigator**

You can enable/ disable the map navigator in choropleth map.

**Show Legend**

You can toggle the visibility of legend in choropleth map.

**Filter Settings**     

![](images/choroplethmap_img22.png)

**Act as Master**

This allows you to define this choropleth map widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

**Ignore Filter Actions**

This allows you to define this choropleth map widget to ignore responding to the filter actions applied on other widgets in dashboard.

**Link Settings**

You can enable linking and configure to navigate either to a published dashboard URL or to a general URL with or without parameters. For more details, refer [Linking](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/linking-urls-and-dashboards). 

**Container Appearance**

![](images/choroplethmap_img23.png)

**Title Alignment**

This allows you to handle the alignment of widget title to either left, center or right.

**Title Color**

This allows you to apply text color to the widget title.

**Show Border**

This allows you to toggle the visibility of border surrounding the widget.

**Corner Radius**

This allows you to apply the specified radius to the widget corners. Value can be between 0 and 10.

**Show Maximize**

This allows you to enable/disable the maximized mode of this choropleth map widget. The visibility of the maximize icon in widget header will be defined based on this setting. Clicking this icon in viewer will show the maximized view of the choropleth map widget.

**CSV Export**

This allows you to enable/disable the CSV export option for this choropleth map widget. Enabling this allows you to export the summarized data of the widget view to CSV format.

**Excel Export**

This allows you to enable/disable the Excel export option for this choropleth map widget. Enabling this allows you to export the summarized data of the widget view to XLSX format.

**Image Export**

This allows you to enable/disable the image export option for this choropleth map widget. Enabling this allows you to export the view of the widget to image format (*.JPG) in viewer.

**Enable Comment**

This allows you to enable/disable comment for dashboard widget. For more details refer [here](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/commenting-dashboard-and-widget)

**Map Settings**   

![](images/choroplethmap_img24.png)

**Built-in**

You can choose from the available 14 map shape files shipped along with dashboard designer for visualizing map data.

**Custom**

You can load any custom map shape file to visualize the data in map through enabling this option.

![](images/choroplethmap_img25.png)

**Field**

You can choose from the list of field names supported by the loaded map shape that can be mapped with the data source connected.

**Range Color Settings**

![](images/choroplethmap_img26.png)

**Monochromatic**

You can configure a single color palette whose saturation differs based on the value density.

![](images/choroplethmap_img27.png)

Here is an illustration,

![](images/choroplethmap_img28.png)

**Equal Color Mapping**

This option will be available only when you add any element to `Calculations` block in Data pane. Switching to any other range color scheme option, will remove the added column from `Calculations` block.

![](images/choroplethmap_img29.png)

Here is an illustration,

![](images/choroplethmap_img30.png)

**Color Scale**

You can choose the number of scales the color need to be split into (3, 5, 7, or 9). Based on the selected color scale, the color palette will be displayed.

**Scale Colors**

You can customize the colors in the selected color scale.





