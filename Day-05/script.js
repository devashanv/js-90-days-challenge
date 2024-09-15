let inputDate = document.getElementById("dobuser");
let displayAge = document.getElementById("_agelabel");
console.log(inputDate)

//inputDate.max = new Date().toString().split("T")[0];

function calculateAge(){
    let dob,today;

    dob = new Date(inputDate.value);
    today = new Date();

    let userDay = dob.getDate();
    let userMont = dob.getMonth() + 1;
    let userYear = dob.getFullYear();

    let currentDay = today.getDate();
    let currentMont = today.getMonth() + 1;
    let currentYear = today.getFullYear();

    //get calculation
    let calDay, calMonth, calYear;
    //year
    calYear = currentYear - userYear;

    //month
    if(currentMont >= userMont){
        calMonth = currentMont - userMont;

    }else{
        //dcrement year 
        calYear -= 1;
        calmont = 12 + currentMont - userMont;
    }

    //day
    if(currentDay >= userDay){
        calDay = currentDay - userDay;
    }else{
        calMonth -= 1;
        calDay = getDay(userYear, userMont) + currentDay - userDay;
    }

    if(calMonth < 0){
        calMonth = 11;
        calYear -= 1;
    }

    console.log(calYear, calMonth, calDay);

    //display age
    displayAge.innerHTML = `You age: ${calYear} years, ${calMonth} months and ${calDay} days.`
}

//get last day of mont
function getDay(y, m){
    return new Date(y, m, 0).getDate();
}