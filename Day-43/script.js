//initialize
const btnCheck = document.getElementById("btn_check");
const txtOutput = document.getElementById("output");

btnCheck.addEventListener("click", () => {
        //get input word
        const inpWord = document.getElementById("inp_word").value;

        //cut whitspace and turn to lowercase of string
        var originalString = inpWord.toLowerCase().trim().split("");

        //get reverse order of original array
        let reverseOriginalArr = reverseArr(originalString);

        //check the palidrome of string
        for (let i = 0; i < originalString.length ; i++){

            if (originalString[i]  == reverseOriginalArr[i]) {

                if ( i == originalString.length - 1){
                    //display answer
                    txtOutput.innerText = `${inpWord} is a Palindrome`;
                    txtOutput.style.backgroundColor = "#63da80";
                    txtOutput.style.visibility = "visible";
                }

            }
            else{
                //display answer
                txtOutput.innerText = `${inpWord} is not a Palindrome`;
                txtOutput.style.backgroundColor = "#e9e062";
                txtOutput.style.visibility = "visible";
                break;
            }
        }
        

});

function hiddeOutput(){
    txtOutput.style.visibility = "hidden";
}

//reversed the array
function reverseArr(arr){

    let reversedArr=[];

    for (j = arr.length; j > 0 ; j--){
        reversedArr.push(arr[j-1]);
    }

    return reversedArr
}
    

    
