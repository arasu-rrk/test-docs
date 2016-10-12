---
layout: post
title: Configuring and Formatting Combo Chart with Syncfusion Dashboard Designer
description: How to configure and format combo chart with Syncfusion Dashboard Designer
platform: dashboard-platform
control: Combo Chart
documentation: ug
---

# Combo Chart

Combo Chart allows you to compare values across categories representing different data sets with different chart types and a secondary axis.

![](images/combochart_img1.png)

## How to configure flat table data to Combo Chart?

To plot a combo chart, a minimum requirement of 1 value or line value and 1 column is needed. Combo charts differ in one case when compared to basic charts, which is, on adding series to Row section, for each distinct value of the series added, one combo chart will get rendered. W.r.t this chart, one additional block `Line Value` will be available in Data pane where we can drop the measure whose type will be line, which need to be compared against.

Follow the steps to configure data to combo chart

Drag and drop the combo chart widget to canvas and resize it to your required size.

![](images/combochart_img2.png)

Connect to the data source.

Focus on the Combo chart and click on `Assign Data`.

![](images/combochart_img3.png)

The data pane will be opened with available measures and dimensions from the connected data source.

![](images/combochart_img4.png)

 **Assigning Value(s)**

Drag and drop the `Measure` into `Value`.

![](images/combochart_img5.png)

Now the chart will be rendered like this.

![](images/combochart_img6.png)

You can change the summary type of the value by clicking on `Settings` option.

![](images/combochart_img7.png)

Select the required summary type from list.

![](images/combochart_img8.png)

You can select what data to be displayed by choosing filter option.

![](images/combochart_img9.png)

The `Measure Filter` option will be shown and you can choose the filter condition and apply the condition value.

![](images/combochart_img10.png)

![](images/combochart_img11.png)

You can `Clear` the filter.

![](images/combochart_img12.png)

You can `Format` the value.

![](images/combochart_img13.png)

The format options will be shown.

![](images/combochart_img14.png)

Choose the options you need and click `OK`.

![](images/combochart_img15.png)

Now the Chart will be rendered like this.

![](images/combochart_img16.png)

You can add more number values by drag drop the `Measures` into `Value` field.

![](images/combochart_img17.png)

![](images/combochart_img18.png)

You can also add `Dimensions` and `Columns` to `Value(s)`.

**Assigning Line Value**

You can add the `Measures` into `Line` values.

![](images/combochart_img19.png)

![](images/combochart_img20.png)

You can add more than one line values of `Measure` or `Dimension`, the settings are similar to `Value(s)` field.

**Assigning Column(s)** 

You can add the `Dimension` into `Column` field by drag and drop.

![](images/combochart_img21.png)

![](images/combochart_img22.png)

You can also add `Measures` and `Expression Columns` into `Column(s)` field.

![](images/combochart_img23.png)

![](images/combochart_img24.png)

You have options to change the settings.

![](images/combochart_img25.png)

![](images/combochart_img26.png)

You can sort the chart either in `Ascending` or `Descending` series.

**Ascending Order:**

![](images/combochart_img27.png)

**Descending order:**

![](images/combochart_img28.png)

You can apply a filter.

![](images/combochart_img29.png)

Select the `Conditions` and `Rank` you need.

![](images/combochart_img30.png)

![](images/combochart_img31.png)

Now the chart will be rendered like this

![](images/combochart_img32.png)

To show all records again click on `Show All Records`.

![](images/combochart_img33.png)

**Assigning Row**

You can add `Dimension` into the `Row` field for series chart.

![](images/combochart_img34.png)

The chart will be rendered in series as shown in the image.

![](images/combochart_img35.png)

You have `Settings` options similar to `Column(s)`.

![](images/combochart_img36.png)

## How to configure the SSAS data to Combo Chart?

Following steps illustrates configuration of SSAS data to combo chart

Drag and drop the `Combo Chart` widget to canvas and resize it to your required size.

![](images/combochart_img2.png)

Select the dropped widget using mouse.
 
Click the `Assign Data` button in the toolbar.

![](images/combochart_img3.png)
 
A Data pane will be opened with available `Measures` and `Dimensions`.

![](images/ssascontroldesigner.png)
 
**Assigning Value(s)**

Drag and drop a column under `Measures` category into `Value(s)` section.
 
![](images/ssasdragvaluschartcontrol.png)

Now the chart will be rendered like this.

![](images/combochart_img60.png)

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

Now the Chart will be rendered like this.
 
![](images/combochart_img61.png)

You can also add more than one column to the `Value(s)` section.

![](images/ssasmultivaluedrop.png) 

![](images/combochart_img62.png)

**Assigning Line Value**

Add a Measure into `Line Value(s)` section through drag and drop.

![](images/combochart_img63.png)

![](images/combochart_img64.png)  

You can also add more than one column to the `Line Value(s)` section.

**Assigning Column(s)**

Add a dimension level or hierarchy into Column section through drag and drop
 
![](images/combochart_img65.png)

![](images/combochart_img66.png) 

Define filter criteria through `Filter(s)…` menu item in the Settings drop down menu.

![](images/ssasdimensionfilter1.png)
 
Select `Filter(s)…` to launch the `Filters` window.
 
![](images/ssasdimensionfilter2.png)

Define the filter `Condition` and `Rank` and Click `OK`.

![](images/ssasdimensionfilter3.png)

Now the chart will be rendered like this

![](images/combochart_img67.png)

To show all records again click on `Show All Records`.

![](images/ssasshowallrecords.png)

**Assigning Row**

You can add a dimension level or hierarchy to `Row` section for series rendering of chart.
 
![](images/ssasdropdimesiontorow.png)

![](images/combochart_img68.png)

## How to format Combo Chart?

You can format the combo chart for better illustration of the view that you require, through the settings available in `Properties` pane.

To configure data into combo chart follow the steps

1. Drag and drop the combo chart into canvas and resize it to your required size.

2. Configure the data into combo chart.

3. Focus on the combo chart and Click on Widget Settings.

![](images/combochart_img37.png)

The property window will be opened.

![](images/combochart_img38.png)

You can see the list of properties available for the widget with default value.

**General Settings**

![](images/combochart_img39.png)

**Header**

This allows you to set title for this combo chart widget.

**Description**

This allows you to set description for this combo chart widget, whose visibility will be denoted by `i` icon, hovering which will display this description in tooltip.

**Basic Settings**

![](images/combochart_img40.png)

**Chart Type**

This allows you to switch the widget view from current chart type to another chart type. To selecting chart type through combo box.

**Enable Animation**

This allows you to enable the series rendering in animated mode.

**Show Data Marker**

This allows you to toggle the visibility of marker from label to adorn each data point in chart series.

![](images/combochart_img41.png)

**Show Legend**

This allows you to toggle the visibility of legend in chart and also changing the legend text position (selecting through combo box).

![](images/combochart_img42.png)

Enabling this option of `Custom Legend Text` will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in chart. 

**Show Value Labels**

This allows you to toggle the visibility of value labels. 

![](images/combochart_img43.png)

**Value Label Rotation**
 
This allows you to define the rotation angle for the value labels to display.

![](images/combochart_showlabelrotation.png)

**Value Labels Suffix**

Allows you to set suffix to the value labels.

![](images/combochart_img44.png)

**Filter Settings**

![](images/combochart_img45.png)

**Enable Hierarchical Filtering**

This allows you to define the behavior of top `n` filtering which can be flat or hierarchical.

**Act as Master Widget**

This allows you to define this combo chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

**Ignore Filter Actions**

This allows you to define this combo chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

**Link Settings**

![](images/combochart_img46.png)

To configure the linking to URL or dashboard with the widget through its settings. For more details, refer [Linking](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/linking-urls-and-dashboards).

**Container Settings**

![](images/combochart_img47.png)

**Title Alignment**

This allows you to handle the alignment of widget title to either left, center or right.

**Title Color**

This allows you to apply text color to the widget title.

**Show Border** 

This allows you to toggle the visibility of border surrounding the widget.

**Corner Radius**

This allows you to apply the specified radius to the widget corners. Value can be between 0 and 10.

**Show Maximize**

This allows you to enable/disable the maximized mode of this combo chart widget. The visibility of the maximize icon in widget header will be defined based on this setting.

**CSV Export**

This allows you to enable/disable the CSV export option for this combo chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in viewer.

**Excel Export**

This allows you to enable/disable the Excel export option for this combo chart widget. Enabling this allows you to export the summarized data of the widget view to XLSX format in viewer.

**Image Export**

This allows you to enable/disable the image export option for this combo chart widget. Enabling this allows you to export the view of the widget to image format (*.JPG) in viewer.

**Enable Comment**

This allows you to enable/disable comment for dashboard widget. For more details refer [here](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/commenting-dashboard-and-widget)

**Axis Settings**

![](images/combochart_img48.png)

This section allows you to customize the axis settings in chart.

**Category Axis**

This allows you to enable/edit the option of `Category Axis`. It will reflect in chart area x-axis name. 

![](images/combochart_img49.png)

**Category Axis Title**

This allows you to toggle the visibility of Category axis title.

![](images/combochart_categoryaxistitle.png)

**Primary X-Axis Label Trim**

This allow you to enable the label trimming in chart area x-axis label.

![](images/combochart_primaryxaxislabeltrim.png)

**Label Rotation**

This allows you to define the rotation angle for the category axis labels to display.

![](images/combochart_img50.png)

**Primary Value Axis**

This allows you to enable/edit the option of `Primary Value Axis` title. It will reflect in chart area y-axis name.  

![](images/combochart_img51.png)

**Primary Value Axis Title**

This allows you to toggle the visibility of primary value axis title.

![](images/combochart_primaryvalueaxistitle.png)

**Secondary Value Axis**

This allows you to enable/edit the `Secondary Value Axis` title. It will reflect in chart area secondary y-axis name. 

![](images/combochart_img52.png)

**Secondary Value Axis Title**

This allows you to toggle the visibility of secondary value axis title.

![](images/combochart_secondaryvalueaxistitle.png)

**Sort Order**

This allows you to define the sort order for each measure column added.

![](images/combochart_img53.png)

**Grid Line Settings**

![](images/combochart_img54.png)

**Primary Value Axis**

This allow you to enable the `Primary Value Axis` gridlines for the combo chart.

**Primary Value Axis Line**

![](images/combochart_img55.png)

**Category Axis**

This allows you to toggle the visibility of `Category Axis` gridlines.

![](images/combochart_img56.png)

**Secondary Value Axis**

This allow you to toggle the visibility of `Secondary Value Axis` gridlines.

![](images/combochart_img57.png)

**Trend line Settings** 

You can add trend line to chart based on dropped measure that you select. You can also customize its legend text, line type and line color. Trend line is not visible, by default.

![](images/combochart_img58.png)

After applying these settings, it will reflect in chart like below. 

![](images/combochart_img59.png)

You have options to add or delete an added trend line.





