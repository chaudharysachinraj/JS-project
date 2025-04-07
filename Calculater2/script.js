const display = document.querySelector(".display")

function addToDisplay(input) {
    display.value += input;

}


function clearDisplay() {
    display.value = "";
}


function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function percentage() {
    try {
        if (display.value == "%") {
            display.value = eval(display.value) / 100;
        }
    } catch (error) {
        display.value = "Error";
    }
}
