---
layout: post
title: Configuring and Formatting Spline Chart with Syncfusion Dashboard Designer
description: How to configure and format spline chart with Syncfusion Dashboard Designer
platform: dashboard-platform
control: Spline Chart
documentation: ug
---

# Spline Chart

Spline Chart allows you to showcase trends for analysis over a time period with data points connected using splines.

![](images/splinechart_img1.png)

## How to configure flat table data to Spline Chart?

Spline Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Value(s) block. The dimension that you would like to categorize the measure, can be dropped onto Column block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Row block in addition. 

Follow the steps to configure data to spline charts

Drag and drop the spline chart into canvas and resize it into required size.

![](images/splinechart_img2.png)

Connect to the data source.

Focus on the widget and click on `Assign Data` button.

![](images/splinechart_img3.png)

The data pane will be opened with available dimensions and measures from the connected data source

![](images/splinechart_img4.png)

**Assigning Value(s)**

Drag and drop the `Measure` into `Value`.

![](images/splinechart_img5.png)

Now the chart will be rendered like this.

![](images/splinechart_img6.png)

You can change the summary type of the value by clicking on `Settings` option.

![](images/splinechart_img7.png)

Select the required summary type from list.

![](images/splinechart_img8.png)

You can select what data to be displayed by choosing filter option.

![](images/splinechart_img9.png)

The `Measure Filter` option will be shown.

![](images/splinechart_img10.png)

You can choose the filter condition and apply the condition value.

![](images/splinechart_img11.png)

You can `Clear` the filter.

![](images/splinechart_img12.png)

You can `Format` the value.

![](images/splinechart_img13.png)

The format options will be shown

![](images/splinechart_img14.png)

Choose the options you need and click `OK`.

![](images/splinechart_img15.png)

Now the Chart will be rendered like this.

![](images/splinechart_img16.png)

You can add more than one values by drag and drop the measures into value field.

![](images/splinechart_img17.png)

![](images/splinechart_img18.png)

You can also add `Dimensions` and `Columns` to `Value(s)`.

**Assigning Column(s)** 

You can add the `Dimension` into `Column` field by drag and drop.

![](images/splinechart_img19.png)

The chart will be rendered as shown in the following figure.

![](images/splinechart_img20.png)

You have option to add more than one `Column` Value.

![](images/splinechart_img21.png)

The following alert message will be shown.

![](images/splinechart_img22.png)

* If you choose **Yes** Drill down option will be enabled.

You can drill down the chart by clicking on the chart.

![](images/splinechart_img23.png)

The drilled view of the chart is follows.

![](images/splinechart_img24.png)

* If you click `No` the new Dimension value will replace old value.

![](images/splinechart_img25.png)

You can also add `Measures` and `Expression Columns` into `Column(s)` field.

You have options to change the `Settings`.

![](images/splinechart_img26.png)

![](images/splinechart_img27.png)

You can sort the chart either in `Ascending` or `Descending` series.

**Ascending Order**

![](images/splinechart_img28.png)

**Descending order**

![](images/splinechart_img29.png)

You can apply a filter.

![](images/splinechart_img30.png)

![](images/splinechart_img31.png)

Select the `Conditions` and `Rank` you need.

![](images/splinechart_img32.png)

Now the chart will be rendered like this.

![](images/splinechart_img33.png)

To show all records again click on `Show all records`.

![](images/splinechart_img34.png)

You can add `Measures` into `Column(s)`.

![](images/splinechart_img35.png)

The following alert will shown.

![](images/splinechart_img36.png)

To continue click `Yes` otherwise click on `NO`.

![](images/splinechart_img37.png)

 **Assigning Row**

You can add `Dimension` into the `Row` field for series chart.

![](images/splinechart_img38.png)

The chart will be rendered in series as shown in the image.

![](images/splinechart_img39.png)

You have settings options similar to `Column(s)`.

![](images/splinechart_img40.png)

![](images/splinechart_img41.png)

## How to configure SSAS Data to Spline Chart?

Spline Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Value(s) block. The dimension that you would like to categorize the measure, can be dropped onto Column block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Row block in addition.

Following steps illustrates configuration of SSAS data to Spline chart

Drag and drop the `Spline` chart widget into canvas and resize into your required size.

![](images/splinechart_img2.png)
 
Select the dropped widget using mouse.
 
Click the `Assign Data` button in the toolbar.

![](images/splinechart_img3.png)

A Data pane will be opened with available `Measures` and `Dimensions`

![](images/ssascontroldesigner.png)

**Assigning Value(s)**

Drag and drop a column under `Measures` category into `Value(s)` section.
 
![](images/ssasdragvaluschartcontrol.png)

Now the chart will be rendered like this.

![](images/splinechart_img70.png)

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

![](images/splinechart_img71.png) 

You can add more number values by drag drop the `Measures` into `Value(s)` field.

![](images/ssasmultivaluedrop.png)  

![](images/splinechart_img72.png) 

**Assigning Column(s)**

Add a dimension level or hierarchy into `Column(s)` section through drag and drop.

![](images/ssasdropdimensionfield.png)  

![](images/splinechart_img73.png) 

You may also add more than one column into `Column(s)` section. In that case, you will be prompted with a message like below, asking for confirmation to enable drilling across the levels.
 
![](images/ssasdrillleveldialog.png) 

Select `Yes` to enable drill option in chart. Select `No` to replace the existing column with this one in the Column(s) section.

Click the respective data value marker in chart to drill into its inner level.

![](images/splinechart_img74.png)  

The drilled view of the chart is follows.
 
![](images/splinechart_img75.png)

Through the breadcrumb at top, you may navigate to the outer or middle levels from your current inner level 
 
![](images/splinechart_img76.png)

Define filter criteria through `Filter(s)…` menu item in the Settings drop down menu.

![](images/ssasdimensionfilter1.png)
 
Select `Filter(s)…` to launch the `Filters` window.

![](images/ssasdimensionfilter2.png) 

Define the filter `Condition` and `Rank` and Click `OK`.

![](images/ssasdimensionfilter3.png) 
 
Now the chart will be rendered like this

![](images/splinechart_img77.png)
 
To show all records again click on `Show All Records`.
 
![](images/ssasshowallrecords.png)

**Assigning Row**

You can add a dimension level or hierarchy to `Row` section for series rendering of chart 

![](images/ssasdropdimesiontorow.png)

The chart will be rendered in series as shown in the image below.

![](images/splinechart_img78.png)

## How to format Spline Chart?

You can format the spline chart for better illustration of the view that you require, through the settings available in `Properties` pane.

To configure data into spline chart follow the steps

1. Drag and drop the spline chart into canvas and resize it to your required size.

2. Configure the data into spline chart.

3. Focus on the spline chart and Click on Widget Settings.

![](images/splinechart_img42.png)

The property window will be opened.

![](images/splinechart_img43.png)

You can see the list of properties available for the widget with default value.

**General Settings**

![](images/splinechart_img44.png)

**Header**

This allows you to set title for this spline chart widget.

**Description**

This allows you to set description for this spline chart widget, whose visibility will be denoted by `i` icon, hovering which will display this description in tooltip.

**Basic Settings**

![](images/splinechart_img45.png)

**Chart Type**

This allows you to switch the widget view from current chart type to another chart type. To selecting chart type through combo box.  

**Enable Animation**

This allows you to enable the rendering of series in animated mode.

**Show Data Marker**

This allows you to toggle the visibility of marker from label to adorn each data point in chart series.

![](images/splinechart_img46.png)

**Enable Drill Down**

This allows you to add more than one dimension element to the `Column` block in Data Pane of Widget View such that, those form an hierarchy and each of its level can be navigated through clicking the respective series drawn. In its disabled state, trying to add more than one element will replace the existing one. 

**Initial View**

![](images/splinechart_img47.png)

**Drilled View**

![](images/splinechart_img48.png)

**Show Legend**

This allows you to toggle the visibility of legend in chart and also changing the legend text position (selecting through combo box).  

![](images/splinechart_img49.png)

Enabling this option of **Custom Legend Text** will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in chart. 

**Custom Legend Settings**

You can customize the legend text through the Custom Legend Settings dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead. When a column is added into Row section, this dialog will show two options `Individual` and `Group` at top in addition, to toggle between.

***Individual***

Selecting  Individual option will allow you to define a custom text (through the text area) to display for each legend series in chart with the default format:

{{"{{"}} : Row {{}}}} ({{"{{"}} : Value {{}}}})

Where, Row represents the value of dimension column added to `Row section` and Value represents the value of the measure column added to `Value section`. 

![](images/splinechart_customlegendsettingwindow.png)

***Group***

Enabling `Group` option will allow you to set the display format and define a custom text (through the text area) to display for each legend series based on the specified format. 

![](images/splinechart_customlegendsettinggroup.png)

For example, If Display Format is {{"{{"}} : Row {{}}}} ({{"{{"}} : Value {{}}}}), then Legend series will display like Argentina (Sum of Order ID)

![](images/splinechart_customlegendsetting.png)

**Show Value Labels**

Through `Show Value Labels`, you can toggle the visibility of value labels. 

![](images/splinechart_img50.png)

**Value Label Rotation**
 
This allows you to define the rotation angle for the value labels to display.

![](images/splinechart_showlabelrotation.png)

**Value Labels Suffix**

Allows you to set suffix to the value labels. 

![](images/splinechart_img51.png)

**Filter Settings**

![](images/splinechart_img52.png)

**Enable Hierarchical Filtering**

This allows you to define the behavior of top `n` filtering which can be flat or hierarchical.

**Act as Master Widget**

This allows you to define this spline chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

**Ignore Filter Actions**

This allows you to define this spline chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

**Link Settings**

![](images/splinechart_img53.png)

To configure the linking to URL or dashboard with the widget through its settings. For more details, refer [Linking](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/linking-urls-and-dashboards).

**Container Settings**

![](images/splinechart_img54.png)

**Title Alignment**

This allows you to handle the alignment of widget title to either left, center or right.

**Title Color**

This allows you to apply text color to the widget title.

**Show Border** 

This allows you to toggle the visibility of border surrounding the widget.

**Corner Radius**

This allows you to apply the specified radius to the widget corners. Value can be between 0 and 10.

**Show Maximize**

This allows you to enable/disable the maximized mode of this spline chart widget. The visibility of the maximize icon in widget header will be defined based on this setting.

**CSV Export**

This allows you to enable/disable the CSV export option for this spline chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in viewer .

**Excel Export**

This allows you to enable/disable the Excel export option for this spline chart widget. Enabling this allows you to export the summarized data of the widget view to XLSX format in viewer .

**Image Export**

This allows you to enable/disable the image export option for this spline chart widget. Enabling this allows you to export the view of the widget to image format (*.JPG) in viewer.

**Enable Comment**

This allows you to enable/disable comment for dashboard widget. For more details refer [here](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/commenting-dashboard-and-widget)

**Axis Settings**

![](images/splinechart_img55.png)

This section allows you to customize the axis settings in chart. 

**Category Axis**

This allows to enable/edit the option of `Category Axis`. It will reflect in chart area x-axis name.

**Category Axis Title**

This allows you to toggle the visibility of Category axis title.

![](images/splinechart_categoryaxistitle.png)

**Primary X-Axis Label Trim**

This allow you to enable the label trimming in chart area x-axis label.

![](images/splinechart_primaryxaxislabeltrim.png)

**Label Rotation**

This allows you to define the rotation angle for the category axis labels to display.

![](images/splinechart_img56.png)

**Primary Value Axis**

This allows you to enable/edit the `Primary Value Axis` title. It will reflect in chart area y-axis name. 

![](images/splinechart_img57.png)

**Primary Value Axis Title**

This allows you to toggle the visibility of primary value axis title.

![](images/splinechart_primaryvalueaxistitle.png)

**Secondary Value Axis**

This allows you to enable/edit the `Secondary Value Axis` title. It will reflect in chart area secondary y-axis name. 

![](images/splinechart_img58.png)

**Secondary Value Axis Title**

This allows you to toggle the visibility of secondary value axis title.

![](images/splinechart_secondaryvalueaxistitle.png)

**Sort Order**

To define the sorting of chart based on any of the measures that you dropped and its order through this option. Following screenshot illustrates the Ascending sort order.

![](images/splinechart_img59.png)

**Plot Axis Settings**

This allows you to define which measure column need to be plotted against which value axis (primary or secondary).

**Primary Value Axis**

![](images/splinechart_img60.png)

**Secondary Value Axis**

![](images/splinechart_img61.png)

**Axis Formatting**

This allows you to handle different formatting options like display type, denominations, decimal places, currency culture and negative value display format to the value axis labels. Clicking the `Axis Formatting` button will launch the following editor to configure settings.

![](images/splinechart_img62.png)

**Grid Line Settings**

![](images/splinechart_img63.png)

**Primary Value Axis**

This allows you to enable the `Primary Value Axis` gridlines.

![](images/splinechart_img64.png)

**Category Axis**

This allows you to toggle the visibility of `Category Axis` gridlines.

![](images/splinechart_img65.png)

**Secondary Value Axis**

This allows you to toggle the visibility of `Secondary Value Axis` gridlines.

![](images/splinechart_img66.png)

**Trend Line Settings**

![](images/splinechart_img67.png)

You can add trend line to chart based on dropped measure that you select. You can also customize its, legend text, line type and line color. Trend line is not visible, by default.

![](images/splinechart_img68.png)

After applying these settings, it will reflect in chart like below.   

![](images/splinechart_img69.png)

You have options to edit or delete the added trend lines





