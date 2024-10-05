//initialize
let body = document.querySelector("body");
let handHour = document.querySelector(".hour");
let handMinute = document.querySelector(".minute");
let handSecond = document.querySelector(".second");
let bar = document.querySelector(".bar-second");

//set clock time
const timeRun = setInterval(function(){
    //set today & time
    let today = new Date();

    //set degree of angle
    let secDegree, minDegree, hrsDegree;
    secDegree = (today.getSeconds() / 60) * 360;
    minDegree = (today.getMinutes() / 60) * 360;
    hrsDegree = (today.getHours() / 12) * 360;

    //set hands rotate
    handSecond.style.transform = `rotate(${secDegree}deg)`;
    handMinute.style.transform = `rotate(${minDegree}deg)`;
    handHour.style.transform = `rotate(${hrsDegree}deg)`;

}, 1000);
