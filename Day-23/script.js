//initialize
let results =document.querySelector(".sugges-list");
let sechBar = document.getElementById("#search_bar");

//keywords
let srchKeyword = [
    "JavaScript",
    "JavaScrip Variables",
    "JavaScrip Function",
    "JavaScrip Arrays",
    "React",
    "React 19",
    "React 19 Features",
    "React courses",
    "MERN development",
    "Machine Learning",
    "Machine Learning courses",
    "courses",
    "Machine",
    "Learning",
];

let list = [];

//assign result to list
const resultList = () => {
    list = list.map((data) => (data = addTag(data)))
};

//add the values for search items
const addTag = (val) => 
    `<li><ion-icon name="search-outline"></ion-icon><a href="#">${val}</a></li>`

//suggest search with first letter
const startsWith = (keyword, inputKeyword) => {
    return keyword.toLowerCase().startsWith(inputKeyword.toLowerCase());
};

//suggest search with any letter
const includes = (keyword, inputKeyword) => {
    return keyword.toLowerCase().includes(inputKeyword.toLowerCase());
};

const filter = (inputKeyword) => {
    //filter seraches related to charachters
    list = srchKeyword.filter((keyword) => startsWith(keyword, inputKeyword) || includes(keyword, inputKeyword));
};


const showList = (inputKeyword) => {
    results.style.visibility = "visible";
    results.innerHTML = list.join("") || addTag(inputKeyword);
};

//get search value
const srchVal = (e) => {
    let keyword = e.target.value;
    
    //check input
    if (keyword){
        filter(keyword);
        resultList();
        showList(keyword);
    }else{
        results.style.visibility = "hidden";
    }
    


};