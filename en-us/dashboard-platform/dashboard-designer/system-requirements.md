---
layout: post
title: System Requirements of Syncfusion Dashboard Designer
description: Describes about the system requirements of Syncfusion Dashboard Designer
platform: dashboard-platform
documentation: ug
---

# System Requirements

This section discusses about the system requirements that Syncfusion Dashboard Designer require to install and run.

<table>
<tr>
<td>
<b>Operating System</b></td><td>
<li style="list-style-type:none">Windows 7, 8+</li>
<li style="list-style-type:none">Windows Server 2012+ </li>
</td></tr>
<tr>
<td>
<b>Processor</b></td><td>
Dual Core 32-bit CPU (x86)</td></tr>
<tr>
<td>
<b>Disk Space</b></td><td>
2 GB (to install and run)</td></tr>
<tr>
<td>
<b>Memory</b></td><td>
4 GB (minimum)</td></tr>
<tr>
<td>
<b>Framework</b></td><td>
.NET 4.5</td></tr>
<tr>
<td>
<b>IIS</b></td><td>
IIS Express</td></tr>
<tr>
<td>
<b>Browser</b></td><td>
<li style="list-style-type:none">IE 9+</li>
<li style="list-style-type:none">Microsoft Edge</li>
<li style="list-style-type:none">Mozilla Firefox 22+</li>
<li style="list-style-type:none">Chrome 17+</li>
<li style="list-style-type:none">Opera 12+</li>
<li style="list-style-type:none">Safari 5+</li>
</td></tr>
</table>

A data server, an optional one which can be either the local machine itself or a remote machine(can be a server), is required to persist the databases either SQL or tables in HDFS to which connection can be established from Dashboard Designer through the data connection types Microsoft SQL Server and Spark SQL respectively.

<table>

<tr>
<th>Connection Type</th>
<th>Prerequisite (for machine that act as data server)</th>
</tr>
<tr>
<td>Microsoft SQL Server</td>
<td>Microsoft SQL Server 2012+</td>
</tr>

<tr>
<td>Microsoft SQL Server Analysis Services </td>
<td> Microsoft SQL Server 2012+</td>
</tr>

<tr>
<td>PostgreSQL</td>
<td>PostgreSQL 9.x+</td>
</tr>

<tr>
<td>Spark SQL</td>
<td>Syncfusion Big Data Cluster Manager (Spark Server should be started through Service Manager after installation. Its service will be running on port 10001 by default.)</td>
</tr>


<tr>
<td>Hive</td>
<td>Syncfusion Big Data Cluster Manager (Hive Server should be started through Service Manager after installation. Its service will be running on port 10000 by default.)</td>
</tr>

<tr>
<td>ODBC Connection</td>
<td>For SQL, any one of the following drivers need to be installed and database need to be setup as discussed  {{ '[here](/en-us/dashboard-platform/dashboard-designer/connecting-to-data/connecting-to-data#setting-up-an-odbc-enabled-sql-server-database)' | markdownify }}
 
<li>SQL Native Client </li>
<li>SQL Server Native Client 10.0</li>
<br></br>
For MySQL, the following driver need to be installed and database need to be setup as discussed {{ '[here](/en-us/dashboard-platform/dashboard-designer/connecting-to-data/connecting-to-data#setting-up-an-odbc-enabled-mysql-database)' | markdownify }}
<li>MySQL ODBC 5.3 Unicode Driver</li>
<br></br>
For Oracle, any one of the following drivers need to be installed and database need to be setup as discussed {{ '[here](/en-us/dashboard-platform/dashboard-designer/connecting-to-data/connecting-to-data#setting-up-an-odbc-enabled-oracle-database)' | markdownify }}
<li>Microsoft ODBC for Oracle</li>
<li>Oracle in OraClient 11g_home1</li>
<br></br>
</td>
</tr>


</table>



 
 