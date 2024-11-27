const container = document.querySelector(".container");

//definition----------------------------------------------------
function defAsyncAwait(){

    async function testFunction(){
       const response = await fetch("https://fakestoreapi.com/products/1");
    }

    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">JavaScript async/await</h2>
        <p class="description">
        JavaScript async | await is a way of handle asynchronous operations. It allows to write a code of asynchronous as a synchronous way. It enhanced the readability and avoid the code chaining. <br/><br/>
        
        <span style="color: #858505;font">| async<br/></span>
        async is a keyword use to indicate function as a asynchronous, And it returns a Promise.<br/>
        </p>
        
        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            async function asyncFunction(){
                <span class="code-pd">
                    return "ok";
                </span>
            }<br/>
                
            console.log(testFunction());
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            ->Promise {fulfilled: 'ok'}
        </p>

        <p class="description">
            <span style="color: #858505;font">| await<br/></span>
            await is a keyword use to wait for the  execution untill promise implmentation, It means promise is success(resolve) or error(rejected). Also important thing is await only can use inside the async function.<br/>
        </p>

         <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            async function asyncFunction(){
                <span class="code-pd">
                    const response = await fetch("https://fakestoreapi.com/products/1");<br/>
                    const product = await response.json();
                </span>
            }<br/>
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            ->
        </p>   
    `;
    container.appendChild(div);
}

//full example--------------------------------------------------
function exampleAsyncAwait(){

    //withous async
    const getProduct = () => {
        //fetch data from api
        fetch("https://fakestoreapi.com/products/1")
        .then(res => res.json())  //get result promise json object
        .then(product => console.log(product))//view object
        .catch((error) => {
            console.log("Fetching Error!")
        })
    }

    // getProduct();

    //with async
    async function getProductAsync(){
        try {
            //fetch data from api
            const response = await fetch("https://fakestoreapi.com/products/1");

            //get result promise json object
            const product = await response.json()

            //view object
            console.log(product);
        }
        catch {
            console.log("Fetching Error!")
        }
    }

    //getProductAsync();

    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">async | await Example</h2>
        <p class="description">
        <span style="color: #858505;font">| Get product with fetch promise <br/></span>
        This example shows the get products details using fetch promise. You can see it has chaining.<br/>
        </p>
        
        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            const getProduct = () => {<br/>
                <span class="code-pd">
                fetch("https://fakestoreapi.com/products/1")<br/>
                .then(res => res.json()) <br/>
                .then(product => console.log(product))<br/>
                .catch((error) => {<br/>
                    <span class="code-pd">
                    console.log("Fetching Error!")
                    </span>
                })<br/>
                </span>
            }<br/><br/>
            
                
            getProduct();
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> display product objcet
        </p>

        <p class="description">
            <span style="color: #858505;font">| Get product with async and await<br/></span>
            This example shows how to async and await are using in JS asynchronous. It allows to maintain clean code. Also, we can use try/catch for exeption handling in async | await function.<br/>
        </p>

        <span style="color: #858585;">Syntax</span>
        <p class="syntax">
            async function asyncFunction(){<br/>
                <span class="code-pd">
                try {<br/>
                    <span class="code-pd">
                    const response = await fetch("https://fakestoreapi.com/products/1");<br/>

                    const product = await response.json();<br/>

                    console.log(product);<br/>
                    </span>
                }<br/>
                catch {<br/>
                    <span class="code-pd">
                    console.log("Fetching Error!");<br/>
                    </span>
                }<br/>
                </span>
            }<br/><br/>

            getProductAsync();
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            ->  display product objcet
        </p>   
    `;
    container.appendChild(div);
}

defAsyncAwait();
exampleAsyncAwait();
