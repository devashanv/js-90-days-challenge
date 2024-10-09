//initialize
const tabs = document.querySelectorAll(".tab h2");
const contents = document.querySelectorAll(".tab-content section");


tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => {
        //remove the exsisting ative content
        contents.forEach((cont) => {
            cont.classList.remove("active");
        });

        //remove the exsisting ative tab
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });

         //ad styles to preview ative tab & content
        contents[i].classList.add("active");
        tabs[i].classList.add("active");
    });
});