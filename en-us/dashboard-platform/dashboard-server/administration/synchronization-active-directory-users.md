---
layout: post
title: Synchronize Active Directory users in the Syncfusion Dashboard Server.
description: Learn how to synchronize the Active Directory users with the updated user properties in the Syncfusion Dashboard Server.
platform: dashboard-platform
documentation: ug
---

## Active Directory User Synchronization

This section explains how to synchronize the imported Active Directory users details with the Active Directory.

You can navigate to the user synchronization page from users page as shown in the below figure.

![Active Directory Synchronization Link](images/user-synchronisation-navigation-button.png)

## Synchronize Users

Dashboard Server will list the Active Directory users that are already imported as shown in the below figure.

![Active Directory Imported user list](images/imported-user-list.png)

Choose the groups you want to synchronize and click on `Synchronize` at the top. 

![Synchronize button](images/Synchronize-button.png)

###Synchronization procedure

* Dashboard Server will synchronize the user details - username, first name, last name, email address, contact number with the Active Directory Server.

* Dashboard Server will delete the user if the user has deleted from the Active Directory Server. 

After synchronization completes, the number of users modified, deleted, duplicated will be shown in the success message box as shown in the below figure.

![Synchronization confirmation window](images/Synchronization-Confirmation-window.png)

## Duplicate Users

Active Directory users who has the same username or email address as that of the Dashboard Server users(who are already present) will be marked as duplicate users and will not be allowed to synchronize into Active Directory.

![Display Duplicated users](images/display-duplicate-message.png)