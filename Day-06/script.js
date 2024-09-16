let countValue = 0;
let count = document.getElementById("countnum");

function changeCounter(counter){
    countValue += counter;
    count.innerHTML = countValue;
}