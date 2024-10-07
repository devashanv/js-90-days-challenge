//initialize
const inputText = document.getElementById("input_text");
const inpFileName = document.getElementById("file_name");
const inpFileType = document.querySelector(".type-menu");
const btnSave = document.getElementById("btn_save");

//btn click event function
btnSave.addEventListener("click", () => {
    let blob = new Blob([inputText.value], {type: inpFileType.value});

    //temporary url for file
    let fileURL = URL.createObjectURL(blob);

    //link to file download
    let linkTag = document.createElement("a");
    linkTag.download = inpFileName.value; //set downlaoding property
    linkTag.href = fileURL;
    linkTag.click();
});