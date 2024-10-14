//initialize
const cursor = document.getElementById("cursor");

//create touch event
const touchEvent = () => {
    document.createEvent("TouchEvent");
}

//navigate cursor
const navigate = (eve) => {
    //get cursor position
    var axisX = touchEvent() ? eve.pageX : eve.touches[0].pageX;
    var axisY = touchEvent() ? eve.pageY : eve.touches[0].pageY;

    //set "cursor" object to page cursor
    cursor.style.left = `${axisX}px`;
    cursor.style.top = `${axisY}px`;

}