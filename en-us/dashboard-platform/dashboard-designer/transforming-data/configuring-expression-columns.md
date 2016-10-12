---
layout: post
title: Configuring Expression Columns with Syncfusion Dashboard Designer
description: How to configure expression columns with Syncfusion Dashboard Designer
platform: dashboard-platform
documentation: ug
---

# Configuring Expression Columns

  An expression column is used to create an expression which is a combination of data columns, operators and built-in functions. This expression column will act as a calculated measure that can be configured to widget like other normal numeric columns as a quantitative measure.

## Adding an Expression Column

   An expression field can be added either through the `Settings` menu with certain built-in functions based on the respective column or through the expression designer.

   N> Adding expression column through the Settings menu in table design view is not supported for SSAS data source currently.

   **Using Date Expressions**

   ![](images/selectdateexpression.png)

   **Using Aggregation Functions**

   ![](images/selectaggregationfunctions.png)

   **Using Arithmetic Function**

   ![](images/selectarithmeticfunction.png)

   Expression Designer can be launched either through the tools pane in the data design view highlighted below:

   ![](images/clickexpressionicon.png)

   Or through the `Expression Columns` container in Widget View highlighted below:

   ![](images/clickexpressioneditor.png)

   Click `Add` in the `Expression Designer` window to add a new expression column.

   ![](images/expressiondesignerwizard.png)

   Enter a suitable name for the expression in the `Name` text area. By default, it will be Expression1.

   ![](images/addexpression.png)

   Enter the expression that you like to define in the Expression text area. The syntax for defining a simple expression is,

   `{function name(}[columnname]{operator[columnname]…}`

   Where, content within curly braces is optional.

   Some expressions for reference:

   1)	YEAR([Order Date]) – To compute year of order date.

   2)	COUNTD([EmployeeID]) – To compute distinct count of employees.

   3)	[Freight]+100 – To compute the total with 100 added to Freight.

   N> Currently, SSAS data source supports only functions existing under Numbers category.

   Following built-in functions are supported in Expression Designer.

   <table>
   <tr>
   <th>Category</th>
   <th>Functions</th>
   <th>Syntax & Descriptions</th>
   </tr>
   <td>Numbers</td>
   <td>ABS</td>
   <td><ul style="list-style-type:none"><b>Syntax:</b></br>
   ABS(numeric_expression)</br>
   <b>Description:</b></br>
   Returns the absolute value of the given expression.</br></ul>
   </td>
   <tr>
   <td>Numbers</td>
   <td>ACOS</td>
   <td><ul style="list-style-type:none"><b>Syntax:</b></br>
   ACOS(numeric_expression)</br>
   <b>Description:</b></br>
   Returns the inverse cosine (also known as arccosine) of the given numeric expression.</br></ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>ASIN</td>
   <td><ul style="list-style-type:none"><b>Syntax:</b></br>
   ASIN(numeric_expression)</br>
   <b>Description:</b></br>
   Returns the inverse sine (also known as arcsine) of the given numeric expression.</br></ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>ATAN</td>
   <td><ul style="list-style-type:none"><b>Syntax:</b></br>
   ATAN(numeric_expression)</br>
   <b>Description:</b></br>
   Returns the inverse tangent (also known as arctangent) of the given numeric expression.</br></ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>COS</td>
   <td><ul style="list-style-type:none"><b>Syntax:</b></br>
   COS(numeric_expression)</br>
   <b>Description:</b></br>
   Returns the cosine of the angle specified in radians, in the given expression.</br></ul>
   </td>
   </tr>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>DEGREES</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> DEGREES(numeric_expression)</br>
   <b>Description:</b></br> Returns the angle in degrees for the one specified in radians, in the given numeric expression.
   </br></ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>EXP</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> EXP(numeric_expression)</br>
   <b>Description:</b></br> Returns the exponential value of the given expression.
   </br></ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>LOG</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> LOG(numeric_expression)</br>
   <b>Description:</b></br> Returns the logarithm of the given expression to the specified base.
   </br></ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>PI</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> PI()</br>
   <b>Description:</b></br> Returns the constant value of PI.</br></ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>POWER</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> POWER(expression1, expression2)</br>
   <b>Description:</b></br> Returns the value of the given expression (expression1) to the specified power (expression2).</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>RADIANS</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> ROUND(numeric_expression)</br>
   <b>Description:</b></br> Returns a rounded value.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>SIGN</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> SIGN(numeric_expression)</br>
   <b>Description:</b></br> Returns a value representing the positive (+1), zero (0), or negative (-1) sign of the given numeric expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>SIN</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> SIN(numeric_expression)</br>
   <b>Description:</b></br> Returns the sine of the angle specified in radians, in the given expression.</br></ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>SQRT</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> SQRT(numeric_expression)</br>
   <b>Description:</b></br> Returns the square root of the given numeric expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>Numbers</td>
   <td>TAN</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> TAN(numeric_expression)</br>
   <b>Description:</b></br> Returns the tangent of the given numeric expression.</br></ul>
   </td>
   </tr>
   <tr>
   <td>Aggregation</td>
   <td>AVG</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> AVG(numeric_expression)</br>
   <b>Description:</b></br> Returns the average of the values in the given expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>Aggregation</td>
   <td>COUNT</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> COUNT(numeric_expression)</br>
   <b>Description:</b></br> Returns the number of items in the given expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>Aggregation</td>
   <td>COUNTD</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> COUNTD(numeric_expression)</br>
   <b>Description:</b></br> Returns the distinct number of items in the given expression.
   </br></ul>
   </td>
   </tr>
   <tr>
   <td>Aggregation</td>
   <td>MAX</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> MAX(numeric_expression)</br>
   <b>Description:</b></br> Returns the maximum value in the given expression.</br>
   </br></ul>
   </td>
   </tr>
   <tr>
   <td>Aggregation</td>
   <td>MIN</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> MIN(numeric_expression)</br>
   <b>Description:</b></br> Returns the minimum value in the given expression.</br></ul>
   </td>
   </tr>
   <tr>
   <td>Aggregation</td>
   <td>STDEV</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> STDEV(numeric_expression)</br>
   <b>Description:</b></br> Returns the standard deviation of values in the given expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>Aggregation</td>
   <td>SUM</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> SUM(numeric_expression)</br>
   <b>Description:</b></br> Returns the sum of values in the given expression.</br></ul>
   </td>
   </tr>
   <tr>
   <td>Aggregation</td>
   <td>VAR</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> VAR(numeric_expression)</br>
   <b>Description:</b></br> Returns the variance of values in the given expression.</br> </ul>
   </td>
   </tr>
   <tr>
   <td>Conditional</td>
   <td>IF</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> IF(expression, true_part, false_part)</br>
   <b>Description:</b></br> Returns either true part or false part, depending on the evaluation of the expression.</br>
   </ul> 
   </td>
   </tr>
   <tr>
   <td>Conditional</td>
   <td>ISNULL</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> ISNULL(expression)</br>
   <b>Description:</b></br> Returns true if the given expression evaluates to null.</br></ul>
   </td>
   </tr>
   <tr>
   <td>Logical</td>
   <td>AND</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> (expression1) AND (expression2)</br>
   <b>Description:</b></br> Returns true if both the expressions evaluates to true.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>Logical</td>
   <td>NOT</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> NOT(expression)</br>
   <b>Description:</b></br> Returns the reversed logical value of the expression being evaluated.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>Logical</td>
   <td>OR</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> (expression1) OR (expression2)</br>
   <b>Description:</b></br> Returns true if any of the expressions evaluates to true.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>DATEADD</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> DATEADD(numeric_expression, date_expression)</br>
   <b>Description:</b></br> Adds the number of days to the specified date.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>DATESUB</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> DATESUB(numeric_expression, date_expression)</br>
   <b>Description:</b></br> Returns the date subtracted from the specified date.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>DAY</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> DAY(date_expression)</br>
   <b>Description:</b></br> Returns a numeric value representing the day part of the specified date.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>DAYDIFF</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> DAYDIFF(start_date_expression, end_date_expression)</br>
   <b>Description:</b></br> Returns a numeric value representing the difference between two specified dates.</br></ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>HOUR</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> HOUR(date_expression)</br>
   <b>Description:</b></br> Returns the hour of the given date as an integer.</br></ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>MINUTE</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> MINUTE(date_expression)</br>
   <b>Description:</b></br> Returns a numeric value representing the minute part of the date resulted from specified date expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>MONTH</td>
   <td><ul style="list-style-type:none"> 
   <b>Syntax:</b></br> MONTH(date_expression)</br>
   <b>Description:</b></br> Returns a numeric value representing the month part of the date resulted from specified date expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>NOW</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> NOW()</br>
   <b>Description:</b></br> Returns the current date and time.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>TODAY</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> TODAY()</br>
   <b>Description:</b></br> Returns the current date.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>YEAR</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> YEAR(date_expression)</br>
   <b>Description:</b></br> Returns a numeric value representing the year part of the date resulting from the specified date expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>DATENAME</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> DATENAME(date_part, date_expression)</br>
   <b>Description:</b></br> Returns a string representing the specified date_part of the given date expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>DATEPART</td>
   <td><ul style="list-style-type:none"> 
   <b>Syntax:</b></br> DATEPART(date_part, date_expression)</br>
   <b>Description:</b></br> Returns an integer value representing the specified date_part of the given date expression.</br></ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>MAX</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> MAX(expression)</br>
   <b>Description:</b></br> Returns the maximum value in the given expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>Date</td>
   <td>MIN</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> MIN(expression)</br>
   <b>Description:</b></br> Returns the minimum value in the given expression.</br>  
   </ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>LEN</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> LEN(string_expression)</br>
   <b>Description:</b></br> Returns the number of characters in the given string expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>CHAR</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> CHAR(integer_expression)</br>
   <b>Description:</b></br> Converts the given integer ASCII code into a character.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>CONCAT</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> CONCAT(string_expression1, string_expression2,…, string_expressionN)</br>
   <b>Description:</b></br> Returns a string value resulting from the concatenation of two or more string values.</br> 
   </ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>CONTAINS</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> CONTAINS(string_expression, substring_expression)</br>
   <b>Description:</b></br> Returns true if the given string expression contains the specified substring expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>ENDSWITH</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> ENDSWITH(string_expression substring_expression)</br>
   <b>Description:</b></br> Returns true if the given string expression ends with the specified substring expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>LEFT</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> LEFT(string_expression, numeric_expression)</br>
   <b>Description:</b></br> Returns the specified number of characters from start of the given string expression.</br></ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>LOWER</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> LOWER(string_expression)</br>
   <b>Description:</b></br> Returns a lower case converted string value from a given string expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>LTRIM</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> LTRIM(string_expression)</br>
   <b>Description:</b></br> Returns the string value with any leading blanks removed from string expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>MAX</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> MAX(expression)</br>
   <b>Description:</b></br> Returns the maximum value in the given expression.
   </br></ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>MIN</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> MIN(expression)</br>
   <b>Description:</b></br> Returns the minimum value in the given expression.
   </br></ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>RIGHT</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> RIGHT(string_expression, numeric_expression)</br>
   <b>Description:</b></br> Returns the specified number of characters from end of the given string expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>RTRIM</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> RTRIM(string_expression)</br>
   <b>Description:</b></br> Returns the string value with any trailing blanks removed from string expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>STARTSWITH</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> STARTSWITH(string_expression, substring_expression)</br>
   <b>Description:</b></br> Returns true if the given string expression starts with the specified substring expression.</br>
   </ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>SUBSTR</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> SUBSTR(string_expression, starting_index, length_of_the_string)</br>
   <b>Description:</b></br> Returns a specific length of string starting from specific index from the given string expression.
   </br></ul>
   </td>
   </tr>
   <tr>
   <td>String</td>
   <td>UPPER</td>
   <td><ul style="list-style-type:none">
   <b>Syntax:</b></br> UPPER(string_expression)</br>
   <b>Description:</b></br> Returns an upper case converted string value from a given string expression.</br></ul>
   </td>
   </tr>
   </table>

   You may also include the function names and the column names just by placing the cursor in respective position in the `Expression` text area and double-clicking the specific name in respective lists.

   Once framing an expression, click `Save` in Expression Designer window.
   
## Deleting an Expression Column

   Select an expression column in left pane.

   Click `Delete` to remove the selected expression column.

   ![](images/deleteicon.png)
   
## Updating an Expression Column

   Select an expression column in left pane that you need to update.

   Edit the Name and Expression text areas, if required.

   Click `Save` in Expression Designer window to save the modifications handled.