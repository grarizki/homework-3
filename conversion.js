// Setup Conversion
function Conversion () {
    fromCelcius(to, temp-input){
        // Converting Celcius to Celcius
        if (to == "Cel") {
            return temp-input;
        } 
        // Converting Celcius to Fahrenheit
        if (to == "Fah") {
            return ( 9 / 5 ) * (temp-input + 32);
        }
        // Converting Celcius to Reamur
        if (to == "Rea") {
            return ( 4 / 5 ) * (temp-input +32);
        }
    }
    
    fromFahrenheit(to, temp-input){
        // Converting Fahrenheit to Fahrenheit
        if (to == "Fah") {
            return temp-input;
        }
        // Converting Fahrenheit to Celcius
        if (to == "Cel") {
            return ( 5 / 9 ) * (temp-input + 32);
        }
        // Converting Fahrenheit to Reamur
        if (to == "Rea") {
            return ( 4 / 9 ) * (temp-input - 32);
    }
    fromReamur(to, temp-input){
    
        if (to == "Rea") {
            // Converting Reamur to Reamur
            return temp-input;
        }
        // Converting Reamur to Celcius
        if (to == "Cel") {
            return ( 5 / 4 ) * (temp-input);
        }
        // Converting Reamur to Fahrenheit
        if (to == "Fah") {
            return ( 9 / 4 ) * (temp-input);
        }
    }
}


module.exports = Conversion;