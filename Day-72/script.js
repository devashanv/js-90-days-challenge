//initialize
const container = document.querySelector(".container");
var editArr;

//push method---------------------------------------------------
function pushMethod(){
    const languages = ["JavaScript", "Java", "Python", "PHP", "GO"];

    let divPush = document.createElement("div");
    divPush.classList.add("row");

    languages.push("Ruby")
    editArr = languages.join(" , ")
    //push method content
    divPush.innerHTML = `
        <h2 class="method-name">Array.push()</h2>
        <p class="description">JavaScript Array has a method called "push()". It allows adding a new element to the end, which means after the last element of an existing array.</p>
        <span style="color: #858585;">Syntax<br/></span>

        <p class="syntax">
            const languages = ["JavaScript", "Java", "Python", "PHP", "GO"];<br>
            languages.push("Ruby");
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${editArr}
        </p>
    `;
    container.appendChild(divPush);
}

//unshift method------------------------------------------------
function unshiftMethod(){
    const languages = ["JavaScript", "Java", "Python", "PHP", "GO"];

    let divUnshift = document.createElement("div");
    divUnshift.classList.add("row");

    languages.unshift("Ruby");
    editArr = languages.join(" , ");
    //push method content
    divUnshift.innerHTML = `
        <h2 class="method-name">Array.unshift()</h2>
        <p class="description">JavaScript Array has a method called "unshift()". It allows adding a new element to the starting position, which means befor the first element of an existing array.</p>
        <span style="color: #858585;">Syntax<br/></span>

        <p class="syntax">
            const languages = ["JavaScript", "Java", "Python", "PHP", "GO"];<br>
            languages.unshift("Ruby");
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${editArr}
        </p>
    `;
    container.appendChild(divUnshift);
}

//pop method------------------------------------------------
function popMethod(){
    const languages = ["JavaScript", "Java", "Python", "PHP", "GO"];

    let div = document.createElement("div");
    div.classList.add("row");

    editArr = languages.pop();
    //push method content
    div.innerHTML = `
        <h2 class="method-name">Array.pop()</h2>
        <p class="description">JavaScript Array has a method called "pop()". It allows remove the last element of an existing array.Also, it returns the removed element value.</p>

        <span style="color: #858585;">Syntax<br/></span>
        <p class="syntax">
            const languages = ["JavaScript", "Java", "Python", "PHP", "GO"]<br>
            let editArr = languages.pop();
            console.log(editArr);
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${editArr}
        </p>
    `;
    container.appendChild(div);
}

//shift method
function shiftMethod(){
    const languages = ["JavaScript", "Java", "Python", "PHP", "GO"];

    let div = document.createElement("div");
    div.classList.add("row");

    editArr = languages.shift()
    //push method content
    div.innerHTML = `
        <h2 class="method-name">Array.shift()</h2>
        <p class="description">JavaScript Array has a method called "shift()". It allows remove the first element of an existing array. Then after, re-arrange the indexes of array elements.</p>

        <span style="color: #858585;">Syntax<br/></span>
        <p class="syntax">
             const languages = ["JavaScript", "Java", "Python", "PHP", "GO"];<br>
             editArr = languages.shift();
             console.log(editArr);
            
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${editArr}
        </p>
    `;
    container.appendChild(div);
}

//toString method
function toStringMethod(){
    const languages = ["JavaScript", "Java", "Python", "PHP", "GO"];

    let div = document.createElement("div");
    div.classList.add("row");

    editArr = languages.toString();
    //push method content
    div.innerHTML = `
        <h2 class="method-name">Array.toString()</h2>
        <p class="description">JavaScript Array has a method called "toSyring()". It allows convert array to String. It provides array elements/values as comma separated values.</p>

        <span style="color: #858585;">Syntax<br/></span>
        <p class="syntax">
             const languages = ["JavaScript", "Java", "Python", "PHP", "GO"];<br>
             let editArr = languages.toString();
             console.log(editArr);
            
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${editArr}
        </p>
    `;
    container.appendChild(div);
}

//join method
function joinMethod(){
    const languages = ["JavaScript", "Java", "Python", "PHP", "GO"];

    let div = document.createElement("div");
    div.classList.add("row");

    editArr = languages.join(",");
    let editArr2 = languages.join("//");
    //push method content
    div.innerHTML = `
        <h2 class="method-name">Array.join()</h2>
        <p class="description">JavaScript Array has a method called "join()". It performe as same as toString() method, but we an specifiy the seperator.</p>

        <span style="color: #858585;">Syntax<br/></span>
        <p class="syntax">
             const languages = ["JavaScript", "Java", "Python", "PHP", "GO"];<br>
             let editArr = languages.join();
             let editArr2 = languages.join("//");
             console.log(editArr);
             console.log(editArr);
            
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${editArr} <br/>
            -> ${editArr2}
        </p>
    `;
    container.appendChild(div);
}

//at method
function atMethod(){
    const languages = ["JavaScript", "Java", "Python", "PHP", "GO"];

    let div = document.createElement("div");
    div.classList.add("row");

    editArr = languages.at(0);
    let editArr2 = languages.at(-1);
    //push method content
    div.innerHTML = `
        <h2 class="method-name">Array.at()</h2>
        <p class="description">JavaScript Array has a method called "at()". It allows to access array elemnts trough indexes.The "at()" method is a latest feature of the JS. It support both negative and positive indexes to access elements.</p>

        <span style="color: #858585;">Syntax<br/></span>
        <p class="syntax">
            const languages = ["JavaScript", "Java", "Python", "PHP", "GO"];<br>
            let editArr = languages.at(0);<br>
            let editArr2 = languages.at(-1);<br>
            console.log(editArr);<br>
            console.log(editArr);
            
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${editArr} <br/>
            -> ${editArr2}
        </p>
    `;
    container.appendChild(div);
}

//slice method
function sliceMethod(){
    const languages = ["JavaScript", "Java", "Python", "PHP", "GO"];

    let div = document.createElement("div");
    div.classList.add("row");

    editArr = languages.slice(2);
    //push method content
    div.innerHTML = `
        <h2 class="method-name">Array.slice()</h2>
        <p class="description">JavaScript Array has a method called "slice()". It allows slicing of a specific part from a existing array, but it not change the original array. Its crates a new array. We must needs to provide numebr of element as a argument to the slice() method. </p>

        <span style="color: #858585;">Syntax<br/></span>
        <p class="syntax">
            const languages = ["JavaScript", "Java", "Python", "PHP", "GO"];<br>
            let editArr = languages.slice(2);<br>
            console.log(languages);<br>
            console.log(editArr);
            
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${languages} <br/>
            -> ${editArr}
        </p>
    `;
    container.appendChild(div);
}

//length prop---------------------------------------------------
function lengthProp(){
    const languages = ["JavaScript", "Java", "Python", "PHP", "GO"];

    //lelngth prop
    let divLength = document.createElement("div");
    divLength.classList.add("row");
    //lenth method content
    divLength.innerHTML = `
        <h2 class="method-name">Array.length</h2>
        <p class="description">Array has property called "length". Its allows to get the length of an array. Length returns the number of elements/items in a array.</p>
        <span style="color: #858585;">Syntax<br/></span>
        <p class="syntax">
            const languages = ["JavaScript", "Java", "Python", "PHP"];<br>
            languages.length;
        </p>
        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${languages.length}
        </p>
    `;

    //pass elemnt into container
    container.appendChild(divLength);  
}

pushMethod();
unshiftMethod();
popMethod();
shiftMethod();
toStringMethod();
joinMethod();
atMethod();
sliceMethod();
lengthProp();
