const container = document.querySelector(".container");

//definition---------------------------------------------------
function domDefining(){
    let div = document.createElement("div");
    div.classList.add("row");

    div.innerHTML = `
        <h2 class="method-name">JavaScript DOM manipulations</h2>
        <p class="description">
            DOM is refers, Document Object Model. Also its a programming interface for HTML. It allows to define the HTML elements as a objects. <br/> 

            Using JavaScript can change DOM elements, adding properties, styling, removing elemnts and attributes and so on. 
        </p>
        
    `;
    container.appendChild(div);
}

function accessDOMElements(){

    const accessByID = document.getElementById("eleId");
    const accessByClass = document.getElementsByClassName("eleClass");
    const accessByTag = document.getElementsByTagName("p");

    const accessByClassQuery = document.querySelector(".eleClass");
    const accessByClassQueryAll = document.querySelectorAll(".eleClass");

    let div = document.createElement("div");
    div.classList.add("row");

    div.innerHTML = `
        <h2 class="method-name">Access DOM Elements</h2>
        <p class="description">
            JavaScript various methods for access the DOM elements by using various tehniques such as getElementById(), getElementByClassName() and getElementByTagName().
        </p>

        <span style="color: #858585;">Syntax</span>
        <p class="syntax">

            const accessByID = document.getElementById("eleId"); <br/> 

            const accessByClass = document.getElementsByClassName("eleClass"); <br/> 

            const accessByTag = document.getElementsByTagName("p"); <br/> 

            const accessByClassQuery = document.querySelector(".eleClass"); <br/> 

            const accessByClassQueryAll = document.querySelectorAll(".eleClass"); <br/>
            
            const accessByClassQuery = document.querySelector("#eleID");

        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> 
        </p>
        
    `;
    container.appendChild(div);
}

function changingDOMElements(){

    let div = document.createElement("div");
    div.classList.add("row");

    div.innerHTML = `
        <h2 class="method-name">DOM Elements Manipulation</h2>
        <p class="description">
            JavaScript DOM allows to change the exsisting elemnts changes such as elements text content, HTML content, elements styles and etc.
        </p>

        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            const accessByIdElement = document.getElementById("eleId");<br/> 

            <span class="comment">//change content HTML stream</span><br/>
            document.write = "new text"; <br/>

            <span class="comment">//change element text content</span><br/>
            accessByIdElement.textContent = "change new text"; <br/>

            <span class="comment">//change element HTML content</span><br/>
            accessByIdElement.innerHTML = "new HTML content"; <br/>

            <span class="comment">//change element styles</span><br/>
            accessByIdElement.style.color = "new color value";<br/>

            <span class="comment">//add element attributes</span><br/>
            accessByIdElement.attribute = "class";<br/> 
            accessByIdElement.setAttribute("id", "id_value");<br/>

        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> 
        </p>
        
    `;
    container.appendChild(div);
}

function eventsHandling(){

    let div = document.createElement("div");
    div.classList.add("row");

    div.innerHTML = `
        <h2 class="method-name">DOM Events handling</h2>
        <p class="description">
            JavaScript allows to handle the evenets on DOM elements. We can use addEventListner() method for emplementation of events.
        </p>

        <span style="color: #858585;">Syntax</span>
        <p class="syntax">

            <span class="comment">//implemenmts when on click</span><br/>
            element.addEventListner("click", fuction implements);<br/>

            <span class="comment">//implemenmts when on double click</span><br/>
            element.addEventListner("dblclick", fuction implements);<br/>

            <span class="comment">//implemenmts when mouse preseed</span><br/>
            element.addEventListner("mousedown", fuction implements);<br/>

            <span class="comment">//implemenmts when mouse released</span><br/>
            element.addEventListner("mouseup", fuction implements);<br/>

            <span class="comment">//implemenmts when mouse cursor pointed</span><br/>
            element.addEventListner("mouseover", fuction implements);<br/>

            <span class="comment">//implemenmts when mouse pointer leaves</span><br/>
            element.addEventListner("mouseout", fuction implements);<br/>

        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> 
        </p>
        
    `;
    container.appendChild(div);
}


domDefining();
accessDOMElements();
changingDOMElements();
eventsHandling();