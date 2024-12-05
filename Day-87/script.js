//initialize
const btnRollUp = document.getElementById("btn_roll");

btnRollUp.addEventListener("click", () => {
    const inpValue = document.getElementById("inp_value").value;
    const diceIcon = document.getElementById("dice_icon");
    const resultOutput = document.querySelector(".result");
    let status;

    //hide output
    resultOutput.style.visibility = "hidden";
    resultOutput.classList.remove("win", "lost");

    //get random value 1 - 6
    let diceValue = Math.trunc((Math.random() * 6) +1);

    diceIcon.classList.add("roll");
    setTimeout(() => {
        //remove animation
        diceIcon.classList.remove("roll");
        //remove existing classes
        diceIcon.classList.remove("bxs-dice-1","bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");

        //change dice icon
        switch (diceValue){
            case 1:
                diceIcon.classList.add("bxs-dice-1");
                break;
            case 2:
                diceIcon.classList.add("bxs-dice-2");
                break;
            case 3:
                diceIcon.classList.add("bxs-dice-3");
                break;
            case 4:
                diceIcon.classList.add("bxs-dice-4");
                break;
            case 5:
                diceIcon.classList.add("bxs-dice-5");
                break;
            case 6:
                diceIcon.classList.add("bxs-dice-6");
                break;
        }
        
        //set win status
        if (parseInt(inpValue) == diceValue){
            status = "Hoorey! You'r Win."
            resultOutput.classList.add("win");
        }
        else{
            status = "Ooohps! You'r Lost."
            resultOutput.classList.add("lost");
        }

        //result element
        resultOutput.innerHTML = `
                <span style="font-size: 20px;font-weight:700;">
                ${status}
                </span>
                <span>Gussed value is: ${inpValue}</span>
                <span>Dice Value is: ${diceValue}</span>
        `
        resultOutput.style.visibility = "visible";

    }, 5000)

});