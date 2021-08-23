// Setup Unit Testing using Jest JS
const Conversion = require("../js/Conversion");
const conve = new Conversion();

test("Test Celcius to Celcius", () => {
    expect(conve.fromCelcius("Cel",32)).toBe(32);
});
test("Test Celcius to Fahrenheit", () => {
    expect(conve.fromCelcius("Fah",32)).toBe(89.6);
});
test("Test Celcius to Reamur", () => {
    expect(conve.fromCelcius("Rea",32)).toBe(25.6);
});
test("Test Fahrenheit to Fahrenheit", () => {
    expect(conve.fromFahrenheit("Fah",32)).toBe(32);
});
test("Test Fahrenheit to Celcius", () => {
    expect(conve.fromFahrenheit("Cel",32)).toBe(0);
});
test("Test Fahrenheit to Reamur", () => {
    expect(conve.fromFahrenheit("Rea",32)).toBe(0);
});
test("Test Reamur to Reamur", () => {
    expect(conve.fromReamur("Rea",32)).toBe(32);
});
test("Test Reamur to Celcius", () => {
    expect(conve.fromReamur("Cel",32)).toBe(40);
});
test("Test Reamur to Fahrenheit", () => {
    expect(conve.fromReamur("Fah",32)).toBe(104);
});


