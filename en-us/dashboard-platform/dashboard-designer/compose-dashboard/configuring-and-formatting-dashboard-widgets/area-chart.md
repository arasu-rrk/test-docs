---
layout: post
title: Configuring and Formatting a Area Chart with Syncfusion Dashboard Designer
description: How to configure and format a area chart with Syncfusion Dashboard Designer
platform: dashboard-platform
control: Area Chart
documentation: ug
---

# Area Chart

Area Chart allows you to compare values for a set of unordered items across categories through filled curves ordered vertically.

![](images/areachart_img1.png)

## How to configure flat table data to Area Chart?

Area Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Value(s) block. The dimension that you would like to categorize the measure, can be dropped onto Column block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Row block in addition. 

Following chart illustrates about how to configure data to area chart

Drag and drop the **Area** chart widget into canvas and resize into your required size.

![](images/areachart_img2.png)

Connect to the data source.

Focus on the Chart widget.

![](images/areachart_img3.png)

Click on the `Assign Data` Button.

A Data pane will be opened with available `Measures` and `Dimensions`.

![](images/areachart_img4.png)

**Assigning Value(s)**

Drag and drop the `Measure` into `Value`.

![](images/areachart_img5.png)

Now the chart will be rendered like this. 

![](images/areachart_img6.png)

You can change the summary type of the value by clicking on `Settings` option.

![](images/areachart_img7.png)

Select the required summary type from list.

![](images/areachart_img8.png)

You can select what data to be displayed by choosing filter option.

![](images/areachart_img9.png)

The `Measure Filter` option will be shown and you can choose the filter condition and apply the condition value.

![](images/areachart_img10.png)

You can clear the filter. 

![](images/areachart_img11.png)

You can `Format` the value.

![](images/areachart_img12.png)

The format options will be shown.

![](images/areachart_img13.png)

Choose the options you need and click `OK`.

![](images/areachart_img14.png)

Now the Chart will be rendered like this.

![](images/areachart_img15.png)

You can add more number of values by drag drop the `Measures` into `Value` field. 

![](images/areachart_img16.png)

![](images/areachart_img17.png)

You can also add `Dimensions` and `Columns` to `Value(s)`.

 **Assigning Column(s)** 

You can add the `Dimension` into `Column` field by drag and drop.

![](images/areachart_img18.png)

![](images/areachart_img19.png)

You have option to add more than one `Column` Value.

![](images/areachart_img20.png)

The following alert message will be shown.

![](images/areachart_img21.png)

* If you choose `Yes` Drill down option will be enabled.

You can drill down the chart by clicking on the chart.

![](images/areachart_img22.png)

The drilled view of the chart is follows.

![](images/areachart_img23.png)

* If you click `No` the new `Dimension` value will replace old value.

![](images/areachart_img24.png)

You can also add `Measure` and `Expression columns` into `Column(s)` field.

You have options to change the settings.

![](images/areachart_img25.png)

![](images/areachart_img26.png)

You can sort the chart either in `Ascending` or `Descending` series.

**Ascending Order:**

![](images/areachart_img27.png)

**Descending order:**

![](images/areachart_img28.png)

You can apply a filter.

![](images/areachart_img29.png)

![](images/areachart_img30.png)

Select the `Conditions` and `Rank` you need.

![](images/areachart_img31.png)

Now the chart will be rendered like this.

![](images/areachart_img32.png)

To show all records again click on `Show All Records`.

![](images/areachart_img33.png)

You can add `Measures` into `Column(s)`.

![](images/areachart_img34.png)

![](images/areachart_img35.png)

![](images/areachart_img36.png)

**Assigning Row**

You can add `Dimension` into the `Row` field for series chart.

![](images/areachart_img37.png)

The chart will be rendered in series as shown in the image.

![](images/areachart_img38.png)

You have settings options similar to `column(s)`.

![](images/areachart_img39.png)

## How to configure the SSAS data to Area Chart?

Area Chart need a minimum of 1 value element and 1 column element to showcase. The measure or expression field that you would like to analyze can be dropped into Value(s) block. The dimension that you would like to categorize the measure, can be dropped onto Column block. If you would like to categorize based on a series, then the respective dimension can be dropped onto Row block in addition.

Following steps illustrates configuring SSAS data to `Area` chart

Drag and drop the `Area` chart widget into canvas and resize into your required size.

![](images/areachart_img2.png) 

Select the dropped widget using mouse.

![](images/areachart_img3.png)

Click the `Assign Data button` in the toolbar.

A Data pane will be opened with available `Measures` and `Dimensions`.

![](images/ssascontroldesigner.png)  

**Assigning Value(s)**

Drag and drop a column under `Measures` category into `Value(s)` `section`.

![](images/ssasdragvaluschartcontrol.png)   

Now the chart will be rendered like this.

![](images/areachart_img70.png)

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

![](images/areachart_img71.png) 

You can also add more than one column to the `Value(s)` section.

![](images/ssasmultivaluedrop.png)

![](images/areachart_img72.png)


**Assigning Column(s)**

Add a dimension level or hierarchy into Column(s) section through drag and drop.

![](images/ssasdropdimensionfield.png)

![](images/areachart_img73.png) 

You may also add more than one column into `Column(s)` section. In that case, you will be prompted with a message like below, asking for confirmation to enable drilling across the levels.

![](images/ssasdrillleveldialog.png) 

Select `Yes` to enable drill option in chart. Select `No`  to replace the existing column with this one in the Column(s) section.

Click the respective data value marker in chart to drill into its inner level.

![](images/areachart_img74.png)

The drilled view of the chart is follows.
 
![](images/areachart_img75.png)

Through the breadcrumb at top, you may navigate to the outer or middle levels from your current inner level.

![](images/areachart_img76.png)

Define filter criteria through `Filter(s)…` menu item in the Settings drop down menu.

![](images/ssasdimensionfilter1.png)
 
Select `Filter(s)…` to launch the `Filters` window.
 
![](images/ssasdimensionfilter2.png)

Define the filter `Condition` and `Rank` and Click `OK`.

![](images/ssasdimensionfilter3.png)

Now the chart will be rendered like this

![](images/areachart_img77.png)
 
To show all records again click on `Show All Records`.

![](images/ssasshowallrecords.png) 

**Assigning Row**

You can add a dimension level or hierarchy to `Row` section for series rendering of chart

![](images/ssasassingingdimesiontorow.png)

The chart will be rendered in series as shown in the image below.

![](images/areachart_img78.png)

## How to format Area Chart?

You can format the Area chart for better illustration of the view that you require, through the settings available in `Properties` pane.

To format area chart follow the steps

Drag and drop the area chart into canvas and resize it to your required size.

Configure the data into bar chart.

Focus on the area chart and Click on Widget Settings.

![](images/areachart_img40.png)

The property window will be opened.

![](images/areachart_img41.png)

You can see the list of properties available for the widget with default value.

**General Settings**

![](images/areachart_img42.png)

**Header**

This allows you to set title for this area chart widget.

**Description**

This allows you to set description for this area chart widget, whose visibility will be denoted by `i` icon, hovering which will display this description in tooltip.

**Basic Settings**

![](images/areachart_img43.png)

**Chart Type**

This allows you to switch the widget view from current chart type to another chart type.

**Enable Animation**

This allows you to enable the rendering of series in animated mode.

**Show Marker**

This allows you to toggle the visibility of marker from label to adorn each data point in chart series.

![](images/areachart_img44.png)

**Enable Drill Down**

This allows you to add more than one dimension element to the `Column` block in Data Pane of Widget View such that, those form an hierarchy and each of its level can be navigated through clicking the respective series drawn. In its disabled state, trying to add more than one element will replace the existing one. 

**Initial View**

![](images/areachart_img45.png)

**Drilled View**

![](images/areachart_img46.png)

**Show Legend**

This allows you to toggle the visibility of legend in chart and also changing the legend text position (selecting through combo box).  

![](images/areachart_img47.png)

Enabling this option of **Custom Legend Text** will allow you to define a custom text (through the text area) to display for each legend series (selecting through the combo box) in chart.

**Custom Legend Settings**

You can customize the legend text through the Custom Legend Settings dialog. This dialog will show the legend text list as labels at left and corresponding text area at right to add the formatted text to display instead. When a column is added into Row section, this dialog will show two options `Individual` and `Group` at top in addition, to toggle between.

***Individual***

Selecting  Individual option will allow you to define a custom text (through the text area) to display for each legend series in chart with the default format:

{{"{{"}} : Row {{}}}} ({{"{{"}} : Value {{}}}})

Where, Row represents the value of dimension column added to `Row section` and Value represents the value of the measure column added to `Value section`. 

![](images/areachart_customlegendsettingwindow.png)

***Group***

Enabling `Group` option will allow you to set the display format and define a custom text (through the text area) to display for each legend series based on the specified format. 

![](images/areachart_customlegendsettinggroup.png)

For example, If Display Format is {{"{{"}} : Row {{}}}} ({{"{{"}} : Value {{}}}}), then Legend series will display like Argentina (Sum of Order ID)

![](images/areachart_customlegendsetting.png)

**Show Value Labels**

This allows you to toggle the visibility of value labels.

![](images/areachart_img48.png)

**Value Label Rotation**
 
This allows you to define the rotation angle for the value labels to display.

![](images/areachart_showlabelrotation.png)

**Value Labels Suffix**

Allows you to set suffix to the value labels. 

![](images/areachart_img49.png)

**Filter Settings**

![](images/areachart_img50.png)

**Hierarchical Filtering**

This allows you to define the behavior of top `n` filtering which can be flat or hierarchical.

**Act as Master Widget**

This allows you to define this area chart widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

**Ignore Filter Actions**

This allows you to define this area chart widget to ignore responding to the filter actions applied on other widgets in dashboard.

**Link Settings**

![](images/areachart_img51.png)

To configure the linking to URL or dashboard with the widget through its settings. For more details, refer [Linking](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/linking-urls-and-dashboards). 

**Container Settings**

![](images/areachart_img52.png)

**Title Alignment**

This allows you to handle the alignment of widget title to either left, center or right.

**Title Color**

This allows you to apply text color to the widget title.

**Border Visibility**

This allows you to toggle the visibility of border surrounding the widget.

**Corner Radius**

This allows you to apply the specified radius to the widget corners. Value can be between 0 and 10.

**Maximized View**

This allows you to enable/disable the maximized mode of this area chart widget. The visibility of the maximize icon in widget header will be defined based on this setting in viewer.

**CSV Export**

This allows you to enable/disable the CSV export option for this area chart widget. Enabling this allows you to export the summarized data of the widget view to CSV format in viewer.

**Excel Export**

This allows you to enable/disable the Excel export option for this area chart widget. Enabling this allows you to export the summarized data of the widget view to XLSX format in viewer.

**Image Export**

This allows you to enable/disable the image export option for this area chart widget. Enabling this allows you to export the view of the widget to image format (*.JPG) in viewer.

**Enable Comment**

This allows you to enable/disable comment for dashboard widget. For more details refer [here](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/commenting-dashboard-and-widget)

**Axis Settings**

![](images/areachart_img53.png)

This section allows you to customize the axis settings in chart. 

**Category Axis**

This allows to enable or edit the option of `Category Axis`. It will reflect in chart area x-axis name. 

![](images/areachart_img54.png)

**Category Axis Title**

This allows you to toggle the visibility of Category axis title.

![](images/areachart_categoryaxistitle.png)

**Primary X-Axis Label Trim**

This allow you to enable the label trimming in chart area x-axis.

![](images/areachart_img69.png)

**Label Rotation**

This allows you to define the rotation angle for the category axis labels to display.

![](images/areachart_img55.png)

**Primary Value Axis**

This allows you to enable and edit the `Primary Value Axis` title. It will reflect in chart area y-axis name. 

![](images/areachart_img56.png)

**Primary Value Axis Title**

This allows you to toggle the visibility of primary value axis title.

![](images/areachart_primaryvalueaxistitle.png)

**Secondary Value Axis**

This allows you to enable/edit the `Secondary Value Axis` title. It will reflect in chart area secondary y-axis name. 

![](images/areachart_img57.png)

**Secondary Value Axis Title**

This allows you to toggle the visibility of secondary value axis title.

![](images/areachart_secondaryvalueaxistitle.png)

**Sort Order**

This allows you to define the sorting of chart based on any of the measures that you dropped and its order through this option. Following screenshot illustrates the Ascending sort order.

![](images/areachart_img58.png)

**Plot Axis Settings**

This allows you to define which measure column need to be plotted against which value axis (primary or secondary).

**Primary Value Axis**

![](images/areachart_img59.png)

**Secondary Value Axis**

![](images/areachart_img60.png)

**Axis Formatting**

This allows you to handle different formatting options like display type, denominations, decimal places, currency culture and negative value display format to the value axis labels. Clicking the “Axis Formatting” button will launch the following editor to configure settings.

![](images/areachart_img61.png)

**Grid Line Settings**

![](images/areachart_img62.png)

**Primary Value Axis**

This allows you to enable the primary value axis gridlines.

![](images/areachart_img63.png)

**Category Axis**

This allows you to toggle the visibility of category axis gridlines.

![](images/areachart_img64.png)

**Secondary Value Axis**

This allows you to toggle the visibility of secondary value axis gridlines. 

![](images/areachart_img65.png)

**Trend Line Settings**

![](images/areachart_img66.png)

You can add trend line to chart based on dropped measure that you select. You can also customize its legend text, line type and line color. Trend line is not visible, by default.

![](images/areachart_img67.png)

After applying these settings, it will reflect in chart like below. 

![](images/areachart_img68.png)

You have options to edit or delete the added trend lines.





