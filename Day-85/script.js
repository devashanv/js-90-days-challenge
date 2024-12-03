const budgetAmount = document.getElementById("inp_bidget");
const btnSetBudget = document.getElementById("btn_set_budget");
const btnAddExpense = document.getElementById("btn_add_expense");
const budgetText  = document.querySelector(".budget-display");
const rupeeValue = document.getElementById("rupee_value");
const tableDataRow = document.getElementById("tble_data");
const budgetError = document.querySelector(".budget-error");

let budget = 0;

let expensesArr = [];
let incomeArr = [];

window.onload= () => {
    if (budget == 0){
       budgetText.setAttribute("style", "display:none");
    }
}


//set budget
btnSetBudget.addEventListener("click", () => {
    //get and set budget
    budget = parseInt(budgetAmount.value);
    rupeeValue.textContent = budget;
    budgetText.setAttribute("style", "display:block");
});

//add expense
btnAddExpense.addEventListener("click", () => {
    const expenseAmount = document.getElementById("inp_exp_amount").value;
    const expenseInfo = document.getElementById("inp_exp_info").value;
    
    console.log(budget)
    console.log( parseInt(expenseAmount))

    //check availbaility
    if (budget > parseInt(expenseAmount)){
        budget -= parseInt(expenseAmount);
        
        //pass table row data
        let div = document.createElement("div");
        div.classList.add("row", "data");
        div.innerHTML = `
            <div class="col data_font">
                ${expenseInfo}
            </div>
            <div class="col data_font">
                ${expenseAmount}     
            </div> 
            <div class="col data_font">
                ${budget}
            </div>
        `

        tableDataRow.appendChild(div);
    }
    else{
        budgetError.style.display = "block";
    }

   
});
