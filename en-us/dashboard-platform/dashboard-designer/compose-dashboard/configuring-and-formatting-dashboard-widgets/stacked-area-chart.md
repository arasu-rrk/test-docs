---
layout: post
title: Configuring and Formatting Stacked Area Chart with Syncfusion Dashboard Designer
description: How to configure and format stacked area chart with Syncfusion Dashboard Designer
platform: dashboard-platform
control: Stacked Area Chart
documentation: ug
---

# Stacked Area Chart

Stacked Area Chart allows you to compare multiple measures through filled curves stacked one after the other vertically.

![](images/stackedareachart_img1.png)

## How to configure the flat table data to Stacked Area Chart?

Stacked Area Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Value(s) block. The dimension that you would like to categorize the measure, can be dropped onto Column block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Row block in addition. 

Follow the steps to configure data to stacked area chart

Drag and drop the stacked area chart into canvas and resize it to your required size.

![](images/stackedareachart_img2.png)

Connect to the data source.

Focus on the stacked area chart and click on `Assign Data`.

![](images/stackedareachart_img3.png)

The data pane will be opened with available measures and dimensions from the connected data source.

![](images/stackedareachart_img4.png)

 **Assigning Value(s)**

Drag and drop the `Measure` into `Value`.

![](images/stackedareachart_img5.png)

Now the chart will be rendered like this 

![](images/stackedareachart_img6.png)

You can change the summary type of the value by clicking on `Settings` option.

![](images/stackedareachart_img7.png)

Select the required summary type from list.

![](images/stackedareachart_img8.png)

You can select what data to be displayed by choosing filter option.

![](images/stackedareachart_img9.png)

The `Measure Filter` option will be shown. 

![](images/stackedareachart_img10.png)

You can choose the filter condition and apply the condition value.

![](images/stackedareachart_img11.png)

You can clear the filter. 

![](images/stackedareachart_img12.png)

You can `Format` the value.

![](images/stackedareachart_img13.png)

The format options will be shown.

![](images/stackedareachart_img14.png)

Choose the options you need and click `OK`.

![](images/stackedareachart_img15.png)

You can add more number values by drag drop the `Measures` into `Value` field. 

![](images/stackedareachart_img16.png)

You can also add `Dimensions` and `Columns` to `Value(s)`.

**Assigning Column(s)** 

You can add the `Dimension` into `Column` field by drag and drop.

![](images/stackedareachart_img17.png)

![](images/stackedareachart_img18.png)

You have option to add more than one `Column` Value.

![](images/stackedareachart_img19.png)

The following alert message will be shown.

![](images/stackedareachart_img20.png)

* If you choose `Yes` Drill down option will be enabled.

You can drill down the chart by clicking on the chart.

![](images/stackedareachart_img21.png)

The drilled view of the chart is follows.

![](images/stackedareachart_img22.png)

* If you click `No` the new `Dimension` value will replace old value.

![](images/stackedareachart_img23.png)

You can also add `Measures` and `Expression columns` into `Column(s)` field.

You have options to change the settings.

![](images/stackedareachart_img24.png)

![](images/stackedareachart_img25.png)

You can sort the chart either in `Ascending` or `Descending` series.

**Ascending Order**

![](images/stackedareachart_img26.png)

**Descending order**

![](images/stackedareachart_img27.png)

You can apply a filter.

![](images/stackedareachart_img28.png)

![](images/stackedareachart_img29.png)

Select the `Conditions` and `Rank` you need.

![](images/stackedareachart_img30.png)

Now the chart will be rendered like this.

![](images/stackedareachart_img31.png)

To show all records again click on `Show All Records`.

![](images/stackedareachart_img32.png)

On adding measures into `Column(s)` will show the following alert.

![](images/stackedareachart_img33.png)

![](images/stackedareachart_img34.png)

To continue select `Yes`, otherwise select `No`.

 **Assigning Row**

You can add `Dimension` into the `Row` field for series chart.

![](images/stackedareachart_img35.png)

The chart will be rendered in series as shown in the image.

![](images/stackedareachart_img36.png)

You have settings options similar to `Column(s)`.

![](images/stackedareachart_img37.png)

## How to configure SSAS data to stacked Area Chart?

Stacked Area Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Value(s) block. The dimension that you would like to categorize the measure, can be dropped onto Column block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Row block in addition.

Following steps illustrates configuration of SSAS data to `Stacked Area` chart

Drag and drop the `Stacked Area` chart widget into canvas and resize into your required size.

![](images/stackedareachart_img2.png)

Select the dropped widget using mouse.

![](images/stackedareachart_img3.png)

Click the `Assign Data` button in the toolbar.

A Data pane will be opened with available `Measures` and `Dimensions`.

![](images/ssascontroldesigner.png)

**Assigning Value(s)**

Drag and drop a column under `Measures` category into `Value(s)` section.

![](images/ssasdragvaluschartcontrol.png)

Now the chart will be rendered like this.

![](images/ssas_starea_1.png)

Define the filter criteria to match through choosing `Edit` option in `Filter` menu item.

![](images/ssasmeasurefilter.png)

The Measure `filter` dialog will be shown where you can choose the filter condition and apply the condition value.

![](images/ssaseditmeasurefilter.png)

Select `Clear` option to clear the defined filter.

![](images/ssasclearmeasurefilter.png)

Select `Format` option to define the display format to the values in the column through `Measure Formatting` window.

![](images/ssasmeasureformat1.png)

Choose the options you need and click `OK`

![](images/ssasmeasureformat2.png)

Now the Chart will be rendered like this.

![](images/ssas_starea_2.png)




You can also add more than one column to the `Value(s)` section.

![](images/ssasmultivaluedrop.png)

![](images/ssas_starea_3.png)

**Assigning Column(s)**

Add a dimension level or hierarchy into `Column(s)` section through drag and drop.

![](images/ssasdropdimensionfield.png)

![](images/ssas_starea_4.png)

You may also add more than one column into `Column(s)` section. In that case, you will be prompted with a message like below, asking for confirmation to enable drilling across the levels.

![](images/ssasdrillleveldialog.png)

Select `Yes` to enable drill option in chart. Select `No`  to replace the existing column with this one in the `Column(s)` section.

Click the respective data value marker in chart to drill into its inner level.


![](images/ssas_starea_5.png)

The drilled view of the chart is follows.

![](images/ssas_starea_6.png)

Through the breadcrumb at top, you may navigate to the outer or middle levels from your current inner level.

![](images/ssas_starea_7.png)

Define filter criteria through `Filter(s)…` menu item in the Settings drop down menu.


![](images/ssasdimensionfilter1.png)

Select `Filter(s)…` to launch the `Filters` window.

![](images/ssasdimensionfilter2.png)

Define the filter `Condition` and `Rank` and Click `OK`.


![](images/ssasdimensionfilter3.png)

Now the chart will be rendered like this

![](images/ssas_starea_8.png)

To show all records again click on `Show All Records`.

![](images/ssasshowallrecords.png)


**Assigning Row**

You can add a dimension level or hierarchy to `Row` section for series rendering of chart

![](images/ssas_starea_9.png)

The chart will be rendered in series as shown in the image below.

![](images/ssas_starea_10.png)






## How to format Stacked Area Chart?

You can format the stacked area chart for better illustration of the view that you require, through the settings available in `Properties` pane.

To configure data into bar chart follow the steps

1. Drag and drop the Pie chart into canvas and resize it to your required size.

2. Configure the data into bar chart.

3. Focus on the Pie chart and Click on Widget Settings.

![](images/stackedareachart_img38.png)

The property window will be opened.

![](images/stackedareachart_img39.png)

You can see the list of properties available for the widget with default value.

**General Settings**

![](images/stackedareachart_img40.png)

**Header**

This allows you to set title for this stacked area chart widget.

**Description**

This allows you to set description for this stacked area chart widget, whose visibility will be denoted by `i` icon, hovering which will display this description in tooltip.

**Basic Settings**

![](images/stackedareachart_img41.png)

**Chart Type**

This allows you to switch the widget view from current chart type to another chart type. To selecting chart type through combo box.   

**Enable Animation**

This allows you to enable the series rendering in animated mode.

**Enable Drill Down**

This allows you to add more than one dimension element to the `Column` block in Data Pane of Widget View such that, those form an hierarchy and each of its level can be navigated through clicking the respective series drawn. In its disabled state, trying to add more than one element will replace the existing one. 

**Initial View**

![](images/stackedareachart_img42.png)

**Drilled View**

![](images/stackedareachart_img43.png)

**Show Legend**

This allows you to toggle the visibility of legend in chart and also changing the legend text position (selecting through combo box).

![](images/stackedareachart_img44.png)

Enabling the option `Custom Legend Text` will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in chart. 

**Custom Legend Settings**

You can customize the legend text through the Custom Legend Settings dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead. When a column is added into Row section, this dialog will show two options `Individual` and `Group` at top in addition, to toggle between.

***Individual***

Selecting  Individual option will allow you to define a custom text (through the text area) to display for each legend series in chart with the default format:

{{"{{"}} : Row {{}}}} ({{"{{"}} : Value {{}}}})

Where, Row represents the value of dimension column added to `Row section` and Value represents the value of the measure column added to `Value section`. 

![](images/stackedareachart_customlegendsettingwindow.png)

***Group***

Enabling `Group` option will allow you to set the display format and define a custom text (through the text area) to display for each legend series based on the specified format. 

![](images/stackedareachart_customlegendsettinggroup.png)

For example, If Display Format is {{"{{"}} : Row {{}}}} ({{"{{"}} : Value {{}}}}), then Legend series will display like Argentina (Sum of Order ID)

![](images/stackedareachart_customlegendsetting.png)

**Show Value Labels**

This allows you to toggle the visibility of value labels. 

![](images/stackedareachart_img45.png)

**Value Label Rotation**
 
This allows you to define the rotation angle for the value labels to display.

![](images/stackedareachart_showlabelrotation.png)

**Value Labels Suffix**

Allows you to set suffix to the value labels.

![](images/stackedareachart_img46.png)

**Filter Settings**

![](images/stackedareachart_img47.png)

**Hierarchical Filtering**

This allows you to define the behavior of top `n` filtering which can be flat or hierarchical.

**Act as Master Widget**

This allows you to define this stacked area chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

**Ignore Filter Actions**

This allows you to define this stacked area chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

**Link Settings**

![](images/stackedareachart_img48.png)

To configure the linking to URL or dashboard with the widget through its settings. For more details, refer [Linking](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/linking-urls-and-dashboards).

**Container Settings**

![](images/stackedareachart_img49.png)

**Title Alignment**

This allows you to handle the alignment of widget title to either left, center or right.

**Title Color**

This allows you to apply text color to the widget title.

**Show Border**

This allows you to toggle the visibility of border surrounding the widget.

**Corner Radius**

This allows you to apply the specified radius to the widget corners. Value can be between 0 and 10.

**Show Maximize**

This allows you to enable/disable the maximized mode of this stacked area chart widget. The visibility of the maximize icon in widget header will be defined based on this setting.

**CSV Export**

This allows you to enable/disable the CSV export option for this stacked area chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in viewer.

**Excel Export**

This allows you to enable/disable the Excel export option for this stacked area chart widget. Enabling this allows you to export the summarized data of the widget view to XLSX format in viewer.

**Image Export**

This allows you to enable/disable the image export option for this stacked area chart widget. Enabling this allows you to export the view of the widget to image format (*.JPG) in viewer.

**Enable Comment**

This allows you to enable/disable comment for dashboard widget. For more details refer [here](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/commenting-dashboard-and-widget)

**Axis Settings**

![](images/stackedareachart_img50.png)

This section allows you to customize the axis settings in chart. 

**Category Axis**

This allows you to enable/edit the `Category Axis` title. It will reflect in chart area x-axis name. 

![](images/stackedareachart_img51.png)

**Category Axis Title**

This allows you to toggle the visibility of Category axis title.

![](images/stackedareachart_categoryaxistitle.png)

**Primary X-Axis Label Trim**

This allow you to enable the label trimming in chart area x-axis label.

![](images/stackedareachart_primaryxaxislabeltrim.png)

**Label Rotation**

This allows you to define the rotation angle for the category axis labels to display.

![](images/stackedareachart_img52.png)

**Primary Value Axis**

This allows you to enable/edit the `Primary Value Axis` title. It will reflect in chart area y-axis name.  

![](images/stackedareachart_img53.png)

**Primary Value Axis Title**

This allows you to toggle the visibility of primary value axis title.

![](images/stackedareachart_primaryvalueaxistitle.png)

**Secondary Value Axis**

This allows you to enable/edit the `Secondary Value Axis` title. It will reflect in chart area secondary y-axis name. 

**Secondary Value Axis Title**

This allows you to toggle the visibility of secondary value axis title.

![](images/stackedareachart_secondaryvalueaxistitle.png)

**Sort Order**

This allows you to define the sort order for each measure column added.

![](images/stackedareachart_img54.png)

**Plot Axis Settings**

This allows you to define which measure column need to be plotted against which value axis (primary or secondary).

**Axis Formatting**

This allows you to handle different formatting options like display type, denominations, decimal places, currency culture and negative value display format to the value axis labels. Clicking the `Axis Formatting` button will launch the following editor to configure settings.

![](images/stackedareachart_img55.png)

**Grid Line Settings**

![](images/stackedareachart_img56.png)

**Primary value Axis**

This allows you to enable the `Primary Value Axis` gridlines for the stacked area chart.

![](images/stackedareachart_img57.png)

**Category Axis**

This allows you to define the visibility of `Category axis` gridlines.

![](images/stackedareachart_img58.png)

**Secondary Value Axis**

This allows you to toggle the visibility of `Secondary Value Axis` gridlines.

![](images/stackedareachart_img59.png)







