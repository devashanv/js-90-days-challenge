//initialize
const coinToss = document.querySelector(".toss");
const btnTossUp = document.getElementById("btn_toss_up");
const output = document.getElementById("output");


//btn click event
btnTossUp.addEventListener("click", () => {
    //set ransom status
    let status = Math.floor(Math.random() * 2);

    //set ouput default
    output.style.display = "none";

    //set default animation
    coinToss.style.animation = "none";

    //set coin face according to sattus
    if (status){
        setTimeout(() => {
            //set head animation
            coinToss.style.animation = "spin-head 3s forwards";
            displayOutPut("Head");

        }, 100);
    }else {
        setTimeout(() => {
            //set tail animation
            coinToss.style.animation = "spin-tail 3s forwards";
            displayOutPut("Tail");
        }, 100);
    }

});


//display result
const displayOutPut = (result) => {
    
    setTimeout(() => {
        //output result
        output.innerText = `Toss result is: ${result}`;
        output.style.display = "block";
    }, 3000)
}