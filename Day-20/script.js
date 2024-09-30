//initialize
let containerImage = document.querySelector(".container");
let reactHeart = document.getElementById("heart");

console.log(containerImage);
console.log(reactHeart);

//event listener
containerImage.addEventListener("click", (e) => {

    //add raect for user click
    let xValue, yValue;
    xValue = e.clientX - e.target.offsetLeft;
    yValue = e.clientY - e.target.offsetTop;

    //set react position
    reactHeart.style.top = `${yValue}px`;
    reactHeart.style.left = `${xValue}px`;

    //add class
    reactHeart.classList.add("active");

    //settime ouit and exit react effect
    setTimeout(() =>{
        //remove react class
        reactHeart.classList.remove("active");
    }, 800);
});