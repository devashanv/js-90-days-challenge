//initialize
const btnDownload = document.getElementById("btn_download");

btnDownload.addEventListener("click", e => {
    e.preventDefault();

    const inpURL = document.getElementById("inp_url").value;
    //fetching file via fuc fileFetch
    fileFetch(inpURL);
});

//file fetching
function fileFetch(url){
    console.log(url);
    //fethc & return file as blob
    fetch(url).then(res => res.blob()).then(file => {
        //get url and it set to a tag
        let tmpURL = URL.createObjectURL(file);
        let linkTag = document.createElement("a");
        linkTag.href = tmpURL;

        //add tag & set download with file name
        linkTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(linkTag);

        //download file
        linkTag.click();
        linkTag.remove();
    });
}