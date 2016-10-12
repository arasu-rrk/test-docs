---
layout: post
title: System Requirements that are needed to deploy Syncfusion Dashboard Platform.
description: Learn what are the system Requirements to deploy Syncfusion Dashboard Platform in your machine.
platform: dashboard-platform
documentation: ug
---

# System Requirements

This section explains the system requirements to run Syncfusion Dashboard Server, Dashboard Designer and Dashboard Platform SDK. 

## Dashboard Server

### Hardware Requirements

The following hardware requirements are necessary to run the Dashboard Server:

 * 1 GHz or faster, 32bit or 64 bit processor
 * 1 GB RAM for 32 bit or 2 GB RAM for 64 bit
 * 300 MB Hard Disk space (Installation files)

### Software Requirements

The following software requirements are necessary to run the Dashboard Server:

* Windows Client OS 7+ \| Windows Server OS 2008 R2+
* [Microsoft .NET Framework 4.5](https://www.microsoft.com/en-in/download/details.aspx?id=30653)
* Microsoft SQL Server 2005+ \| Azure SQL Database \| Oracle \| MySQL
* [Internet Information Services (IIS) 7.0+](https://en.wikipedia.org/wiki/Internet_Information_Services) \| [Microsoft Azure](https://azure.microsoft.com/en-in/documentation/articles/app-service-value-prop-what-is)
* [SMTP Mail Server](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) (Check [Email Settings](/en-us/dashboard-platform/dashboard-server/site-settings/email-settings) for more details)

### Supported Operating Systems

* Windows 7+
* Windows Server 2008 R2

### Browser Compatibility

* IE 9+
* Microsoft Edge
* Mozilla Firefox 22+
* Chrome 17+
* Opera 12+
* Safari 5+

## Dashboard Designer

### Hardware Requirements
     
The following minimum hardware requirements are necessary to run the Syncfusion Dashboard Designer:
	 
* Processor - Dual Core 32-bit CPU (x86)
* Hard disk - 2 GB
* RAM - 2 GB

### Software Requirements

The following minimum software requirements are necessary to run the Syncfusion Dashboard Designer:

* Operating System - Windows 7, 8+, Windows Server 2012+ 
* [Microsoft .NET Framework 4.5](https://www.microsoft.com/en-in/download/details.aspx?id=30653)
* IIS Express
* Browser - Internet Explorer 9+, Microsoft Edge, Mozilla Firefox 22+, Chrome 17+, Opera 12+, Safari 5+
     
The following minimum software requirements are necessary in a data server (can be local or remote) for respective server connection types:

* `Microsoft SQL Server` - Microsoft SQL Server 2012+
* `Microsoft SQL Server Analysis Services` - Microsoft SQL Server 2012+
* `PostgreSQL` – PostgreSQL Server 9.x+
* `Spark SQL` - [Syncfusion Big Data Cluster Manager](https://www.syncfusion.com/downloads/bigdata) (Spark Server should be started through Service Manager after installation. It will be running on port 10001 by default.) 
* `Hive` - [Syncfusion Big Data Cluster Manager](https://www.syncfusion.com/downloads/bigdata) (Hive Server should be started through Service Manager after installation. It will be running on port 10000 by default.) 
* `SQL through ODBC Connection` - SQL Native Client or SQL Server Native Client 10.0 ( Any one of the these drivers need to be installed and database need to be setup as discussed [here](/en-us/dashboard-platform/dashboard-designer/connecting-to-data/connecting-to-data#setting-up-an-odbc-enabled-sql-server-database)).             
* `MSSQL through ODBC Connection` -  MySQL ODBC 5.3 Unicode Driver (The driver need to be installed and database need to be setup as discussed [here](/en-us/dashboard-platform/dashboard-designer/connecting-to-data/connecting-to-data#setting-up-an-odbc-enabled-mysql-database)).                 
* `ODBC Connection through ORACLE` - Microsoft ODBC for Oracle or  Oracle in OraClient 11g_home1 (Any one of the these drivers need to be installed and database need to be setup as discussed [here](/en-us/dashboard-platform/dashboard-designer/connecting-to-data/connecting-to-data#setting-up-an-odbc-enabled-oracle-database)).
          
## Dashboard Platform SDK

### Hardware Requirements
     
The following minimum hardware requirements are necessary to run the Syncfusion Dashboard Platform SDK:
	 
* Processor - Dual Core 32-bit CPU (x86)
* Hard disk - 2 GB
* RAM - 2 GB
	 
### Software Requirements

The following minimum software requirements are necessary to run the Syncfusion Dashboard Platform SDK:

* Operating System - Windows 7, 8+
* Microsoft Visual Studio 2012 or later
* IIS Express
* Browser - Internet Explorer 9+, Microsoft Edge, Mozilla Firefox 22+, Chrome 17+, Opera 12+, Safari 5+
	 
The following minimum software requirements are necessary in a data server (can be local or remote) for respective server connection types:

* `Microsoft SQL Server` - Microsoft SQL Server 2012+
* `Microsoft SQL Server Analysis Services` - Microsoft SQL Server 2012+
* `PostgreSQL` – PostgreSQL Server 9.x+
* `Spark SQL` - [Syncfusion Big Data Cluster Manager](https://www.syncfusion.com/downloads/bigdata) (Spark Server should be started through Service Manager after installation. It will be running on port 10001 by default.) 
* `Hive` - [Syncfusion Big Data Cluster Manager](https://www.syncfusion.com/downloads/bigdata) (Hive Server should be started through Service Manager after installation. It will be running on port 10000 by default.) 
* `SQL through ODBC Connection` - SQL Native Client or SQL Server Native Client 10.0 ( Any one of the these drivers need to be installed and database need to be setup as discussed [here](/en-us/dashboard-platform/dashboard-designer/connecting-to-data/connecting-to-data#setting-up-an-odbc-enabled-sql-server-database)).             
* `MSSQL through ODBC Connection` -  MySQL ODBC 5.3 Unicode Driver (The driver need to be installed and database need to be setup as discussed [here](/en-us/dashboard-platform/dashboard-designer/connecting-to-data/connecting-to-data#setting-up-an-odbc-enabled-mysql-database)).                 
* `ODBC Connection through ORACLE` - Microsoft ODBC for Oracle or  Oracle in OraClient 11g_home1 (Any one of the these drivers need to be installed and database need to be setup as discussed [here](/en-us/dashboard-platform/dashboard-designer/connecting-to-data/connecting-to-data#setting-up-an-odbc-enabled-oracle-database)).

                     
	 
## Dashboard Data Agent

### Hardware Requirements

The following minimum hardware requirements are necessary to run the Syncfusion Dashboard Data Agent:

* Processor - Dual Core 32-bit CPU (x86) (depends upon the data)
* Hard disk - 2 GB (depends upon the data)
* RAM - 4 GB (minimum)

### Software Requirements

The following minimum software requirement is necessary to run the Syncfusion Dashboard Data Agent:

* Microsoft SQL Server 2012+ 
