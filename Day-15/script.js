//initialize variable
let scrollBar = document.querySelector(".carousel");
let btnNext = document.getElementById("btn_next"); 
let btnBack = document.getElementById("btn_previous"); 


scrollBar.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrollBar.scrollLeft += e.deltaY;
    scrollBar.style.scrollBehavior = "auto";
});


btnNext.addEventListener("click", () => {
    scrollBar.style.scrollBehavior = "smooth";
    scrollBar.scrollLeft += 900;
});

btnBack.addEventListener("click", () => {
    scrollBar.style.scrollBehavior = "smooth";
    scrollBar.scrollLeft -= 900;
});