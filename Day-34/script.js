//initialize
const inpFile = document.getElementById("file_upload");
const fileList = document.getElementById("files_list");
const fileCount = document.getElementById("files_container");


inpFile.addEventListener("change", () => {
    //get no of files selected
    fileList.innerHTML = "";
    fileCount.innerText = `${inpFile.files.length} Files Selected`;

    //get selected files details & assign to UL
    for (file of inpFile.files){
        //create instant from filereader
        let r, fileItem, fileName, fileSize;
        r = new FileReader();
        fileItem = document.createElement("li");
        fileName = file.name;
        fileSize = Math.round(file.size / 1024);

        //content of li
        let tagDiv = 
        `<div style="display: flex; gap: 0.2em;">
            <ion-icon name="document-outline" style="margin-top: 2px"></ion-icon>
            <p>${fileName}</p>
        </div>
        <p>${fileSize}KB</p>`
        fileItem.innerHTML = tagDiv;

        //add file item to ul 
        fileList.appendChild(fileItem);
        

    }
});