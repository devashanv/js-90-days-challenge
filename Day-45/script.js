//initialize
const accordionItems = document.querySelectorAll(".item");
const iconArrrow = document.querySelector(".icon");

//add active to when click a item
accordionItems.forEach((item) => {
    item.addEventListener("click", () => {
        //add style for expand
        item.classList.toggle("active");

        //get icn element
        let itemIcon = item.childNodes[1].childNodes[3];
        //icon styles hange
        if (itemIcon.style.rotate == "180deg"){
            itemIcon.style.rotate = "0deg";
            itemIcon.style.transition= "rotate 0.8s ease-in";
        }else{
            itemIcon.style.rotate = "180deg";
            itemIcon.style.transition= "rotate 0.5s ease-in";
        }
 

    });
});