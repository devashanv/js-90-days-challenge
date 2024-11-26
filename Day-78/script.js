const container = document.querySelector(".container");

//definition------------------------------------------------------
function promiseDefinition(){

    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">JavaScript Promise</h2>
        <p class="description">
        JavaScript Promise is an object that allows to handle asynchronous tasks. It provides the result of an asynchronous task represented as a success(resolve) or error(reject). Also, It is used to avoid callback hell.
        </p>
        
        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            const samplePromise = new Promise((resolve, reject) => {<br/>
                <span class="code-pd">
                    resolve("If it is success");<br/>
                    reject("If it is error");<br/>
                </span>
            });<br/>

            samplePromise.then(() => {<br/>
                <span class="code-pd">
                    <span class="comment">//success</span>
                </span>
            }).catch(() => {<br/>
                <span class="code-pd">
                    <span class="comment">//error</span>
                </span>
            }).finally(() => {
                <span class="code-pd">
                    <span class="comment">//finall </span>
                </span>
            })
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            ->
        </p>
    `;
    container.appendChild(div);
}

function promiseImplment(){
    var arrOutput = [];

    //promise
    const randomPromise = new Promise((resolve, reject) => {

        let randomNum = Math.trunc(Math.random() * 2);
        console.log(randomNum);

        if (randomNum == 1){
            resolve("Random Number -> 1 : Success.");
        }else {
            reject("Random Number -> 0 : Error.");
        }
    });

    //implment promise
    randomPromise.then((result) => {
        //when ok or success
        arrOutput.push(result);
    }).catch((error) => {
        //when error
        arrOutput.push(error);
    }).finally(() => {
        //when when both status(success or error)
        console.log("Promise implementation done!");
    })


    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">JavaScript Promise Implementation</h2>
        <p class="description">
        When implementing promise it has 03 methods. The ".then()" method execute when promise is success, the ".catch()" method execute when promise is error, and ".finally()" alway execute after bothe of success and error method are running.<br/>

        Also, Promise has 3 status. The "pending" is refers the initial state of fulfiled or rtejected means the promise is working, it result is undifined, Secont status is "fullfilled", it refers the promise process is complete and it result is value. The last status is "rejected", refers the promise process is failed and it result is error.
        </p>
        
        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            const randomPromise = new Promise((resolve, reject) => {<br/>
                <span class="code-pd">
                    let randomNum = Math.trunc(Math.random() * 2); {<br/>

                    if (randomNum == 1){ {<br/>
                        <span class="code-pd">
                        resolve("Random Number -> 1 : Success."); {<br/>
                        </span>
                    }else { {<br/>
                        <span class="code-pd">
                        reject("Random Number -> 0 : Error."); {<br/>
                        </span>
                    } <br/>
                </span>
            });<br/>

            randomPromise.then(() => {<br/>
                <span class="code-pd">
                    <span class="comment">//promise success</span>
                    console.log(result);
                </span>
            }).catch(() => {<br/>
                <span class="code-pd">
                    <span class="comment">//promise error</span>
                    console.log(error);
                </span>
            }).finally(() => {
                <span class="code-pd">
                    <span class="comment">//finally after error or success</span>
                    console.log("Promise implementation done!");
                </span>
            })
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output" id="_output">
            -> Random Number -> 1 : Success.<br/>
            -> Promise implementation done!
        </p>
    `;
    container.appendChild(div);
}


promiseDefinition();
promiseImplment();