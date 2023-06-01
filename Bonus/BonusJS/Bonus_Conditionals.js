// GOLD STAR BONUS
// Create a distance unit conversion application.
//     Prompt the user for unit of measurement.
//     Prompt the user for a value.
//     Prompt the user for a second unit of measurement to convert to.
//
//     Possibly define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
// then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches
//
// Use these conversion functions to make the correct unit conversion
//
// Potentially, you will need a large switch case to account for the possible unit conversions,
//     i.e. what conversion functions will need to be called in and in what order.
//
//     DOUBLE GOLD STAR BONUS
//     Allow unit conversion to metric system units

let userConverting = true;

//Conversion functions for inches
function inchesToFeet(inch) {
    return inch / 12;
};

function inchesToMiles(inch) {
    return inch / 63360;
};

//Conversion functions for feet
function feetToInches(feet) {
    return feet * 12;
};

function feetToMiles(feet) {
    return feet / 5280;
};

//Conversion function for miles
function milesToInches(miles) {
    return miles * 63360;
};

function milesToFeet(miles) {
    return miles * 5280;
};

//Conversion function for centimeters
function inchesToCentimeters(inch) {
    return inch * 2.54;
};

function feetToCentimeters(feet) {
    return feet * 30.48;
};

function milesToCentimeters(miles) {
    return miles * 160900;
}

//Conversion function for meters
function inchesToMeters(inch) {
    return inch / 39.37;
};

function feetToMeters(feet) {
    return feet / 3.281;
}

function milesToMeters(miles) {
    return miles * 1609;
}

//Conversion functions for Kilometers
function inchesToKilometers(inches) {
    return inches / 39370;
};

function feetToKilometers(feet) {
    return feet / 3281;
}

function milesToKilometers(miles) {
    return miles * 1.609;
}

//conditional logic for converting units.

while (userConverting == true) {
    let unitOfMeasurement = prompt('Please choose a unit of measurement: inches, feet, miles');
    let measurementValue = prompt('Please enter the measurement amount as a number');
    let conversionMeasurement = prompt('please choose a measurement to convert to: inches, feet, miles');
    let metricConversion = false;

    unitOfMeasurement = unitOfMeasurement.trim();
    unitOfMeasurement = unitOfMeasurement.toLowerCase();
    conversionMeasurement = conversionMeasurement.trim();
    conversionMeasurement = conversionMeasurement.toLowerCase();
    measurementValue = parseInt(measurementValue);

    console.log(`converting ${measurementValue} ${unitOfMeasurement} to ${conversionMeasurement}`);

    switch (unitOfMeasurement) {
        //INCH CASES
        case "inches":
            switch (conversionMeasurement) {
                case "inches":
                    console.log(`${measurementValue} inches`);
                    break;
                case "feet":
                    console.log(`${inchesToFeet(measurementValue).toFixed(5)} feet`);
                    break;
                case "miles":
                    console.log(`${inchesToMiles(measurementValue).toFixed(5)} miles`);
                default:
                    console.log(`error`);
                    break;
            }
            break;
//FEET CASES
        case "feet":
            switch (conversionMeasurement) {
                case "inches":
                    console.log(`${feetToInches(measurementValue).toFixed(5)} inches`);
                    break;
                case "feet":
                    console.log(`${measurementValue} feet`);
                    break;
                case "miles":
                    console.log(`${feetToMiles(measurementValue).toFixed(5)} miles`);
                    break;
                default:
                    console.log(`error`);
                    break;
            }
            break;
//MILES CASES
        case "miles":
            switch (conversionMeasurement) {
                case "inches":
                    console.log(`${milesToInches(measurementValue).toFixed(5)} inches`);
                    break;
                case "feet":
                    console.log(`${milesToFeet(measurementValue).toFixed(5)} feet`);
                    break;
                case "miles":
                    console.log(`${measurementValue} miles`);
                    break;
                default:
                    console.log(`error`);
                    break;
            }
            break;
    }

    //Metric Conversion Logic
    metricConversion = confirm(`would you like to convert ${measurementValue} ${unitOfMeasurement} to a metric unit?`);
    if (metricConversion == true) {
        let metricUnit = prompt('Please choose a metric unit to convert to: centimeters, meters, kilometers.');
        metricUnit = metricUnit.trim();
        metricUnit = metricUnit.toLowerCase();
        console.log(`Converting ${measurementValue} ${unitOfMeasurement} to ${metricUnit}`);

        switch (unitOfMeasurement) {
            //INCH CASES
            case "inches":
                switch (metricUnit) {
                    case "centimeters":
                        console.log(`${inchesToCentimeters(measurementValue).toFixed(5)} centimeters`);
                        break;
                    case "meters":
                        console.log(`${inchesToMeters(measurementValue).toFixed(5)} meters`);
                        break;
                    case "kilometers":
                        console.log(`${inchesToKilometers(measurementValue).toFixed(5)} kilometers`);
                        break;
                    default:
                        console.log(`error`);
                        break;
                }
            //FEET CASES
            case "feet":
                switch (metricUnit) {
                    case "centimeters":
                        console.log(`${feetToCentimeters(measurementValue).toFixed(5)} centimeters`);
                        break;
                    case "meters":
                        console.log(`${feetToMiles(measurementValue).toFixed(5)} meters`);
                        break;
                    case "kilometers":
                        console.log(`${feetToKilometers(measurementValue).toFixed(5)} kilometers`);
                        break;
                    default:
                        console.log(`error`);
                        break;
                }
            case "miles":
                switch (metricUnit) {
                    case "centimeters":
                        console.log(`${milesToCentimeters(measurementValue).toFixed(5)} centimeters`);
                        break;
                    case "meters":
                        console.log(`${milesToMeters(measurementValue).toFixed(5)} meters`);
                        break;
                    case "kilometers":
                        console.log(`${milesToKilometers(measurementValue).toFixed(5)} kilometers`);
                        break;
                    default:
                        console.log(`error`);
                        break;
                }
                break;
            default:
                console.log(`error`);
                break;
        }
    }
    userConverting = confirm("would you like to start over?");
}