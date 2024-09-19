
//declare variables
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let emailError = document.getElementById("emailerror");
let passwordError = document.getElementById("passworderror");
let iconHidden = document.getElementById("hiddenicon");
let iconVisible = document.getElementById("visibleicon");

const validEmail = "sample123@gmail.com";
const validPassword = "sample123";

//validate email
function emailValidate(){
    //check email regex
    if (inputEmail.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))){
        emailError.style.visibility = "hidden";
        inputEmail.classList.add("email-valid");
    }else{
        emailError.innerHTML = "Email is not valid";
        emailError.style.color = "#ff4b4b";
        emailError.style.visibility = "visible";
        inputEmail.classList.remove("email-valid");
    }
}

//hiiden password
iconHidden.onclick = function(){
    inputPassword.type = "text";
    iconVisible.style.visibility = "visible";
    iconHidden.style.visibility = "hidden";

}
//visible password
iconVisible.onclick = function(){
    inputPassword.type = "password";
    iconHidden.style.visibility = "visible";
    iconVisible.style.visibility = "hidden";
}

//login validation
function loginValidation(){
    if (inputEmail.value == validEmail){
        if (inputPassword.value == validPassword){
            document.getElementById("okmessage").style.visibility = "visible";
        }else{
            passwordError.innerHTML = "Incorrect email address";
            passwordError.style.color = "#ff4b4b";
            passwordError.style.visibility = "visible";
        }
    }else{
        emailError.innerHTML = "Incorrect password";
        emailError.style.color = "#ff4b4b";
        emailError.style.visibility = "visible";
    }
}
