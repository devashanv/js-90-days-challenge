

//slider function
function slider(){
    //initialize
    const sliderValue = document.getElementById("slider").value;
    const innerImage = document.getElementById("image_inner");

    //set the polygon path
    innerImage.style.clipPath = `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)`;
}