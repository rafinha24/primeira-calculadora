const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button")
const specialCharts = ["%", "*", "/", "-", "+", "="];
let output = "";
let historyDisplay = document.querySelector(".history")

//função que calcula baseado nos butoes//

const calculate = (btnValue) => {
    display.focus();
    if (btnValue === "=" && output !== "") {
        historyDisplay.innerHTML = output;
        output = eval(output.replace("%", "/100"));
    }
    else if (btnValue === "AC"){
        output = "";
        historyDisplay.innerHTML = ""
    }
    else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    }
    else {
      if (output === "" && specialCharts.includes(btnValue)) return;
      
      output += btnValue;
    }
    display.value = output;
    
};

for(let button of buttons){
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
}