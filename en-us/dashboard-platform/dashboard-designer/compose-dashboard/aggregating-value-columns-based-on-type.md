---
layout: post
title: Aggregating Value Columns Based on Type with Syncfusion Dashboard Designer
description: How to aggregate value columns based on type with Syncfusion Dashboard Designer
platform: dashboard-platform
documentation: ug
---

# Aggregating Value Columns Based on Type

Each of the value column configured to widget, can be aggregated individually based on the type you define. Following table illustrates the aggregation types and their use.

<table>
<tr>
<td>
<b>Aggregation Type</b></td><td>
<b>Result</b></td></tr>
<tr>
<td>
Sum</td><td>
Calculates the sum of values of all members.</td></tr>
<tr>
<td>
Count</td><td>
Returns the count of all members.</td></tr>
<tr>
<td>
Average</td><td>
Calculates the average of values of all members.</td></tr>
<tr>
<td>
Max</td><td>
Returns the highest value for all members.</td></tr>
<tr>
<td>
Min</td><td>
Returns the lowest value for all members.</td></tr>
<tr>
<td>
StdDev</td><td>
Calculates the standard deviation of all members.</td></tr>
<tr>
<td>
Var</td><td>
Calculates the variance of all members.</td></tr>
<tr>
<td>
DistinctCount</td><td>
Returns the distinct count of all members.</td></tr>
<tr>
<td>
Weighted Score</td><td>
Calculates the weighted average of all members based on another column defined.</td></tr>
</table>

N> SSAS data source don’t have this option enabled for value columns as these columns were pre-aggregated in cube itself.



