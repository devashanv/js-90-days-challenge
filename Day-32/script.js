//declaration
let quote, author, btn;

//initialize
quotePara = document.querySelector(".quote");
authorQuote = document.getElementById("author");
btnNew = document.getElementById("btn_new");

const url = "https://api.quotable.io/quotes/random";

//generate quote function
function generateQuote() {
    //get quotes from api
    fetch(url)
    .then((data) => data.json())
    .then((item) => {
        //assign it to para
        quotePara.innerHTML = item[0].content;
        authorQuote.innerText = item[0].author;
    });
};

window.addEventListener("load", generateQuote);
// btn click event
btnNew.addEventListener("click", generateQuote);