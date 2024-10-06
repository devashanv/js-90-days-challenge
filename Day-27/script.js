//initialize
let btnGenerate = document.getElementById("btn-generate");
let ulContainer = document.querySelector(".pallet");

//declare color pallet generator
const palletGenarate = () => {

    ulContainer.innerHTML = "";
    //iterate each 4 color boxes
    for (let i=0; i < 4; i++){
        //gebnerate random hexcode
        let randomCode = Math.floor(Math.random() * 0xffffff).toString(16);
        //ensure code length == 6
        randomCode = `#${randomCode.padStart(6,0)}`;

        //create li element and add
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = ` <section class="color-box" style="background:${randomCode}"></section><span class="color-code">${randomCode}</span>`;

        //copy color code
        color.addEventListener("click", () => copyColor(color, randomCode));
        //assign to ul tag
        ulContainer.appendChild(color);
    }
};

//copy color fun
const copyColor = (elm, colorCode) => {
    //get olor
    const colorEle = elm.querySelector(".color-code");

    //add clipboard to color and assign to text color
    navigator.clipboard.writeText(colorCode).then(() =>{
        colorEle.innerText = "copied";
        //set delay and review color
        setTimeout(() => colorEle.innerText = colorCode, 1000);
    });
}

//call to function when click event
btnGenerate.addEventListener("click", palletGenarate);

//call to default
palletGenarate();