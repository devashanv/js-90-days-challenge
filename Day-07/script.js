
//get password and hint
let password = document.getElementById("password");
let passHint = document.getElementById("hintmessage");


//handle to input event
password.addEventListener("input", () => {
    console.log(password);
    //check empty
    if(password.value.length ==""){
        passHint.style.display = "none";
        password.style.borderColor = "#4b4b4a";
        password.style.boxShadow = "#4b4b4a 0px 1px 4px, #4b4b4a 0px 0px 0px 3px";

    }else if(password.value.length <= 7){
        passHint.innerHTML = "Password is very weak";
        passHint.style.display = "block";
        //change styles
        password.style.borderColor = "#eb0945";
        password.style.boxShadow = "#eb0945 0px 1px 4px, #eb0945 0px 0px 0px 3px";
        passHint.style.color = "#eb0945";

    }else if(password.value.length >= 8 && password.value.length < 11){
        passHint.innerHTML = "Password is weak";
        passHint.style.display = "block";
        //change styles
        password.style.borderColor = "#ffa947";
        password.style.boxShadow = "#ffa947 0px 1px 4px, #ffa947 0px 0px 0px 3px";
        passHint.style.color = "#ffa947";
        

    }else if(password.value.length >= 11 && password.value.length < 14 ){
        passHint.innerHTML = "Password is good";
        passHint.style.display = "block";
        //change styles
        password.style.borderColor = "#e0e014";
        password.style.boxShadow = "#e0e014 0px 1px 4px, #e0e014 0px 0px 0px 3px";
        passHint.style.color = "#e0e014";

    }else{
        passHint.innerHTML = "Password is strong";
        passHint.style.display = "block";
        //change styles
        password.style.borderColor = "#47d61b";
        password.style.boxShadow = "#47d61b 0px 1px 4px, #47d61b 0px 0px 0px 3px";
        passHint.style.color = "#47d61b";
    }


});