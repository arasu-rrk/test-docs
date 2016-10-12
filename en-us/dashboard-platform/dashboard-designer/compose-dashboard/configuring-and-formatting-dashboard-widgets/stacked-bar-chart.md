---
layout: post
title: Configuring and Formatting Stacked Bar Chart with Syncfusion Dashboard Designer
description: How to configure and format stacked bar chart with Syncfusion Dashboard Designer
platform: dashboard-platform
control: Stacked Bar Chart
documentation: ug
---

# Stacked Bar Chart

Stacked Bar Chart allows you to compare multiple measures through bars stacked one after the other horizontally.

![](images/stackedbarchart_img1.png)

## How to configure the flat table data to Stacked Bar Chart?

Stacked Bar Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Value(s) block. The dimension that you would like to categorize the measure, can be dropped onto Column block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Row block in addition.

Follow the steps to configure data to stacked bar chart.

Drag and drop the stacked bar chart into canvas and resize it your required size.

![](images/stackedbarchart_img2.png)

Connect to data source.

Focus on the stacked bar chart and click on `Assign Data`.

![](images/stackedbarchart_img3.png)

The data pane will be opened with available `Measures` and `Dimensions` from the connected data source.

![](images/stackedbarchart_img4.png)

**Assigning Value(s)**

Drag and drop the `Measure` into `Value`.

![](images/stackedbarchart_img5.png)

Now the chart will be rendered like this. 

![](images/stackedbarchart_img6.png)

You can change the summary type of the value by clicking on `Settings` option.

![](images/stackedbarchart_img7.png)

Select the required summary type from list.

![](images/stackedbarchart_img8.png)

You can select what data to be displayed by choosing filter option.

![](images/stackedbarchart_img9.png)

The `Measure Filter` option will be shown and you can choose the filter condition and apply the condition value.

![](images/stackedbarchart_img10.png)

![](images/stackedbarchart_img11.png)

You can clear the filter. 

![](images/stackedbarchart_img12.png)

You can `Format` the value.

![](images/stackedbarchart_img13.png)

The format options will be shown.

![](images/stackedbarchart_img14.png)

Choose the options you need and click `OK`.

![](images/stackedbarchart_img15.png)

Now the Chart will be rendered like this.

![](images/stackedbarchart_img16.png)

You can add more number values by drag drop the `Measures` into `Value` field. 

![](images/stackedbarchart_img17.png)

![](images/stackedbarchart_img18.png)

You can also add `Dimensions` and `Columns` to `Value(s)`.

 **Assigning Column(s)** 

You can add the `Dimension` into `Columns` section by drag drop.

![](images/stackedbarchart_img19.png)

![](images/stackedbarchart_img20.png)

You have option to add more than one `Column` Value.

![](images/stackedbarchart_img21.png)

The following alert message will be shown.

![](images/stackedbarchart_img22.png)

* If you choose `Yes` Drill down option will be enabled.

You can drill down the chart by clicking on the chart.

![](images/stackedbarchart_img23.png)

The drilled view of the chart is follows.

![](images/stackedbarchart_img24.png)

* If you click **No** the new `Dimension` value will replace old value.

![](images/stackedbarchart_img25.png)

![](images/stackedbarchart_img26.png)

You can also add `Measures` and `Expression columns` into `Column(s)` field.

You have options to change the settings.

![](images/stackedbarchart_img27.png)

![](images/stackedbarchart_img28.png)

You can sort the chart either in `Ascending` or `Descending` series.

**Ascending Order**

![](images/stackedbarchart_img29.png)

**Descending order**

![](images/stackedbarchart_img30.png)

You can apply a filter.

![](images/stackedbarchart_img31.png)

![](images/stackedbarchart_img32.png)

Select the `Conditions` and `Rank` you need.

![](images/stackedbarchart_img33.png)

Now the chart will be rendered like this.

![](images/stackedbarchart_img34.png)

To show all records again click on `Show All Records`.

![](images/stackedbarchart_img35.png)

On adding `Measures` into `Column(s)` will show the following alert.

![](images/stackedbarchart_img36.png)

![](images/stackedbarchart_img37.png)

To continue select `Yes`, otherwise select `No`.

**Assigning Row**

You can add `Dimension` into the `Row` field for series chart.

![](images/stackedbarchart_img38.png)

The chart will be rendered in series as shown in the image

![](images/stackedbarchart_img39.png)

You have settings options similar to `Column(s)`.

![](images/stackedbarchart_img40.png)

## How to configure SSAS data to stacked bar Chart?

Stacked Bar Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Value(s) block. The dimension that you would like to categorize the measure, can be dropped onto Column block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Row block in addition.

Following steps illustrates configuration of SSAS data to `Stacked Bar` Chart

Drag and drop the `Stacked Bar` chart widget into canvas and resize into your required size.

![](images/stackedbarchart_img2.png)

Select the dropped widget using mouse.

![](images/stackedbarchart_img3.png)

Click the `Assign Data` button in the toolbar.

A Data pane will be opened with available `Measures` and `Dimensions`.

![](images/ssascontroldesigner.png)

**Assigning Value(s)**

Drag and drop a column under `Measures` category into `Value(s)` section.

![](images/ssasdragvaluschartcontrol.png)

Now the chart will be rendered like this.

![](images/ssas_stbar_1.png)

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

![](images/ssas_stbar_2.png)


**Assigning Column(s)**

You can also add more than one column to the `Value(s)` section.

![](images/ssasmultivaluedrop.png)

![](images/ssas_stbar_3.png)

Add a dimension level or hierarchy into `Column(s)` section through drag and drop.

![](images/ssasdropdimensionfield.png)

![](images/ssas_stbar_4.png)

You may also add more than one column into `Column(s)` section. In that case, you will be prompted with a message like below, asking for confirmation to enable drilling across the levels.

![](images/ssasdrillleveldialog.png)

Select `Yes` to enable drill option in chart. Select `No`  to replace the existing column with this one in the `Column(s)` section.

Click the respective data value marker in chart to drill into its inner level.


![](images/ssas_stbar_5.png)

The drilled view of the chart is follows.

![](images/ssas_stbar_6.png)

Through the breadcrumb at top, you may navigate to the outer or middle levels from your current inner level.

![](images/ssas_stbar_7.png)

Define filter criteria through `Filter(s)…` menu item in the Settings drop down menu.


![](images/ssasdimensionfilter1.png)

Select `Filter(s)…` to launch the `Filters` window.

![](images/ssasdimensionfilter2.png)

Define the filter `Condition` and `Rank` and Click `OK`.


![](images/ssasdimensionfilter3.png)

Now the chart will be rendered like this

![](images/ssas_stbar_8.png)

To show all records again click on `Show All Records`.

![](images/ssasshowallrecords.png)


**Assigning Row**

You can add a dimension level or hierarchy to `Row` section for series rendering of chart

![](images/ssas_stbar_9.png)

The chart will be rendered in series as shown in the image below.

![](images/ssas_stbar_10.png)


## How to format Stacked Bar Chart?

You can format the stacked bar chart for better illustration of the view that you require, through the settings available in `Properties` pane.

To configure data into stacked bar chart follow the steps

1. Drag and drop the stacked bar chart into canvas and resize it to your required size.

2. Configure the data into stacked bar chart.

3. Focus on the stacked chart and Click on Widget Settings.

The property window will be opened.

![](images/stackedbarchart_img41.png)

![](images/stackedbarchart_img42.png)

You can see the list of properties available for the widget with default value.

**General Settings**

![](images/stackedbarchart_img43.png)

**Header**

This allows you to set title for this stacked bar chart widget.

**Description**

This allows you to set description for this stacked bar chart widget, whose visibility will be denoted by `i` icon, hovering which will display this description in tooltip.

**Basic Settings**

![](images/stackedbarchart_img44.png)

**Chart Type**

This allows you to switch the widget view from current chart type to another convertible chart type.  

**Enable Animation**

This allows you to enable the series rendering in animated mode.

**Enable Drill Down**

This allows you to add more than one dimension element to the `Column` block in Data Pane of Widget View such that, those form an hierarchy and each of its level can be navigated through clicking the respective series drawn. In its disabled state, trying to add more than one element will replace the existing one.

**Initial View**

![](images/stackedbarchart_img45.png)

**Drilled View**

![](images/stackedbarchart_img46.png)

**Show Legend**

This allows you to toggle the visibility of legend in chart and also changing the legend text position (selecting through combo box).

![](images/stackedbarchart_img47.png)

Enabling the option `Custom Legend Text` will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in chart. 

**Custom Legend Settings**

You can customize the legend text through the Custom Legend Settings dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead. When a column is added into Row section, this dialog will show two options `Individual` and `Group` at top in addition, to toggle between.

***Individual***

Selecting  Individual option will allow you to define a custom text (through the text area) to display for each legend series in chart with the default format:

{{"{{"}} : Row {{}}}} ({{"{{"}} : Value {{}}}})

Where, Row represents the value of dimension column added to `Row` section and Value represents the value of the measure column added to `Value` section. 

![](images/stackedbarchart_customlegendsettingwindow.png)

***Group***

Enabling `Group` option will allow you to set the display format and define a custom text (through the text area) to display for each legend series based on the specified format. 

![](images/stackedbarchart_customlegendsettinggroup.png)

For example, If Display Format is {{"{{"}} : Row {{}}}} ({{"{{"}} : Value {{}}}}), then Legend series will display like Argentina (Sum of Order ID)

![](images/stackedbarchart_customlegendsetting.png)

**Show Value Labels**

This allows you to toggle the visibility of value or data labels. 

![](images/stackedbarchart_img48.png)

**Value Label Rotation**
 
This allows you to define the rotation angle for the value labels to display.

![](images/stackedbarchart_showlabelrotation.png)

**Value Labels Suffix**

Allows you to set suffix to the value/data labels.

![](images/stackedbarchart_img49.png)

**Filter Settings**

![](images/stackedbarchart_img50.png)

**Enable Hierarchical Filtering**

This allows you to define the behavior of top `n` filtering which can be flat or hierarchical.

**Act as Master Widget**

This allows you to define this stacked bar chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

**Ignore Filter Actions**

This allows you to define this stacked bar chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

**Link Settings**

![](images/stackedbarchart_img51.png)

To configure the linking to URL or dashboard with the widget through its settings. For more details, refer [Linking](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/linking-urls-and-dashboards).

**Container Settings**

![](images/stackedbarchart_img52.png)

**Title Alignment**

This allows you to handle the alignment of widget title to either left, center or right.

**Title Color**

This allows you to apply text color to the widget title.

**Show Border**

This allows you to toggle the visibility of border surrounding the widget.

**Corner Radius**

This allows you to apply the specified radius to the widget corners. Value can be between 0 and 10.

**Show Maximize**

This allows you to enable/disable the maximized mode of this stacked bar chart widget. The visibility of the maximize icon in widget header will be defined based on this setting.

**CSV Export**

This allows you to enable/disable the CSV export option for this stacked bar chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in viewer.

**Excel Export**

This allows you to enable/disable the Excel export option for this stacked bar chart widget. Enabling this allows you to export the summarized data of the widget view to XLSX format in viewer.

**Image Export**

This allows you to enable/disable the image export option for this stacked bar chart widget. Enabling this allows you to export the view of the widget to image format (*.JPG) in viewer.

**Enable Comment**

This allows you to enable/disable comment for dashboard widget. For more details refer [here](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/commenting-dashboard-and-widget)

**Axis Settings**

![](images/stackedbarchart_img53.png)

This section allows you to customize the axis settings in chart. 

**Category Axis**

This allows you to enable/edit the `Category Axis` title. It will reflect in chart area x-axis name. 

![](images/stackedbarchart_img54.png)

**Category Axis Title**

This allows you to toggle the visibility of Category axis title.

![](images/stackedbarchart_categoryaxistitle.png)

**Primary X-Axis Label Trim**

This allow you to enable the label trimming in chart area x-axis label.

![](images/stackedbarchart_primaryxaxislabeltrim.png)

**Label Rotation**

This allows you to define the rotation angle for the category axis labels to display.

![](images/stackedbarchart_img55.png)

**Primary Value Axis**

This allows you to enable/edit the `Primary Value Axis` title. It will reflect in chart area axis. 

![](images/stackedbarchart_img56.png)

**Primary Value Axis Title**

This allows you to toggle the visibility of primary value axis title.

![](images/stackedbarchart_primaryvalueaxistitle.png)

**Secondary Value Axis**

This allows you to enable/edit the `Secondary Value Axis` title. It will reflect in chart area secondary y-axis name. 

**Secondary Value Axis Title**

This allows you to toggle the visibility of secondary value axis title.

![](images/stackedbarchart_secondaryvalueaxistitle.png)

**Sort Order**

This allows you to define the sort order for each measure column added.

![](images/stackedbarchart_img57.png)

**Plot Axis Settings**

This allows you to define which measure column need to be plotted against which value axis (primary or secondary).

**Axis Formatting**

This allows you to handle different formatting options like display type, denominations, decimal places, currency culture and negative value display format to the value axis labels. Clicking the `Axis Formatting` button will launch the following editor to configure settings.

![](images/stackedbarchart_img58.png)

**Grid Line Settings**

![](images/stackedbarchart_img59.png)

**Primary value Axis**

This allows you to enable the primary value axis’ gridlines for the stacked bar chart.

**Primary Value Line**

![](images/stackedbarchart_img60.png)



