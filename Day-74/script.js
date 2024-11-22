const container = document.querySelector(".container");
var testObj, deleteProp;

//declaration---------------------------------------------------
function classDefinition(){
    class Animal{
        constructor(name, age, color, sound){
            this.name = name;
            this.age = age;
            this.color = color;
            this.sound = sound;
        }

    }

    //create object
    const dog = new Animal("Pink", 10, "Brown", "Boow");

    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">Class Definition</h2>
        <p class="description">JavaScript introduced Classes in ES6. JS class provide template to create objects. We need to use "class" keyword to create classes. When we create a class its must need to declare special method called constructor. Constructor initialize propertices of the object. Also, It excecuted automatically.</p>
        <span style="color: #858585;">Syntax<br/></span>

        <p class="syntax">
            class Animal{
                <span class="code-pd">
                    constructor(name, age, color, sound){<br/>
                        <span class="code-pd">
                            this.name = name; <br/>
                            this.age = age; <br/>
                            this.color = color; <br/>
                            this.sound = sound; <br/>
                        </span>
                    }<br/>
                </span>
            }<br/>

            console.log(Animal);<br/>
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> display class template
        </p>
    `;
    container.appendChild(div);
}


//class objects-------------------------------------------------
function classObjects(){
    class Animal{
        constructor(name, age, color, sound){
            this.name = name;
            this.age = age;
            this.color = color;
            this.sound = sound;
        }

        makeSound(){
            console.log(this.name + " says " + this.sound)
        }
    }

    //create object
    const dog = new Animal("Browny", 10, "Brown", "Boow");
    const cat = new Animal("Pink", 5, "Gold", "Meow");

    //clla to class method
    console.log(dog.makeSound());

    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">Class Objects</h2>
        <p class="description">
            <span style="color: #858505;font">| Objects declaration<br/></span>
            In JS class allows to create many objects from class template. We need to use "new" keyword to create object.
        </p>

        <span style="color: #858585;">Syntax<br/></span>
        <p class="syntax">
            class Animal{
                <span class="code-pd">
                    constructor(name, age, color, sound){<br/>
                        <span class="code-pd">
                            this.name = name; <br/>
                            this.age = age; <br/>
                            this.color = color; <br/>
                            this.sound = sound; <br/>
                        </span>
                    }<br/>
                </span>
            }<br/>

            const dog = new Animal("Browny", 10, "Brown", "Boow"); <br/>
            const cat = new Animal("Pink", 5, "Gold", "Meow"); <br/>
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> 
        </p>

        <p class="description">
            <span style="color: #858505;font">| Access Objects property<br/></span>
            To access new created object property, we need to use class property name with created object.
        </p>

        <span style="color: #858585;">Syntax<br/></span>
        <p class="syntax">
            console.log(dog.name);<br/>
            console.log(cat.name);
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> ${dog.name}<br/>
            -> ${cat.name}
        </p>

         <p class="description">
            <span style="color: #858505;font">| Class methods<br/></span>
            We can create method simply inside the class. Important thing is dont use "function" keyword declare a method.
        </p>

        <span style="color: #858585;">Syntax<br/></span>
        <p class="syntax">
            class Animal{
                <span class="code-pd">
                    constructor(name, age, color, sound){<br/>
                        <span class="code-pd">
                            this.name = name; <br/>
                            this.age = age; <br/>
                            this.color = color; <br/>
                            this.sound = sound; <br/>
                        </span>
                    }<br/>

                    makeSound(){<br/>
                        <span class="code-pd">
                            console.log(this.name + " says " + this.sound);
                        </span>
                    }<br/>
                </span>
            }<br/>


            console.log(dog.makeSound());
        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> Browny says Boow<br/>
        </p>
    `;
    container.appendChild(div);
}


//class Inheritance---------------------------------------------
function classInherits(){
    class Animal{
        constructor(name, age, color, sound){
            this.animalName = name;
            this.animalAge = age;
            this.animalColor = color;
            this.animalSound = sound;
        }

        makeSound(){
            console.log(this.name + " says " + this.sound)
        }
    }

    //create object
    class Bird extends Animal{
        constructor(name, age, color, sound, eyeColor){
            super(name, age, color, sound);
            this.birdEyeColor = eyeColor;
        }

        fly(){
            console.log( this.animalName + "flying fast!");
        }
    }

    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">Class Inheritance</h2>
        <p class="description">
            Inheritance is very important concepts in OOP. Its allows child calsses(sub classes) to access properties and methods from parent class(super class). In JS provides to inherits sub class to super class by using "extends" keyword. Also, used method called "super()" to access super class properties.
        </p>

        <span style="color: #858585;">Syntax<br/></span>
        <p class="syntax">
            class Animal{
                <span class="code-pd">
                    constructor(name, age, color, sound){<br/>
                        <span class="code-pd">
                            this.name = name; <br/>
                            this.age = age; <br/>
                            this.color = color; <br/>
                            this.sound = sound; <br/>
                        </span>
                    }<br/>
                </span>
            }<br/><br/>


            class Bird extends Animal{<br/>
                <span class="code-pd">
                    constructor(name, age, color, sound, eyeColor){<br/>
                        <span class="code-pd">
                            super(name, age, color, sound);<br/>
                            this.birdEyeColor = eyeColor;<br/>
                        </span>
                    }<br/><br/>
                
                    fly(){<br/>
                        <span class="code-pd">
                            console.log( this.animalName + "flying fast!");<br/>
                        </span>
                    }
                </span>
            }

        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> 
        </p>

    `;
    container.appendChild(div);
}


//class Encapsulation-------------------------------------------
function classEncaps(){
    class Animal{

        //private props
        #animalName = "";
        #animalAge = 0;
        #animalColor = "";

        constructor(name, age, color, sound){
            this.#animalName = name;
            this.#animalAge = age;
            this.#animalColor = color;
            this.animalSound = sound; //not private
        }

        get animalName(){
            return this.#animalName;
        }
        set animalName(name){
            this.#animalName = name;
        }

        get animalAge(){
            return this.#animalAge;
        }
        set animalAge(age){
            this.#animalAge = age;
        }

        get animalColor(){
            return this.#animalColor;
        }
        set animalColor(color){
            this.#animalColor = color;
        }
    }

    //create object
    const dog = new Animal("Browny", 10, "Brown", "Boow");

    //access properties
    //console.log(dog.#animalName);
    let petName = dog.animalName;

    let div = document.createElement("div");
    div.classList.add("row");

    //push method content
    div.innerHTML = `
        <h2 class="method-name">Class Encapsulation</h2>
        <p class="description">
            Another important OOP concept is Encapsulation. Encapsulation refers, wrapping properties and methods in to single unit. It allows to hiding data from external users.<br/>

            In JS provide Encapsulation via the private properties with getters and setters methods. 
            In ES2022 introduced the private methods and properties as new features. For declare private properties in class need to used "#".(* note: in Animal class "sound" is not a private property).

        </p>

        <span style="color: #858585;">Syntax<br/></span>
        <p class="syntax">
            class Animal{
                <span class="code-pd">
                    <span class="comment">//private props</span>
                    #animalName = ""; <br/>
                    #animalAge = 0; <br/>
                    #animalColor = ""; <br/>

                    constructor(name, age, color, sound){<br/>
                        <span class="code-pd">
                            this.#animalName = name; <br/>
                            this.#animalAge = age; <br/>
                            this.#animalColor = color; <br/>
                            this.sound = sound;
                        </span>
                    }<br/><br/>
                </span>
                
                <span class="code-pd">
                    <span class="comment">//getters and setters</span>
                    get animalName(){ <br/>
                        <span class="code-pd">
                            return this.#animalName; <br/>
                        </span>
                      
                    } <br/>
                    set animalName(name){ <br/>
                        <span class="code-pd">
                            this.#animalName = name; <br/>
                        </span>
                    } <br/>

                    get animalAge(){ <br/>
                        <span class="code-pd">
                            return this.#animalAge; <br/>
                        </span>
                    } <br/>
                    set animalAge(age){ <br/> 
                        <span class="code-pd">
                            this.#animalAge = age; <br/>
                        </span>
                    } <br/>

                    get animalColor(){ <br/>
                        <span class="code-pd">
                            return this.#animalColor; <br/>
                        </span>
                    } <br/>
                    set animalColor(color){ <br/>
                        <span class="code-pd">
                            this.#animalColor = color; <br/>
                        </span>
                    }<br/>
                </span>
            }<br/>

            <span class="comment">//directly acess properties</span><br/>
            console.log(dog.#animalName);<br/>
            console.log(dog.animalSound);<br/><br/>

            <span class="comment">//acess property by method</span><br/>
            let petName = dog.animalName;<br/>
            console.log(petName);

        </p>

        <span style="color: #858585;">Output<br/></span>
        <p class="output">
            -> error: Private field '#animalName' must be declared in an enclosing class<br/>
            -> ${dog.animalSound}<br/>
            -> ${petName}<br/>
        </p>

    `;
    container.appendChild(div);
}


classDefinition();
classObjects();
classInherits();
classEncaps();