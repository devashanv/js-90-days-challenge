//outer loop for each iterations
function selectionSort(){
    //get user input
    const inpList = document.getElementById("inp_list").value.toString();
    const output = document.getElementById("output");

    let arr = inpList.trim().split(",");

    for ( i = 0; i < arr.length; i++){
        var minIndex = i;

        //inner loop for each comparisions
        for (j = i + 1; j < arr.length; j++){

            if (arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        //swap values
        if (minIndex !== i){
            let tempValue = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = tempValue;
        }
    }

    //display sorted array
    output.innerText = `Sorted: ${arr}`;
    output.style.display = "block";
}

//hide output text
function hiddeOutput(){
    output.style.display = "none";
}


