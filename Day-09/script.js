//declaration of variables
let currentTime = document.getElementById("timer");
let [second, minute, hour] = [0,0,0];
let timer = 0;
let displayTime;

//stp watch function
function stopWatch(){
    second += 1;
    if (second == 60){ //a one minute
        second = 0;
        minute += 1;
        if (minute == 60){  //a one hour
            minute = 0;
            hour += 1;
        }
    }

    let setHour, setMinute, setSecond;
    setHour = hour < 10 ? "0" + hour : hour;
    setMinute = minute < 10 ? "0" + minute : minute;
    setSecond = second < 10 ? "0" + second : second;

    //set timer
    displayTime = setHour + ":" + setMinute + ":" + setSecond;
    currentTime.innerHTML = displayTime;

}

//time counter
function timerStart(){
    if (timer != null){
        clearInterval(timer);
    }
    //set the time interval
    timer = setInterval(stopWatch,1000); //start in  every seconds
}

function timerStop(){
    clearInterval(timer);
}

function timerReset(){
    clearInterval(timer);
    //reset time & assign values
    [second, minute, hour] = [0,0,0];
    currentTime.innerHTML = "00:00:00";
}