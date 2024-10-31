//initialize
const inpContainer = document.querySelector(".container");
const inpText = document.querySelector(".inp-text");
const currentCount = document.querySelector(".cur-count");
const charCount = document.querySelector(".char-count");

//funtion for keyup event
inpText.addEventListener("keyup", () => {
    let charLength = inpText.value.length;

    //assign current text length
    currentCount.innerText = charLength;

    //chek empty
    if (charLength > 0){
        charCount.style.display = "block";
    }else {
        charCount.style.display = "none";
    }

    //over char limit
    if (charLength <= 100){
        inpText.style.borderColor = "#2bff83";
        charCount.style.color = "#07aa4b";
    }else {
        inpText.style.borderColor = "#ff3737";
        charCount.style.color = "#ff3737";
        
    }
});
