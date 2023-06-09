(function() {
    "use strict";

    // create a circle object
    let circle = {
        radius: 3,

        getArea: function (radius) {
            // TODO: complete this method
            // hint: area = pi * radius^2
            let area = Math.PI * (Math.pow(radius, 2))

            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            if(doRounding === true){
                console.log(Math.round(circle.getArea(circle.radius)));
            } else {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + circle.getArea(this.radius));
            }
            // If doRounding is true, round the result to the nearest integer.

            // Otherwise, output the complete value
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();