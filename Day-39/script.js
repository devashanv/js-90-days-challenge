
//shoes width size chart
var sizeText = [
    {size:7, width:8.7, type:"Narrow(AA)"},
    {size:7, width:9.2, type:"Medim(CD)"},
    {size:7, width:9.7, type:"Wide(E)"},
    {size:7, width:10.2, type:"Wide(E)"},
    
    {size:7.5, width:8.9, type:"Narrow(AA)"},
    {size:7.5, width:9.4, type:"Medim(CD)"},
    {size:7.5, width:9.8, type:"Wide(E)"},
    {size:7.5, width:10.3, type:"Wide(E)"},
    
    {size:8, width:9.0, type:"Narrow(AA)"},
    {size:8, width:9.5, type:"Medim(CD)"},
    {size:8, width:10, type:"Wide(E)"},
    {size:8, width:10.5, type:"XWide(4E)"},
    
    {size:8.5, width:9.2, type:"Narrow(AA)"},
    {size:8.5, width:9.7, type:"Medim(CD)"},
    {size:8.5, width:10.2, type:"Wide(E)"},
    {size:8.5, width:10.6, type:"XWide(4E)"},
    
    {size:9, width:9.4, type:"Narrow(AA)"},
    {size:9, width:9.8, type:"Medim(CD)"},
    {size:9, width:10.3, type:"Wide(E)"},
    {size:9, width:10.8, type:"XWide(4E)"},
    
    {size:9.5, width:9.5, type:"Narrow(AA)"},
    {size:9.5, width:10.0, type:"Medim(CD)"},
    {size:9.5, width:10.5, type:"Wide(E)"},
    {size:9.5, width:11.0, type:"XWide(4E)"},
    
    {size:10, width:9.7, type:"Narrow(AA)"},
    {size:10, width:10.2, type:"Medim(CD)"},
    {size:10, width:10.6, type:"Wide(E)"},
    {size:10, width:11.1, type:"XWide(4E)"},
];



//men shose size caculation
function getShoeSize() {
    //get length & width
    let footLength, footWidth, outputTxt, footType;

    footLength = document.getElementById("inp_foot_length").value;
    footWidth = document.getElementById("inp_foot_width").value;
    outputTxt = document.getElementById("output_text");
    
    //check men foot length assign size to variable
    if (footLength <= 24.8){
        menSize = 7;
    }
    else if(footLength <= 25.4){
        menSize = 7.5;
    }
    else if(footLength <= 25.7){
        menSize = 8;
    }
    else if(footLength <= 26){
        menSize = 8.5;
    }
    else if(footLength <= 26.7){
        menSize = 9;
    }
    else if(footLength <= 27){
        menSize = 9.5;
    }
    else if(footLength <= 27.3){
        menSize = 10;
    }

    //previous width variable
    var pw = 0; 

    //choose men foot type & asiign to variable
    for (var i = 0; i < sizeText.length; i++){
        if (menSize == sizeText[i].size){
            if(footWidth > pw && footWidth <= sizeText[i].width){
                footType = sizeText[i].type;
                break;
            }
            pw = sizeText[i].width;
        }
    }
    //format final answer
    let FinalSize = "UK size is: " + menSize + " and type: " + footType;

    //display output
    outputTxt.innerHTML = FinalSize;
    outputTxt.style.display = "block";

}