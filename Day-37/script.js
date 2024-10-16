const colorBox = document.getElementById("color_box");
const colorCode = document.getElementById("rgb_code");

function generateColor(){
    //get values
    const RValue = document.getElementById("r_value");
    const GValue = document.getElementById("g_value");
    const BValue = document.getElementById("b_value");

    //set RGB color to boc
    colorBox.style.backgroundColor = `rgb(${RValue.value}, ${GValue.value}, ${BValue.value})`;

    //set rgb values
    colorCode.innerHTML = `rgb(${RValue.value}, ${GValue.value}, ${BValue.value})`;
}
