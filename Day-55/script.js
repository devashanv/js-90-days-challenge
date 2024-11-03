//initialize
const UlList = document.querySelector(".list");
const listItems = UlList.querySelectorAll(".list-item");

listItems.forEach(item => {
    //drag start event
    item.addEventListener("dragstart", () => {
        setTimeout(() => {
            //add dgraging class
            item.classList.add("drag");
        }, 0);
    });

    //drag end event
    item.addEventListener("dragend", () => {
        item.classList.remove("drag");
    });
});

const sortableList = (e) => {
    e.preventDefault();
    const curDragItem = UlList.querySelector(".drag");
    //get all items with drag class as array via nodelist
    const initItems = [...UlList.querySelectorAll(".list-item:not(.drag)")]

    let nextItem = initItems.find(initItem => {
        //get cordinates and check the graggable status
        return e.clientY <= initItem.offsetTop + initItem.offsetHeight / 2;
    });

    //set draggable item place
    UlList.insertBefore(curDragItem, nextItem);
};

UlList.addEventListener("dragover", sortableList);