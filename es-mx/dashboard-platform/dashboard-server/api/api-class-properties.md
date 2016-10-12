---
layout: post
title: Class and their Properties to work with Dashboard Sever API.
description: To work with Dashboard Server API, these Classes and Properties has to be initialized.
platform: dashboard-platform
documentation: ug
---

# API Class Properties

This section explains what all are the classes and properties that should be defined to work with Syncfusion Dashboard Server API.

## ItemRequest

This class will be defined to post the required values to the Syncfusion Dashboard Server API.

<table>
<thead>
<tr>
  <th align="left">Properties</th>
  <th align="left">Description</th>
</tr>
</thead>
<tbody><tr>
  <td>ItemId</td>
  <td>Unique Identification for an item</td>
</tr>
<tr>
  <td>Name</td>
  <td>Name of the item</td>
</tr>
<tr>
  <td>Description</td>
  <td>Description of the item</td>
</tr>
<tr>
  <td>CategoryId</td>
  <td>CategoryId of the dashboard</td>
</tr>
<tr>
  <td>DoOverWrite</td>
  <td>Do we need to overwrite the existing dashboard/widget</td>
</tr>
<tr>
  <td>ItemContent</td>
  <td>Byte value of physical item</td>
</tr>
<tr>
  <td>UserName</td>
  <td>Username of the user who wants to access the API</td>
</tr>
<tr>
  <td>PassWord</td>
  <td>Password of the user</td>
</tr>
<tr>
  <td>VersionComment</td>
  <td>Comment/description for the new version</td>
</tr>
<tr>
  <td>ItemType</td>
  <td>Type of an item</td>
</tr>
<tr>
  <td>UserId</td>
  <td>UserId which helps to get the user details</td>
</tr>
<tr>
  <td>GroupId</td>
  <td>GroupId used to get the user list</td>
</tr>
<tr>
  <td>EncryptedString</td>
  <td>To get the username and password, the system has to send the encrypted combination of User Id and Machine Id.</td>
</tr>
<tr>
  <td>ReportName</td>
  <td>Contains name of a report</td>
</tr>
<tr>
  <td>ExportTypeId</td>
  <td>Exports dashboards into image file</td>
</tr>
<tr>
  <td>QueryString</td>
  <td>Encrypted querystring of applied filters</td>
</tr>
<tr>
  <td>ItemViewName</td>
  <td>Name of the item view</td>
</tr>
<tr>
  <td>ItemViewId</td>
  <td>Id of the item view</td>
</tr>
<tr>
  <td>FavoriteValue</td>
  <td>To make dashboard as favorite</td>
</tr>
<tr>
  <td>IsPublic</td>
  <td>To make dashboard as visible to everyone</td>
</tr>
</tbody>
</table>

## ItemResponse

This class will be defined to receive the response from the Syncfusion Dashboard Server API endpoint.

<table>
<thead>
<tr>
  <th align="left">Properties</th>
  <th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Status</td>
  <td>Status of current API</td>
</tr>
<tr>
  <td>FileContent</td>
  <td>Bytes values of a physical item</td>
</tr>
<tr>
  <td>ResponseContent</td>
  <td>It holds the content of any anonymous type values.</td>
</tr>
<tr>
  <td>StatusMessage</td>
  <td>Shows success/failure message about particular action</td>
</tr>
<tr>
  <td>ItemName</td>
  <td>Name of an item</td>
</tr>
<tr>
  <td>ItemType</td>
  <td>Type of an item</td>
</tr>
<tr>
  <td>PublishedItemId</td>
  <td>Unique Id of the published item</td>
</tr>
<tr>
  <td>UserList</td>
  <td>Contains the list of user details</td>
</tr>
<tr>
  <td>GroupList</td>
  <td>Contains the list of group details</td>
</tr>
<tr>
  <td>SystemSettingsResponse</td>
  <td>Holds the system settings of Dashboard Server</td>
</tr>
<tr>
  <td>UserDetailResponse</td>
  <td>Contains the user details</td>
</tr>
<tr>
  <td>ItemsView</td>
  <td>Holds the list of the item views </td>
</tr>
<tr>
  <td>ItemViewId</td>
  <td>Id of a item view</td>
</tr>
</tbody>
</table>

## GroupResponse

This class will be defined to receive the response from the Syncfusion Dashboard Server Group API endpoint.

<table>
<thead>
<tr>
  <th align="left">Properties</th>
  <th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Id</td>
  <td>Id of the group</td>
</tr>
<tr>
  <td>ActiveDirectoryGroupId</td>
  <td>Id of an Active Directory group</td>
</tr>
<tr>
  <td>Name</td>
  <td>Name of a group</td>
</tr>
<tr>
  <td>Color</td>
  <td>Color indication of the group</td>
</tr>
<tr>
  <td>Description</td>
  <td>Description of the group</td>
</tr>
<tr>
  <td>CanDelete</td>
  <td>Whether the group has permission to delete</td>
</tr>
<tr>
  <td>Users</td>
  <td>Users present in the group</td>
</tr>
<tr>
  <td>UsersCount</td>
  <td>Users counts of a group</td>
</tr>
<tr>
  <td>IsActiveDirectoryGroup</td>
  <td>Whether the group is import from Active Directory</td>
</tr>
</tbody>
</table>

## ExportType

This class will be defined for ExportType enum values.

<table>
<thead>
<tr>
  <th align="left">Values</th>
  <th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Excel</td>
  <td>Converts SYDX file into excel format</td>
</tr>
<tr>
  <td>HTML</td>
  <td>Converts SYDX file into HTML format</td>
</tr>
<tr>
  <td>PDF</td>
  <td>Converts SYDX file into PDF format</td>
</tr>
<tr>
  <td>Word</td>
  <td>Converts SYDX file into word format</td>
</tr>
<tr>
  <td>Image</td>
  <td>Converts SYDX file into image format</td>
</tr>
</tbody>
</table>

## UserDetailResponse

This class will be defined to receive the response from the Syncfusion Dashboard Server UserDetail API endpoint.

<table>
<thead>
<tr>
  <th align="left">Properties</th>
  <th align="left">Description</th>
</tr>
</thead>
    <tbody>
        <tr>
        <td>Avatar</td>
        <td>Avatar of an user</td>
        </tr>
        <tr>
        <td>ContactNumber</td>
        <td>Contact information of an user</td>
        </tr>
        <tr>
        <td>CreatedDate</td>
        <td>User created date</td>
        </tr>
        <tr>
        <td>Email</td>
        <td>Email of an user</td>
        </tr>
        <tr>
        <td>FirstName</td>
        <td>First name of an user</td>
        </tr>
        <tr>
        <td>LastName</td>
        <td>Last name of an user</td>
        </tr>
        <tr>
        <td>ModifiedDate</td>
        <td>User modified date</td>
        </tr>
        <tr>
        <td>TimeZone</td>
        <td>User's application timezone</td>
        </tr>
        <tr>
        <td>UserId</td>
        <td>Id of an user</td>
        </tr>
        <tr>
        <td>UserName</td>
        <td>Username of the user who wants to access the API</td>
        </tr>
        <tr>
        <td>DisplayName</td>
        <td>This name will be displayed through out the application.</td>
        </tr>
        <tr>
        <td>IsActiveDirectoryUser</td>
        <td>Whether the User imported from Active Directory user</td>
        </tr>
        <tr>
        <td>IsActive</td>
        <td>Shows the status of an user</td>
        </tr>
        <tr>
        <td>Status</td>
        <td>Shows the status of current API</td>
        </tr>
    </tbody>
</table>

## ItemDetail

This class will be defined to receive the response from the Syncfusion Dashboard Server ItemDetail API Endpoint.

<table>
    <thead>
        <tr>
        <th align="left">Properties</th>
        <th align="left">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>CanRead</td>
        <td>Whether the user has permission to read the item.</td>
        </tr>
        <tr>
        <td>CanWrite</td>
        <td>Whether the user has permission to write the item.</td>
        </tr>
        <tr>
        <td>CanDelete</td>
        <td>Whether the user has permission to delete the item.</td>
        </tr>
        <tr>
        <td>CanSchedule</td>
        <td>Whether the user has permission to schedule the item.</td>
        </tr>
        <tr>
        <td>CanOpen</td>
        <td>Whether the user has permission to open/read the item.</td>
        </tr>
        <tr>
        <td>CanMove</td>
        <td>Whether the user has permission to move the item to another category.</td>
        </tr>
        <tr>
        <td>CanCopy</td>
        <td>Whether the user has permission to copy the item to same/another category.</td>
        </tr>
        <tr>
        <td>CanClone</td>
        <td>Whether the user has permission to clone the item to same/another category.</td>
        </tr>
        <tr>
        <td>Id</td>
        <td>Id of an Item</td>
        </tr>
        <tr>
        <td>ItemType</td>
        <td>Type of an Item</td>
        </tr>
        <tr>
        <td>Name</td>
        <td>Name of an Item</td>
        </tr>
        <tr>
        <td>Description</td>
        <td>Description for an Item</td>
        </tr>
        <tr>
        <td>TrimmedDescription</td>
        <td>Description will be trimmed if the length exceeds 40</td>
        </tr>
        <tr>
        <td>CreatedById</td>
        <td>User Id of the Item creator</td>
        </tr>
        <tr>
        <td>CreatedByDisplayName</td>
        <td>Display name of the creator of the Item</td>
        </tr>
        <tr>
        <td>ModifiedById</td>
        <td>User Id of the Item modifier</td>
        </tr>
        <tr>
        <td>ModifiedByFullName</td>
        <td>Fullname of the Modifier</td>
        </tr>
        <tr>
        <td>CategoryId</td>
        <td>Id of the category</td>
        </tr>
        <tr>
        <td>CategoryName</td>
        <td>Name of the category</td>
        </tr>
        <tr>
        <td>CreatedDate</td>
        <td>Created date of item</td>
        </tr>
        <tr>
        <td>ModifiedDate</td>
        <td>Modified date of item</td>
        </tr>
        <tr>
        <td>IsCreatedByActive</td>
        <td>Status of the creator</td>
        </tr>
        <tr>
        <td>IsModifiedByActive</td>
        <td>Status of the modifier</td>
        </tr>
        <tr>
        <td>ItemModifiedDate</td>
        <td>Modified date of the item in string format</td>
        </tr>
        <tr>
        <td>ItemCreatedDate</td>
        <td>Created date of the item in string format</td>
        </tr>
        <tr>
        <td>CloneOf</td>
        <td>CLoned item id of the item</td>
        </tr>
        <tr>
        <td>Extension</td>
        <td>Extension of the item</td>
        </tr>
    </tbody>
</table>

## ItemView

This class will be defined to receive the response from the Syncfusion Dashboard Server ItemView API Endpoint.

<table>
    <thead>
        <tr>
        <th align="left">Properties</th>
        <th align="left">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>UserId</td>
        <td>Id of the user</td>
        </tr>
        <tr>
        <td>ViewId</td>
        <td>Id of the item view</td>
        </tr>
        <tr>
        <td>ItemName</td>
        <td>Name of the item</td>
        </tr>
        <tr>
        <td>CategoryName</td>
        <td>Name of the category</td>
        </tr>
        <tr>
        <td>ItemId</td>
        <td>Id of the item</td>
        </tr>
        <tr>
        <td>ViewName</td>
        <td>Name of the item view</td>
        </tr>
        <tr>
        <td>QueryString</td>
        <td>Querystring of the filter</td>
        </tr>
        <tr>
        <td>CanEdit</td>
        <td>Whether the user has Edit permission</td>
        </tr>
        <tr>
        <td>CanDelete</td>
        <td>Whether the user has Delete permission</td>
        </tr>
        <tr>
        <td>CanShare</td>
        <td>Whether the user has Share permission</td>
        </tr>
        <tr>
        <td>IsActive</td>
        <td>Status of the Item view</td>
        </tr>
    </tbody>
</tr>
</table>

## EntityData<T>

This class will be defined to receive the response with the EntityData in runtime data type.

<table>
<thead>
<tr>
  <th align="left">Properties</th>
  <th align="left">Description</th>
</tr>
</thead>
    <tbody>
        <tr>
        <td>result</td>
        <td>Holds the list of data in anonymous data type</td>
        </tr>
        <tr>
        <td>count</td>
        <td>It denotes Result count</td>
        </tr>
    </tbody>
</tr>
</table>

## ItemType

This class will be defined to the item type Enum values.

<table>
<thead>
<tr>
  <th align="left">Values</th>
  <th align="left">Description</th>
</tr>
</thead>
    <tbody>
        <tr>
        <td>Category</td>
        <td>Category Type</td>
        </tr>
        <tr>
        <td>Dashboard</td>
        <td>Dashboard Type</td>
        </tr>
        <tr>
        <td>Report</td>
        <td>Report Type</td>
        </tr>
        <tr>
        <td>Datasource</td>
        <td>Datasource Type</td>
        </tr>
        <tr>
        <td>Dataset</td>
        <td>Dataset Type</td>
        </tr>
        <tr>
        <td>File</td>
        <td>File Type</td>
        </tr>
        <tr>
        <td>Schedule</td>
        <td>Schedule Type</td>
        </tr>
        <tr>
        <td>Widget</td>
        <td>Widget Type</td>
        </tr>
    </tbody>
</tr>
</table>

## ApiResponse

This class will be defined to get the Response of the Syncfusion Dashboard Server API.

<table>
    <thead>
        <tr>
        <th align="left">Properties</th>
        <th align="left">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>ApiStatus</td>
        <td>Status of the API Endpoint</td>
        </tr>
         <tr>
        <td>Data</td>
        <td>Data to be sent by the API Endpoint</td>
        </tr>
    </tbody>
</tr>
</table>

## SystemSettingsResponse

This class will be defined to get the system settings details from Syncfusion Dashboard Server API Endpoint.

<table>
    <thead>
        <tr>
        <th align="left">Properties</th>
        <th align="left">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>DateFormat</td>
        <td>Format of the displayed date</td>
        </tr>
        <tr>
        <td>FavIcon</td>
        <td>Byte value of the uploaded favicon image</td>
        </tr>
        <tr>
        <td>LoginLogo</td>
        <td>Byte value of the uploaded Login logo </td>
        </tr>
        <tr>
        <td>MainScreenLogo</td>
        <td>Byte value of the uploaded Main screen logo</td>
        </tr>
        <tr>
        <td>OrganizationName</td>
        <td>Name of the Organization</td>
        </tr>
        <tr>
        <td>TimeZone</td>
        <td>Timezone of the application</td>
        </tr>
        <tr>
        <td>WelcomeNoteText</td>
        <td>Welcome text displayed on login page.</td>
        </tr>
    </tbody>
</tr>
</table>