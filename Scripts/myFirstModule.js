define(["jquery"], function ($) {

    // setup
    var colorToChange = "red";

    var $events = $({});

    var changeColor = function() {
        $("button").css("color", colorToChange);
    };

    var setColor = function(color) {
        colorToChange = color;
    }

    var setup = function() {
        $("button").click(function() {
            changeColor();
            $events.trigger('userDidSomething', 'my text');
        });
    }

    return {
        setColor: setColor,
        setup: setup,
        $events: $events
    }
});