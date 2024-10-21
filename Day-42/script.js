function sortSentence() {
    //initialize
    const inputSentence = document.getElementById("inp_sentence").value.toLowerCase();
    const outputSentence = document.getElementById("output_txt");
    const output = document.querySelector(".output");

    //create new array from input string
    var wordArr = inputSentence.split(" ");
    
    //declare variable array to cath each word and array for store result
    var word = "";
    var newArr = [];
    var wordSort;
    var sortedStr = "";
        
    //iterate array to get each word
    for(var i = 0; i < wordArr.length; i++)
    {
        //assign each word to variable
        word = wordArr[i];
            
        //each word sort in alphabet order and then it convert to string
        wordSort = word.split("").sort().join("");
        //the sorted word store in array 
        newArr.push(wordSort);
    }
        
    //new array sort again considering length of each word, using compare function
    newArr.sort(function(ele, nextEle){return ele.length - nextEle.length});
    
    sortedStr = newArr.join(' ');
    
    //return sorted array 
    outputSentence.innerText = sortedStr;
    output.style.display = "block";

      
}