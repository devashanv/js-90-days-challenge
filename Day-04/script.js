
let scrollIndicator = document.querySelector(".scroll-indicator .scroll-presentage");
let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", scroll)
function scroll() {
    let scrollTop = document.documentElement.scrollTop;
    let scrolled = (scrollTop / scrollHeight) * 100;
    scrollIndicator.style.width = `${scrolled}%`;
}

