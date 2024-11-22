const container = document.querySelector(".container");
var testObj, deleteProp;

//declaration---------------------------------------------------
function objetDefinition(){
    const mobilePhone = {
        brand: "iPhone",
        model: "iPhone15",
        color: "White",
        year: "2023",
        welcome: function(){
            console.log("Hello" + this.model);
        },
    };

    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">Objects Definition</h2>
        <p class="description">Object is a real life entity. In JavaScript Object is a one of data type. And, It used to store valuse as key/value pair format. Object has propertise and mmethods. Objects are mutable in JS. We can declare object by using Object literal. It has another few types to declare but the Objet literal is the best practise.</p>
        <span style="color: #858585;">Syntax<br/></span>

        <p class="syntax">

            const mobilePhone = {<br/>
                <span class="code-pd">
                    brand: "iPhone",<br/>
                    model: "iPhone15",<br/>
                    color: "White",<br/>
                    year: "2023",<br/>
                    welcome: function(){<br/>
                        console.log("Hello" + this.model);<br/>
                    },<br/>   
                </span>
            };<br/>  
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> 
        </p>
    `;
    container.appendChild(div);
}

//properties---------------------------------------------------
function objetProperties(){
    const mobilePhone = {
        brand: "iPhone",
        model: "iPhone15",
        color: "White",
        year: "2023",
        welcome: function(){
            console.log("Hello" + this.model);
        },
    };

    let div = document.createElement("div");
    div.classList.add("row");

    let keys = Object.keys(mobilePhone);
    let values = Object.values(mobilePhone);
    let entries = Object.entries(mobilePhone);

    //create ptops
    mobilePhone.memory = "64GB";
    Object.defineProperties(mobilePhone, {cam: {value: "48MP"}});
    Object.defineProperty(mobilePhone, "ram", {value:"6GB"});

    //delete prop
    delete mobilePhone.brand

    //push method content
    div.innerHTML = `
        <h2 class="method-name">Objects Properties</h2>
        <p class="description">
            <span style="color: #858505;font">| Access Properties<br/></span>
            In JS has servaral types to access the properties of an object.
        </p>
        <span style="color: #858585;">Syntax<br/></span>

        <p class="syntax">
            <span class="comment">// .property<br/></span>
            console.log(mobilePhone.brand);<br/>

            <span class="comment">// ["property"]<br/></span>
            console.log(mobilePhone["brand"]);<br/> 
            
            <span class="comment">// access all keys<br/></span>
            let keys = Object.keys(mobilePhone);<br/> 
            let values = Object.values(mobilePhone);<br/> 

            <span class="comment">// access all keys and values<br/></span>
            let entries = Object.entries(mobilePhone);<br/> 

        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> brand<br/> 
            -> brand<br/> 
            -> ["brand","model","color","year","welcome"]<br/>
            -> ['iPhone', 'iPhone15', 'White', '2023', ƒ]<br/>
            -> [['brand', 'iPhone'], ['model', 'iPhone15'],['color', 'White'], ['year', '2023'], ['welcome', ƒ]]<br/><br/>
        </p>

        <p class="description">
            <span style="color: #858505;font">| Create Properties<br/></span>
            We can create object properties simply by adding new key/value pair or using definePrperties() and defineProperty() methods.
        </p>
        <span style="color: #858585;">Syntax<br/></span>

        <p class="syntax">
            mobilePhone.memory = "64GB";<br/>
            Object.defineProperties(mobilePhone, {cam: {value: "48MP"}});<br/> 
            Object.defineProperty(mobilePhone, "ram", {value:"6GB"});<br/> 

            console.log(mobilePhone.memory);<br/>
            console.log(mobilePhone.cam);<br/>
            console.log(mobilePhone.ram);<br/>

        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${mobilePhone.memory}<br/>
            -> ${mobilePhone.cam}<br/>
            -> ${mobilePhone.ram}<br/>


        <p class="description">
            <span style="color: #858505;font">| Delete Properties<br/></span>
            We can delete object properties by using delete keyword.
        </p>
        <span style="color: #858585;">Syntax<br/></span>

        <p class="syntax">
            delete mobilePhone.brand;<br/>
            
            console.log(mobilePhone.brand);

        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> undefined<br/>

    `;
    container.appendChild(div);
}

//constructor---------------------------------------------------
function objectConstructor(){
    function Phone(brand, model, color, year){
        this.newBrand = brand;
        this.newModel = model;
        this.newColor = color;
        this.newYear = year;
    };

    //creation objects
    const iPhone = new Phone("Apple", "iPhone15", "White", 2023);
    const google = new Phone("google", "Pixel9", "Gray", 2024);

    //add new property
    Phone.prototype.body = "Titanium";

    //add new method
    Phone.prototype.welcome = function(){
        console.log("Hello welcome");
    }

    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">Objects Constructor</h2>
        <p class="description">
            <span style="color: #858505;font">| Constructor creation<br/></span>
            Object Constructor allows to create many object from a same object type. Constructor is a fuction declare specially for objects. The best practise of create object name with firat letter as a capital letter.
        </p>

        <span style="color: #858585;">Syntax<br/></span>
        <p class="syntax">

            function Phone(brand, model, color, year){ <br/>
                <span class="code-pd">
                    this.newBrand = brand; <br/>
                    this.newModel = model; <br/>
                    this.newColor = color; <br/>
                    this.newYear = year; <br/>
                </span>
            };<br/>

            const iPhone = new Phone("Apple", "iPhone15", "White", 2023);<br/>
            const google = new Phone("google", "Pixel9", "Gray", 2024);
 
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> 
        </p>


        <p class="description">
            <span style="color: #858505;font">| Add new property to constructor<br/></span>
            We cannot dirctly add property to object constructor. We must need to use "prototype" to add new property to construtor.
        </p>

        <span style="color: #858585;">Syntax<br/></span>
        <p class="syntax">

            Phone.prototype.body = "Titanium";<br/>
            console.log(iPhone.body);
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${iPhone.body}
        </p>


         <p class="description">
            <span style="color: #858505;font">| Add new method to constructor<br/></span>
            new method adding process same as the properties adding. Must need used to "prototype".
        </p>

        <span style="color: #858585;">Syntax<br/></span>
        <p class="syntax">

            Phone.prototype.welcome = function(){
                <span class="code-pd">
                    console.log("Hello welcome");
                </span>
            }<br/>

            console.log(iPhone.welcome());
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${"Hello welcome"}
        </p>


    `;
    container.appendChild(div);
}



//call to functions
objetDefinition();
objetProperties();
objectConstructor();