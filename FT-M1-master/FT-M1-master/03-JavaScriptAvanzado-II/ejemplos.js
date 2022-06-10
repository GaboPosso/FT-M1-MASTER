const harry = {
    nombre: 'Harry',
    saludar: function() {
        console.log(`Hola, me llamo ${this.nombre}!`)
    }
};

const saludar = harry.saludar;

//Explicit Binding (indirect Invocation)

//The user choose exactly, what object he wants to be 'this' when the function is executed.

const gabriel = {
    name: 'Gabriel',
    sayHi: function  (shouting, withFarewell) { 
        const normalhi = `Hi, my name is ${this.name}!`;
        const normalFarewell = 'Bye!';
        
        const salute = shouting ? normalhi.toUpperCase() : normalhi; //if shouting is true then the salute is shouted
        
        const farewell = shouting ? normalFarewell.toUpperCase() : normalFarewell; //if shouting is true then fareweel is shouted.

        console.log(salute); //If I don't invoke the function, this won't be showed

        if (withFarewell){
          console.log(farewell); //if with farewell is true then show the farewell too.
        } 

    }
};

const ginna = {name: 'Ginna'}; //I want to invoke the same method to another object with 'name' property.
ginna.sayHi = gabriel.sayHi; //Assigning the method is an option

gabriel.sayHi(true, true);
ginna.sayHi(true); //But we don't want this, we want to call the function in another context.

//Function.prototype.call

//This method allows to invoke a function changing its context. (Changing 'this' value).

gabriel.sayHi.call(ginna, true, true)// PresentContext.MethodCalled.call(NewContext, 1stParammeterOfPresentContext, 2ndParammeterOfPresentContext) 

//FUNCTION PROTOTYPE APPLY

//Is very similar to call

gabriel.sayHi.apply(ginna, [true, true])//Same a Call, but the parameters are written as an array.

//function.prototype.bind

//A functions method that returns a new function with the context linked to the object we decide.
ginna.sayHi.bind(gabriel);

//NEW BINDING Object Instance
function Person(name) { //Constructor Function CS6
    this.name = name; //
}
const david = new Person('David') //new produce a link which creates a new empty object {}, and includes constructor function with property {name: David}, but this points to the constructor.

//Lexical Binding (Arrow Functions)

//It is produced when the functions are written as arrow functions.

const fernanda = { //Objects don't create new contexts
    name: 'fernanda',
    twitter: '@ginnaMorales',
    hi: function () {
        const followMe = () => { //The arrow function are executed in the same context where they were created 
            console.log(`Follow me on twitter: ${this.twitter}!`); //Call, bind, apply are not used with arrow functions.
        }
        console.log(`Hi, my name is ${this.name}!`);
        followMe();
    }
}
fernanda.hi();

//Arrow function search the context of this in the time they are used, by that if arrow functions are called outside a function they point to the global context.
