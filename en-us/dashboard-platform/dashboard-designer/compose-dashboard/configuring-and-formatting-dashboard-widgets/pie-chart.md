---
layout: post
title: Configuring and Formatting Pie Chart with Syncfusion Dashboard Designer
description: How to configure and format pie chart with Syncfusion Dashboard Designer
platform: dashboard-platform
control: Pie Chart
documentation: ug
---

# Pie Chart

Pie Chart allows you to showcase proportionality of each item to the total in the form of pie-slices.

![](images/piechart_img1.png)

## How to configure the flat table data to Pie Chart?

Pie Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Value(s) block. The dimension that you would like to categorize the measure, can be dropped onto Column block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Row block in addition. 

To configure data into pie chart follow the steps

Drag and drop the Pie chart into canvas and resize it to your required size.

![](images/piechart_img2.png)

Connect to data source.

Focus on the Pie chart and Click on `Assign Data`.

![](images/piechart_img3.png)

The data pane will be opened with available `Measures` and `Dimensions` from the connected data source.

![](images/piechart_img4.png)

You can add the required data from `Measures` and `Dimensions` into required field, you can also create `Expression Columns` using Expression Designer

**Adding Value(s)**

You can add `Measures` into `Value(s)` field by drag and drop the required measure. 

![](images/piechart_img5.png)

Now the Pie chart will be rendered like this.

![](images/piechart_img6.png)

You can change the `Settings` option.

![](images/piechart_img7.png)

You can select the required summary type from the available summary types shown in `Settings`.

![](images/piechart_img8.png)

You can filter the data to be displayed in pie chart by using filter.

![](images/piechart_img9.png)

When you click the `Measure Filter` option will appear.

![](images/piechart_img10.png)

You can select the `Condition` to be applied in the shown list box and set the value in text box, select the condition and range and then click on `Apply`. 

![](images/piechart_img11.png)

You have option to clear the applied filter. Click on clear to remove the filters.

![](images/piechart_img12.png)

You can format the data to be displayed in the Pie chart by using format option.

![](images/piechart_img13.png)

The measure formatting option will be shown, select the format that you want and click `OK`.

![](images/piechart_img14.png)

Select the required format and click on `OK`.

![](images/piechart_img15.png)

To remove the added value fields click on `x` button.

![](images/piechart_img16.png)

You can add multiple `Measures` into `Value`.

![](images/piechart_img17.png)

The chart will be rendered as shown in the following image.

![](images/piechart_img18.png)

You can also drag and drop `Dimension` and `Expression Column` into `Value(s)`.

**Adding Column(s)**

Drag and drop the `Dimensions` into `Column(s)`.

![](images/piechart_img19.png)

Pie chart will be rendered like this.

![](images/piechart_img20.png)

You can add more than one value into `Column(s)` field.

![](images/piechart_img21.png)

The following message will open.

![](images/piechart_img22.png)

To enable drill down click `yes`. 

![](images/piechart_img23.png)

The drilled view of the chart region selected.

![](images/piechart_img24.png)

To continue without drill down click `No`.

![](images/piechart_img25.png)

The old column value will be replaced by new column value.

![](images/piechart_img26.png)

You can change the `Settings`.

![](images/piechart_img27.png)

![](images/piechart_img28.png)

You can select sort `Ascending` or `Descending`.

**Ascending order**

![](images/piechart_img29.png)

**Descending order**

![](images/piechart_img30.png)

You can apply filters by selecting filter in settings 

N> Filter will be set by default for top 5 records.

![](images/piechart_img31.png)

The filters option will open.

Select the needed `Conditions` and `rank` and then click `Ok`.

![](images/piechart_img32.png)

To show all records click on `Show All Records`.

Similarly you can add the `Measures` and `Expression Columns` into column field.

**Adding Row**

You can drag and drop the `Measure` or `Dimension` into the `Row` field. 

![](images/piechart_img33.png)

This will render pie chart in series.

![](images/piechart_img34.png)

Scroll down to see all charts. 


## How to configure the SSAS data to Pie Chart?

Pie Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Value(s) block. The dimension that you would like to categorize the measure, can be dropped onto Column block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Row block in addition.

Following steps illustrates configuration of SSAS data to Pie chart.

Drag and drop the `Pie` chart into canvas and resize it to your required size.


![](images/piechart_img2.png)

Select the dropped widget using mouse.

Click the `Assign Data` button in the toolbar.


![](images/piechart_img3.png)


A Data pane will be opened with available `Measures` and `Dimensions`.


![](images/ssascontroldesigner.png)

**Assigning Value(s)**

Drag and drop a column under `Measures` category into `Value(s)`.


![](images/ssasdragvaluschartcontrol.png)


Now the chart will be rendered like this.



![](images/ssas_pie_1.png)


Define the filter criteria to match through choosing `Edit` option in `Filter` menu item.

![](images/ssaseditmeasurefilter.png)


The `Measure filter` dialog will be shown where you can choose the filter `condition` and apply the condition `value`.

![](images/ssasmeasurefilter.png)

Select `Clear` option to clear the defined filter.

![](images/ssasclearmeasurefilter.png)


Select `Format` option to define the display format to the values in the column through `Measure Formatting` window.

![](images/ssasmeasureformat1.png)

Choose the options you need and click `OK`.

![](images/ssasmeasureformat1.png)

Now the Chart will be rendered like this.

![](images/ssas_pie_2.png)

You can also add more than one column to the `Value(s)`.

![](images/ssasmultivaluedrop.png)


![](images/ssas_pie_3.png)


**Assigning Column(s)**

Add a dimension level or hierarchy into `Column(s)` section through drag and drop.

![](images/ssasdropdimensionfield.png)

![](images/ssas_pie_4.png)

You may also add more than one column into `Column(s)` section.
In that case, you will be prompted with a message like below, asking for confirmation to enable drilling across the levels.

![](images/ssasdrillleveldialog.png)


Select `Yes` to `enable drill` option in chart. Select `No`  to replace the existing column with this one in the `Column(s)` section.


Click the respective data value marker in chart to drill into its inner level.


![](images/ssas_pie_5.png)

The drilled view of the chart is follows.

![](images/ssas_pie_6.png)

Define filter criteria through `Filter(s)…` menu item in the Settings drop down menu.

![](images/ssasdimensionfilter1.png)

Select `Filter(s)…` to launch the `Filters` window.


![](images/ssasdimensionfilter2.png)


Define the filter `condition` and `Rank` and Click `OK`.

![](images/ssasdimensionfilter3.png)


Now the chart will be rendered like this

![](images/ssas_pie_7.png)


To show all records again click on `Show All Records`.

![](images/ssasshowallrecords.png)

**Assigning Row**

You can add a dimension level or hierarchy to `Row` section for series rendering of chart.

![](images/ssas_pie_8.png)


The chart will be rendered in series as shown in the image.


![](images/ssas_pie_9.png)

Scroll down to see all charts. 


## How to format Pie Chart?

You can format the pie chart for better illustration of the view that you require, through the settings available in `Properties` pane.

To configure data into pie chart follow the steps

1. Drag and drop the Pie chart into canvas and resize it to your required size.

2. Configure the data into Pie chart.

3. Focus on the Pie chart and Click on Widget Settings.

![](images/piechart_img35.png)

The property window will be opened.

![](images/piechart_img36.png)

You can see the list of properties available for the widget with default value.

**General Settings**

![](images/piechart_img37.png)

**Header**

This allows you to set title for this pie chart widget.

**Description**

This allows you to set description for this pie chart widget, whose visibility will be denoted by `i` icon, hovering which will display this description in tooltip.

**Basic Settings**

![](images/piechart_img38.png)

**Chart Type**

This allows you to switch the widget view from current chart type to another chart type.

**Enable Animation**

This allows you to enable the series rendering in animated mode.

**Enable Drill Down**

This allows you to add more than one dimension element to the `Column` block in Data Pane of Widget View such that, those form an hierarchy and each of its level can be navigated through clicking the respective series drawn. In its disabled state, trying to add more than one element will replace the existing one.

**Initial View:**

![](images/piechart_img39.png)

**Drilled View**

![](images/piechart_img40.png)

**Show Legend**

This allows you to toggle the visibility of legend in chart and also change the legend text position (selecting through combo box). Enabling this option of `Custom Legend Text` will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in chart. 

![](images/piechart_img41.png)

**Show Value Label**

This allows you to toggle the visibility of value labels. 

![](images/piechart_img42.png)

**Data Label**

This allows you to define the display format either as value or as percentage.

**Value**

![](images/piechart_img43.png)

**Percentage**

![](images/piechart_img44.png)

**Value Labels Suffix**

Allows you to set suffix to the value labels.

![](images/piechart_img45.png)

**Sort Order**

This allows you to define the sort order for each measure column added.

**Ascending**

![](images/piechart_img46.png)

**Descending**

![](images/piechart_img47.png)

**Filter Settings**

![](images/piechart_img48.png)

**Enable Hierarchical Filtering**

This allows you to define the behavior of top `n` filtering which can be flat or hierarchical.

**Act as Master Widget**

This allows you to define this pie chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

**Ignore Filter Actions**

This allows you to define this pie chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

**Link Settings**

![](images/piechart_img49.png)

To configure the linking to URL or dashboard with the widget through its settings. For more details, refer [Linking](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/linking-urls-and-dashboards).

**Container Settings**

![](images/piechart_img50.png)

**Title Alignment**

This allows you to handle the alignment of widget title to either left, center or right.

**Title Color**

This allows you to apply text color to the widget title.

**Show Border**

This allows you to toggle the visibility of border surrounding the widget.

**Corner Radius**

This allows you to apply the specified radius to the widget corners. Value can be between 0 and 10.

**Show Maximize** 

This allows you to enable/disable the maximized mode of this pie chart widget. The visibility of the maximize icon in widget header will be defined based on this setting in viewer.

**CSV Export**

This allows you to enable/disable the CSV export option for this pie chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in viewer.

**Excel Export**

This allows you to enable/disable the Excel export option for this pie chart widget. Enabling this allows you to export the summarized data of the widget view to XLSX format in viewer.

**Image Export**

This allows you to enable/disable the image export option for this pie chart widget. Enabling this allows you to export the view of the widget to image format (*.JPG) in viewer.

**Enable Comment**

This allows you to enable/disable comment for dashboard widget. For more details refer [here](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/commenting-dashboard-and-widget)






