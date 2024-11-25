const container = document.querySelector(".container");
var testObj, deleteProp;

//declaration---------------------------------------------------
function callBackFun(){
    
    function addNumbers(firstNum, secondNum, callBackFun){
        let result = firstNum + secondNum;
        //callback
        callBackFun(result);
    }

    function displayResult(result){
        console.log("Result is: " + result);
    }

    addNumbers(10, 15, displayResult);


    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">Callbacks Definition</h2>
        <p class="description">JavaScript callback is a function, execute after another function finished. And, it is a function used as a argument to another function.
        (*note: When you use function as a argument, you must not need to use "()". )</p>
        
        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            function addNumbers(firstNum, secondNum, callBackFun){
                <span class="code-pd">
                    let result = firstNum + secondNum;<br/>
                    callBackFun(result);<br/>
                </span>
            }<br/>

            <span class="comment">//callback fun</span><br/>
            function displayResult(result){<br/>
                <span class="code-pd">
                    console.log("Result is: " + result);<br/>
                </span>
            }<br/>

            <span class="comment">//pass callback fun as aargument</span><br/>
            addNumbers(10, 15, displayResult);<br/>
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> Result is: 25<br/>
        </p>
    `;
    container.appendChild(div);
}


//callback in array---------------------------------------------
function callBackArray(){
    
    const numArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    const tenMultiples = numArr.map(num => num * 10);
    console.log(tenMultiples);

    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">Callbacks In Array</h2>
        <p class="description">JavaScript Array object has serveral methods that can be used as callback fuction. In this example used map() for array object callback implementation.</p>
        
        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            const numArr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];<br/>
            const tenMultiples = numArr.map(num => num * 10);<br/>
            console.log(tenMultiples);<br/>
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${tenMultiples}<br/>
        </p>
    `;
    container.appendChild(div);
}

//callback hell-------------------------------------------------
function callbackHell(){
    
    //callbac hel fun
    function callBackHell() {
        setTimeout(() => {
            console.log("Execute task 1");
            setTimeout(() => {
                console.log("Execute task 2");
                setTimeout(() => {
                    console.log("Execute task 3");
                    setTimeout(() => {
                        console.log("Execute task 4");
                        setTimeout(() => {
                            console.log("Execute task 5");
                            setTimeout(() => {
                                console.log("Execute task 6");
                                setTimeout(() => {
                                    console.log("Execute task 7");
                                    setTimeout(() => {
                                        console.log("Execute task 8");
                                        setTimeout(() => {
                                            console.log("Execute task 9");
                                            setTimeout(() => {
                                                console.log("Execute task 10");
                                            }, 1000)
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }

    callBackHell();

    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">Callback Hell</h2>
        <p class="description">JavaScript callbacks can has a situation to implement multiple callbacks in nested implementations. This situations called as a "Callback Hell". Its not wrong but make some diffuculties to maintain code, quality of code and debugging.</p>
        
        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            <span class="code-pd">
            function callBackHell() {<br/>
                setTimeout(() => {<br/>
                    <span class="code-pd">
                    console.log("Execute task 1");<br/>
                    setTimeout(() => {<br/>
                        <span class="code-pd">
                        console.log("Execute task 2");<br/>
                        setTimeout(() => {<br/>
                            <span class="code-pd">
                            console.log("Execute task 3");<br/>
                            setTimeout(() => {<br/>
                                <span class="code-pd">
                                console.log("Execute task 4");<br/>
                                setTimeout(() => {<br/>
                                    <span class="code-pd">
                                    console.log("Execute task 5");<br/>
                                    setTimeout(() => {<br/>
                                        <span class="code-pd">
                                        console.log("Execute task 6");<br/>
                                        setTimeout(() => {<br/>
                                            <span class="code-pd">
                                            console.log("Execute task 7");<br/>
                                            setTimeout(() => {<br/>
                                                <span class="code-pd">
                                                console.log("Execute task 8");<br/>
                                                setTimeout(() => {<br/>
                                                    <span class="code-pd">
                                                    console.log("Execute task 9");<br/>
                                                    setTimeout(() => {<br/>
                                                        <span class="code-pd">
                                                        console.log("Execute task 10");<br/>
                                                    }, 1000)<br/>
                                                    </span>
                                                }, 1000)<br/>
                                                </span>
                                            }, 1000)<br/>
                                            </span>
                                        }, 1000)<br/>
                                        </span>
                                    }, 1000)<br/>
                                    </span>
                                }, 1000)<br/>
                                </span>
                            }, 1000)<br/>
                            </span>
                        }, 1000)<br/>
                        </span>
                    }, 1000)<br/>
                    </span>
                }, 1000)<br/>
                </span>
            }<br/>
            </span>

            callBackHell();<br/>
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> Execute task 1<br/>
            -> Execute task 2<br/>
            -> Execute task 3<br/>
            -> Execute task 4<br/>
            -> Execute task 5<br/>
            -> Execute task 6<br/>
            -> Execute task 7<br/>
            -> Execute task 8<br/>
            -> Execute task 9<br/>
            -> Execute task 10<br/>
        </p>
    `;
    container.appendChild(div);
}


callBackFun();
callBackArray();
callbackHell();