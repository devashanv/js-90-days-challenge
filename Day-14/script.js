//declare and assign value
let rangeSelector = document.getElementById("selector");
let rangeValue = document.getElementById("value");
let rangeBar = document.getElementById("progress");
let rangeInput = document.getElementById("slider");

//assign selector value and range width
rangeValue.innerHTML = rangeInput.value;
rangeBar.style.width = `${rangeInput.value}%`;

//input method
rangeInput.oninput = () => {
    let valueR = rangeInput.value;
    rangeSelector.style.left = `${valueR}%`;
    rangeValue.innerHTML = valueR;
    rangeBar.style.width = valueR + "%";
}