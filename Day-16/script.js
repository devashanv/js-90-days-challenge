//initialize
let rateStars = document.querySelectorAll(".rate-stars ion-icon");
let rateMessage = document.querySelector(".ok-massage");
let btnSubmit = document.querySelector(".btn");
var rateIndex;

//outer selection loop
rateStars.forEach((star, index) => {
    //get each star
    star.addEventListener("click", () => {
        //hide response
        rateMessage.style.visibility = "hidden";
        rateMessage.style. transition = "none";
        //inner selection loop
        rateStars.forEach((star, index2) => {
            if (index >= index2){
                //add styles and change icon
                star.name = "star";
                star.classList.add("active")
            } else {
                star.name = "star-outline";
                star.classList.remove("active");
            }

            rateIndex = index;
        });
    });
});

//response message
btnSubmit.addEventListener("click", () => {
    if ( rateIndex == 0){
        rateMessage.innerText = "This is not bad!";
        rateMessage.style.visibility = "visible";
    }else if (rateIndex == 1){
        rateMessage.innerText = "This is good!";
        rateMessage.style.visibility = "visible";
    }else if (rateIndex == 2){
        rateMessage.innerText = "This is great!";
        rateMessage.style.visibility = "visible";
    }else if (rateIndex == 3){
        rateMessage.innerText = "This is excellent!";
        rateMessage.style.visibility = "visible";
    }else if (rateIndex == 4){
        rateMessage.innerText = "This is amaizing!";
        rateMessage.style.visibility = "visible";
    }
});



