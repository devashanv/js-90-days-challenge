//initialize
const displayOutput = document.getElementById("output_txt");
const timeText = document.getElementById("time");

function virusGuardPerformance(){

    const inputSectors = document.getElementById("inp_sector"); 
    const inputCleanRate = document.getElementById("inp_clean-rate"); 
    const inputReplicationRate = document.getElementById("inp_repliation_rate"); 

    //declare variable and array to store values
    let cleanRate = inputCleanRate.value * 1024 * 1024;
    let sectorSize = inputSectors.value * 1024 * 1024;
    let replicationRate = inputReplicationRate.value;

    var result = [];
    var timeCount = 0;
    var totTime = 0;
    
    //check and iterate till sector size lessthan to clean rate
    while(sectorSize > cleanRate){
        //assign count to one and stor in result array
        timeCount = 1;
        result.push(timeCount);
      
        //calculate sector size for next clearing 
        sectorSize = (sectorSize - cleanRate) * replicationRate;
    }
    
    //sector size come with lessthan value to celan rate
    timeCount = sectorSize / cleanRate;
    result.push(timeCount);
    
    //get total time for clearing
    for(var i = 0; i < result.length; i++)
    {
        totTime += result[i];
    }
    
    //display answer
    displayOutput.innerText = totTime.toFixed(2);
    displayOutput.style.visibility = "visible";
    timeText.style.visibility = "visible";

}
  

  
  