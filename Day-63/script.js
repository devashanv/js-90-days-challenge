//initialize
const btnCalculate = document.getElementById("btn_calculate");
const output = document.getElementById("output");


function calculator(valueOne, valueTwo, operator){

    let answer;
    switch (operator){
        case "+":
            answer = valueOne + valueTwo;
            break;
        case "-":
            answer = valueOne - valueTwo;
            break;
        case "*":
            answer = valueOne * valueTwo;
            break;
        case "/":
            if (valueTwo == 0){
                answer = "Can not divide by 0";
            }else {
                answer = valueOne / valueTwo;
                break;
            }
        
        default:
            answer = "Cannot divide by 0";
    }

    return answer;

}

btnCalculate.addEventListener("click", () => {
    const firstOperand = document.getElementById("inp_value_one").value;
    const secontOperand = document.getElementById("inp_value_two").value;
    const inpOperator = document.getElementById("inp_operator").value;

    

    let valueOne = parseInt(firstOperand);
    let valueTwo = parseInt(secontOperand);

    console.log(valueOne, valueTwo, inpOperator);

    if (!isNaN(valueOne) && !isNaN(valueTwo)){
        var result = calculator(valueOne, valueTwo, inpOperator);
    }else {
        alert("Please enter values for empty fields");
    }


    output.innerText = `Answer is: ${result}`;
    output.style.backgroundColor = "#568cff";
    output.style.display = "block";

});



//hide output text
function hiddeOutput(){
    output.style.display = "none";
}
