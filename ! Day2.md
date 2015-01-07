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



```
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security
```


## Task 2

As Johannes I want two pages on the demo application.
On the second screen I want to see an Iframe with a products detail page. (we call it coexistance). Having ng-show somewhere applied would be nice. (button: show iframe!)

AC
- must implemented ngRoute.  
- "chrome --disable-web-security" is accapted  
- everybody creates an own template  