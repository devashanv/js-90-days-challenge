
//declasre arrays
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "Spetember", "October", "November", "December"];

const days = ["Sunday", "Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//get values
let curentDay = document.getElementById("date");
let clockHour = document.getElementById("hour");
let clockMinutre = document.getElementById("minute");
let clockSecond = document.getElementById("second");

function digitalClock(){

    //set date of today
    let today = new Date();
    setDay = (days[today.getDay()] + " " + today.getDate()+ " " + months[today.getMonth()] + " " + today.getFullYear());
    curentDay.innerHTML = setDay;

    //set time
    let setH = today.getHours();
    let setM = today.getMinutes();
    let setS = today.getSeconds();

    //set time period
    let period = setH < 11 ? "AM" : "PM";

    //digital setup
    setH = setH < 10 ? "0" + setH : setH;
    setM = setM < 10 ? "0" + setM : setM;
    setS = setS < 10 ? "0" + setS : setS;

    //digital clock setup
    clockHour.innerHTML = setH;
    clockMinutre.innerHTML = setM;
    clockSecond.innerHTML = setS;
}
//set interval
let interval = setInterval(digitalClock, 10);

