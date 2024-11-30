const container = document.querySelector(".container");

//definition---------------------------------------------------
function excepDefining(){
    let div = document.createElement("div");
    div.classList.add("row");

    div.innerHTML = `
        <h2 class="method-name">Exception Handling Defining</h2>
        <p class="description">
            Exception handling is an important concept and practice of programming. It allows to manage the unexpected errors throughout the program execution. its a valuable practice to avoid end-user confusion and provide meaningful error messages to the users.
        </p>
        
    `;
    container.appendChild(div);
}


function tryCatchBlock(){

    try {
        errorNum;
        console.log(errorNum);
    }
    catch(err) {
        console.log(err);
    }

    let div = document.createElement("div");
    div.classList.add("row");

    div.innerHTML = `
        <h2 class="method-name">JavaScript try | catch</h2>
        <p class="description">
            JavaScript has try/catch block to handle the errors in meaningful way. The try block allows to define the codes when we want to implement and tested that it has an errors or not. The catch block allows to find(catch) the error associated with try block code base, then deliver the error of it.
        </p>

        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            try { <br/>
                <span class="code-pd">
                <span class="comment">//codes to be tested</span>
                errorNum;<br/>
                console.log(errorNum);<br/>
                </span>
            }<br/>
            catch(err) {<br/>
                <span class="code-pd">
                <span class="comment">//catch error in try block</span>
                console.log(err);<br/>
                </span>
            }
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ReferenceError: errorNum is not defined
        </p>
        
    `;
    container.appendChild(div);
}

function finalKeyword(){

    try {
        errorNum;
        console.log(errorNum);
    }
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("Execution done!")
    }

    let div = document.createElement("div");
    div.classList.add("row");

    div.innerHTML = `
        <h2 class="method-name">finally statement</h2>
        <p class="description">
            The "finally" statement execute after both try and catch execution. 
        </p>

        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            try { <br/>
                <span class="code-pd">
                <span class="comment">//codes to be tested</span>
                errorNum;<br/>
                console.log(errorNum);<br/>
                </span>
            }<br/>
            catch(err) {<br/>
                <span class="code-pd">
                <span class="comment">//catch error in try block</span>
                console.log(err);<br/>
                </span>
            } <br/>
            finally { <br/>
                <span class="code-pd">
                console.log("Execution done!"); <br/>
                </span>
            } <br/>
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ReferenceError: errorNum is not defined <br/>
            -> Execution done!
        </p>
        
    `;
    container.appendChild(div);
}

function errorObject(){

    try {
        errorNum;
        console.log(errorNum);
    }
    catch(err) {
        //error object name property
        console.log(err.name);
        //error object message property
        console.log(err.message);
    }
    finally {
        console.log("Execution done!")
    }

    let div = document.createElement("div");
    div.classList.add("row");

    div.innerHTML = `
        <h2 class="method-name">JavaScript Error Object</h2>
        <p class="description">
            JavaScript provides error object. Error object has two properties suc as "name" and "message". The "name" property returns the occur error name, The "message" property returns the error definition.
        </p>

        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            try { <br/>
                <span class="code-pd">
                <span class="comment">//codes to be tested</span>
                errorNum;<br/>
                console.log(errorNum);<br/>
                </span>
            }<br/>
            catch(err) {<br/>
                <span class="code-pd">
                <span class="comment">//error object name property</span>
                console.log(err.name);<br/>

                <span class="comment">//error object message property</span>
                console.log(err.message);
                </span>
            }<br/>
            finally {<br/>
                <span class="code-pd">
                console.log("Execution done!");<br/>
                </span>
            }<br/>
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ReferenceError <br/>
            -> errorNum is not defined <br/>
            -> Execution done!
        </p>
        
    `;
    container.appendChild(div);
}


function throwStatement(){

    let error = true;

    try {
        if (error){
            throw "Custom error: True";
        }
        else {
            throw "Custome error: False";
        }
    }
    catch(err) {
        console.log(err);
    }
    finally {
        console.log("aaaExecution done!")
    }

    let div = document.createElement("div");
    div.classList.add("row");

    div.innerHTML = `
        <h2 class="method-name">JavaScript Custom Error</h2>
        <p class="description">
            JavaScript allows to create custom errors. We can declare custom error by using "throw" keyword. The custom error can be String, Boolean, Number or object.
        </p>

        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            let error = true;<br/>

            try {<br/>
                <span class="code-pd">
                    if (error){<br/>
                        <span class="code-pd">
                        <span class="comment">//custom error create</span>
                            throw "Custom error: True";<br/>
                        </span>
                    }<br/>
                    else {<br/>
                        <span class="code-pd">
                        <span class="comment">//custom error create</span>
                            throw "Custome error: False";<br/>
                        </span>
                    }<br/>
                </span>
            }<br/>
            catch(err) {<br/>
                <span class="code-pd">
                <span class="comment">//display custom error</span>
                    console.log(err);<br/>
                </span>
            }<br/>
            finally {<br/>
                <span class="code-pd">
                    console.log("Execution done!");<br/>
                </span>
            }<br/>
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> Custom error: True <br/>
            -> Execution done!
        </p>
        
    `;
    container.appendChild(div);
}


excepDefining();
tryCatchBlock();
finalKeyword();
errorObject();
throwStatement();