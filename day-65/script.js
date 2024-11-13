//initialize
const btnCalculate = document.getElementById("btn_calculate");
const output = document.getElementById("output");


//btn click event
btnCalculate.addEventListener("click", () => {
    const billAmaount = document.getElementById("inp_bill_amount").value;
    const tipRate = document.getElementById("inp_tip_rate").value;

    let amount = parseFloat(billAmaount);
    let rate = parseFloat(tipRate / 100);

    //calculate tip
    let tipAmount = (amount  * rate).toFixed(2);

    //display output
    output.innerText = `The tip amount is: Rs. ${tipAmount}`;
    output.style.display = "block";
});