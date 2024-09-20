
let toggle = false;

//toggle function
function expandMenue(){
    //check visibility
    if (toggle){
        document.getElementById("getmenu").classList.add("menu-wrap-open");
        toggle = false;
    }else{
        document.getElementById("getmenu").classList.remove("menu-wrap-open");
        toggle = true;
    }
}
