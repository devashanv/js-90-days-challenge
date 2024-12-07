const btnConvert = document.getElementById("btn_convert");
const displayOutput = document.getElementById("output");

btnConvert.addEventListener("click", () => {
    const inpExpression = document.getElementById("inp_expression").value;

    const operators = ["-", "+", "*", "/"];
    const stack = [];
    const postfixOutput = [];

    //convert to arr and reverse arr
    let expArr = inpExpression.split("");


    const stackOperation = (operator) => {
        //check stack emprty
        if (stack.length == ""){
            stack.push(operator);
        }
        else{
            //check precedence order
            let optCondition = operators.indexOf(stack[stack.length  - 1]) >= operators.indexOf(operator);

            //stack push
            if (optCondition){
                //push stack top to output & incoming opt to stack
                let topEle = stack.pop();
                postfixOutput.push(topEle);
                stack.push(operator);

            }
            else{
                //push incoming opt to stack
                stack.push(operator);

            }
        }
    }

    //get element one by one
    expArr.forEach(char => {
        //check operator or not
        if (operators.includes(char)){
            stackOperation(char);

        }
        else if(char == "("){
            //get all elemnts till (
            for (let i = stack.length - 1 ; i >= 0; i--){
                //check brakets
                if (stack[i] == "("){
                    //remove bracket from stack
                    stack.pop();
                    break;
                }
                else{
                    //pop stack operator
                    let popOpt = stack.pop();
                    //push popped operator
                    postfixOutput.push(popOpt);
                }
            }

        }
        else if(char == ")"){ 
            stack.push("(");
        }
        else{
            //directly push to output arr
            postfixOutput.push(char);

        }

    });

    //if items remaining in stack
    if (stack.length != 0){
        let tmpStackLength = stack.length;
        //get all remain operators
        for (let j = 0; j < tmpStackLength; j++){
            let remainOpt = stack.pop();
            postfixOutput.push(remainOpt);

        }

    }
    
    const finalResult = postfixOutput.join("");

    //display output
    displayOutput.textContent = finalResult;
    displayOutput.style.display = "block";

});


//hide output text
function hiddeOutput(){
    displayOutput.style.display = "none";
}