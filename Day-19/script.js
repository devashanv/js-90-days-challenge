//initialize
let dynamicText = document.getElementById("dynamic-text");

let changeText = () => {
    //set chnage text fro timing
    setTimeout(() => {
        dynamicText.textContent = "Arrow Function";
        //change left shift percentage
        document.documentElement.style.setProperty("--left-shift", "83%");
    }, 0);
    setTimeout(() => {
        dynamicText.textContent = "Multi-line Strings";
        document.documentElement.style.setProperty("--left-shift", "87%");
    }, 5000);
    setTimeout(() => {
        dynamicText.textContent = "let, const Keywords";
        document.documentElement.style.setProperty("--left-shift", "91%");
    }, 10000);
    setTimeout(() => {
        dynamicText.textContent = "Template Literals";
        document.documentElement.style.setProperty("--left-shift", "87%");
    }, 15000);
    setTimeout(() => {
        dynamicText.textContent = "Default Parameters";
        document.documentElement.style.setProperty("--left-shift", "91%");
    }, 20000);
    setTimeout(() => {
        dynamicText.textContent = "Destructuring";
        document.documentElement.style.setProperty("--left-shift", "81%");
    }, 25000);
    setTimeout(() => {
        dynamicText.textContent = "Classes & Modules";
        document.documentElement.style.setProperty("--left-shift", "91%");
    }, 30000);
}

//call to the fuction
changeText();
//set the interval
setInterval(changeText, 35000);