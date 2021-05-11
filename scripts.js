const operate = () => {
    switch (operator) {
        case "+":
            storage = storage + parseFloat(display.textContent);
            break;
        case "-":
            storage = storage - parseFloat(display.textContent);
            break;
        case "x":
            storage = storage * parseFloat(display.textContent);
            break;
        case "/":
            storage = storage / parseFloat(display.textContent);
            if (display.textContent == 0) {
                display.textContent = "0 div error."
                storage = 0;
            }
            break;
                                
    }
    operator = null;
    console.log(storage)
    display.textContent = display.textContent == "0 div error." ? "0 div error."
    : storage % 1 == 0 ? storage : storage.toFixed(2);
    clear = true;
} 

const handleOperator = (e) => {
    console.log(e.target.textContent)
    switch (e.target.textContent) {
        case "AC":
            storage = 0, operator = null, display.textContent = 0;
            break;
        case "DEL":
            display.textContent = display.textContent.length <= 1 ? 0 : display.textContent.substr(0, display.textContent.length -1)
            break;
        case "+/-":
            if (display.textContent == 0) return
            display.textContent = display.textContent.includes("-") ? display.textContent.substr(1,display.textContent.length) : "-" + display.textContent;
            return;
        default:
            console.log(storage, operator, display.textContent)
            if (operator) 
                {operate()
                return}
            if (e.target.textContent == "=") {
                operator = null
            } else {
                operator = e.target.textContent;
                storage = parseFloat(display.textContent)
                display.textContent = 0
            }
            
            
            console.log(storage, operator, display.textContent)
            break;
    }
}

const handleNumber = (e) => {
    if (clear) {
        clear = false;
        display.textContent = 0;
    }
    if (display.textContent == 0) display.textContent = ""
    if (e.target.textContent == "." && display.textContent.includes(".")) return
    display.textContent += e.target.textContent;
    console.log(e.target.textContent);
}

let digits = Array.from(document.getElementsByClassName("digit")).filter(d => !d.classList.contains("tool"));
let tools = Array.from(document.getElementsByClassName("digit")).filter(d => d.classList.contains("tool"));
//let ac = document.getElementById("ac");
//ac.addEventListener("click", allClear);
clear = false;
let storage = 0;
let operator = null;
let display = document.getElementById("displayText")

console.log(digits)

digits.forEach(d => d.addEventListener("click", handleNumber))
tools.forEach(d => d.addEventListener("click", handleOperator))