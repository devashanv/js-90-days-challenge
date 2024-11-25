const container = document.querySelector(".container");
var testObj, deleteProp;

//js sync-------------------------------------------------------
function syncJavaScript(){
    
    // console.log("Execute task 1.");
    // console.log("Execute task 2.");
    // console.log("Execute task 3.");
    // console.log("Execute task 4.");
    // console.log("Execute task 5.");


    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">JavaScript Synchronous</h2>
        <p class="description">
        JavaScript synchronous programming refers to executing/running coding tasks sequentially. It means our code runs by line by line in order of code written order. By default, JavaScript allows the synchronous programming.
        
        Some times this synchronous can be issue for the performance of application funtions. 
        </p>
        
        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            <span class="comment">//executed as given order</span><br/>
            console.log("Execute task 1.");<br/>
            console.log("Execute task 2.");<br/>
            console.log("Execute task 3.");<br/>
            console.log("Execute task 4.");<br/>
            console.log("Execute task 5.");<br/><br/>

            <span class="comment">//executed as given order</span><br/>
            console.log("Execute task 5.");<br/>
            console.log("Execute task 4.");<br/>
            console.log("Execute task 3.");<br/>
            console.log("Execute task 2.");<br/>
            console.log("Execute task 1.");<br/>
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> Execute task 1.<br/>
            -> Execute task 2.<br/>
            -> Execute task 3.<br/>
            -> Execute task 4.<br/>
            -> Execute task 5.<br/><br/>

            -> Execute task 5.<br/>
            -> Execute task 4.<br/>
            -> Execute task 3.<br/>
            -> Execute task 2.<br/>
            -> Execute task 1.<br/>

        </p>
    `;
    container.appendChild(div);
}


//declaration---------------------------------------------------
function asyncJavaScript(){
    
    console.log("Execute task 1.");
    console.log("Execute task 2.");
    setTimeout(() => {
        console.log("Execute task 3.");
    }, 1000);
    console.log("Execute task 4.");
    console.log("Execute task 5.");


    //example with fetch()
    console.log("Execute task 1.");
    fetch("https://fakestoreapi.com/products/1").then(() => {
        console.log("Execute task 2.");
    })
    console.log("Execute task 3.");
    console.log("Execute task 4.");
    console.log("Execute task 5.");




    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">JavaScript Asynchronous</h2>
        <p class="description">
        JavaScript asynchronous programming refers to executing/running coding tasks independently. It means when we have to execute a task which require too much executing time, in that situation we can use asynchronous fuctionalities to execute other tasks without effecting from that long running task.<br/>

        JavaScript provide various ways for implement asynchronous functionalities such as setTimeout(), Promise(), fetch(), 
        </p>
        
        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            <span class="comment">//abouve example with asynchronous | setTimeout()</span><br/>
                console.log("Execute task 1.");<br/>
                console.log("Execute task 2.");<br/>

                <span class="comment">//task 3 executed after 1 second as a last task</span><br/>
                setTimeout(() => {<br/>
                    <span class="code-pd">
                        console.log("Execute task 3.");<br/>
                    </span>
                }, 1000);<br/>

                console.log("Execute task 4.");<br/>
                console.log("Execute task 5.");<br/><br/>


                <span class="comment">//abouve example with asynchronous | fetch()</span><br/>
                console.log("Execute task 1.");<br/>
                <span class="comment">//task 2 executed after fetching data as a last task</span><br/>
                fetch("https://fakestoreapi.com/products/1").then(() => {<br/>
                    <span class="code-pd">
                        console.log("Execute task 2.");<br/>
                    </span>
                });<br/>
                console.log("Execute task 3.");<br/>
                console.log("Execute task 4.");<br/>
                console.log("Execute task 5.");<br/> 
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> Execute task 1.<br/>
            -> Execute task 2.<br/>
            -> Execute task 4.<br/>
            -> Execute task 5.<br/>
            -> Execute task 3.<br/><br/>

            -> Execute task 1.<br/>
            -> Execute task 3.<br/>
            -> Execute task 4.<br/>
            -> Execute task 5.<br/>
            -> Execute task 2.<br/>

        </p>
    `;
    container.appendChild(div);
}   


syncJavaScript();
asyncJavaScript();