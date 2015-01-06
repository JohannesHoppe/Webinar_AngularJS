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