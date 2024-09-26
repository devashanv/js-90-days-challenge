//initialize
let bakground = document.querySelector("body");
let btnToggle = document.querySelector(".btn-toggle");
let header = document.querySelector("h1");
var toggleStatus = true;

//toggle button
btnToggle.addEventListener("click", () => {
    //check status
    if (toggleStatus){
        btnToggle.classList.add("active");
        header.innerText = "Dark Mode";
        bakground.style.backgroundColor = "rgb(75, 75, 74)";
        toggleStatus = false;
    }else{
        btnToggle.classList.remove("active");
        header.innerText = "Light Mode";
        bakground.style.backgroundColor = "rgb(255, 248, 145)";
        toggleStatus = true;
    }
    
});