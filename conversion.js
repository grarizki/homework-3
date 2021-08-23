// Setup Conversion
class Conversion { 
    constructor(){
        console.log("test");
    }
    fromCelcius(to, temp_input){
        // Converting Celcius to Celcius
        if (to == "Cel") {
            return temp_input;
        } 
        // Converting Celcius to Fahrenheit
        if (to == "Fah") {
            return ( 9 / 5 ) * (temp_input + 32);
        }
        // Converting Celcius to Reamur
        if (to == "Rea") {
            return ( 4 / 5 ) * (temp_input +32);
        }
    }
    
    fromFahrenheit(to, temp_input){
        // Converting Fahrenheit to Fahrenheit
        if (to == "Fah") {
            return temp_input;
        }
        // Converting Fahrenheit to Celcius
        if (to == "Cel") {
            return ( 5 / 9 ) * (temp_input + 32);
        }
        // Converting Fahrenheit to Reamur
        if (to == "Rea") {
            return ( 4 / 9 ) * (temp_input - 32);
        }
    }
    fromReamur(to, temp_input){
    
        if (to == "Rea") {
            // Converting Reamur to Reamur
            return temp_input;
        }
        // Converting Reamur to Celcius
        if (to == "Cel") {
            return ( 5 / 4 ) * (temp_input);
        }
        // Converting Reamur to Fahrenheit
        if (to == "Fah") {
            return ( 9 / 4 ) * (temp_input);
        }
    }
}
module.exports = Conversion;


modules.exports = Conversion;