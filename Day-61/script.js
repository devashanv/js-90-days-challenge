//initialize
const btnConvert = document.getElementById("btn_convert");
const output = document.getElementById("output");

btnConvert.addEventListener("click", () => {
    const inpDecimal = document.getElementById("inp_decimal");

    if (!isNaN(inpDecimal.value)){
        var decimalValue = parseInt(inpDecimal.value, 10);
        var hexValue = decimalValue.toString(16).toLocaleUpperCase();

        output.innerText = `Hexa Value is: ${hexValue}`;
        output.style.backgroundColor = "#ffc476";
        output.style.display = "block";

    }else {
       alert("Please enter decimal value.");
    }

});


//hide output text
function hiddeOutput(){
    output.style.display = "none";
}
