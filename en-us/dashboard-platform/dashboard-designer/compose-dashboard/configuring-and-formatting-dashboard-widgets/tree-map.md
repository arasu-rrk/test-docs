---
layout: post
title: Configuring and Formatting Tree Map with Syncfusion Dashboard Designer
description: How to configure and format tree map with Syncfusion Dashboard Designer
platform: dashboard-platform
control: Tree Map
documentation: ug
---

# Tree Map

Tree Map allows you to visualize large data through its proportional shelves and color scales. 

![](images/treemap_img1.png)

## How to configure flat table data to Tree map widget?

To showcase a tree map, a minimum requirement of 1 value and 1 group by field is needed.

The following procedure illustrates data configuration of Tree Map.

Drag and drop `TreeMap` control icon from the Tool box into design panel. You can find control in Toolbox by search.

![](images/treemap_img2.png)

After control added in design panel, click **Assign Data** button at Design Tools Pane to open the Data configuration pane.

![](images/treemap_img3.png)

Bind column through drag and drop element from sections to `Value`.

![](images/treemap_img4.png)

Drag and Drop the elements from sections to `Group by`.

![](images/treemap_img5.png)

You can use aggregate function to change the `Value` of the column. 

![](images/treemap_img6.png)

You can use `Filter` option to filter the data by specifying the filter condition.

![](images/treemap_img7.png)

`Measure Filter` window will be shown to edit the filter condition.

![](images/treemap_img8.png)

You can clear filters by selecting the `Clear` option for `Value` section.

![](images/treemap_img9.png)

You can format the values by selecting the `Format` option.

![](images/treemap_img10.png)

`Measure Formatting` window will be shown.

![](images/treemap_img11.png)

You can use the filters by selecting the `Filter(s)…` option to rank to the elements.

![](images/treemap_img12.png)

You can select the specific city to filter the element and `CheckAll` is used either to check all the data or to select the specific data. `Include` and `Exclude` is used to include and exclude the elements by selecting the radio button and click the `Apply` button.

![](images/treemap_img13.png)

You can select the `Condition` option to change the `Column` elements and `Summary` type by selecting the required column name and summary type. 

![](images/treemap_img14.png)

![](images/treemap_img15.png)

![](images/treemap_img16.png)

You can select the `Rank` option to enable filters and select the `Mode` either top or bottom.

![](images/treemap_img17.png)

You can change the `Count` value to filter the top elements and change the column and summary type as required and click `OK` button.

![](images/treemap_img18.png)

You can clear filters by selecting the `Show All Records`.

![](images/treemap_img19.png)

Here is an illustration,

![](images/treemap_img20.png)

## How to configure the SSAS data to Treemap?

To showcase a tree map, a minimum requirement of 1 value and 1 group by field is needed.

Following steps illustrates configuration of SSAS data to Tree map 

Drag and drop the `TreeMap` widget into canvas and resize into your required size.

![](images/treemap_img2.png)

Select the dropped widget using mouse.

![](images/treemap_img3.png)

Click the `Assign Data` button in the toolbar.

A Data pane will be opened with available `Measures` and `Dimensions`.

![](images/ssascontroldesigner.png)


Drag and drop a column under `Measures` category into `Value(s)` section.

![](images/ssas_treemap_1.png)

Drag and Drop the elements from sections to `Group by`.

![](images/ssas_treemap_2.png)

Define the filter criteria to match through choosing `Edit` option in `Filter` menu item.

![](images/ssaseditmeasurefilter.png)

The `Measure filter` dialog will be shown where you can choose the filter condition and apply the condition value.

![](images/ssasmeasurefilter.png)

Select `Clear` option to clear the defined filter.

![](images/ssaseditmeasurefilter.png)

Select `Format` option to define the display format to the values in the column through `Measure Formatting` window.

![](images/ssas_measureformat.png)

Choose the options you need and click `OK`.

![](images/ssasmeasureformat1.png)

Define filter criteria through `Filter(s)…` menu item in the Settings drop down menu.

![](images/ssas_treemap_3.png)

Select `Filter(s)…` to launch the `Filters` window.

![](images/ssas_treemap_df1.png)

Define the filter `Condition` and `Rank` and Click `OK`..

![](images/ssas_treemap_df2.png)

![](images/ssas_treemap_df3.png)

To show all records again click on `Show All Records`.

![](images/ssas_treemap_4.png)

Here is an illustration,

![](images/ssas_treemap_5.png)

## How to format Tree map widget?

You can format the Tree map for better illustration of the view that you require, through the settings available in `Properties` pane.

**General Settings**

![](images/treemap_img21.png)

**Header**

This allows you to set title for this tree map widget.

**Description**

This allows you to set description for this Tree map widget, whose visibility will be denoted by `i` icon, hovering which will display this description in tooltip.

**Basic Settings**

![](images/treemap_img22.png)

**Enable Drilldown**

In case of hierarchical view, multiple levels will get rendered in the same view. This can be switched to drill down view through enabling this setting.

**Filter Settings**

![](images/treemap_img23.png)

**Enable Hierarchical Filtering**

Through this option, you can enable/disable hierarchical Top `N` filtering. While applying Top N filter with multiple dimension columns, the data returned can be customized based on whether the filtering need to be done as flat or based on the hierarchy of dimension columns added. When `Flat` is set, the least number set as top will be applied for the whole data. When `Hierarchical` is set, the Top N will be applied for each individual column separately based on the number set for each column.

Below example shows data of 3 Country and its 2 Cities where the sales is high.

**Flat Top N**

![](images/treemap_img24.png)

**Hierarchical Top N**

![](images/treemap_img25.png)

**Act as Master**

This allows you to define this tree map widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

**Ignore Filter Action**

This allows you to define this tree map widget to ignore responding to the filter actions applied on other widgets in dashboard.

**Link Settings**

You can enable linking and configure to navigate either to a published dashboard URL or to a general URL with or without parameters. For more details, refer [Linking](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/linking-urls-and-dashboards). 

**Container Appearance**

![](images/treemap_img26.png)

**Title Alignment**

This allows you to handle the alignment of widget title to either left, center or right.

**Title Color**

This allows you to apply text color to the widget title.

**Show Border**

This allows you to toggle the visibility of border surrounding the widget.

**Corner Radius**

This allows you to apply the specified radius to the widget corners. Value can be between 0 and 10.

**Show Maximize**

This allows you to enable/disable the maximized mode of this tree map widget. The visibility of the maximize icon in widget header will be defined based on this setting. Clicking this icon in viewer will show the maximized view of the tree map widget.

**CSV Export**

This allows you to enable/disable the CSV export option for this tree map widget. Enabling this allows you to export the summarized data of the widget view to CSV format.

**Excel Export**

This allows you to enable/disable the Excel export option for this tree map widget. Enabling this allows you to export the summarized data of the widget view to XLSX format.

**Image Export**

This allows you to enable/disable the image export option for this tree map widget. Enabling this allows you to export the view of the widget to image format (*.JPG) in viewer.

**Enable Comment**

This allows you to enable/disable comment for dashboard widget. For more details refer [here](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/commenting-dashboard-and-widget)

**Range Color Settings**

![](images/treemap_img27.png)

**Monochromatic**

This allows you to configure a single color palette whose saturation will be varied based on the value density.

**Range Brush Items**

This allows you to configure three different colors that allocates itself to the value range accordingly.

**Low**

Let you choose single color for low values when `Range Brush Items` is selected.

**Middle** 

Let you choose single color for middle values when `Range Brush Items` is selected.

**High**

Let you choose single color for high values when `Range Brush Items` is selected.





