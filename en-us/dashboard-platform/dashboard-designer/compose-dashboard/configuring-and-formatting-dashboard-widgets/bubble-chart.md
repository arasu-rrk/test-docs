---
layout: post
title: Configuring and Formatting Bubble Chart with Syncfusion Dashboard Designer
description: How to configure and format bubble chart with Syncfusion Dashboard Designer
platform: dashboard-platform
control: Bubble Chart
documentation: ug
---

# Bubble Chart

Bubble Chart allows you to compare large number of data points represented as bubbles and showcase the difference through its size.

![](images/bubblechart_img1.png)

## How to configure flat table data to Bubble Chart?

Bubble Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Value(s) block. The dimension that you would like to categorize the measure, can be dropped onto Column block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Row block in addition. 

Follow the steps to configure data to bubble chart

Drag and drop the bubble chart into canvas and resize it to your required size.

![](images/bubblechart_img2.png)

Connect to data source.

Focus on the bubble chart.

Click on `Assign Data`.

![](images/bubblechart_img3.png)

The data pane will be opened with available measures and dimensions from the connected data source.

![](images/bubblechart_img4.png)

**Assigning Value(s)**

Drag and drop the `Measure` into `Value`.

![](images/bubblechart_img5.png)

Now the chart will be rendered like this.

![](images/bubblechart_img6.png)

You can change the summary type of the value by clicking on `Settings` option.

![](images/bubblechart_img7.png)

Select the required summary type from list.

![](images/bubblechart_img8.png)

You can select what data to be displayed by choosing filter option.

The `Measure Filter` option will be shown and you can choose the filter condition and apply the condition value.

![](images/bubblechart_img9.png)![](images/bubblechart_img10.png)

![](images/bubblechart_img11.png)

You can `Clear` the filter. 

![](images/bubblechart_img12.png)

You can `Format` the value.

![](images/bubblechart_img13.png)

The format options will be shown.

![](images/bubblechart_img14.png)

Choose the options you need and click `OK`.

![](images/bubblechart_img15.png)

Now the Chart will be rendered like this.

![](images/bubblechart_img16.png)

You can add more number of values by drag and drop the `Measures` into `Value` field. 

![](images/bubblechart_img17.png)

![](images/bubblechart_img18.png)

You can also add `Dimensions` and `Columns` to `Value(s)`.

**Assigning Column(s)** 

You can add the `Dimension` into `Column` field by drag drop.

![](images/bubblechart_img19.png)

![](images/bubblechart_img20.png)

You can also add `Measures` and `Expression Columns` into `Column(s)` field.

You have options to change the settings.

![](images/bubblechart_img21.png)

![](images/bubblechart_img22.png)

You can sort the chart either in `Ascending` or `Descending` series.

**Ascending Order:**

![](images/bubblechart_img23.png)

**Descending order:**

![](images/bubblechart_img24.png)

You can apply a filter

![](images/bubblechart_img25.png)

![](images/bubblechart_img26.png)

Select the `Conditions` and `Rank` you need.

![](images/bubblechart_img27.png)

Now the chart will be rendered like this.

![](images/bubblechart_img28.png)

To show all records again click on `Show All Records`

![](images/bubblechart_img29.png)

You can add `Measures` into `Column(s)`.

![](images/bubblechart_img30.png)

The following alert message will be shown.

To continue click `Yes`, otherwise choose `No`.

![](images/bubblechart_img31.png)

**Assigning Row**

You can add `Dimension` into the `Row` field for series chart.

![](images/bubblechart_img32.png)

The chart will be rendered in series as shown in the image.

![](images/bubblechart_img33.png)

You have settings options similar to `Column(s)`.

![](images/bubblechart_img34.png)

## How to configure SSAS data to Bubble Chart?
Bubble Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Value(s) block. The dimension that you would like to categorize the measure, can be dropped onto Column block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Row block in addition.

Following steps illustrates configuration of SSAS data to bubble chart.

Drag and drop the `Bubble chart` into canvas and resize it to your required size.

![](images/bubblechart_img2.png)
 
Select the dropped widget using mouse.

Click the `Assign Data button` in the toolbar.

![](images/bubblechart_img3.png)

A Data pane will be opened with available `Measures` and `Dimensions`.

![](images/ssascontroldesigner.png)

**Assigning Value(s)**

Drag and drop a column under `Measures` category into `Value(s)` section

![](images/ssasdragvaluschartcontrol.png) 

Now the chart will be rendered like this.

![](images/bubblechart_img60.png)

Define the filter criteria to match through choosing `Edit` option in `Filter` menu item.

![](images/ssaseditmeasurefilter.png)
 
The `Measure filter` dialog will be shown and you can choose the filter condition and apply the condition value.

![](images/ssasmeasurefilter.png)
 
Select `Clear` option to clear the defined filter.
 
![](images/ssasclearmeasurefilter.png)

Select `Format` option to define the display format to the values in the column through Measure `Formatting` window.

![](images/ssasmeasureformat1.png) 

Choose the options you need and click `OK`.

![](images/ssasmeasureformat2.png) 

Now the Chart will be rendered like this.

![](images/bubblechart_img61.png)

You can also add more than one column to the `Value(s)` section.

![](images/ssasmultivaluedrop.png) 

![](images/bubblechart_img62.png) 

**Assigning Column(s)**

Add a dimension level or hierarchy into Column(s) section through drag and drop.
 
![](images/ssasdropdimensionfield.png)
 
![](images/bubblechart_img63.png)

Define filter criteria through `Filter(s)…` menu item in the Settings drop down menu.

![](images/ssasdimensionfilter1.png)
 
Select `Filter(s)…` to launch the `Filters` window.

![](images/ssasdimensionfilter2.png) 

Define the filter `Condition` and Rank and Click `OK`.

![](images/ssasdimensionfilter3.png)
 
Now the chart will be rendered like this

![](images/bubblechart_img64.png)
 
To `show all records` again click on Show All Records.

![](images/ssasshowallrecords.png) 

**Assigning Row**

You can add a dimension level or hierarchy to `Row` section for series rendering of chart.

![](images/ssasdropdimesiontorow.png) 

The chart will be rendered in series as shown in the image.

![](images/bubblechart_img65.png)

## How to format Bubble Chart?

You can format the Bubble chart for better illustration of the view that you require, through the settings available in `Properties` pane.

To configure data into bubble chart follow the steps

1. Drag and drop the bubble chart into canvas and resize it to your required size.

2. Configure the data into bubble chart.

3. Focus on the bubble chart and Click on Widget Settings.

![](images/bubblechart_img35.png)

The property window will be opened.

![](images/bubblechart_img36.png)

You can see the list of properties available for the widget with default value.

**General Settings**

![](images/bubblechart_img37.png)

**Header**

This allows you to set title for this bubble chart widget.

**Description**

This allows you to set description for this bubble chart widget, whose visibility will be denoted by `i` icon, hovering which will display this description in tooltip.

**Basic Settings**

![](images/bubblechart_img38.png)

**Chart Type**

This allows you to switch the widget view from current chart type to another chart type.

**Enable Animation**

This allows you to enable the rendering of series in animated mode.

**Show Legend**

This allows you to toggle the visibility of legend in chart and also changing the legend text position (selecting through combo box).  

![](images/bubblechart_img39.png)

Enabling this option of **Custom Legend Text** will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in chart. 

**Custom Legend Settings**

You can customize the legend text through the Custom Legend Settings dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead. When a column is added into Row section, this dialog will show two options `Individual` and `Group` at top in addition, to toggle between.

***Individual***

Selecting  Individual option will allow you to define a custom text (through the text area) to display for each legend series in chart with the default format:

{{"{{"}} : Row {{}}}} ({{"{{"}} : Value {{}}}})

Where, Row represents the value of dimension column added to `Row section` and Value represents the value of the measure column added to `Value section`. 

![](images/bubblechart_customlegendsettingwindow.png)

***Group***

Enabling `Group` option will allow you to set the display format and define a custom text (through the text area) to display for each legend series based on the specified format. 

![](images/bubblechart_customlegendsettinggroup.png)

For example, If Display Format is {{"{{"}} : Row {{}}}} ({{"{{"}} : Value {{}}}}), then Legend series will display like Argentina (Sum of Order ID)

![](images/bubblechart_customlegendsetting.png)

**Show Value Labels**

This allows you to toggle the visibility of value labels. 

![](images/bubblechart_img40.png)

**Value Label Rotation**
 
This allows you to define the rotation angle for the value labels to display.

![](images/bubblechart_showlabelrotation.png)

**Value Labels Suffix**

Allows you to set suffix to the value labels. 

![](images/bubblechart_img41.png)

**Filter Settings**

![](images/bubblechart_img42.png)

**Enable Hierarchical Filtering**

This allows you to define the behavior of top `n` filtering which can be flat or hierarchical.

**Act as Master Widget**

This allows you to define this bubble chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

**Ignore Filter Actions**

This allows you to define this bubble chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

**Link Settings**

![](images/bubblechart_img43.png)

To configure the linking to URL or dashboard with the widget through its settings. For more details, refer [Linking](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/linking-urls-and-dashboards).

**Container Settings**

![](images/bubblechart_img44.png)

**Title Alignment**

This allows you to handle the alignment of widget title to either left, center or right.

**Title Color**

This allows you to apply text color to the widget title.

**Show Border** 

This allows you to toggle the visibility of border surrounding the widget.

**Corner Radius**

This allows you to apply the specified radius to the widget corners. Value can be between 0 and 10.

**Show Maximize**

This allows you to enable/disable the maximized mode of this bubble chart widget. The visibility of the maximize icon in widget header will be defined based on this setting.

**CSV Export**

This allows you to enable/disable the CSV export option for this bubble chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in viewer.

**Excel Export**

This allows you to enable/disable the Excel export option for this bubble chart widget. Enabling this allows you to export the summarized data of the widget view to XLSX format in viewer.

**Image Export**

This allows you to enable/disable the image export option for this bubble chart widget. Enabling this allows you to export the view of the widget to image format (*.JPG) in viewer.

**Enable Comment**

This allows you to enable/disable comment for dashboard widget. For more details refer [here](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/commenting-dashboard-and-widget)

**Axis Settings**

This section allows you to customize the axis settings in chart. 

![](images/bubblechart_categoryaxis.png)

**Category Axis**

This allows to enable/edit the option of `Category Axis`. It will reflect in chart area x-axis name.

![](images/bubblechart_img45.png)

**Category Axis Title**

This allows you to toggle the visibility of Category axis title.

![](images/bubblechart_categoryaxistitle.png)

**Label Rotation**

This allows you to define the rotation angle for the category axis labels to display.

![](images/bubblechart_img46.png)

**Primary Value Axis**

This allows you to enable/edit the `Primary Value Axis` title. It will reflect in chart area y-axis name. 

![](images/bubblechart_img47.png)

**Primary Value Axis Title**

This allows you to toggle the visibility of primary value axis title.

![](images/bubblechart_primaryvalueaxistitle.png)

**Secondary Value Axis**

This allows you to enable/edit the `Secondary Value Axis` title. It will reflect in chart area secondary y-axis name. 

![](images/bubblechart_img48.png)

**Secondary Value Axis Title**

This allows you to toggle the visibility of secondary value axis title.

![](images/bubblechart_secondaryvalueaxistitle.png)

**Sort Order**

This allows you to define the sorting of chart based on any of the measures that you dropped and its order through this option. Following screenshot illustrates the Ascending sort order.

![](images/bubblechart_img49.png)

**Plot Axis Settings**

This allows you to define which measure column need to be plotted against which value axis (primary or secondary).

**Primary Value Axis**

![](images/bubblechart_img50.png)

**Secondary Value Axis**

![](images/bubblechart_img51.png)

**Axis Formatting**

This allows you to handle different formatting options like display type, denominations, decimal places, currency culture and negative value display format to the value axis labels. Clicking the `Axis Formatting` button will launch the following editor to configure settings.

![](images/bubblechart_img52.png)

**Grid Line Settings**

![](images/bubblechart_img53.png)

**Primary Value Axis**

This allows you to enable the `Primary Value Axis` gridlines.

![](images/bubblechart_img54.png)

**Category Axis**

This allows you to toggle the visibility of `Category axis` gridlines.

![](images/bubblechart_img55.png)

**Secondary Value Axis**

This allows you to toggle the visibility of `Secondary Value Axis` gridlines.

![](images/bubblechart_img56.png)

**Trend Line Settings**

![](images/bubblechart_img57.png)

You can add trend line to chart based on dropped measure that you select. You can also customize, the legend text, line type and line color. Trend line is not visible, by default.

![](images/bubblechart_img58.png)

After applying these settings, it will reflect in chart like below.

![](images/bubblechart_img59.png)

You have options to edit or delete added trend lines.









