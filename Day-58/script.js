//initialize
const contentContainer = document.querySelector(".content");
const viewContainer = document.querySelector(".copy-content");
const btnCapture = document.getElementById("btn_capture");
const btnDownload = document.getElementById("btn_download");


btnCapture.addEventListener("click", async () => {
    btnDownload.classList.remove("hide");

    //capture the content of container
    const canvas = await html2canvas(contentContainer);
    const imgURL = canvas.toDataURL();

    //set the view container screenshot
    viewContainer.innerHTML = `<img src="${imgURL}" class="screenshot" id="image">`;

    //download capture screenshot
    btnDownload.href = imgURL;
    btnDownload.download  = "image.png";
});


window.onload = () => {
    btnDownload.classList.add("hide");
    viewContainer.innerHTML = "";
}