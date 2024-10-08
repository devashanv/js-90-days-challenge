//initialize
const btnFind = document.querySelector(".btn-find");
const txtSearch = document.getElementById("txt_find");
const txtPara = document.querySelector(".txt-para");

//click function event
btnFind.addEventListener("click", () =>{
    //get value of text and special characters
    let searchText = txtSearch.value;
    searchText = searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    //create new regEx obj pattern 
    let findPattern = new RegExp(`${searchText}`, "gi");

    //highlight text matches in paragraph
    txtPara.innerHTML = txtPara.textContent.replace(findPattern,match => `<mark>${match}</mark>`);

});