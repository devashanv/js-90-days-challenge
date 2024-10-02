//initialize
let container = document.querySelector(".container");
let presentValue = document.querySelector(".overlay");
let message = document.querySelector(".msg");

let counter = 0;

//set time interval
let timeInterval = setInterval(() => {
    counter++;
    //set the percentage
    presentValue.innerHTML = `${counter}%`;

    if (counter == 100){
        //clear time interval-> 0
        clearInterval(timeInterval);
        container.classList.remove("active");
        message.style.visibility = "visible";
    }
}, 100);