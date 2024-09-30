//initialize
let percentageValue = document.getElementById("percentage");
let percentageValue2 = document.getElementById("percentage-2");
let btnRefresh = document.getElementById("btn_refresh");
let percentage = 0;

//set the interval
setInterval(() =>{
    //increase value and assign it
    if (percentage == 75){
        clearInterval();
    }else{
        percentage += 1;
        percentageValue.innerText = percentage + "%";
    }
   
}, 25);


//page refresh

btnRefresh.addEventListener("click", () => {
    window.location.reload();
});


