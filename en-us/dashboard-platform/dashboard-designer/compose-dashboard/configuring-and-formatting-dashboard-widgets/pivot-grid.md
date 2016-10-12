---
layout: post
title: Configuring and Formatting Pivot Grid with Syncfusion Dashboard Designer
description: How to configure and format pivot grid with Syncfusion Dashboard Designer
platform: dashboard-platform
control: Pivot Grid
documentation: ug
---

# Pivot Grid

Pivot Grid allows you to display summarized data in cross tabular format.

![](images/pivotgrid_img1.png)

## How to configure flat table data to Pivot Grid?

To construct a pivot grid, a minimum requirement of 1 value and 1 row/column is needed.

The following procedure illustrates data configuration of Pivot Grid.

Drag and drop `Pivot Grid` control icon from the Tool box into design panel. You can find control in Toolbox by search.

![](images/pivotgrid_img2.png)

After control added in design panel, click `Assign Data` button at Design Tools Pane to open the Data configuration pane.

![](images/pivotgrid_img3.png)

Drag and Drop the elements from `Measures` to `Value(s)`.

![](images/pivotgrid_img4.png)

Drag and Drop the elements from sections to `Row(s)`.

![](images/pivotgrid_img5.png)

You can use the aggregation function to change the `Value(s)` of the column.

![](images/pivotgrid_img6.png)

You can use the `Filter` option to enable filters by selecting the `Edit` option.

![](images/pivotgrid_img7.png)

`Measure Filter` window will be shown to set the `Ranges`.

![](images/pivotgrid_img8.png)

You can clear the filters by selecting the `Clear` option.

![](images/pivotgrid_img9.png)

You can format the values by selecting the `Format` option.

![](images/pivotgrid_img10.png)

`Measure Formatting` window will be shown.

![](images/pivotgrid_img11.png)

Drag and Drop the elements from sections to `Column(s)`.

![](images/pivotgrid_img12.png)

You can select the settings to sort the data either `Ascending` or `Descending`

![](images/pivotgrid_img13.png)

You can use the filters by selecting the `Filter(s)…` option to rank to the elements.

![](images/pivotgrid_img14.png)

You can select the specific country to filter the element and `CheckAll` is used either to check all the data or to select the specific data. `Include` and `Exclude` is used to include and exclude the elements by selecting the radio button and click the `Apply` button.

![](images/pivotgrid_img15.png)

You can select the Condition option to change the `Column` elements and `Summary` type by selecting the required column name and summary type.

![](images/pivotgrid_img16.png)

![](images/pivotgrid_img17.png)

You can select the `Rank` option to enable filters and select the `Mode` either top or bottom.

![](images/pivotgrid_img18.png)

You can change the `Count` value to filter the top elements and change the column and summary type as required and click `OK` button.

![](images/pivotgrid_img19.png)

You can clear the filters by selecting the `Show All Records`.  

![](images/pivotgrid_img20.png)

You can sort the values by selecting either `Ascending` or `Descending`. `Filter(s)…` option can be used to edit the filter condition. More option is used to set the Time and Date in different format.

![](images/pivotgrid_img21.png)

Here is an illustration,

![](images/pivotgrid_img22.png)

## How to configure the SSAS data to Pivot Grid?

To construct a pivot grid, a minimum requirement of 1 value and 1 row/column is needed.

Following steps illustrates configuration of SSAS data to Pivot Grid.

Drag and drop `Pivot Grid` control icon from the Tool box into design panel. You can find control in Toolbox by search.

![](images/pivotgrid_img2.png)
 
After control added in design panel, click `Assign Data` button at Design Tools Pane to open the Data configuration pane.

![](images/pivotgrid_img3.png)
 
Drag and drop a column under `Measures` category into `Value(s)`.

![](images/ssasdragvaluschartcontrol.png)
 
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
 
Drag and drop a dimension level or hierarchy element under `Dimensions` category into `Row(s)`.

![](images/pivotgrid_img29.png) 

Drag and drop a dimension level or hierarchy element under `Dimensions` category into `Column(s)`.

![](images/pivotgrid_img30.png) 

Define filter criteria through `Filter(s)…` menu item in the `Settings` drop down menu.

![](images/pivotgrid_img31.png)
 
To know more about filters, refer [here](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/configuring-widget-filters). 

Here is an illustration,
 
![](images/pivotgrid_img32.png)

## How to format Pivot Grid?

You can format the Pivot grid for better illustration of the view that you require, through the settings available in Properties pane.

**General Settings**

![](images/pivotgrid_img23.png)

**Header** 

This allows you to set title for this pivot grid widget.

**Description**

This allows you to set description for this pivot grid widget, whose visibility will be denoted by `i` icon, hovering which will display this description in tooltip.

**Basic Settings**

![](images/pivotgrid_img24.png)

**Enable GroupingBar**

You can enable/disable the grouping bar which contains in line filtering and sorting option.

**Enable Row Summary**

You can enable/disable the grand total summary row.

**Enable Column Summary**

You can enable/disable the grand total summary column.

**Filter settings**

![](images/pivotgrid_img25.png)

**Act as Master Widget**

This allows you to define pivot grid widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

**Ignore Filter Actions**

This allows you to define this pivot grid widget to ignore responding to the filter actions applied on other widgets in dashboard.

**Enable Hierarchical Filtering**

Through this option, you can enable/disable hierarchical Top `N` filtering. While applying Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added. When `Flat` is set, the least number set as top will be applied for the whole data. When `Hierarchical` is set, the Top N will be applied for each individual column separately based on the number set for each column.

Below example shows data of 3 Country and its 2 Cities where the sales is high.

**Flat Top N**

![](images/pivotgrid_img26.png)

**Hierarchical Top N**

![](images/pivotgrid_img27.png)

**Link Settings**

You can enable linking and configure to navigate either to a published dashboard URL or to a general URL with or without parameters. For more details, refer [Linking](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/linking-urls-and-dashboards). 

**Container Appearance**

![](images/pivotgrid_img28.png)

**Title Alignment**

This allows you to handle the alignment of widget title to either left, center or right.

**Title Color**

This allows you to apply text color to the widget title.

**Show Border**

This allows you to toggle the visibility of border surrounding the widget.

**Corner Radius**

This allows you to apply the specified radius to the widget corners. Value can be between 0 and 10.

**Show Maximize**

This allows you to enable/disable the maximized mode of this pivot grid widget. The visibility of the maximize icon in widget header will be defined based on this setting. Clicking this icon in viewer will show the maximized view of the pivot grid widget.

**CSV Export**

This allows you to enable/disable the CSV export option for this pivot grid widget. Enabling this allows you to export the summarized data of the widget view to CSV format.

**Excel Export**

This allows you to enable/disable the Excel export option for this pivot grid widget. Enabling this allows you to export the summarized data of the widget view to XLSX format.

**Image Export**

This allows you to enable/disable the image export option for this pivot grid widget. Enabling this allows you to export the view of the widget to image format (*.JPG) in viewer.

**Enable Comment**

This allows you to enable/disable comment for dashboard widget. For more details refer [here](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/commenting-dashboard-and-widget)





