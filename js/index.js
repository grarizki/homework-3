function changeBackground() {
    document.body.style.backgroundColor = document.getElementById("color").value;
}

// use temp-input and res-output instead of .selects for select function
const select = () => {
    document.getElementById('temp-input').value = "";
    document.getElementById('res-output').value = "";
}
// const Select = () => {
//     $(".selects").val() = "";
//     $(".selects").val() = "";
// }
var conv = new Conversion();
const Convertion = () => {
    if (document.getElementById("from").value == "Cel") {
        const res = conv.fromCelcius(
            document.getElementById("to").value,
            parseInt(document.getElementById("temp-input").value)
        );
        document.getElementById("res-output").value = res;
    }
    if (document.getElementById("from").value == "Fah") {
        const res =  conv.fromFahrenheit(
            document.getElementById("to").value,
            parseInt(document.getElementById("temp-input").value)
        );
        document.getElementById("res-output").value = res;
    }
    if (document.getElementById("from").value == "Rea") {
        const res = conv.fromReamur(
            document.getElementById("to").value,
            parseInt(document.getElementById("temp-input").value)
        );
        document.getElementById("res-output").value = res;
    }
}

// const Convert = () => {
//     const res = Conversion($(".fromNumber").val(),
//     $(".toResult").val(),
//     parseInt($("temp-input").val())
//     );
//     $("res-output").html(res);
// }