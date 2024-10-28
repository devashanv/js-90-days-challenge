//initialize    
const btnSort = document.getElementById("btn_sort");
const output = document.getElementById("output");

//sort fun
btnSort.addEventListener("click", () => {
    const inpList = document.getElementById("inp_list").value;

    let arr = inpList.trim().split(" ");

    let iteration = 0;
    let comparison = 0;

    //bubble sort
    //iterate each element
    for ( i = 0; i < arr.length - 1; i++){
        iteration += 1;
        let swaped = false;

        for (j = 0; j < arr.length - i - 1; j++){
            comparison += 1;

            //check greater than value
            if (arr[j] > arr[j + 1]){
                //swap values
                let tmpValue = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1 ] = tmpValue;

                swaped = true;
            }
        }

        //end swaped whem length is over
        if(!swaped){
            break;
        }

    }


    //display sorted array
    output.innerText = `Sorted: ${arr}`;
    output.style.display = "block";

});

//hide output text
function hiddeOutput(){
    output.style.display = "none";
}