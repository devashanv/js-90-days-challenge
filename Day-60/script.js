//initialize
const inpNewTask = document.getElementById("inp_task");
const btnAddTask = document.getElementById("btn_add");
const tasksList = document.querySelector(".task-list");

//addign task
btnAddTask.addEventListener("click", () => {
    tasksList.innerHTML += `
        <section class="task-item">
            <p id="task_name" id="icn_done">
                <i class='bx bx-circle'></i>
                <span>${inpNewTask.value}</span>
            </p>
            <button id="btn_detele_task" class="delete">
                <i class='bx bxs-trash-alt'></i>
            </button>
        </section>`;


    //remove tasks
    var currentTasks = document.querySelectorAll(".delete");
    for (let i = 0; i < currentTasks.length; i++){
        currentTasks[i].onclick = function(){
            this.parentNode.remove();
            console.log("ok");
        }
    }

    //complete task
    var currentTasksDone = document.querySelectorAll(".bx-circle");
    for (let j = 0; j < currentTasksDone.length; j++){
        currentTasksDone[j].onclick = function() {
            //chnage styles
            currentTasksDone[j].parentNode.children[1].style.textDecoration = "line-through";
        
            currentTasksDone[j].setAttribute("class", "bx bx-check-circle");
            currentTasksDone[j].style.color = "#6c43ff";
        }
    }

    //focus input
    inpNewTask.focus();

});







// navItems.forEach((li, index) => {
//     li.addEventListener("click", e => {
//         e.preventDefault();