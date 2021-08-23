const Conversion = require("./conversion");

function changeBackground() {
    document.body.style.backgroundColor = document.getElementById("color").value;
}

const select = () => {
    document.getElementById('.selects').value = "";
    document.getElementById('.selects').value = "";
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