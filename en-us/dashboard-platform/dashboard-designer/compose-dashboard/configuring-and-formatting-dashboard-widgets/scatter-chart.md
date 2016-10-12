---
layout: post
title: Configuring and Formatting Scatter Chart with Syncfusion Dashboard Designer
description: How to configure and format scatter chart with Syncfusion Dashboard Designer
platform: dashboard-platform
control: Scatter Chart
documentation: ug
---

# Scatter Chart

Scatter Chart allows you to compare large number of data points represented as dots irrespective of time.

![](images/scatterchart_img1.png)

## How to configure flat table data to Scatter Chart?

Scatter Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Value(s) block. The dimension that you would like to categorize the measure, can be dropped onto Column block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Row block in addition. 

Follow the steps to configure data into Scatter chart

Drag and drop the Scatter chart into canvas and resize it to your required size.

![](images/scatterchart_img2.png)

Connect to data source.

Focus on the Scatter chart and click on `Assign Data` button.

![](images/scatterchart_img3.png)

The data pane will be opened with available `Measures` and `Dimensions` from the connected data source.

![](images/scatterchart_img4.png)

**Assigning Value(s)**

Drag and drop the `Measure` into `Value(s)`.

![](images/scatterchart_img5.png)

Now the chart will be rendered like this.

![](images/scatterchart_img6.png)

You can change the summary type of the value by clicking on `Settings` option.

![](images/scatterchart_img7.png)

Select the required summary type from list.

![](images/scatterchart_img8.png)

You can see the summary type changed to `Count` from `Sum`.

![](images/scatterchart_img9.png)

You can select what data to be displayed by choosing filter option.

![](images/scatterchart_img10.png)

The `Measure Filter` option will be shown and you can choose the filter condition and apply the condition value.

![](images/scatterchart_img11.png)

You can `Clear` the filter.

![](images/scatterchart_img12.png)

You can `Format` the value.

![](images/scatterchart_img13.png)

The format options will be shown.

![](images/scatterchart_img14.png)

Choose the options you need and click `OK`.

![](images/scatterchart_img15.png)

Now the Chart will be rendered like this.

![](images/scatterchart_img16.png)

You can add more number of values by drag and drop the `Measures` into `Value` field.

![](images/scatterchart_img17.png)

![](images/scatterchart_img18.png)

You can also add `Dimensions` and `Columns` to `Value(s)`.

 **Assigning Column(s)** 

You can add the `Dimension` into `Column` field by drag and drop.

![](images/scatterchart_img19.png)

![](images/scatterchart_img20.png)

You can also add `Measures` and `Expression Columns` into `Column(s)` field.

You have options to change the settings.

![](images/scatterchart_img21.png)

![](images/scatterchart_img22.png)

You can sort the chart either in `Ascending` or `Descending` series.

**Ascending Order**

![](images/scatterchart_img23.png)

**Descending order**

![](images/scatterchart_img24.png)

You can apply a filter.

![](images/scatterchart_img25.png)

![](images/scatterchart_img26.png)

Select the `Conditions` and `Rank` you need.

![](images/scatterchart_img27.png)

Now the chart will be rendered like this.

![](images/scatterchart_img28.png)

To show all records again click on `Show All Records`.

![](images/scatterchart_img29.png)

You can add **Measures** into **Column**

**Assigning Row**

You can add `Dimension` into the `Row` field for series chart.

![](images/scatterchart_img30.png)

The chart will be rendered in series as shown in the image.

![](images/scatterchart_img31.png)

You have settings options similar to `Column(s)`.

![](images/scatterchart_img32.png)

## How to configure SSAS Data to Scatter Chart?
Scatter Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Value(s) block. The dimension that you would like to categorize the measure, can be dropped onto Column block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Row block in addition.

Following steps illustrates configuration of SSAS data to scatter chart

Drag and drop the `Scatter` chart widget into canvas and resize into your required size.

![](images/scatterchart_img2.png)

Select the dropped widget using mouse.
 
Click the `Assign Data` button in the toolbar.

![](images/scatterchart_img3.png)

A Data pane will be opened with available `Measures` and `Dimensions`

![](images/ssascontroldesigner.png)

**Assigning Value(s)**

Drag and drop a column under `Measures` category into `Value(s)` section.
 
![](images/ssasdragvaluschartcontrol.png)

Now the chart will be rendered like this.

![](images/scatterchart_img57.png)

Define the filter criteria to match through choosing `Edit` option in `Filter` menu item.

![](images/ssaseditmeasurefilter.png)

The `Measure filter` dialog will be shown where you can choose the filter condition and apply the condition value.

![](images/ssasmeasurefilter.png)
 
Select `Clear` option to clear the defined filter.
 
![](images/ssasclearmeasurefilter.png)

Select `Format` option to define the display format to the values in the column through `Measure Formatting` window.
 
![](images/ssasmeasureformat1.png)

Choose the options you need and click `OK`.

![](images/ssasmeasureformat1.png) 

Now the Chart will be rendered like this.

![](images/scatterchart_img58.png) 

You can add more number values by drag drop the `Measures` into `Value(s)` field.

![](images/ssasmultivaluedrop.png)  

![](images/scatterchart_img59.png) 

**Assigning Column(s)**

Add a dimension level or hierarchy into `Column(s)` section through drag and drop.

![](images/ssasdropdimensionfield.png)  

![](images/scatterchart_img60.png) 

Define filter criteria through `Filter(s)…` menu item in the Settings drop down menu.

![](images/ssasdimensionfilter1.png)
 
Select `Filter(s)…` to launch the `Filters` window.

![](images/ssasdimensionfilter2.png) 

Define the filter `Condition` and `Rank` and Click `OK`.

![](images/ssasdimensionfilter3.png) 
 
Now the chart will be rendered like this

![](images/scatterchart_img61.png)
 
To show all records again click on `Show All Records`.
 
![](images/ssasshowallrecords.png)

**Assigning Row**

You can add a dimension level or hierarchy to `Row` section for series rendering of chart 

![](images/ssasdropdimesiontorow.png)

The chart will be rendered in series as shown in the image below.

![](images/scatterchart_img62.png)

## How to format Scatter Chart?

You can format the scatter chart for better illustration of the view that you require, through the settings available in `Properties` pane.

To configure data into Scatter chart follow the steps

1. Drag and drop the Scatter chart into canvas and resize it to your required size.

2. Configure the data into Scatter chart.

3. Focus on the Scatter chart and Click on Widget Settings.

![](images/scatterchart_img33.png)

The property window will be opened.

![](images/scatterchart_img34.png)

You can see the list of properties available for the widget with default value.

**General Settings**

![](images/scatterchart_img35.png)

**Header**

This allows you to set title for this scatter chart widget.

**Description**

This allows you to set description for this scatter chart widget, whose visibility will be denoted by `i` icon, hovering which will display this description in tooltip.

**Basic Settings**

![](images/scatterchart_img36.png)

**Chart Type**

This allows you to switch the widget view from current chart type to another chart type. To selecting chart type through combo box.  

**Enable Animation**

This allows you to enable the rendering of series in animated mode.

**Show Legend**

This allows you to toggle the visibility of legend in chart and also changing the legend text position (selecting through combo box).  

![](images/scatterchart_img37.png)

Enabling this option of `Custom Legend Text` will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in chart. 

**Custom Legend Settings**

You can customize the legend text through the Custom Legend Settings dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead. When a column is added into Row section, this dialog will show two options `Individual` and `Group` at top in addition, to toggle between.

***Individual***

Selecting  Individual option will allow you to define a custom text (through the text area) to display for each legend series in chart with the default format:

{{"{{"}} : Row {{}}}} ({{"{{"}} : Value {{}}}})

Where, Row represents the value of dimension column added to `Row section` and Value represents the value of the measure column added to `Value section`. 

![](images/scatterchart_customlegendsettingwindow.png)

***Group***

Enabling `Group` option will allow you to set the display format and define a custom text (through the text area) to display for each legend series based on the specified format. 

![](images/scatterchart_customlegendsettinggroup.png)

For example, If Display Format is {{"{{"}} : Row {{}}}} ({{"{{"}} : Value {{}}}}), then Legend series will display like Argentina (Sum of Order ID)

![](images/scatterchart_customlegendsetting.png)

**Show Value Labels**

This allows you to toggle the visibility of value labels. 

![](images/scatterchart_img38.png)

**Value Label Rotation**
 
This allows you to define the rotation angle for the value labels to display.

![](images/scatterchart_showlabelrotation.png)

**Value Labels Suffix**

Allows you to set suffix to the value labels. 

![](images/scatterchart_img39.png)

**Filter Settings**

![](images/scatterchart_img40.png)

**Enable Hierarchical Filtering**

This allows you to define the behavior of top `n` filtering which can be flat or hierarchical.

**Act as Master Widget**

This allows you to define this scatter chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

**Ignore Filter Actions**

This allows you to define this scatter chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

**Link Settings**

![](images/scatterchart_img41.png)

To configure the linking to URL or dashboard with the widget through its settings. For more details, refer [Linking](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/linking-urls-and-dashboards). 

**Container Settings**

![](images/scatterchart_img42.png)

**Title Alignment**

This allows you to handle the alignment of widget title to either left, center or right.

**Title Color**

This allows you to apply text color to the widget title.

**Show Border** 

This allows you to toggle the visibility of border surrounding the widget.

**Corner Radius**

This allows you to apply the specified radius to the widget corners. Value can be between 0 and 10.

**Show Maximize**

This allows you to enable/disable the maximized mode of this scatter chart widget. The visibility of the maximize icon in widget header will be defined based on this setting.

**CSV Export**

This allows you to enable/disable the CSV export option for this scatter chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in viewer.

**Excel Export**

This allows you to enable/disable the Excel export option for this scatter chart widget. Enabling this allows you to export the summarized data of the widget view to XLSX format in viewer.

**Image Export**

This allows you to enable/disable the image export option for this scatter chart widget. Enabling this allows you to export the view of the widget to image format (*.JPG) in viewer.

**Enable Comment**

This allows you to enable/disable comment for dashboard widget. For more details refer [here](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/commenting-dashboard-and-widget)

**Axis Settings**

![](images/scatterchart_img43.png)

This section allows you to customize the axis settings in chart. 

**Category Axis**

This allows to enable/edit the option of `Category Axis`. It will reflect in chart area x-axis name.

![](images/scatterchart_img44.png)

**Category Axis Title**

This allows you to toggle the visibility of Category axis title.

![](images/scatterchart_categoryaxistitle.png)

**Primary X-Axis Label Trim**

This allow you to enable the label trimming in chart area x-axis.

**Label Rotation**

This allows you to define the rotation angle for the category axis labels to display.

![](images/scatterchart_img45.png)

**Primary Value Axis**

This allows you to enable/edit the option of `Primary Value Axis`. It will reflect in chart area y-axis name. 

![](images/scatterchart_img46.png)

**Primary Value Axis Title**

This allows you to toggle the visibility of primary value axis title.

![](images/scatterchart_primaryvalueaxistitle.png)

**Secondary Value Axis**

This allows you to enable/edit the option of `Secondary Value Axis`. It will reflect in chart area secondary y-axis name. 

![](images/scatterchart_img47.png)

**Secondary Value Axis Title**

This allows you to toggle the visibility of secondary value axis title.

![](images/scatterchart_secondaryvalueaxistitle.png)

**Sort Order**

To define the sorting of chart based on any of the measures that you dropped and its order through this option. Following screenshot illustrates the Ascending sort order.

![](images/scatterchart_img48.png)

**Plot Axis Settings**

This allows you to define which measure column need to be plotted against which value axis (primary or secondary).

**Primary Value Axis**

![](images/scatterchart_img49.png)

**Secondary Value Axis**

![](images/scatterchart_img50.png)

**Axis Formatting**

This allows you to handle different formatting options like display type, denominations, decimal places, currency culture and negative value display format to the value axis labels. Clicking the `Axis Formatting` button will launch the following editor to configure settings.

![](images/scatterchart_img51.png)

**Grid Line Settings**

**Primary Value Axis**

This allows you to enable the `Primary Value Axis` gridlines.

![](images/scatterchart_img52.png)

**Category Axis**

This allows you to toggle the visibility of `Category Axis` gridlines.

![](images/scatterchart_img53.png)

**Secondary Value Axis**

This allows you to toggle the visibility of `Secondary Value Axis` gridlines.

![](images/scatterchart_img54.png)

**Trend Line Settings**

You can add trend line to chart based on dropped measure that you select. You can also customize its legend text, line type and line color. Trend line is not visible, by default.

![](images/scatterchart_img55.png)

After applying these settings, it will reflect in chart like below. 

![](images/scatterchart_img56.png)

You have options to add or delete the added trend lines.





