//initialize
let imageItem = document.querySelectorAll(".item");
let gragImage = document.querySelector(".image");

//iterate items
imageItem.forEach((item) => {
    //drag item
   item.addEventListener("dragover", (e) => {
        e.preventDefault();
        item.classList.add("dragged");
   });

   //default
   item.addEventListener("dragleave", () => {
        item.classList.remove("dragged");
   });


   //fill dragabble item
   item.addEventListener("drop", () => {
        item.appendChild(gragImage);
   });

});