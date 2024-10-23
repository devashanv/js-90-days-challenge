
function customeAPGenerator(){
    //initialize
    const inpNoOfTerms =document.getElementById("inp_terms").value;
    const firstIncrement =document.getElementById("inp_first_incrment").value;
    const secondIncrement =document.getElementById("inp_second_incrment").value;
    const outputTxt = document.getElementById("output_txt");

    //get gifference of values
    const difference = secondIncrement - firstIncrement;
    // calculate first stone value
    var firstEle = (inpNoOfTerms * firstIncrement) - firstIncrement;
    //assignvalue to stone value
    var stoneValue = firstEle;
    
    //declare array of stone and add first value
    var stonesArr = [];
    stonesArr.push(stoneValue);
    
    //iterate to add stone values to stonesArr array 
    for(var i = 0; i < inpNoOfTerms - 1; i++)
    {
        //calculate value of stone
        stoneValue += difference;
        //store calculate stone value in array 
        stonesArr.push(stoneValue);
    }

    //return stones array
    outputTxt.innerText = stonesArr.toString();
    outputTxt.style.display = "block";
}


function hiddeOutput(){
    outputTxt.style.display = "none";
}