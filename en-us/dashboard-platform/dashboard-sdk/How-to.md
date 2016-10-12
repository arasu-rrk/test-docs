---
layout: post
title: How to 
description: How to change data connection string in dashboard at runtime
platform: dashboard-platform
documentation: ug
---

# How to

## Change data connection string in dashboard at runtime

N> This walkthrough is based on Getting Started procedures under Dashboard Platform SDK.

   Changing connecting string on the fly enables you to switch data connection from one server to another server. This can be achieved through `ondemandChangeConnectionString` event API.
  
   *	Event : `ondemandChangeConnectionString`
   *	Input type: `JSON` 

**Subscribing to event**
   
    {% highlight js %}
		$('#dashboard').ejDashboardViewer(
		{
			//Change the connection string in dashboard           
			ondemandChangeConnectionString: 'ChangeConnectionString'
		});
	{% endhighlight %}

**Handling event**
   
A collection of connection strings can be provided to switch between data servers. Following code snippets represent the syntax and example in JSON format.
    
    {% highlight json %}
    {
       "DataSources": [
                  {          
            "Name": "[Name of the data source used in the SYDX file]", 
"ConnectionString": "[New data source connection string]"     
                  },
                  {
             
                  },
                  …
                      ]
    }
    {% endhighlight %}

**Example**    
    
	{% highlight json %}
    {
       "DataSources": [
                  {          
            "Name": "DataSource1", 
"ConnectionString": " Data Source = .;Integrated Security=True; Initial Catalog = NORTHWND"
                  }
                      ]
    }
	{% endhighlight %}


N>  1.The changed connection string should be of same connection type and schema like the one you are preferring to change. i.e., if the data source connection type is Microsoft SQL Server, the changed connection string should have the connection type as Microsoft SQL Server and the database should     have same schema like the existing one. Missing this, will result in error while previewing the dashboard.
N>  
N>  2.If the SYDX contains two or more data sources and you are preferring to change only one of it through specifying the modified connection string like above, the other data sources will assume to represent the existing ones.
    
The connection string change can be handled at two different places,
    
*	At initial rendering of dashboard
*	After dashboard loading

### Change data connection string in dashboard at runtime for ASP.NET/MVC Application

**At initial rendering of dashboard** 
    
Add the following script in `aspx/cshtml` file.
    
	 {% highlight js %}
     <script type="text/javascript">
	 $('#dashboard').ejDashboardViewer(
	    {
        //Change the connection string in dashboard            
        ondemandChangeConnectionString: 'ChangeConnectionString'
        });
        
		// Function calling in script
		function ChangeConnectionString (sender)
		{
			//Input as JSON
			var changestring = {
				"DataSources": [
							{          
						"Name": "Worldwide Car Sales (Random data)", 
			"ConnectionString": " Data Source = .;Integrated Security=True; Initial Catalog = NORTHWND"
							}
								]
			};
			sender.data.modifiedConnectionStrings = JSON.stringify(changestring);
		}
	</script>
	{% endhighlight %}

**After dashboard loading**
    
To handle the connection string change after loading the dashboard, you can make use of event (say button click event) as per the below procedure in `aspx/cshtml` file:
    
Create a button and register the onclick event with the event caller method.
    
Add a script holding the changed connection string, event caller and event handler methods.

Following code snippet illustrates the same:

	 {% highlight js %}
     <html>
		<body>
		//Button creation
		<div style="padding: 4px 4px 0px 7px;height:4%;background-color: #303030 ">
		<input type="button" value="Change Connection String" style="border: none; -ms-border-radius: 3px; border-radius: 3px;padding: 5px 8px 5px 8px;background-color: 	#0080ff; color: #ffffff;font-size: 72%;text-transform: uppercase;" onclick="changeConnectionString()" />
		</div> 
		<div id="dashboard" style="width:100%; height:94%;"></div>

		<script type="text/javascript">
		//Input as JSON
		var changestring = {
		"DataSources": [
				{ 
	 "Name": "Worldwide Car Sales (Random data)",
	 "ConnectionString": "Data Source = .;Integrated Security=True; Initial Catalog = NORTHWND " }
					]
		};

		//Button event calling in script
		function changeConnectionString() {
            var dashboardobj = $('#dashboard').data('ejDashboardViewer');
            dashboardobj.model.ondemandChangeConnectionString = 'ondemandChangeConnectionString';
            dashboardobj.redrawDashboard();
        }

		function ondemandChangeConnectionString(sender) {
            sender.data.modifiedConnectionStrings = JSON.stringify(changestring);
        }
     </script>
     </body>
     </html>
	 {% endhighlight %}

### Change data connection string in dashboard at runtime for Windows Forms/WPF Application
   
**At initial rendering of dashboard**
    
Handle the following procedure in the `GetViewer` method of `DashboardViewer` class to change the connection string on load of dashboard.
    
Include the modified connection string, event caller and event handler methods and frame the HTML string
    
Return the HTML string to generate a page with it and retrieve its URL path to navigate.

Following code illustrates the same.
   
	 
	 {% highlight c# %}
     private string GetViewer(DashboardProperties dashboardProperties)
     {
		 var viewerstr = "$('#dashboard').ejDashboardViewer({
		 //Change the connection string in dashboard            
		 ondemandChangeConnectionString: 'ChangeConnectionString'
		 });
		 //Input as JSON
		 var changeConnectionString = 
		 "{\"DataSources\": [{" +
		 "\"Name\": \"Worldwide Car Sales (Random data)\"," +
		 "\"ConnectionString\": \”Data Source = .;Integrated Security=True; Initial Catalog = NORTHWND"
		 \"+ "}]}";
		 var sb = new StringBuilder();
		 sb.Append("<script type=\"text/javascript\" language=\"javascript\">");
		 sb.Append(viewerstr);

		 // Function calling in script
		 sb.Append("function ChangeConnectionString (sender) {sender.data.modifiedConnectionStrings = JSON.stringify(" + changeConnectionString + ");}");
		 sb.Append("</script>");

		 return sb.ToString();
     }
	 {% endhighlight %}
	 {% highlight vb %}
     Private Function GetViewer(ByVal dashboardProperties As DashboardProperties) As String 
		 If dashboardProperties Is Nothing Then Return String.Empty 
		 End If 
		 Dim viewerstr = "$('#dashboard').ejDashboardViewer({
		 //Change the connection string in dashboard            
		 ondemandChangeConnectionString: 'ChangeConnectionString'
		 });"

		 //Input as JSON

		 Dim changestring = {
		 "DataSources": [
		 { 
		 "Name": "Worldwide Car Sales (Random data)",
		 "ConnectionString": Data Source = .;Integrated Security=True; Initial Catalog = NORTHWND " }
		 ]
		 }
		 Dim sb = New StringBuilder() 
		 sb.Append("<script type=""text/javascript"" language=""javascript"">") 
		 sb.Append(viewerstr)
		 //Function calling in script
		 sb.Append("function ChangeConnectionString(sender) {sender.data.modifiedConnectionStrings = JSON.stringify(" & changeConnectionString & ");}")
		 sb.Append("</script>") 
		 Return sb.ToString() 
     End Function
	 {% endhighlight %}
	 
        
**After dashboard loading**
     
Handle the following procedure in the `GetViewer` method of `DashboardViewer` class to change the connection string on button click at run time.
    
Include the modified connection string, event caller and event handler methods and frame the HTML string
    
Return the HTML string to generate a page with it and retrieve its URL path to navigate.

Following code illustrates the same.

	 
	 {% highlight c# %}
     private string GetViewer(DashboardProperties dashboardProperties)
     {
     //Button creation
     var sb = new StringBuilder();
     sb.Append("<body style=\"width:100%; height:100%;\">");
     sb.Append("<div style=\"padding: 4px 4px 0px 7px;height:4%;background-color: #303030 \">"+
     "<input type=\"button\" value=\"Change Connection String\" style=\"border: none; -ms-border-radius: 3px; border-radius: 3px;padding: 5px 8px 5px 8px;background-color: 	#0080ff; color: #ffffff;font-size: 72%;text-transform: uppercase;\" onclick=\"changeConnectionString()\" />"+
     "</div>"); 
     sb.Append("<div id=\"dashboard\" style=\"width:100%; height:94%;\"></div>");

     //Input as JSON
     var changeConnectionString = "{\"DataSources\": [{" +
                                                  "\"Name\": \"Worldwide Car Sales (Random data)\"," +
                                                  "\"ConnectionString\": \"Data Source = .;Integrated Security=True; Initial Catalog = NORTHWND\"" + "}]}";


     //Button event calling in script
     sb.Append("<script type=\"text/javascript\" language=\"javascript\">");
     sb.Append("function changeConnectionString() {var dashboardobj = $('#dashboard').data('ejDashboardViewer');dashboardobj.model.ondemandChangeConnectionString = 'ondemandChangeConnectionString';dashboardobj.redrawDashboard();}function ondemandChangeConnectionString(sender) {sender.data.modifiedConnectionStrings = JSON.stringify(" + changeConnectionString + ");}");
     sb.Append("</script>");
     sb.Append("</body>");
     return sb.ToString();
     }
	 {% endhighlight %}
	 {% highlight vb %}
     Private Function GetViewer(ByVal dashboardProperties As DashboardProperties) As String
		If dashboardProperties Is Nothing Then
		Return String.Empty

		//Button creation 
		Dim sb = New StringBuilder()
		sb.Append("<body style=""width:100%; height:100%;"">")
		sb.Append("<div style=""padding: 4px 4px 0px 7px;height:4%;background-color: #303030 "">" & "<input type=""button"" value=""Change Connection String"" style=""border: none; -ms-border-radius: 3px; border-radius: 3px;padding: 5px 8px 5px 8px;background-color:     #0080ff; color: #ffffff;font-size: 72%;text-transform: uppercase;"" onclick=""changeConnectionString()"" />" & "</div>")
		sb.Append("<div id=""dashboard"" style=""width:100%; height:94%;""></div>")
		//Input as JSON
		Dim changeConnectionString = "{""DataSources"": [{" & """Name"": ""Worldwide Car Sales (Random data)""," & """ConnectionString"": ""Data Source = .;Integrated Security=True; Initial Catalog = NORTHWND""" & "}]}"
		sb.Append("<script type=""text/javascript"" language=""javascript"">")
		//Button event calling in script 
		sb.Append("function changeConnectionString() {var dashboardobj = $('#dashboard').data('ejDashboardViewer');dashboardobj.model.ondemandChangeConnectionString = 'ondemandChangeConnectionString';dashboardobj.redrawDashboard();}function ondemandChangeConnectionString(sender) {sender.data.modifiedConnectionStrings = JSON.stringify(" & changeConnectionString & ");}")
		sb.Append("</script>")
		sb.Append("</body>")
		Return sb.ToString()
     End Function
	 {% endhighlight %}
	 

### Change data connection string in dashboard at runtime for LightSwitch HTML Application

**At initial rendering of dashboard**

Register a method to an event `ondemandChangeConnectionString` in `Dashboard.lsml.js` file like below.
     
	 {% highlight js %} 
		myapp.dashboard.ScreenContent_render = function (element, contentItem) {
		$('#dashboard').ejDashboardViewer(
		{
			//Change the connection string in dashboard            
			ondemandChangeConnectionString: 'ChangeConnectionString'
		});
		});
     };  
	 {% endhighlight %}
 
Include the modified connection string and the event handler method implementation under `<script>` tag in `Default.html` file like below.
      
	 {% highlight js %}
     <script type="text/javascript">
     //Input as JSON
     var changestring = {
     "DataSources": [
      { "Name": "Worldwide Car Sales (Random data)", "ConnectionString": "Data Source = .;Integrated Security=True; Initial Catalog = NORTHWND" }
     ]
     };
    
     //Function calling in script
     function ChangeConnectionString(sender) {
     sender.data.modifiedConnectionStrings = JSON.stringify(window.changestring);
     }
     </script>
	 {% endhighlight %}

**After dashboard loading**
     
Initialize a button control and register a method to its onclick event `ondemandChangeConnectionString` in `Dashboard.lsml.js` file like below.

	 {% highlight js %}
		myapp.dashboard.ScreenContent_render = function (element, contentItem) {
		//Button creation
		$(element).append('<div style="padding: 4px 4px 0px 7px;height:4%;background-color: #303030 "><button value="Change Connection String" style="border: none; -ms-border-radius: 3px; border-radius: 3px;padding: 5px 8px 5px 8px;background-color: 	#0080ff; color: #ffffff;font-size: 72%;text-transform: uppercase;" onclick="changeConnectionString()" /></div> ');
		$(element).append('<div id="dashboard" style="width:100%; height:94%;"></div>');
		//…. …. …
		};
	 {% endhighlight %}

Include the modified connection string, the event invoker and the event handler method implementation under `<script>` tag in `Default.html` file like below.
    
	 {% highlight js %}
      <script type="text/javascript">
		//Input as JSON
         var changestring = {
		"DataSources": [
		{ "Name": "Worldwide Car Sales (Random data)", "ConnectionString": "Data Source = .;Integrated Security=True; Initial Catalog = NORTHWND" }
		]
		};
    
		//Button event calling in script 
   
		function changeConnectionString() 
		{
			var dashboardobj = $('#dashboard').data('ejDashboardViewer');
			dashboardobj.model.ondemandChangeConnectionString = 'ondemandChangeConnectionString';
			dashboardobj.redrawDashboard();
		}

		function ondemandChangeConnectionString(sender) 
		{
			sender.data.modifiedConnectionStrings = JSON.stringify(window.changestring);
		}
		</script>
	 {% endhighlight %}