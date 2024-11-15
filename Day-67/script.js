//initialize    
const btnGenerate = document.getElementById("btn_generate");
const tableContent = document.querySelector(".table-content");


btnGenerate.addEventListener("click", () => {
    //get inputs
    const inpNumber = parseInt(document.getElementById("inp_number").value);
    const inpEndTerm = parseInt(document.getElementById("inp_end_term").value);
    var table = document.querySelector(".table");

    //clear exsisting contents
    table.innerHTML = "";

    //generate table
    for (let i = 0; i < inpEndTerm; i++){

        //crearte p tag as a row
        let p = document.createElement("p");
        p.classList.add("table-content");
        p.innerHTML = `
            <span>${i + 1}</span>
            <span>*</span>
            <span>${inpNumber}</span>
            <span>=</span>
            <span>${ (i + 1) * inpNumber}</span>
        `

        //insert p tag to table
        table.appendChild(p);
    }

    table.style.visibility =  "visible";

});


