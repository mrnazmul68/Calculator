const display = document.getElementById("input");

function buttonInput(input) {

    display.value = display.value + input
    
}
function clearDisplay() {
    display.value = ''
}

function calculation() {
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Are you crazy?☹️😅"
    }

}
