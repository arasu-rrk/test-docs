---
layout: post
title: Managing categories in the Syncfusion Dashboard Server.
description: Learn how to open, add, update, share and delete categories in the Syncfusion Dashboard Server.
platform: dashboard-platform
documentation: ug
---

# Manage Categories

This section explains on how to open, add, update, share and delete categories in the Syncfusion Dashboard Server.

Categories are used to group and manage the dashboards. Categories that are accessible by the user depends upon the user's permission and the categories whose dashboards the user has access are displayed in the left panel in the dashboards page.

![Manage Categories](images/manage-categories.png)

## Open Category
Click on any category in the left panel to view the dashboards grouped with it.

![Open Categories](images/category-open.png)  

## Add Category
To add a new category you must have `Create All Categories` permission. Click on the `Create` button in the menu and select `Category` to create a category.

![Create Category](images/create-category.png)

New categories can be added by providing name and description(optional) for the category.
 
![Add Category](images/add-category.png)

Fill the form with name, description and click on `Add`.

N> `Read Write Delete` permission for that `Specific Category` will be added for the user who created the category.

## Update Category

Category can be updated from the context menu with its name and description.

![Update Category](images/update-category.png)

## Share Category

This section explains on how to share categories with the other users in the Dashboard Server. 

### Steps to share a category

1. Click the `Actions` button in the category list context menu and select `Manage Permissions` option.

	![Manage Permission](images/manage-permission-context-category.png)

2. Select the permission access from the `Select Access` dropdown and select the users or groups to share the category.
  
	![Share category](images/share-category.png)
	
3. After selecting the access and users or groups, click on the `Add Permission` button.

	![Add Permission](images/add-permission-category.png)
	
N> Only the user who created the category can share the category with other Dashboard Server users.

### View Permission

If the user is not an owner of the category, user can view the assigned permissions of the category by clicking the `View Permissions` option in the category list context menu.

![View Permission Context](images/view-permission-context-category.png)

The permission availed to the users can be viewed in the `Users` tab.

![View User Permission](images/view-permission-category.png)

The permission availed to the groups can be viewed in the `Groups` tab.

![View Group Permission](images/view-permission-group-category.png)

### Remove Permission

The user who created the category can remove the shared category permissions using the `Remove` option in the `Actions` column of the each permissions.

![Remove Permission](images/remove-permission-category.png)

## Delete Category
Category can also be deleted from the Dashboard Server when they are no longer required.

Click on delete in the context menu for the category to be deleted.

![Delete Category](images/delete-category.png)

N> Category cannot be deleted when it has dashboards grouped in it.