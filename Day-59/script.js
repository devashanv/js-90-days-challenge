//initialize
const contText = document.querySelector(".con-text");
const hintText = document.getElementById("hint");
const connIcon = document.querySelector("i");

//network online
let connOnline = () => {
    hintText.innerText = "Hoorey! connected";
    contText.innerText = "Now, Your connection is online";
    connIcon.style.color = "#18fc51";
    connIcon.setAttribute("class", "bx bx-wifi");
};

//network offline
let connOffline = () => {
    hintText.innerText = "Oops! disconnected.";
    contText.innerText = "Your connection is offline";
    connIcon.style.color = "#f12626";
    connIcon.setAttribute("class", "bx bx-wifi-off");
};

if (window.navigator.onLine) {
    connOnline();
}else {
    connOffline();
}

//set offline & online status
window.addEventListener("online", connOnline);
window.addEventListener("offline", connOffline);