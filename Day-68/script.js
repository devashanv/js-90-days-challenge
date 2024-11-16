//initialize
const btnCalculate = document.getElementById("btn_calculate");
const output = document.getElementById("output");



btnCalculate.addEventListener("click", () => {

    const loanAmount = parseFloat(document.getElementById("inp_loan_amt").value);
    const interestRate = parseFloat(document.getElementById("inp_interest_rate").value);
    const noOfYears = parseFloat(document.getElementById("inp_years").value);

    console.log(loanAmount, interestRate,  noOfYears);

    if (isNaN(loanAmount) || loanAmount <= 0){
        output.innerText = "Please enter loan amount.";
        output.style.backgroundColor = "#ff5d5d";
        output.style.display = "block";

    }
    else{
        if (isNaN(interestRate) || interestRate < 0){
            output.innerText = "Please enter interest rate.";
            output.style.backgroundColor = "#ff5d5d";
            output.style.display = "block";

        }
        else{
            if (isNaN(noOfYears) || interestRate <= 0){
                output.innerText = "Please enter interest rate.";
                output.style.backgroundColor = "#ff5d5d";
                output.style.display = "block";
            }
            else{
                var interest = (loanAmount * (interestRate / 100)) * noOfYears;
                var monthlyInterest = interest / (noOfYears * 12);
                var monthlyPayment = monthlyInterest + (loanAmount / (noOfYears * 12));
            }

        }
    }


    output.style.display = "flex";
    output.style.flexDirection = "column";
    output.innerHTML = `
                        <p>Total Interest: ${interest.toFixed(2)}</p>
                        <p>Monthly Interest: ${monthlyInterest.toFixed(2)}</p>
                        <p>Monthly Installment: ${monthlyPayment.toFixed(2)}</p>`;
    
});

//hide output text
function hiddeOutput(){
    output.style.display = "none";
}

