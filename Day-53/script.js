//initialize
const btnDownload = document.querySelector(".container");
const btnIcon = document.querySelector("ion-icon");
const btnContent = document.querySelector("span");


btnDownload.addEventListener("click", () => {
    //add progress bar implementation
    btnDownload.classList.add("active");

    setTimeout(() => {
        btnDownload.classList.remove("active");
        //change icon
        btnIcon.setAttribute("name","checkmark-circle-outline");
        btnContent.innerText = "Completed";
    }, 6000)
});