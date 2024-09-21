//decare & assign variables
let progressBar = document.getElementById("progress");
let btnNext = document.getElementById("btn_next");
let btnBack = document.getElementById("btn_back");
let progressStep = document.querySelectorAll(".progrss-step");
let okMessage = document.getElementById("okmessage");

//initialize step index
let stepActive = 0;

//next button
 btnNext.addEventListener("click", () => {
    stepActive++;
    if (stepActive > progressStep.length){
        stepActive = progressStep.length;
    }

    progressUpdate();
 });

 //back button
 btnBack.addEventListener("click", () => {
    stepActive--;
    if (stepActive < 0){
        stepActive = 0;
    }

    progressUpdate();
 });

//progress bar setup
 function progressUpdate(){
    //add active class for steps
    progressStep.forEach((step, index) => {
        if (index < stepActive){
            step.classList.add("active");
        } else {
            step.classList.remove("active");
        }
    });

    //set progress bar color and width
    let actives = document.querySelectorAll(".active");
    progressBar.style.width = ((actives.length - 1) / (progressStep.length - 1)) * 99 + "%";
    progressBar.style.backgroundColor = "#2de473";

    //success alert
    if (stepActive == progressStep.length){
        okMessage.style.visibility = "visible";
    } else{
        okMessage.style.visibility = "hidden";
    }
}
