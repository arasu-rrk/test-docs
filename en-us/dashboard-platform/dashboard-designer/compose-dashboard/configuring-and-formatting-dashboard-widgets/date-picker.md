---
layout: post
title: Configuring and Formatting Date Picker with Syncfusion Dashboard Designer
description: How to configure and format date picker with Syncfusion Dashboard Designer
platform: dashboard-platform
control: Date Picker
documentation: ug
---

# Date Picker

Date Picker enables you to filter based on the single or range of date selection. 

![](images/datepicker_img1.png)

## How to configure flat table data to date picker?

Drag and drop the `Date Picker` from toolbox at left into design canvas and resize it to your required size.

![](images/datepicker_img2.png)

Keep the selection focus on the dropped date picker widget.

Click on `Assign Data` button in the tool bar.

![](images/datepicker_img3.png)

Now, the `Data` window will be opened with available date fields in `Dimension` from the connected data source.

![](images/datepicker_img4.png)

Drag and drop a date field from `Dimensions` into `Column` section.

![](images/datepicker_img5.png)

To filter out a specific range of dates, click the `Settings` icon in the dropped column and select `Filter(s)...` in the drop down menu. 

![](images/datepicker_img6.png)

![](images/datepicker_img7.png)

Now the `Range Filter` window get displayed. Configure the date range to be filtered out and click `Apply`.

![](images/datepicker_img8.png)

To clear the filter applied, click on `Show All Records` item in the drop down menu.

![](images/datepicker_img9.png)


## How to configure the SSAS data to date picker?

Following steps illustrates configuration of SSAS data to `Date Picker`.

Drag and drop the `Date Picker` from toolbox at left into design canvas and resize it to your required size.

![](images//datepicker_img2.png)

Select the dropped widget using mouse.

Click on `Assign Data` button in the tool bar.

![](images/datepicker_img3.png)

A Data pane will be opened with available date `Dimensions`.

Drag and drop a column under `Dimensions` category into `Column`.

![](images/ssas_datepicker_2.png)

Define filter with specific range of dates by click the Settings icon in the dropped column and select `Filter(s)...` in the drop down menu.

![](images/ssas_datepicker_3.png)


![](images/ssas_datepicker_4.png)

Define the date range in `Range Filter` dialog and click `Apply`.


![](images/ssas_datepicker_5.png)

To show all records again click on `Show All Records`.


## How to configure relative dates to date picker?

Switch to the `Properties` pane; Set the `Selection Type` as `Range`; Switch back to `Data` pane; Click the `Settings` icon in the dropped date column and select `Relative Dates...` in the drop down menu. 

![](images/datepicker_img10.png)

In the launched `Relative Date Options` window, configure the relative date and click `Add`. Repeat the same till the required set of relative dates added.

![](images/datepicker_img11.png)

![](images/datepicker_img12.png)

You can see the added relative dates in date picker like below.

![](images/datepicker_img13.png)




## How to format date picker?



Keep the selection focus on the date picker and Click on `Widget Settings` icon.

![](images/datepicker_img14.png)

The property window will be opened like below.

![](images/datepicker_img15.png)

You can see the list of properties available for the widget with default value.

**General Settings**

![](images/datepicker_img16.png)

**Header**

This allows you to set title for this Date Picker widget.

**Description**

This allows you to set description for this Date Picker widget, whose visibility will be denoted by `i` icon, hovering which will display this description in tooltip.

**Basic Settings**

![](images/datepicker_img17.png)

**Selection Type**

**Single** – Single date can be bounded.

![](images/datepicker_img18.png)

**Range** – A range of dates (two dates) can be bounded.

![](images/datepicker_img19.png)

**Highlight Available Dates**

This allows you to enable the highlighting of available dates in date picker.

**Filter Settings**

![](images/datepicker_img20.png)

**Act as Master Widget**

This allows you to define this date picker widget as a master widget such that its filter action can be made to listen by other widgets in the dashboard.

**Ignore Filter Actions**

This allows you to define this date picker widget to ignore responding to the filter actions applied on other widgets in dashboard.

**Container Settings**

![](images/datepicker_img21.png)

**Title Alignment**

This allows you to handle the alignment of widget title to either left, center or right.

**Title Color**

This allows you to apply text color to the widget title.

**Show Border**

This allows you to toggle the visibility of border surrounding the widget.

**Corner Radius**

This allows you to apply the specified radius to the widget corners. Value can be between 0 and 10.

**Enable Comment**

This allows you to enable/disable comment for dashboard widget. For more details refer [here](/en-us/dashboard-platform/dashboard-designer/compose-dashboard/commenting-dashboard-and-widget)






