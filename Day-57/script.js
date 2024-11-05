//initialize
let mouseX = 0;
let mouseY = 0;
let mouseFocus = document.querySelector(".mouse-focus");

//get touches
const isTouchDevice = () => {
    try {
        document.createEvent("TouchEvent");
        return true;
    }catch {
        return false;
    }
};

//get mouse positions
function getPositions(e) {
    //get mouse property
    mouseX = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
    mouseY = !isTouchDevice() ? e.pageY : e.touches[0].pageY;

    //set mouse property
    mouseFocus.style.setProperty("--Xpos", mouseX + "px");
    mouseFocus.style.setProperty("--Ypos", mouseY + "px");
}

//handle event mouse move
document.addEventListener("mousemove", getPositions)