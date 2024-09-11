
//declare characters
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbersDigits = "0123456789";
const specialCharacters = "<>?/'=-+_)(*&^%$#@!~.{}[]";
const allCharacters = upperLetters + lowerLetters + numbersDigits + specialCharacters;

//generate password
function generatePassword(){
    let randomPassword = "";

    //get characters
    randomPassword = 
            upperLetters[Math.floor(Math.random() * upperLetters.length)] +
            lowerLetters[Math.floor(Math.random() * lowerLetters.length)] +
            numbersDigits[Math.floor(Math.random() * numbersDigits.length)] +
            specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

    //generate 14 length password
    while(14 > randomPassword.length){
        randomPassword += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    //set password to inputfield
    document.getElementById("_randompassword").value = randomPassword;
}

//reset button
function resetPassword(){
    document.getElementById("_randompassword").value = "";
}
