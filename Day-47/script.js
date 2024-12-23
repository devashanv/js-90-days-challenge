//initialize
const inpDigits = document.querySelectorAll("input");
const btnVerify = document.getElementById("btn_verify");
const msg = document.getElementById("msg");
const iconWait = document.getElementById("icon_wait");
const iconDone = document.getElementById("icon_done");

console.log(inpDigits, btnVerify);

//get all inputs
inpDigits.forEach((inpDigit, index) => {
    //key up event handling
    inpDigit.addEventListener("keyup", (e) => {
        //get current, next & pervious inputs elements
        const curtInput = inpDigit;
        const nextInput = inpDigit.nextElementSibling;
        const prevInput = inpDigit.previousElementSibling;

        //allows only onedigit into input
        if (curtInput.value.length > 1){
            curtInput.value = "";
            return;
        };

        //focus next input
        if (nextInput && nextInput.hasAttribute("disabled") && curtInput.value !== ""){
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }

        //focus previous input
        if (e.key === "Backspace"){
            inpDigits.forEach((inpDigit, index1) => {
                if (index <= index1 && prevInput){
                    inpDigit.setAttribute("disabled", true);
                    curtInput.value = "";
                    prevInput.focus();
                }
            });
        }

        //set button visibility
        if (inpDigits[3].value === ""){
            btnVerify.classList.add("disabled");
        }else{
            btnVerify.classList.remove("disabled");
        }


    });
});


//load event settings
window.addEventListener("load", () => {
    btnVerify.classList.add("disabled");
    inpDigits[0].focus();
});

//btn function
btnVerify.addEventListener("click", () => {
    msg.innerText = "Verified Successful!";
    iconWait.style.visibility = "hidden";
    iconDone.style.visibility = "visible";
});