---
layout: post
title: funnel chart
description: funnel chart
platform: js
control: Control Name undefined
documentation: ug
---

# Funnel Chart

Funnel Chart allows you to make proportional comparison between values showcased as progressively decreasing manner. To plot a funnel chart, a minimum requirement of 1 value and 1 column is needed.

![](images/funnelchart_img1.png)

## How to configure the flat table data to Funnel Chart?

Funnel Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Value(s) block. The dimension that you would like to categorize the measure, can be dropped onto Column block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Row block in addition. 

To configure data into funnel chart follow the steps

* Drag and drop the funnel chart into canvas and resize it to your required size.

![](images/funnelchart_img2.png)

* Connect to data source.

* Focus on the funnel chart and Click on `Assign Data`.

![](images/funnelchart_img3.png)

The data pane will be opened with available `Measures` and `Dimensions` from the data source.

You can add the required data from `Measures` and `Dimensions` into required field `Expression Columns` can also be used by creating using Expression Designer.

**Adding Value(s)**

You can add Measures into Value(s) field by drag and drop the required measure.

![](images/funnelchart_img4.png)

Now the funnel chart will be rendered like this.

![](images/funnelchart_img5.png)

You can change the settings option.

![](images/funnelchart_img6.png)

You can select the required summary type from the available summary types shown in settings.

![](images/funnelchart_img7.png)

You can filter the data to be displayed in funnel chart by using filter.

![](images/funnelchart_img8.png)

When you click the `Measure Filter` option will appear.

![](images/funnelchart_img9.png)

You can select the `Condition` to be applied in the shown list box and set the value in text box.

Select the condition and give the value and click on `Apply`.

![](images/funnelchart_img10.png)

You have option to clear the applied filter. Click on clear to remove the filters

![](images/funnelchart_img11.png)

You can format the data to be displayed in the funnel chart by using format option.

![](images/funnelchart_img12.png)

The measure formatting option will be shown, select the format that you want and click `OK`.

![](images/funnelchart_img13.png)

Select the options and click `OK` to proceed.

![](images/funnelchart_img14.png)

To remove the added value fields click on `x` button.

![](images/funnelchart_img15.png)

You can add multiple `Measures` into `Value`.

![](images/funnelchart_img16.png)

The chart will be rendered like this.

![](images/funnelchart_img17.png)

You can also drag and drop `Dimensions` and `Expression Columns` into `Value(s)`.

**Adding Column(s)**

Drag and drop the `Dimensions` into `Column(s)`.

![](images/funnelchart_img18.png)

Funnel chart will be rendered like this.

![](images/funnelchart_img19.png)

You can add more than one value into `Column(s)` field.

![](images/funnelchart_img20.png)

The following message will open

![](images/funnelchart_img21.png)

To enable drill down click `Yes`.

![](images/funnelchart_img22.png)

The drilled view of the chart region selected.

![](images/funnelchart_img23.png)

To continue without drill down click `NO`.

![](images/funnelchart_img24.png)

The old column value will be replaced by new column value.

![](images/funnelchart_img25.png)

You can change the `Settings`.

![](images/funnelchart_img26.png)

![](images/funnelchart_img27.png)

You can apply filters by selecting filter in settings. 

N> Filter will be set by default for top 5 records.

![](images/funnelchart_img28.png)

The filters option will open

Select the needed `Conditions` and `Rank` and then click `OK`.

![](images/funnelchart_img29.png)

Similarly you can add the `Measures` and `Expression Columns` into `Column` field.

**Adding Row**

You can drag and drop the `Measure` or `Dimension` into the `Row` field. 

![](images/funnelchart_img30.png)

This will render funnel chart in series.

![](images/funnelchart_img31.png)

Scroll to see all charts. 

![](images/funnelchart_img32.png)


## How to configure the SSAS data to Funnel Chart?

Funnel Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Value(s) block. The dimension that you would like to categorize the measure, can be dropped onto Column block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Row block in addition.

Following steps illustrates configuration of SSAS data to `Funnel chart`

Drag and drop the `Funnel chart` into canvas and resize it to your required size.


![](images/funnelchart_img2.png)

Select the dropped widget using mouse.

Click the `Assign Data` button in the toolbar.


![](images/funnelchart_img3.png)


A Data pane will be opened with available `Measures` and `Dimensions`.


![](images/ssascontroldesigner.png)

**Assigning Value(s)**

Drag and drop a column under `Measures` category into `Value(s)`.


![](images/ssasdragvaluschartcontrol.png)


Now the chart will be rendered like this.



![](images/ssas_funnel_1.png)


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

![](images/ssas_funnel_2.png)

You can also add more than one column to the `Value(s)`.

![](images/ssasmultivaluedrop.png)


![](images/ssas_funnel_3.png)


**Assigning Column(s)**

Add a dimension level or hierarchy into `Column(s)` section through drag and drop.

![](images/ssasdropdimensionfield.png)

![](images/ssas_funnel_4.png)

You may also add more than one column into `Column(s)` section.
In that case, you will be prompted with a message like below, asking for confirmation to enable drilling across the levels.

![](images/ssasdrillleveldialog.png)


Select `Yes` to `enable drill` option in chart. Select `No`  to replace the existing column with this one in the `Column(s)` section.


Click the respective data value marker in chart to drill into its inner level.


![](images/ssas_funnel_5.png)

The drilled view of the chart is follows.

![](images/ssas_funnel_6.png)

Define filter criteria through `Filter(s)…` menu item in the Settings drop down menu.

![](images/ssasdimensionfilter1.png)

Select `Filter(s)…` to launch the `Filters` window.


![](images/ssasdimensionfilter2.png)


Define the filter `condition` and `Rank` and Click `OK`.

![](images/ssasdimensionfilter3.png)


Now the chart will be rendered like this

![](images/ssas_funnel_7.png)


To show all records again click on `Show All Records`.

![](images/ssasshowallrecords.png)

**Assigning Row**

You can add a dimension level or hierarchy to `Row` section for series rendering of chart.

![](images/ssas_pie_8.png)


The chart will be rendered in series as shown in the image.


![](images/ssas_funnel_9.png)

Scroll down to see all charts. 

## How to format Funnel Chart?

You can format the funnel chart for better illustration of the view that you require, through the settings available in `Properties` pane.

To configure data into Funnel chart follow the steps

* Drag and drop the Funnel chart into canvas and resize it to your required size.

* Configure the data into Funnel chart.

* Focus on the Funnel chart and Click on Widget Settings.

![](images/funnelchart_img33.png)

The property window will be opened

![](images/funnelchart_img34.png)

You can see the list of properties available for the widget with default value.

**General Settings**

![](images/funnelchart_img35.png)

**Header**

This allows you to set title for this funnel chart widget.

**Description**

This allows you to set description for this funnel chart widget, whose visibility will be denoted by `i` icon, hovering which will display this description in tooltip.

**Basic Settings**

![](images/funnelchart_img36.png)

**Chart Type**

This allows you to switch the widget view from current chart type to another chart type.

**Enable Animation**

This allows you to enable the series rendering in animated mode.

**Enable Drill Down**

This allows you to add more than one dimension element to the `Column` block in Data Pane of Widget View such that, those form an hierarchy and each of its level can be navigated through clicking the respective series drawn. In its disabled state, trying to add more than one element will replace the existing one.

**Initial View**

![](images/funnelchart_img37.png)

**Drilled View**

![](images/funnelchart_img38.png)

**Show Legend**

This allows you to toggle the visibility of legend in chart and also change the legend text position (selecting through combo box).

![](images/funnelchart_img39.png)

Enabling this option of `Custom Legend Text` will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in chart. 

**Show Value Labels**

This allows you to toggle the visibility of value labels. 

![](images/funnelchart_img40.png)

**Data Label**

This allows you to define the display format either as value or as percentage.

**Value**

![](images/funnelchart_img41.png)

**Percentage**

![](images/funnelchart_img42.png)

**Value Labels Suffix**

Allows you to set suffix to the value labels.

![](images/funnelchart_img43.png)

**Filter Settings**

![](images/funnelchart_img44.png)

**Hierarchical Filtering**

This allows you to define the behavior of top `n` filtering which can be flat or hierarchical.

**Act as Master Widget**

This allows you to define this funnel chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

**Ignore Filter Actions**

This allows you to define this funnel chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

**Link Settings**

![](images/funnelchart_img45.png)

To configure the linking to URL or dashboard with the widget through its settings. For more details, refer [Linking](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/linking-urls-and-dashboards).

**Container Settings**

![](images/funnelchart_img46.png)

**Title Alignment**

This allows you to handle the alignment of widget title to either left, center or right.

**Title Color**

This allows you to apply text color to the widget title.

**Show Border**

This allows you to toggle the visibility of border surrounding the widget.

**Corner Radius**

This allows you to apply the specified radius to the widget corners. Value can be between 0 and 10.

**Show Maximize**

This allows you to enable/disable the maximized mode of this funnel chart widget. The visibility of the maximize icon in widget header will be defined based on this setting in viewer.

**CSV Export**

This allows you to enable/disable the CSV export option for this funnel chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in viewer.

**Excel Export**

This allows you to enable/disable the Excel export option for this funnel chart widget. Enabling this allows you to export the summarized data of the widget view to XLSX format in viewer.

**Image Export**

This allows you to enable/disable the image export option for this funnel chart widget. Enabling this allows you to export the view of the widget to image format (*.JPG) in viewer.

**Enable Comment**

This allows you to enable/disable comment for dashboard widget. For more details refer [here](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/commenting-dashboard-and-widget)





