---
layout: post
title: Configuring and Formatting Doughnut Chart with Syncfusion Dashboard Designer
description: How to configure and format doughnut chart with Syncfusion Dashboard Designer
platform: dashboard-platform
control: Doughnut Chart
documentation: ug
---

# Doughnut Chart

Doughnut Chart allows you to showcase proportionality of each item to the total in the form of donut-slices. To plot a doughnut chart, a minimum requirement of 1 value and 1 column is needed.

![](images/doughnutchart_img1.png)

## How to configure the flat table  data to Doughnut Chart?

Doughnut Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Value(s) block. The dimension that you would like to categorize the measure, can be dropped onto Column block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Row block in addition. 

To configure data into Doughnut chart follow the steps

* Drag and drop the Doughnut chart into canvas and resize it to your required size.

![](images/doughnutchart_img2.png)

* Connect to the Data source.

* Focus on the Doughnut chart and Click on `Assign Data`

![](images/doughnutchart_img3.png)

The data pane will be opened with available `Measures` and `Dimensions` from the connected data source.

![](images/doughnutchart_img4.png)

You can add the required data from `Measures` and `Dimensions` into required field, you can also create `Expression Columns` using Expression Designer.

**Adding Value(s)**

You can add `Measures` into `Value(s)` field by drag and drop the required measure.

![](images/doughnutchart_img5.png)

Now the Doughnut chart will be rendered like this.

![](images/doughnutchart_img6.png)

You can change the `Settings` option.

![](images/doughnutchart_img7.png)

You can select the required summary type from the available summary types shown in settings.

![](images/doughnutchart_img8.png)

You can filter the data to be displayed in doughnut chart by using filter.

![](images/doughnutchart_img9.png)

When you click the `Measure Filter` option will appear.

![](images/doughnutchart_img10.png)

![](images/doughnutchart_img11.png)

You can select the Condition to be applied in the shown list box and set the value in text box.

Click on `Apply` to see the changes.

You have option to `Clear` the applied filter. Click on clear to remove the filters

![](images/doughnutchart_img12.png)

You can format the data to be displayed in the doughnut chart by using format option.

The `Measure Formatting` option will be shown, select the format that you want and click `OK`

![](images/doughnutchart_img13.png)

![](images/doughnutchart_img14.png)

To remove the added value fields click on `x` button.

![](images/doughnutchart_img15.png)

You can add multiple `Measures` into `Value`.

![](images/doughnutchart_img16.png)

![](images/doughnutchart_img17.png)

You can also drag and drop `Dimension(s)` and `Expression Column(s)` into `Value(s)`

**Adding Column(s)**

Drag and drop the `Dimensions` into `Column(s)`

![](images/doughnutchart_img18.png)

Doughnut chart will be rendered like this.

![](images/doughnutchart_img19.png)

You can add more than one value into `Column(s)` field.

![](images/doughnutchart_img20.png)

The following message will open

![](images/doughnutchart_img21.png)

To enable drill down click `Yes`. 

![](images/doughnutchart_img22.png)

The drilled view of the chart region selected.

![](images/doughnutchart_img23.png)

To continue without drill down click `No`.

![](images/doughnutchart_img24.png)

The old column value will be replaced by new column value.

![](images/doughnutchart_img25.png)

You can change the settings.

![](images/doughnutchart_img26.png)

![](images/doughnutchart_img27.png)

You can select sort `Ascending` or `Descending`.

![](images/doughnutchart_img28.png)

![](images/doughnutchart_img29.png)

You can apply filters by selecting filter in settings.

N> Filter will be set by default for top 5 records.

![](images/doughnutchart_img30.png)

The filters option will open.

Select the needed `Conditions` and `Rank` and then click `OK`.

![](images/doughnutchart_img31.png)

Similarly you can add the `Measures` and `Expression Columns` into `Column(s)` field.

To remove the filters applied, select `Show All Records`.

![](images/doughnutchart_img32.png)

**Adding Row**

You can drag and drop the `Measure` or `Dimension` into the `Row` field. 

![](images/doughnutchart_img33.png)

This will render doughnut chart in series.

![](images/doughnutchart_img34.png)

Scroll to see all charts. 

![](images/doughnutchart_img35.png)


## How to configure the SSAS data to Doughnut Chart?

Doughnut Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Value(s) block. The dimension that you would like to categorize the measure, can be dropped onto Column block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Row block in addition.

Following steps illustrates configuration of SSAS data to `Doughnut chart`

Drag and drop the `Doughnut chart` into canvas and resize it to your required size.

![](images/doughnutchart_img2.png)

Select the dropped widget using mouse.

Click the `Assign Data` button in the toolbar.

![](images/doughnutchart_img3.png)

A Data pane will be opened with available `Measures` and `Dimensions`.

![](images/ssascontroldesigner.png)

**Assigning Value(s)**

Drag and drop a column under `Measures` category into `Value(s)`.


![](images/ssasdragvaluschartcontrol.png)


Now the chart will be rendered like this.

![](images/ssas_doughnut_1.png)

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

![](images/ssas_doughnut_2.png)


You can also add more than one column to the `Value(s)`.

![](images/ssasmultivaluedrop.png)

![](images/ssas_doughnut_3.png)

**Assigning Column(s)**

Add a dimension level or hierarchy into `Column(s)` section through drag and drop.

![](images/ssasdropdimensionfield.png)


![](images/ssas_doughnut_4.png)

You may also add more than one column into `Column(s)` section.
In that case, you will be prompted with a message like below, asking for confirmation to enable drilling across the levels.

![](images/ssasdrillleveldialog.png)


Select `Yes` to `enable drill` option in chart. Select `No`  to replace the existing column with this one in the `Column(s)` section.


Click the respective data value marker in chart to drill into its inner level.

![](images/ssas_doughnut_5.png)

The drilled view of the chart is follows.

![](images/ssas_doughnut_6.png)

Define filter criteria through `Filter(s)…` menu item in the Settings drop down menu.

![](images/ssasdimensionfilter1.png)

Select `Filter(s)…` to launch the `Filters` window.


![](images/ssasdimensionfilter2.png)


Define the filter `condition` and `Rank` and Click `OK`.

![](images/ssasdimensionfilter3.png)


Now the chart will be rendered like this

![](images/ssas_doughnut_7.png)

To show all records again click on `Show All Records`.

![](images/ssasshowallrecords.png)

**Assigning Row**

You can add a dimension level or hierarchy to `Row` section for series rendering of chart.

![](images/ssas_pie_8.png)

The chart will be rendered in series as shown in the image.

![](images/ssas_doughnut_8.png)

## How to format Doughnut Chart?

You can format the doughnut chart for better illustration of the view that you require, through the settings available in `Properties` pane.

To configure data into doughnut chart follow the steps

1. Drag and drop the doughnut chart into canvas and resize it to your required size.

2. Configure the data into doughnut chart.

3. Focus on the doughnut chart and Click on Widget Settings.

![](images/doughnutchart_img36.png)

The property window will be opened.

![](images/doughnutchart_img37.png)

You can see the list of properties available for the widget with default value.

**General Settings**

![](images/doughnutchart_img38.png)

**Header**

This allows you to set title for this doughnut chart widget.

**Description**

This allows you to set description for this doughnut chart widget, whose visibility will be denoted by `i` icon, hovering which will display this description in tooltip.

**Basic Settings**

![](images/doughnutchart_img39.png)

**Chart Type**

This allows you to switch the widget view from current chart type to another chart type.

**Enable Animation**

This allows you to enable the series rendering in animated mode.

**Enable Drill Down**

This allows you to add more than one dimension element to the `Column` block in Data Pane of Widget View such that, those form an hierarchy and each of its level can be navigated through clicking the respective series drawn. In its disabled state, trying to add more than one element will replace the existing one.

**Show Legend**

This allows you to toggle the visibility of legend in chart and also change the legend text position (selecting through combo box).

![](images/doughnutchart_img40.png)

Enabling this option of **Custom Legend Text** will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in chart. 

**Show Value Labels**

This allows you to toggle the visibility of value labels. 

![](images/doughnutchart_img41.png)

**Data Label**

This allows you to define the display format either as value or as percentage.

**Value**

![](images/doughnutchart_img42.png)

**Percentage**

![](images/doughnutchart_img43.png)

**Value Labels Suffix**

Allows you to set suffix to the value labels.

![](images/doughnutchart_img44.png)

**Sort Order**

This allows you to define the sort order for each measure column added.

**Filter Settings**

![](images/doughnutchart_img45.png)

**Enable Hierarchical Filtering**

This allows you to define the behavior of top `n` filtering which can be flat or hierarchical.

**Act as Master Widget**

This allows you to define this doughnut chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

**Ignore Filter Actions**

This allows you to define this doughnut chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

**Link Settings**

![](images/doughnutchart_img46.png)

To configure the linking to URL or dashboard with the widget through its settings. For more details, refer [Linking](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/linking-urls-and-dashboards).

**Container Settings**

![](images/doughnutchart_img47.png)

**Title Alignment**

This allows you to handle the alignment of widget title to either left, center or right.

**Title Color**

This allows you to apply text color to the widget title.

**Show Border**

This allows you to toggle the visibility of border surrounding the widget.

**Corner Radius**

This allows you to apply the specified radius to the widget corners. Value can be between 0 and 10.

**Show Maximize**

This allows you to enable/disable the maximized mode of this doughnut chart widget. The visibility of the maximize icon in widget header will be defined based on this setting.

**CSV Export**

This allows you to enable/disable the CSV export option for this doughnut chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in viewer.

**Excel Export**

This allows you to enable/disable the Excel export option for this doughnut chart widget. Enabling this allows you to export the summarized data of the widget view to XLSX format in viewer.

**Image Export**

This allows you to enable/disable the image export option for this doughnut chart widget. Enabling this allows you to export the view of the widget to image format (*.JPG) in viewer.

**Enable Comment**

This allows you to enable/disable comment for dashboard widget. For more details refer [here](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/commenting-dashboard-and-widget)





