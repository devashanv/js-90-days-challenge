//initialize date
let setDays = document.getElementById("days");
let setHours = document.getElementById("hours");
let setMinutes = document.getElementById("minutes");
let setSeconds = document.getElementById("seconds");

//process countdown
let countTime = new Date("Jan  01, 2025 00:00:00").getTime();
let interval = setInterval(function () {
    let currentDate = new Date().getTime();
    let gap = countTime - currentDate;

    //set ountdown
    let days,hours,minutes,seconds;

    days = Math.floor(gap / (1000 * 60 * 60 * 24));
    hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((gap % (1000 * 60 * 60)) /  (1000 * 60));
    seconds = Math.floor((gap % (1000 * 60)) / 1000);

    //set two digit format
    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    //assign values
    setDays.innerHTML = days;
    setHours.innerHTML = hours;
    setMinutes.innerHTML = minutes;
    setSeconds.innerHTML = seconds;

}, 1000);