# Modular AngularJS 

 We have two types of modules:

1. AMD modules (require.js)
	* loading files
	* hard to unit test


2. AngularJS modules

	* can't load
	* perferctly to unit test, because AngularJS is driven "Dependency Injections" (Inversion of Control)
	* (in our case: DI == IoC)



AngularJS fights another dependency

1. depency on javascript code / objects
2. depency on events
3. dependy on environment / browser with DOM


MVC == Model View Controler
MVVM == Model View ViewModel


## Task

Change the text of the heading on button click

* don't use jQuery
* use the $scope!
* ng-click


AngularJS Controllers are driven by MVC + Router. 


## Task 2

As Johannes I want two pages on the demo application.
On the second screen I want to see an Iframe with a products detail page. (we call it coexistance). Having ng-show somewhere applied would be nice. (button: "show iframe!")

AC
- must implemented ngRoute.  
- "chrome --disable-web-security" is accapted  
- everybody creates an own template  



On Cross Orign errors, kill all chrome.exe processes and run:
```
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security
```

(because we are not working on a real webserver)


## Task 3 - do CRUD

The resource is described here:
[http://ex.extjs-kochbuch.de/help](http://ex.extjs-kochbuch.de/help)

As Johannes I want a simple CRM tool. The tool should be able to read, write, update and delete the entities from the resource 
`http://ex.extjs-kochbuch.de/api/Customer`

To inspect to traffic of that API, you can take a look at
[http://ex.extjs-kochbuch.de/Kapitel4/Grid](http://ex.extjs-kochbuch.de/Kapitel4/Grid)

AC:
- must be able to manipulate all 100 entries
	- adding a new customer
	- delete an existing customer
	- change data of the customer
	- i want to see the customer in a list
- AngularJS must be used (Kendo UI is accepted, ExtJS not)
- optional: paging, sorting
- optional: validation more than optional
- everybody puts all his changes into his OWN subfolder!

#### Help:

* https://docs.angularjs.org/api/  
* https://docs.angularjs.org/tutorial/step_01
* Stackoverflow!