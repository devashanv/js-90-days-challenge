
//assign contents
let qrImage = document.getElementById("imageqr");
let qrInputText = document.getElementById("inputtext");

//qr generator function
function qrGenerator(){
    //get input text and generate qr image
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrInputText.value;
    
    //change visibility
    qrImage.style.visibility = "visible";

   
}