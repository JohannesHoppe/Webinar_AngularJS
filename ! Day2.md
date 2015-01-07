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
