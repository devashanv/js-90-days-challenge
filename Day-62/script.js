//initialize
const btnCalculate = document.getElementById("btn_calculate");
const output = document.getElementById("output");

var factorial = 0;

function calFactorial(value){
    let factorial;

    if (value === 0 || value === 1){
        factorial = 1;
    }else {
        factorial = value * calFactorial(value -1);
    }

    return factorial;
}

btnCalculate.addEventListener("click", () => {
    const inpValue = document.getElementById("inp_value").value;

    var facValue = parseInt(inpValue);

    if (!isNaN(facValue)){
        const answer = calFactorial(facValue);

        output.innerText = `Factorial is: ${answer}`;
        output.style.backgroundColor = "#51d684";
        output.style.display = "block";

    }else {
       alert("Please enter decimal value.");
    }

});


//hide output text
function hiddeOutput(){
    output.style.display = "none";
}
