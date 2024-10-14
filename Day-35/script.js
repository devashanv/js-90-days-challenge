//initialize
const cursor = document.getElementById("cursor");

console.log(cursor)

//create touch event
const touchEvent = () => {
    document.createEvent("TouchEvent");
}

//navigate cursor
const navigate = (eve) => {
    //get cursor position
    var axisX = !touchEvent() ? eve.pageX : eve.touches[0].pageX;
    var axisY = !touchEvent() ? eve.pageY : eve.touches[0].pageY;

    //set "cursor" object to page cursor
    cursor.style.left = `${axisX - 20}px`;
    cursor.style.top = `${axisY - 20}px`;
};

//handle mousemove with navigate cursor
document.addEventListener("mousemove", (eve) => {
    navigate(eve);
});

//handle touch with navigate
document.addEventListener("touchmove", (eve) =>{
    navigate(eve);
});