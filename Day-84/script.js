const btns = document.querySelectorAll(".btn-operator");
const answerDisplay = document.getElementById("answer_display");
const btnEqual = document.getElementById("opt_equal");
const btnClear = document.getElementById("btn_clear");
const btnDelete = document.getElementById("btn_delete");

let leftOperand, rightOperand, expression, finalAnswer;

//set operator
btns.forEach((btn) => {
    btn.addEventListener("click", ()=>{
        //check display empty
        if (answerDisplay.value.length != ""){
            //concat answer withg operator
            answerDisplay.value += btn.getAttribute("value");
        }
    });
});

//equal btn
btnEqual.addEventListener("click", () => {
    let displayText = answerDisplay.value;
    
    if (displayText.includes("-")){
        let expression = displayText.split("-");
        leftOperand = parseInt(expression[0]);
        rightOperand = parseInt(expression[1]);
    
        finalAnswer = leftOperand - rightOperand;
        answerDisplay.innerHTML = "";

    }else if(displayText.includes("+")){
        let expression = displayText.split("+");
        leftOperand = parseInt(expression[0]);
        rightOperand = parseInt(expression[1]);
    
        finalAnswer = leftOperand + rightOperand;

    }else if(displayText.includes("*")){
        let expression = displayText.split("*");
        leftOperand = parseInt(expression[0]);
        rightOperand = parseInt(expression[1]);
    
        finalAnswer = leftOperand * rightOperand;

    }else if(displayText.includes("/")){
        let expression = displayText.split("/");
        leftOperand = parseInt(expression[0]);
        rightOperand = parseInt(expression[1]);
    
        finalAnswer = leftOperand / rightOperand;

    }else if(displayText.includes("%")){
        let expression = displayText.split("%");
        leftOperand = parseInt(expression[0]);
        rightOperand = parseInt(expression[1]);
    
        finalAnswer = leftOperand % rightOperand;

    }

    document.getElementById("answer_display").value = finalAnswer;
});

//clear display
btnClear.addEventListener("click", () => {
    document.getElementById("answer_display").value = "";
})

//delete items
btnDelete.addEventListener("click", () => {
    let userInputText = answerDisplay.value;

    let newDisplayText = userInputText.slice(0, -1);

    document.getElementById("answer_display").value = newDisplayText;
})