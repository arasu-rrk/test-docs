---
layout: post
title: Configuring and Formatting Bar Chart with Syncfusion Dashboard Designer
description: How to configure and format bar chart with Syncfusion Dashboard Designer
platform: dashboard-platform
control: Bar Chart
documentation: ug
---

# Bar Chart

Bar Chart allows you to compare values for a set of unordered items across categories through horizontal bars ordered vertically.

![](images/barchart.png)

## How to configure flat table data to Bar Chart?

Bar Chart need a minimum of 1 value element and 1 column element to showcase. The measure column or expression column that you would like to analyze can be dropped into Values(s) block. The dimension column that you would like to categorize the measure column, can be dropped onto Column(s) block. If you would like to categorize based on a series column, then the respective dimension column can be dropped onto Row(s) block in addition. These blocks are composed into Data pane.

Follow the steps to configure data into bar chart widget.

Drag and drop the bar chart widget into canvas and resize it to your required size.

![](images/dragdropbarchart.png)

Connect to data source.

Focus on the bar chart widget. 

Click on `Assign Data` button.

![](images/assigndataforbarchart.png)

The data pane will be opened with available measures and dimensions from the connected data source

![](images/barchartdatapane.png)

**Assigning Value(s)**

Drag and drop the `Measure` into `Value(s)`

![](images/barchartmeasuretovalues.png)

Now the chart will be rendered like this.

![](images/barchartvaluesrendering.png)

You can change the summary type of the value by clicking on `settings` option

![](images/barchartclickvaluessetting.png)

Select the required summary type from list.

![](images/barchartsummarytype.png)

You can select what data to be displayed by choosing filter option

![](images/barcharteditfilters.png)

The `Measure filter` option will be shown and you can choose the filter condition and apply the condition value.

![](images/barchartmeasurefilter.png)

You can clear the filter. 

![](images/barchartclearfilters.png)

You can `Format` the value.

![](images/barchartformat.png)

The format options will be shown.

![](images/barchartmeasureformatting.png)

Choose the options you need and click `OK`.

![](images/barchartformatting.png)

Now the Chart will be rendered like this.

![](images/barchartafterformatting.png)

You can add more number values by drag drop the `Measures` into `Value(s)` field.

![](images/barchartaddvalues.png)

![](images/barchartaftertwovalues.png)

You can also add `Dimensions` and `Columns` to `Value(s)`.

**Assigning Column(s)**

You can add the Dimension into Column field by drag drop.

![](images/barchartdimensiontocolumns.png)

![](images/barchartafteraddingcolumns.png)

You have option to add more than one `Column` Value.

![](images/barchartwithtwocolumns.png)

The following alert message will be shown.

![](images/barchartenabledrill.png)

If you choose `Yes` Drill down option will be enabled.

You can drill down the chart by clicking on the chart.

![](images/barchart_clicktodrilled.png)

The drilled view of the chart is follows.

![](images/barchart_drilledview.png)

If you click `No` the new `Dimension` value will replace old value.

![](images/barchart_nodrilledview.png)

You can also add `Measures` and `Expression columns` into `Column(s)` field.

You have options to change the settings.

![](images/barchart_columnsettings.png)

![](images/barchart_columnsorting.png)

You can sort the chart either in `Ascending` or `Descending` series.

**Ascending Order**

![](images/barchart_ascendingorder.png)

**Descending order**

![](images/barchart_descendingorder.png)

You can apply a filter.

![](images/barchart_columnfilters.png)

![](images/barchart_filterwizard.png)

Select the `Conditions` and `Rank` you need.

![](images/barchart_selectcondition.png)

Now the chart will be rendered like this

![](images/barchart_aftercondition.png)

To show all records again click on `Show All Records`.

![](images/barchart_showallrecords.png)

On adding `Measures` into `Column(s)` will show the following alert.

![](images/barchart_measuretocolumn.png)

![](images/barchart_alertmessage.png)

To continue select `Yes`, otherwise select `No`.

**Assigning Row**

You can add `Dimension` into the `Row` field for series chart

![](images/barchart_dimensiontorow.png)

The chart will be rendered in series as shown in the image.

![](images/barchart_seriesrender.png)

You have settings options similar to `Column(s)`.

![](images/barchart_rowsettings.png)

## How to configure the SSAS data to Bar Chart?

Bar Chart need a minimum of 1 value element and 1 column element to showcase. The measure column or expression column that you would like to analyze can be dropped into Values(s) block. The dimension column that you would like to categorize the measure column, can be dropped onto Column(s) block. If you would like to categorize based on a series column, then the respective dimension column can be dropped onto Row(s) block in addition. These blocks are composed into Data pane.

Following steps illustrates configuring SSAS data to bar chart.

Drag and drop the `Bar` chart into canvas and resize it to your required size.

![](images/dragdropbarchart.png) 

Select the dropped widget using mouse.
 
Click on `Assign Data` button.

![](images/assigndataforbarchart.png)

A Data pane will be opened with available `Measures` and `Dimensions`

![](images/ssascontroldesigner.png)

**Assigning Value(s)**

Drag and drop a column under `Measures` category into `Value(s)` section.
 
![](images/ssasdragvaluschartcontrol.png)

Now the chart will be rendered like this.

![](images/ssasbarchart_img1.png)

You can select what data to be displayed by choosing filter option 

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

![](images/ssasbarchart_img2.png) 

You can add more number values by drag drop the `Measures` into `Value(s)` field.

![](images/ssasmultivaluedrop.png)  

![](images/ssasbarchart_img3.png) 

You can also add `Dimensions` and `Columns` to `Value(s)`.

**Assigning Column(s)**

Add a dimension level or hierarchy into `Column(s)` section through drag and drop.

![](images/ssasdropdimensionfield.png)  

![](images/ssasbarchart_img4.png) 

You may also add more than one column into `Column(s)` section. In that case, you will be prompted with a message like below, asking for confirmation to enable drilling across the levels.
 
![](images/ssasdrillleveldialog.png) 

Select `Yes` to enable drill option in chart. Select `No` to replace the existing column with this one in the Column(s) section.

Click the respective data value marker in chart to drill into its inner level.

![](images/ssasbarchart_img5.png)  

The drilled view of the chart is follows.
 
![](images/ssasbarchart_img6.png)

Through the breadcrumb at top, you may navigate to the outer or middle levels from your current inner level 
 
![](images/ssasbarchart_img7.png)

Define filter criteria through `Filter(s)…` menu item in the Settings drop down menu.

![](images/ssasdimensionfilter1.png)
 
Select `Filter(s)…` to launch the `Filters` window.

![](images/ssasdimensionfilter2.png) 

Define the filter `Condition` and `Rank` and Click `OK`.

![](images/ssasdimensionfilter3.png) 
 
Now the chart will be rendered like this

![](images/ssasbarchart_img8.png)
 
To show all records again click on `Show All Records`.
 
![](images/ssasshowallrecords.png)

**Assigning Row**

You can add a dimension level or hierarchy to `Row` section for series rendering of chart 

![](images/ssasdropdimesiontorow.png)

The chart will be rendered in series as shown in the image below.

![](images/ssasbarchart_img9.png)

## How to format Bar Chart?

You can format the bar chart for better illustration of the view that you require, through the settings available in Properties pane.

To format bar chart follow the steps

1.	Drag and drop the bar chart into canvas and resize it to your required size.

2.	Configure the data into bar chart.

3.	Focus on the bar chart and Click on Widget Settings.

![](images/barchart_widgetsettings.png)

The property window will be opened.

![](images/barchart_propertiespane.png)

You can see the list of properties available for the widget with default value.

**General Settings**

![](images/barchart_header.png)

**Header**

This allows you to set title for this bar chart widget.

**Description**

This allows you to set description for this bar chart widget, whose visibility will be denoted by I icon, hovering which will display this description in tooltip.

**Basic Settings**

![](images/barchart_basicsettings.png)

**Chart Type**	

This allows you to switch the widget view from current chart type to another convertible chart type.

**Enable Animation**	

This allows you to enable the series rendering in animated mode.

**Enable Drill Down**	

This allows you to add more than one dimension column to the `Column(s)` block in Data Pane such that, those form an hierarchy and each of its level can be navigated through clicking the respective series drawn. With this setting disabled, trying to add more than one dimension column will replace the existing one.

**Initial View**

![](images/barchart_initialview.png)

**Drilled View**

![](images/barchart_drilledviews.png)

**Show Legend**

This allows you to toggle the visibility of legend. You can also set custom legend text (through the text area) for each legend series (selecting through the combo box).

![](images/barchart_legend.png)

**Custom Legend Settings**

You can customize the legend text through the Custom Legend Settings dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead. When a column is added into Row section, this dialog will show two options `Individual` and `Group` at top in addition, to toggle between.

***Individual***

Selecting  Individual option will allow you to define a custom text (through the text area) to display for each legend series in chart with the default format:

{{"{{"}} : Row {{}}}} ({{"{{"}} : Value {{}}}})

Where, Row represents the value of dimension column added to `Row section` and Value represents the value of the measure column added to `Value section`. 

![](images/barchart_customlegendsettingwindow.png)

***Group***

Enabling `Group` option will allow you to set the display format and define a custom text (through the text area) to display for each legend series based on the specified format. 

![](images/barchart_customlegendsettinggroup.png)

For example, If Display Format is {{"{{"}} : Row {{}}}} ({{"{{"}} : Value {{}}}}), then Legend series will display like Argentina (Sum of Order ID)

![](images/barchart_customlegendsetting.png)

**Show Value labels**	

This allows you to toggle the visibility of value labels. You can also set suffix to the value labels.

![](images/barchart_showlabels.png)

**Value Label Rotation**
 
This allows you to define the rotation angle for the value labels to display.

![](images/barchart_showlabelrotation.png)

**Filter Settings**

![](images/barchart_filtersettings.png)

**Enable Hierarchical Filtering**	

This allows you to define the behavior of top ‘n’ filtering which can be flat or hierarchical, in this bar chart widget.

**Act as Master Widget**	

This allows you to define this bar chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

**Ignore Filter Actions**	

This allows you to define this bar chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

**Link Settings**

![](images/barchart_linksettings.png)

You can enable linking and configure to navigate either to a published dashboard URL or to a general URL with or without parameters. For more details, refer [Linking](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/linking-urls-and-dashboards).

**Container Settings**

![](images/barchart_containersetting.png)

**Title Alignment**	

This allows you the handle the alignment of widget title to either left, center or right.

**Title Color**
	
This allows you to apply text color to the widget title.

**Show visibility**	

This allows you to toggle the visibility of border surrounding the widget.

**Corner Radius**	

This allows you to apply the specified radius to the widget corners. Value can be between 0 and 10.

**Show Maximize**

This allows you to enable/disable the maximized mode of this bar chart widget. The visibility of the maximize icon in widget header will be defined based on this setting in viewer.

**CSV Export**	

This allows you to enable/disable the CSV export option for this bar chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in viewer.

**Excel Export**	

This allows you to enable/disable the Excel export option for this bar chart widget. Enabling this allows you to export the summarized data of the widget view to XLSX format in viewer.  

**Image Export**	

This allows you to enable/disable the image export option for this bar chart widget. Enabling this allows you to export the view of the widget to image format (*.JPG) in viewer.

**Enable Comment**

This allows you to enable/disable comment for dashboard widget. For more details refer [here](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/commenting-dashboard-and-widget)

**Axis Settings**

![](images/barchart_axissetting.png)

**Category Axis**

This allows to enable or edit the option of `Category Axis`. It will reflect in chart area x-axis name. 

**Category Axis Title**

This allows you to toggle the visibility of Category axis title.

![](images/barchart_categoryaxistitle.png)

**Primary X-Axis Label Trim**

This allow you to enable the label trimming in chart area x-axis label.

![](images/barchart_primaryxaxislabeltrim.png)

**Plot Axis Settings**	

This allows you to define which measure column need to be plotted against which value axis (primary or secondary).

**Sort Order**

This allows you to define the sort order for each measure column added.

**Label Rotation**

This allows you to define the rotation angle for the category axis labels to display.

![](images/barchart_labelrotation.png)

**Primary Value Axis**	

This allows you to toggle the visibility of primary value axis title and labels.

![](images/barchart_primaryvalueaxis.png)

**Primary Value Axis Title**

This allows you to toggle the visibility of primary value axis title.

![](images/barchart_primaryvalueaxistitle.png)

**Secondary Value Axis**	

This allows you to toggle the visibility of secondary value axis title and labels.

![](images/barchart_secondaryvalueaxis.png)

**Secondary Value Axis Title**

This allows you to toggle the visibility of secondary value axis title.

![](images/barchart_secondaryvalueaxistitle.png)

**Axis Formatting**	

This allows you to handle different formatting options like display type, denominations, decimal places, currency culture and negative value display format to the value axis labels. Clicking the `Axis Formatting` button will launch the following editor to configure settings.

![](images/barchart_measureformat.png)

Grid Line Settings

![](images/barchart_gridline.png)

**Primary value Axis**	

This allows you to toggle the visibility of `Primary Value Axis` gridlines.
 
**Category Axis**	

This allows you to toggle the visibility of `Category Axis` gridlines.

![](images/barchart_categoryaxis.png)

**Secondary Value Axis**	

This allows you to toggle the visibility of secondary value axis gridlines.

















































