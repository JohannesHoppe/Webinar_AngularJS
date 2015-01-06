# Modules

Johannes three principles of modular JavaScript:

* Namespaces
* Private and public access
* Declare dependencies


## Private and public access

You can archive privacy with:
- Immediate functions `(function() { alert(1); })();`
- revealing module pattern

A very easy way to solve private/public concerns

```

var myFirstModule = (function () {

    // setup
    var colorToChange = "red";

    function changeColor() {
        $("button").css("color", colorToChange);
    };

    var setup = function() {
        $("button").click(function () {
            changeColor();
        });
    }
    
    return {
        setup: setup
    }

})();


$(function() {

	//???
	"blue"

    myFirstModule.setup();
});

```` 

Task:
Change to module in that way, that the color in advance!



## Namespaces

One solution can be to create an empty object:

```
var myFirstNamespace = myFirstNamespace || {};
myFirstNamespace.myFirstModule
```

same for jQuery.fn

Another solution are AMD-Modules (require.js) and some extend "Dependency Injection" (from AngularJS). 


## Dependencies

For our context a dependency is a piece of JavaScript code on which another piece of JavaScript somehow depends on. The existence of such a dependency is therefore required to get the complete system running. In most cases a method or value of such a dependency is going to be accessed. In other cases there might be no direct access to the required piece of software, but there could be a hidden dependency where the systems state is changed as required.


Working with dependencies means loading of JavaScript code...  
... in the right order.  
... at the right time.  
... at the right speed.  

Most often you have dependencies to:

* other objects  
* to events  

**Dependencies must be always declared!**

```
var myFirstModule = (function ($) {

}(window.jQuery)

``


define("jquery", [], function() {

	return $;

});



define("myModule", ["angular", "jquery"], function(angular, $) {

  return {
    setup: function() { };
  }

});


require(["myModule"], function(myModule) {

	myModule.setup();
})
```


Task: refactor `test.html` to use the AMD (one single file first)

1st challange: make myFirstModule module an AMD module  
2nd challange: handle domReady (for the experts! ;-))  