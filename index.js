function changeBackground() {
    document.body.style.backgroundColor = document.getElementById("color").value;
}

function select () {
    document.getElementById('from').value = "";
    document.getElementById('to').value = "";
}

const conv = () => {
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

