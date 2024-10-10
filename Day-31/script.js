//initialize
const inpNumber = document.getElementById("inp_number");
const chanceCount = document.getElementById("chance_value");
const guessedNo = document.getElementById("guessed_no");
const message = document.getElementById("status_message");
const btnTry = document.querySelector(".btn-try");
const hint = document.querySelector(".hint");

//get random number
var number = 15; //Math.floor(Math.random()*100 + 1);
var guesses = 10;
var userInputs = [];

//set default chances
chanceCount.innerHTML = guesses;

function guessNumber() {
    //chech numbere in 1-100
    if (inpNumber < 1 || inpNumber > 100) {
        alert("Please enter value between 1 - 100");
    }else{

        //decrement chance
        guesses--;
        chanceCount.innerHTML = guesses;
        if (guesses < 1){
            //add style
            message.innerHTML = "Ohh!, You are loss";
            message.style.backgroundColor = "#741818";
            message.style.color = "#ff8c8c";
            message.style.visibility = "visible";
            btnTry.classList.add("disabled");
            inpNumber.disabled = true;
            btnTry.disabled = true;

        }else if (guesses >= 6){
            chanceCount.style.backgroundColor = "#8fff9e";

        }else if (guesses < 6){
            chanceCount.style.backgroundColor = "#ff8f8f";

        }

        //add input number to arr
        userInputs.push(inpNumber.value);

        //check win status number
        if (number == inpNumber.value){
            //add style to message
            message.innerHTML = "Greate, You are won!";
            message.style.backgroundColor = "#052907cc";
            message.style.color = "#8cff9c";
            message.style.visibility = "visible";
            btnTry.classList.add("disabled");
            btnTry.disabled = true;
            inpNumber.disabled = true;
            hint.innerHTML = "";

        }else if(number < inpNumber.value){
            //passed hint
            hint.innerHTML = "Your number is greater than answer!"
            inpNumber.value = "";
            inpNumber.focus();

        }else if(number > inpNumber.value){
            //passed hint
            hint.innerHTML = "Your number is less than answer!"
            inpNumber.value = "";
            inpNumber.focus();
        }

        //display gussed values
        var displayInp = userInputs.join(" | ");
        guessedNo.innerHTML = displayInp;

    }
}