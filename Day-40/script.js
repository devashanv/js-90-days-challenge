
function pangramChecker(){
    //initialize
    let inputSentence = document.getElementById("inp_sentence").value;
    let output = document.querySelector(".output");

    //decalre alphabet array
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    //remove spaces and conver to lower case string
    let strPangram = inputSentence.split(" ").join("").toLowerCase();
    
    let count = 0;
    
    //iterate trough the alphabet array
    for (let i = 0; i < alphabet.length; i++){
            //check each letter include or not 
            if(strPangram.includes(alphabet[i])){
                count += 1;
                
            }
    }
    
    //check count equal to alphabet length
    if(count == alphabet.length){
        //display
        output.innerHTML = "You entered sentence is a Pangram.";
        output.style.display = "block";
    }
    else{
        output.innerHTML = "You entered sentence is not a Pangram.";
        output.style.display = "block";
    }
  
}

