const display = document.querySelector(".display")

function addToDisplay(input){
    display.value += input;
    
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value = "Error";
    }
}