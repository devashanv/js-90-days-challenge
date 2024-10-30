
//outer loop for each iterations
function insertionSort(){
    //get user input
    const inpList = document.getElementById("inp_list").value.toString();
    const output = document.getElementById("output");

    let arr = inpList.trim().split(",");
    let incomingValue = 0;

    for (let i = 1; i < arr.length; i++){
        incomingValue = arr[i];

        let j = i -1;
        //inner loop for each unsorted comparisons
        while (j >= 0 && arr[j] > incomingValue){
            arr[j + 1] = arr[j];
            j--;
        }

        //insert value in correct index
        arr[j + 1] = incomingValue;
    }

    console.log(arr);

    //display sorted array
    output.innerText = `Sorted: ${arr}`;
    output.style.display = "block";
}

//hide output text
function hiddeOutput(){
    output.style.display = "none";
}


