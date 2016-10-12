---
layout: post
title: Configuring and Formatting Range Navigator with Syncfusion Dashboard Designer
description: How to configure and format range navigator with Syncfusion Dashboard Designer
platform: dashboard-platform
control: Range Navigator
documentation: ug
---

# Range Navigator

Range Navigator allows you to filter based on the date range dynamically set through navigation bars.

![](images/rangenavigator_img1.png)

## How to configure flat table data to Range Navigator?

The following procedure illustrates data configuration of Range Navigator.

Drag and drop `Range Navigator` control icon from the Tool box into design panel. You can find control in Toolbox by search.

![](images/rangenavigator_img2.png)

After control added in design panel, click **Assign Data** button at Design Tools Pane to open the Data configuration pane.

![](images/rangenavigator_img3.png)

Bind a Measure column to `Value` section and a Date type column to `Argument` section.

![](images/rangenavigator_img4.png)

![](images/rangenavigator_img5.png)

You can use the aggregation function to change the values of the elements.

![](images/rangenavigator_img6.png)

You can select the type of Date and Time as required by clicking the `Setting` button.

![](images/rangenavigator_img7.png)

You can use the `Relative Date Filter` option to filter the `Range` and `Period`.

![](images/rangenavigator_img8.png)

![](images/rangenavigator_img9.png)

![](images/rangenavigator_img10.png)

Select the `Link to specific date` option to select the specific date.

![](images/rangenavigator_img11.png)

You can use the `Filter(s)…` option to apply the filter condition for date.

![](images/rangenavigator_img12.png)

Range Filter will be shown to set either the `Range`, `Start Date` or `End Date` and click `Apply`.

**Ranges**

![](images/rangenavigator_img13.png)

**Start Date**

![](images/rangenavigator_img14.png)

**End Date**

![](images/rangenavigator_img15.png)

Here is an illustration,

![](images/rangenavigator_img16.png)

## How to configure SSAS data to Range Navigator?

Following steps illustrates configuration of SSAS data to Range Navigator.

Drag and drop the `Range Navigator` widget into canvas and resize into your required size.

![](images/rangenavigator_img2.png)

Select the dropped widget using mouse.

![](images/rangenavigator_img3.png)

Click the `Assign Data` button in the toolbar.

A Data pane will be opened with available `Measures` and `Dimensions`.

![](images/ssas_rangenavigator_0.png)

Drag and drop a column under `Measures` category into `Value(s)` section.

![](images/ssas_rangenavigator_1.png)

Drag and drop a column under `Dimensions` category into `Argument` section.


![](images/ssas_rangenavigator_2.png)


Define relative date filter criteria through `Relative Date Filter` menu item in the Settings drop down menu.


![](images/ssas_rangenavigator_rdf_1.png)

![](images/ssas_rangenavigator_rdf_2.png)

![](images/ssas_rangenavigator_rdf_3.png)

Select the `Link to specific date` option to select the specific date

![](images/ssas_rangenavigator_rdf_4.png)


 Define filter criteria through `Filter(s)…` menu item in the Settings drop down menu.

 ![](images/ssas_rangenavigator_3.png)

 Select `Filter(s)…` to launch the `Filters` window.

 set either the `Range`, `Start Date` or `End Date` and click `Apply`.

 **Ranges**
 
 ![](images/ssas_rangenavigator_fr1.png)

 **Start Date**

 ![](images/ssas_rangenavigator_fr2.png)

**End Date**

![](images/ssas_rangenavigator_fr3.png)

 Here is an illustration,

![](images/ssas_rangenavigator_4.png)

## How to Format Range Navigator widget?

You can format the Range Navigator for better illustration of the view that you require, through the settings available in `Properties` pane.

**General Settings**

![](images/rangenavigator_img17.png)

**Header**

This allows you to set title for this range navigator widget.

**Description**

This allows you to set description for this range navigator widget, whose visibility will be denoted by `i` icon, hovering which will display this description in tooltip.

**Basic Settings**

![](images/rangenavigator_img18.png)

**Series Type**

You can change the series type to any chart type to render in range navigator. 

![](images/rangenavigator_img19.png)

**Filter settings**

![](images/rangenavigator_img20.png)

**Act as Master Widget**

This allows you to define this range navigator widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

**Ignore Filter Options**

This allows you to define this range navigator widget to ignore responding to the filter actions applied on other widgets in dashboard.

**Container Appearance**

![](images/rangenavigator_img21.png)

**Show Border**

This allows you to toggle the visibility of border surrounding the widget.

**Corner Radius**

This allows you to apply the specified radius to the widget corners. Value can be between 0 and 10.







