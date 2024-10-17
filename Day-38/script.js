//initialize
const swipArea = document.querySelector(".swap-container");
const txtDirection = document.querySelector(".swap-direction");

let axisX, axisY, mouseX, mouseY, isSwiped,deviceType;
axisX = 0;
axisY = 0;
deviceType = "";

//touch event
let touchEvent = {
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup",
    },
    touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend",
    },
};


function touchDevice() {
    try{
        //create touch event
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    }catch (e) {
        deviceType = "mouse";
        return false;
    }
}

//get swip area
let swipLeft = swipArea.getBoundingClientRect().left;
let swipTop = swipArea.getBoundingClientRect().top;

//get x and y axis of swip
const swipAxis = (e) => {
    mouseX = (!touchDevice() ? e.pageX : e.touches[0].pageX) - swipLeft;
    mouseY = (!touchDevice() ? e.pageY : e.touches[0].pageY) - swipTop;
}

//call to funtion
touchDevice();

swipArea.addEventListener(touchEvent[deviceType].down, (event) => {
    isSwiped = true;
    //get axis ans assign to default
    swipAxis(event);
    axisX = mouseX;
    axisY = mouseY;
});

swipArea.addEventListener(touchEvent[deviceType].move, (event) => {
    if (!touchDevice()) {
        event.preventDefault();
    }
    if (isSwiped){
        swipAxis(event);
        let calX = mouseX - axisX;
        let calY = mouseY - axisY;
        //get the direction
        if (Math.abs(calY) > Math.abs(calX)){
            txtDirection.innerText = calY > 0 ? "You Swiped to Down" : "You Swiped to Up";
        } else {
            txtDirection.innerText = calX > 0 ? "You Swiped to Right" : "You Swiped to Left";
        }
    }
});

//stop swiped
swipArea.addEventListener(touchEvent[deviceType].up, ()=> {
    isSwiped = false;
});

swipArea.addEventListener("mouseleave", ()=> {
    isSwiped = false;
});

//refresh
window.onload = () => {
    isSwiped = false;
}
