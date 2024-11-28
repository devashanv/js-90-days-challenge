const container = document.querySelector(".container");

//loops----------------------------------------------------
function jsLoops(){
    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">Loops Definition</h2>
        <p class="description">
            Loops allows to execite iterations task within one single code block. It ensure the programme efficiency and reducing the code redundency.<br/>

            In Javascript has few types of loops. Some ones are specialize fo the specific tak. In this I will cover these loops types of JS.

        </p>
        
    `;
    container.appendChild(div);
}

function forLoop(){

    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">for Loop</h2>
        <p class="description">
            JavaScript "for loop" we can use situation like we knwon the number of iterations want to be done.
        </p>
        
        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            for (iteration variable; condition; incrment/decrement){<br/>
                <span class="code-pd">
                    //loop body code here<br/>
                 </span>
            }<br/>
           
            <span class="comment">//for loop example</span><br/>
            for (let i = 0; i < 5; i++){<br/>
                <span class="code-pd">
                    console.log("Iteration: " + i)<br/>
                </span>
            }<br/>
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            ->Iteration: 0 <br/>
            ->Iteration: 1 <br/>
            ->Iteration: 2 <br/>
            ->Iteration: 3 <br/>
            ->Iteration: 4
        </p>
    `;
    container.appendChild(div);
}

function forInLoop(){

    const dog = {
        name: "Lucky",
        age:10, 
        color: "Brown"
    }

    for (let prop in dog){
        console.log(prop + ": " + dog[prop]);
    }

    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">for in Loop</h2>
        <p class="description">
            JavaScript "for in loop" we can use to iteration of object properties.
        </p>
        
        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            const dog = {<br/>
                <span class="code-pd">
                name: "Lucky",<br/>
                age:10, <br/>
                color: "Brown"<br/>
                </span>
            }<br/><br/>


            for (let prop in dog){<br/>
                <span class="code-pd">
                console.log(prop + ": " + dog[prop]);<br/>
                </span>
            }<br/>
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> name: Lucky <br/>
            -> age: 10 <br/>
            -> color: Brown <br/>
        </p>
    `;
    container.appendChild(div);
}

function forOfLoop(){

    const animals = ["Dog", "Cat", "Elephant", "Lion"];
    const strLanguage = "Word";

    for (let animal of animals){
        console.log(animal);
    }

    for (let char of strLanguage){
        console.log(char);
    }

    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">for of Loop</h2>
        <p class="description">
            JavaScript "for of" loop we can use to implement iteration of iterable object values.
        </p>
        
        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            const animals = ["Dog", "Cat", "Elephant", "Lion"];<br/>
            const strLanguage = "Word";<br/><br/>

            <span class="comment">//iteration of array object</span><br/>
            for (let animal of animals){<br/>
                <span class="code-pd">
                console.log(animal);<br/>
                </span>
            }<br/><br/>

            <span class="comment">//iteration of string object</span><br/>
            for (let char of strLanguage){<br/>
                <span class="code-pd">
                console.log(char);<br/>
                </span>
            }<br/>
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> Dog<br/>
            -> Cat<br/>
            -> Elephant<br/>
            -> Lion<br/><br/>

            -> W<br/>
            -> o<br/>
            -> r<br/>
            -> d<br/>
        </p>
    `;
    container.appendChild(div);
}

function whileLoop(){
    
    let i = 0;
    while (i < 5){
        console.log("Iteration: " + i );
        i++;
    }

    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">while Loop</h2>
        <p class="description">
            JavaScript "while" loop we can use for situations like we unknown the exact iteration that wants to be done. The "while" loop iterate till condition is true, when it false it stop the iterations.<br/>

            We cannot initialize iterate variable inside thye loop insialization.must need to initialize iterative variable befor the loop. Also, we need to set increment/decrement operation inside the loop body.
        </p>
        
        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            let i = 0;<br/>
            while (i < 5){<br/>
                <span class="code-pd">
                console.log("Iteration: " + i );<br/>
                i++;<br/>
                </span>
            }<br/>
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> Iteration: 0 <br/>
            -> Iteration: 1 <br/>
            -> Iteration: 2 <br/>
            -> Iteration: 3 <br/>
            -> Iteration: 4 
        </p>
    `;
    container.appendChild(div);
}

function doWhileLoop(){

    let j = 0;
    do {
        j++;
        console.log("Iteration: " + j);
    }while (j < 5);

    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">do-while Loop</h2>
        <p class="description">
            JavaScript "do-while" loop has same concept of while loop, but main difference is "do-while" loop run the code block without checking condition in one time, then execute code block checking condition met the true or false. <br/>
        </p>
        
        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            let j = 0;<br/>
            do {<br/>
                <span class="code-pd">
                j++;<br/>
                console.log("Iteration: " + j);<br/>
                </span>
            }while (j < 5);<br/>
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> Iteration: 1 <br/>
            -> Iteration: 2 <br/>
            -> Iteration: 3 <br/>
            -> Iteration: 4 <br/>
            -> Iteration: 5 
        </p>
    `;
    container.appendChild(div);
}

function loopKeywords(){

    for (let i = 0; i < 5 ; i++){

        if (i == 2){
            break;
        }
        console.log("Iteration: " + i);
    }

    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">continue | break Keywords</h2>
        <p class="description">
            JavaScript use continue and break keywords for difference operations requirements. <br/>
            <span style="color: #858505;font">| continue keyword</span><br/>

            This use for jump to next iteration in a loop.
    
        </p>
        
        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            for (let i = 0; i < 5 ; i++){<br/>
                <span class="code-pd">
                if (i == 2){<br/>
                    <span class="code-pd">
                    continue;<br/>
                    </span>
                }<br/>
                console.log("Iteration: " + i);<br/>
                </span>
            }
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> Iteration: 0 <br/>
            -> Iteration: 1 <br/>
            -> Iteration: 3 <br/>
            -> Iteration: 4 
        </p>

        <p class="description">
            <span style="color: #858505;font">| break keyword</span><br/>

            This use for exit from the loop.
        </p>

         <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            for (let i = 0; i < 5 ; i++){<br/>
                <span class="code-pd">
                if (i == 2){<br/>
                    <span class="code-pd">
                    break;<br/>
                    </span>
                }<br/>
                console.log("Iteration: " + i);<br/>
                </span>
            }
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> Iteration: 0 <br/>
            -> Iteration: 1 
        </p>
    `;
    container.appendChild(div);
}

jsLoops();
forLoop();
forInLoop();
forOfLoop();
whileLoop();
doWhileLoop();
loopKeywords();