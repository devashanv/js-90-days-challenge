//initialize
let selectField = document.getElementById("menu-item");
let selectTxt = document.getElementById("menu-txt");
let options = document.querySelectorAll(".option");
let optionList = document.getElementById("list");
let icon = document.getElementById("icon");

selectField.onclick = function() {
    //add styles
    optionList.style.visibility = "visible";
    icon.style.transform = "rotate(180deg)";
};

//loop for option selection
for(opt of options){
    opt.onclick = function(){
        //set selected text
        selectTxt.innerHTML = this.textContent;
        //add styles
        optionList.style.visibility = "hidden";
        icon.style.transform = "rotate(0deg)";
    }
};