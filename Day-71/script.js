//initialize
const btnNext = document.getElementById("btn_next");
const btnPrev = document.getElementById("btn_prev");
const imageContainer = document.querySelector(".image-container");

let deg = 0;

btnNext.addEventListener("click", () => {
    //set angle
    deg -= 90;

    //set image container degree
    imageContainer.style.transform = `rotateY(${deg}deg)`;
});

btnPrev.addEventListener("click", () => {
    //set angle
    deg += 90;

    //set image container degree
    imageContainer.style.transform = `rotateY(${deg}deg)`;
});