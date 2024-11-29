const container = document.querySelector(".container");

//definition---------------------------------------------------
function defDestructure(){
    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">JavaScript Destructring</h2>
        <p class="description">
            JavaScript Destructuring is a method of exract properties/values from JS objects and store that into variables. Destructuring allows to access objects properties/values by using isolative variables.
        </p>

        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            <span class="comment">//object destructuring</span><br/>
            let {varOne, varTwo, varThree} = object;<br/><br/>

            <span class="comment">//array | string destructuring</span><br/>
            let [valueOne, valueTwo, valueThree] = myArr
        </p>
        
    `;
    container.appendChild(div);
}

function objectDestructure(){

    const phone = {
        model: "iPhone16",
        brand: "Apple",
        color: "Gold"
    }

    //destructure objetc
    let {model, brand, color} = phone;
    console.log(model);
    console.log(brand);
    console.log(color);

    //customize variables
    let {model: phoneModel, brand: phoneBrand, color: phoneColor} = phone;

    console.log(phoneModel);
    console.log(phoneBrand);
    console.log(phoneColor);


    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">Object Destructuring</h2>
        <p class="description">
            Object Destructuring extract object propertirs into variables.
        </p>
        
        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            const phone = {<br/>
                <span class="code-pd">
                model: "iPhone16",<br/>
                brand: "Apple",<br/>
                color: "Gold" <br/>
                </span>
            }<br/>

            <span class="comment">//object destructuring</span><br/>
            let {model, brand, color} = phone;<br/>

            console.log(model);<br/>
            console.log(brand);<br/>
            console.log(color);<br/>
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${model}<br/>
            -> ${brand}<br/>
            -> ${color}
        </p>

        <p class="description">
            <span style="color: #858505;font">| Customize variables</span><br/>

            We can customize the destructuring variable as we want.({variable: customizeName})
        </p>
        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            const phone = {<br/>
                <span class="code-pd">
                model: "iPhone16",<br/>
                brand: "Apple",<br/>
                color: "Gold" <br/>
                </span>
            }<br/>

            <span class="comment">//Customize variables</span><br/>
            let {model: phoneModel, brand: phoneBrand, color: phoneColor} = phone;<br/>

            console.log(phoneModel);<br/>
            console.log(phoneBrand);<br/>
            console.log(phoneColor);<br/>
        </p>
                
        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${phoneModel}<br/>
            -> ${phoneBrand}<br/>
            -> ${phoneColor}
        </p>

    `;
    container.appendChild(div);
}

function arrayDestructure(){

    const animals = ["Dog", "Cat", "Lion", "Elephant"];

    //array destructuring
    let [animalOne, animalTwo, animalThree, animalFour] = animals;

    console.log(animalOne);
    console.log(animalTwo);
    console.log(animalThree);
    console.log(animalFour);

    //destructuring by array indexes
    let {[0]:firstAnimal, [2]:thirdAnimal} = animals;
    console.log(firstAnimal);
    console.log(thirdAnimal);

    //skipping values
    let [firstValue, , , fourthValue] = animals;
    console.log(firstValue);
    console.log(fourthValue);

    //rest property
    let [first, ...rest] = animals;

    console.log(rest);

    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">Array Destructuring</h2>
        <p class="description">
            In Array Destructuring extract array values into variables. We use square brackets [] for array destructuring.
        </p>
        
        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            const animals = ["Dog", "Cat", "Lion", "Elephant"];<br/>

            <span class="comment">//array destructuring</span><br/>
            let [animalOne, animalTwo, animalThree, animalFour] = animals;<br/><br/>

            console.log(animalOne);<br/>
            console.log(animalTwo);<br/>
            console.log(animalThree);<br/>
            console.log(animalFour);<br/>
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${animalOne}<br/>
            -> ${animalTwo}<br/>
            -> ${animalThree}<br/>
            -> ${animalFour}
        </p>

        <p class="description">
            <span style="color: #858505;font">| Destructuring using array index</span><br/>

            We can use array indexes for destructuring. When use array indexes for destructuring we have to use curly brackets{}.
        </p>
        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            const animals = ["Dog", "Cat", "Lion", "Elephant"];<br/>

            <span class="comment">//array indexes</span><br/>
            let {[0]:firstAnimal, [2]:thirdAnimal} = animals;<br/><br/>

            console.log(firstAnimal);<br/>
            console.log(thirdAnimal);
        </p>
                
        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${firstAnimal}<br/>
            -> ${thirdAnimal}
        </p>

        <p class="description">
            <span style="color: #858505;font">| Skipping array values</span><br/>

            We can skip array values in array destructuring by using empty comma separaters.
        </p>
        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            const animals = ["Dog", "Cat", "Lion", "Elephant"];<br/>

            <span class="comment">//skkipped 2nd & 3rd values</span><br/>
            let [firstValue, , , fourthValue] = animals;<br/>

            console.log(firstValue);<br/>
            console.log(fourthValue);
        </p>
                
        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${firstValue}<br/>
            -> ${fourthValue}
        </p>

        <p class="description">
            <span style="color: #858505;font">|...rest property</span><br/>

            The rest operator(...) allows to capture all the remaining value and add that values into new array. 
        </p>
        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            const animals = ["Dog", "Cat", "Lion", "Elephant"];<br/>

            <span class="comment">//rest property</span><br/>
            let [first, ...rest] = animals; <br/><br/>

            console.log(rest);<br/>
        </p>
                
        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${rest}<br/>
        </p>

    `;
    container.appendChild(div);
}


function stringDestructure(){

    const strLanguage = "JavaScript";

    //string destructuring
    let [char1, char2, char3, ...rest] = strLanguage;

    console.log(char1);
    console.log(char2);
    console.log(char3);
    console.log(rest);

    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">String Destructuring</h2>
        <p class="description">
            The String Destructuring concept same as the array destructuring. It extract the each characters into variables.
        </p>
        
        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            const strLanguage = "JavaScript";<br/>

            <span class="comment">//string destructuring</span><br/>
            let [char1, char2, char3, ...rest] = strLanguage;<br/>

            console.log(char1);<br/>
            console.log(char2);<br/>
            console.log(char3);<br/>
            console.log(rest);
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${char1}<br/>
            -> ${char2}<br/>
            -> ${char3}<br/>
            -> ${rest}
        </p>

    `;
    container.appendChild(div);
}

function swapVarValues(){

    let strLanOne = "JavaScript";
    let strLanTwo = "Java";

    //befor swapping
    console.log("Before -> strLanOne: " + strLanOne);
    console.log("Before -> strLanTwo: " + strLanTwo);

    //swap values
    [strLanOne, strLanTwo] = [strLanTwo, strLanOne];

    //after swapping
    console.log("After -> strLanOne: " + strLanOne);
    console.log("After -> strLanTwo: " + strLanTwo);


    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">Swapping variable values</h2>
        <p class="description">
            Swapping is the important thing in programming. Specially, swapping is done major role in sorting algorythms. We can swap values simply by using JS destructuring.
        </p>
        
        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            let strLanOne = "JavaScript";<br/>
            let strLanTwo = "Java";<br/><br/>

            <span class="comment">//befor swapping</span><br/>
            console.log("Before -> strLanOne: " + strLanOne);<br/>
            console.log("Before -> strLanTwo: " + strLanTwo);<br/><br/>

            <span class="comment">//swap values</span><br/>
            [strLanOne, strLanTwo] = [strLanTwo, strLanOne];<br/><br/>

            <span class="comment">//after swapping</span><br/>
            console.log("After -> strLanOne: " + strLanOne);<br/>
            console.log("After -> strLanTwo: " + strLanTwo);<br/>
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> Before -> strLanOne: JavaScript <br/>
            -> Before -> strLanTwo: Java <br/><br/>
            -> After -> strLanOne: Java <br/>
            -> After -> strLanTwo: JavaScript
        </p>

    `;
    container.appendChild(div);
}




defDestructure();
objectDestructure();
arrayDestructure();
stringDestructure();
swapVarValues();