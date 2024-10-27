//initialize
const btnCalculate = document.getElementById("btn_calculate");
const output = document.getElementById("output");

btnCalculate.addEventListener("click", () => {

    const inpHeight = document.getElementById("inp_height").value;
    const inpWeight = document.getElementById("inp_weight").value;
    let BMI = (inpWeight / (inpHeight * inpHeight)).toFixed(2);


    //check and display output
    if (BMI <= 18.4){
        output.innerText = `BMI value: ${BMI} Status: Underweight`;
        output.style.backgroundColor = "#ffc476";
        output.style.display = "block";

    }else if (BMI > 18.5 && BMI < 24.9){
        output.innerText = `BMI value: ${BMI} Status: Normal`;
        output.style.backgroundColor = "#62ff5c";
        output.style.display = "block";

    }else if (BMI > 25.0 && BMI < 39.9){
        output.innerText = `BMI value: ${BMI} Status: Overweight`;
        output.style.backgroundColor = "#ff9f31";
        output.style.display = "block";

    }else{
        output.innerText = `BMI value: ${BMI} Status: Obese`;
        output.style.backgroundColor = "#ff5d5d";
        output.style.display = "block";
    }
});

//hide output text
function hiddeOutput(){
    output.style.display = "none";
}
