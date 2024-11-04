//initialize
const btnStart = document.querySelector(".btn-first");
const btnEnd = document.querySelector(".btn-end");
const btnPrevNext = document.querySelectorAll(".btn-prev-next");
const btnPages = document.querySelectorAll(".btn-num");

//default page set
let currentPage = 0;

//btns update status
const btnsUpdate = (currentPage) => {
    //btns disabled and show effect
    if (currentPage == 0){
        btnStart.setAttribute("disabled", true);
        document.getElementById("prev").setAttribute("disabled", true);

        btnEnd.removeAttribute("disabled");
        document.getElementById("next").removeAttribute("disabled");

    }else if (currentPage == 4){
        btnEnd.setAttribute("disabled", true);
        document.getElementById("next").setAttribute("disabled", true);

        btnStart.removeAttribute("disabled");
        document.getElementById("prev").removeAttribute("disabled");
            
    }else {
        btnStart.removeAttribute("disabled");
        document.getElementById("prev").removeAttribute("disabled");

        btnEnd.removeAttribute("disabled");
        document.getElementById("next").removeAttribute("disabled");
    }

};

//btn pages number events
btnPages.forEach((page, index) => {
    page.addEventListener("click", (e) => {
        e.preventDefault();
        currentPage = index;

        //get current page active
        document.querySelector(".active").classList.remove("active");
        page.classList.add("active");

        btnsUpdate(currentPage);
    });
});

//btn prev & next event
btnPrevNext.forEach((button) => {
    console.log(currentPage)
    button.addEventListener("click", (e) => {
        //set current page setup
        currentPage += e.target.id === "next" ? 1 : -1;

        btnPages.forEach((page, pageIndex) => {
            page.classList.toggle("active", pageIndex === currentPage);
        });

        btnsUpdate(currentPage);
    });
});


//first page navigation
btnStart.addEventListener("click", () =>{
    //remove current active page 
    document.querySelector(".active").classList.remove("active");

    //focus the first page
    btnPages[0].classList.add("active");
    currentPage = 0;

    btnsUpdate(currentPage);
});

//end page navigation
btnEnd.addEventListener("click", () => {
    //remove current active page
    document.querySelector(".active").classList.remove("active");

    //focus the last page
    btnPages[btnPages.length - 1].classList.add("active");
    currentPage = btnPages.length - 1;

    btnsUpdate(currentPage);
});


