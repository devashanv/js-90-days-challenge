const container = document.querySelector(".container");
var testObj, deleteProp;

//declaration---------------------------------------------------
function mathDefinition(){
    let randomNum = Math.random();

    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">Math Definition</h2>
        <p class="description">Math is s in-built object in JavaScript. It allows to performe mathematical function related to numbers. Special thing in Math object is it has not constructor.JS Math Object has number of properties and methods. We can easily used Math object properties or methods without crating new object.</p>

        <span style="color: #858585;">Syntax<br/></span>
        <p class="syntax">
            let randomNum = Math.random();<br/>

            console.log(randomNum);<br/>
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${randomNum}
        </p>
    `;
    container.appendChild(div);
}

//math methods--------------------------------------------------
function mathMethods(){
    let randomNum = Math.random();
    let customNum = Math.random() * (10 - 0) + 0;

    //maths roundings
    let nearestInt = Math.round(customNum);
    let upNearestInt = Math.ceil(customNum);
    let belowNearestInt = Math.floor(customNum);
    let intPart = Math.trunc(customNum);

    //maths basics funs
    let maxNum = Math.max(0, 5, 10, 2, 6, 8, -1, 4, 3, -2, 9);
    let minNum = Math.min(0, 5, 10, 2, 6, 8, -1, 4, 3, -2, 9);
    let absValue1 = Math.abs(9.25);
    let absValue2 = Math.abs(-9.25);
    let absValue3 = Math.abs(10-6);

    //roots
    let powerOfNumber = Math.pow(2, 3);
    let squareRoot = Math.sqrt(36);
    let cubicRoot = Math.cbrt(125);

    //logs
    let normalLog = Math.log(50);
    let logBase2 = Math.log2(16);
    let logBase10 = Math.log10(100);

    //trignometric
    let sinValue = Math.sin(60);
    let cosValue = Math.cos(60);
    let tanValue = Math.tan(60);

    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">Math Methods</h2>
        <p class="description">Math object has methods for perfom methametical fucntions, such as basic mathematics functions, number roundings, random generatings, square roots related functions, logarithmic, and trigonometric functions.</p>

       <p class="description">
            <span style="color: #858505;font">| Random number generating<br/></span>
            To generate random number we must need to used Math.random() method.(*note: its return random number between 0 - 1).<br/><br/>

            If you want to customize the random number generating range, you need to specify the max number of the rage.(Example 2)
        </p>

        <span style="color: #858585;">Syntax<br/></span>
        <p class="syntax">
            let randomNum = Math.random();<br/>
            console.log(randomNum);<br/>

            <span class="comment">//custom random number</span><br/>
            let customNum = Math.random() * 10;<br/>
            console.log(customNum);<br/>
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${randomNum}<br/>
            -> ${customNum}
        </p>


        <p class="description">
            <span style="color: #858505;font">| Number rounding<br/></span>
            Math has few method to round numers in different ways.<br/>
        </p>

        <span style="color: #858585;">Syntax<br/></span>
        <p class="syntax">
            <span class="comment">//generate custom random number</span><br/>
            let customNum = Math.random( ) * (10 - 0) + 0;
            console.log(customNum);<br/><br/>

            <span class="comment">//rounded nearest integer num</span><br/>
            let nearestInt = Math.round(customNum);<br/>
            console.log(nearestInt);<br/>

            <span class="comment">//rounded up nearest integer num</span><br/>
            let upNearestInt = Math.ceil(customNum);<br/>
            console.log(upNearestInt);<br/>

            <span class="comment">//rounded down nearest integer num</span><br/>
            let belowNearestInt = Math.floor(customNum);<br/>
            console.log(belowNearestInt);<br/>
            
            <span class="comment">//returns integer part of random num</span><br/>
            let intPart = Math.trunc(customNum);<br/>
            console.log(intPart);<br/>
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${customNum}<br/>
            -> ${nearestInt}<br/>
            -> ${upNearestInt}<br/>
            -> ${belowNearestInt}<br/>
            -> ${intPart}<br/>
        </p>


        <p class="description">
            <span style="color: #858505;font">| Basic mathematics functions<br/></span>
        </p>

        <span style="color: #858585;">Syntax<br/></span>
        <p class="syntax">
            <span class="comment">//returns max number in a list num</span><br/>
            let maxNum = Math.max(0, 5, 10, 2, 6, 8, -1, 4, 3, -2, 9);<br/>

            <span class="comment">//returns min number in a list num</span><br/>
            let minNum = Math.min(0, 5, 10, 2, 6, 8, -1, 4, 3, -2, 9);<br/>

            <span class="comment">//returns absolute value</span><br/>
            let absValue1 = Math.abs(9.25);<br/>
            let absValue2 = Math.abs(-9.25);<br/>
            let absValue3 = Math.abs(10 - 6);<br/><br/>

            console.log(maxNum);<br/>
            console.log(minNum);<br/>
            console.log(absValue1);<br/>
            console.log(absValue2);<br/>
            console.log(absValue3);<br/>
        </p>
        
        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${maxNum}<br/>
            -> ${minNum}<br/>
            -> ${absValue1}<br/>
            -> ${absValue2}<br/>
            -> ${absValue3}
        </p>


         <p class="description">
            <span style="color: #858505;font">| Roots fuctions<br/></span>
        </p>

        <span style="color: #858585;">Syntax<br/></span>
        <p class="syntax">
            let powerOfNumber = Math.pow(2, 3);<br/>
            let squareRoot = Math.sqrt(36);<br/>
            let cubicRoot = Math.cbrt(125);<br/><br/>

            console.log(powerOfNumber);<br/>
            console.log(squareRoot);<br/>
            console.log(cubicRoot);<br/>
        </p>
        
        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${powerOfNumber}<br/>
            -> ${squareRoot}<br/>
            -> ${cubicRoot}<br/>
        </p>


        <p class="description">
            <span style="color: #858505;font">| Logorithm fuctions<br/></span>
        </p>

        <span style="color: #858585;">Syntax<br/></span>
        <p class="syntax">
            let normalLog = Math.log(50);<br/>
            let logBase2 = Math.log2(16);<br/>
            let logBase10 = Math.log10(100);<br/><br/>

            console.log(normalLog);<br/>
            console.log(logBase2);<br/>
            console.log(logBase10);<br/>
        </p>
        
        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${normalLog}<br/>
            -> ${logBase2}<br/>
            -> ${logBase10}<br/>
        </p>


            <span style="color: #858505;font">| Trigonometric fuctions<br/></span>
        </p>

        <span style="color: #858585;">Syntax<br/></span>
        <p class="syntax">
            let sinValue = Math.sin(60);<br/>
            let cosValue = Math.cos(60);<br/>
            let tanValue = Math.tan(60);<br/><br/>

            console.log(sinValue);<br/>
            console.log(cosValue);<br/>
            console.log(tanValue);<br/>
        </p>
        
        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${sinValue}<br/>
            -> ${cosValue}<br/>
            -> ${tanValue}<br/>
        </p>
    `;
    container.appendChild(div);
}

function mathProperties(){
    
    //maths props
    let piValue = Math.PI;
    let numEulers = Math.E;
    let naturalLogBase2 = Math.LN2;
    let naturalLogBase10 = Math.LN10;
    let squareRootOf2 = Math.SQRT2;
    let squareRootOfHalf = Math.SQRT1_2;
    let logBase2E = Math.LOG2E;
    let logBase10E = Math.LOG10E;

    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">Math Properties</h2>
        <p class="description">Math object properties refers the various standards constants of mathematics. Math object properties are statics. We can access these properties vai the Math object.</p>

        <span style="color: #858585;">Syntax<br/></span>
        <p class="syntax">
            let piValue = Math.PI;<br/>
            let numEulers = Math.E;<br/>
            let naturalLogBase2 = Math.LN2;<br/>
            let naturalLogBase10 = Math.LN10;<br/>
            let squareRootOf2 = Math.SQRT2;<br/>
            let squareRootOfHalf = Math.SQRT1_2;<br/>
            let logBase2E = Math.LOG2E;<br/>
            let logBase10E = Math.LOG10E;<br/><br/>

            console.log(piValue);<br/>
            console.log(numEulers);<br/>
            console.log(naturalLogBase2);<br/>
            console.log(naturalLogBase10);<br/>
            console.log(squareRootOf2);<br/>
            console.log(squareRootOfHalf);<br/>
            console.log(logBase2E);<br/>
            console.log(logBase10E);<br/>
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${piValue}<br/>
            -> ${numEulers}<br/>
            -> ${naturalLogBase2}<br/>
            -> ${naturalLogBase10}<br/>
            -> ${squareRootOf2}<br/>
            -> ${squareRootOfHalf}<br/>
            -> ${logBase2E}<br/>
            -> ${logBase10E}<br/>
        </p>
    `;
    container.appendChild(div);
}

//called to funs
mathDefinition();
mathMethods();
mathProperties();