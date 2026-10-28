function addValue(value) {
 
    let text =
        document.getElementById("display").value;
 
    text += value;
 
    document.getElementById("display").value = text;
 
}

function clearDisplay() {
 
    document.getElementById("display").value = "";
 
}function addValue(value) {

    let text =
        document.getElementById("display").value;

    text += value;

    document.getElementById("display").value = text;

}


function clearDisplay() {

    document.getElementById("display").value = "";

}


function deleteLast() {

    let text =
        document.getElementById("display").value;

    let result = "";

    for (let i = 0; i < text.length - 1; i++) {

        result += text[i];

    }

    document.getElementById("display").value = result;

}


function calculate() {

    let text =
        document.getElementById("display").value;

    let first = "";
    let second = "";
    let operator = "";

    for (let i = 0; i < text.length; i++) {

        if (text[i] == "+") {

            operator = "+";

        } else if (text[i] == "-") {

            operator = "-";

        } else if (text[i] == "x") {

            operator = "x";

        } else if (text[i] == "/") {

            operator = "/";

        } else if (operator == "") {

            first += text[i];

        } else {

            second += text[i];

        }

    }

    first = Number(first);
    second = Number(second);

    let result = first;

    if (operator == "+") {

        result = first + second;

    } else if (operator == "-") {

        result = first - second;

    } else if (operator == "x") {

        result = first * second;

    } else if (operator == "/") {

        result = first / second;

    }

    document.getElementById("display").value = result;

}