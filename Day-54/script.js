//initialize
const navContainer = document.querySelector(".container");
const navItems = document.querySelectorAll("li");

console.log(navItems);

navItems.forEach((li, index) => {
    li.addEventListener("click", e => {
        e.preventDefault();
        navContainer.querySelector(".active").classList.remove("active");
        li.classList.add("active");

        //navigator
        const navigate = document.querySelector(".navigator");
        navigate.style.transform = `translate(calc(${index * 90}px))`;
    });
});