---
layout: post
title: Configuring Data Filters with Syncfusion Dashboard Designer
description: How to configure a data filters with Syncfusion Dashboard Designer
platform: dashboard-platform
documentation: ug
---

# Data filters 

## Configuring Data Filters

  Data Filters can be configured to restrict records visibility based on defined criteria. The configuration can be done by adding and deleting a filter condition.
  
### Adding a filter condition

   Add a filter condition through clicking the `Add` button in the `Filters` window.

   ![](images/filterswizard.png)

   Now, a filter condition will get added by default like below:

   ![](images/filtercondition.png)

   Modify the condition as you require and define criteria. The condition can be defined based on the column. Based on its data type, the parameters to define will differ.

   ![](images/conditionbasedoncolumn.png)

   With the date time type or text type column like above, you may get a toggle button TOP ‘N’ at right, to enable the Top `N` filter to configure the field and the condition by which it has to be applied.

   ![](images/selecttype.png)

   ![](images/selectaggregationtype.png)

   For numeric type column, the parameters will be like below:

   ![](images/numerictype.png)

   ![](images/selectoperators.png)

   For date time type column, the parameters will be like below:

   ![](images/datetimetypefilter.png)

   ![](images/selectdatetimetype.png)

   ![](images/selectcheckall.png)

   ![](images/datetimeoptions.png)

   Add more than one condition if you prefer, through clicking the `Add` button.

   ![](images/selectedfilterscondition.png)

   By default, AND operation will be handled in between two conditions. However, you may change it to any of the below:

   ![](images/logicaloperators.png)

   However, this operation cannot be changed, when you have the TOP `N` option enabled like below:

   ![](images/andoperation.png)

   Click `Update` to save the defined data filter conditions.

   Click `Close` button or the Close icon at top right corner of the window to close the Filters window.
   
### Deleting a filter condition

   You can remove a filter condition by clicking the close icon (highlighted below) at left of the respective filter condition.

   ![](images/deletefiltercondition.png)

## Configuring Data Filters for SSAS Data source

N> Currently, Data filters for SSAS data source can be defined only through string type columns.

![](images/ssasinitialfilterwindow.png)
 
### Adding a filter condition
Expand the dimension and drop and drop a hierarchy or level to the right area to `add` a filter condition. 
 
![](images/ssasinitialfilteraddfilter.png)

Add more than one filter condition if you prefer, through drag and drop.

![](images/ssasinitialfilteraddmultifilter.png)
 
By default, `AND` operation will be handled in between two conditions as other connection. However, you may change it to any of the below:
 
![](images/ssasinitialfilterjoincondition.png)

### Removing a filter condition
You can remove a filter condition by clicking the close icon at left of the respective filter condition.

![](images/ssasinitialfilterremovefilter.png)
 


