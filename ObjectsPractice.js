const { truncate } = require("fs");

// This is the way an object is structured.
const user = {
    username: 'gabriel.mejia',
    password: 'eliatomjs3',
    lovesJavascript: true,
    favoriteNumber: 23
};
//There are two ways to call keys and values of an object
//Point Notation:
user.lovesJavascript;
user.username;
// Brackets Notation:
const passString = 'password';
user['lovesJavascript'];
user[passString];

//There is also this two notations to assign values into the object.

const nuevoUsuario = {
    esNuevo: true
}
const loveJSString = 'lovesJavascript';

nuevoUsuario.username = 'AnotherUserName';
nuevoUsuario['password'] = '12345'
nuevoUsuario[loveJSString] = true;
//Deleting properties
const nuevoObjeto = {
    eliminarEstaPropiedad: true
};

delete nuevoObjeto.eliminarEstaPropiedad;
//Calling a Method
const nuevoObjeto2 = {
    deicrHola: function() {
        console.log('Hi to everyone!');
    }
};

nuevoObjeto2.deicrHola();

//for...in Loop

const user2 = {
    username: 'gabriel.mejia',
    password: 'eliatomjs3',
    lovesJavascript: true,
    favoriteNumber: 23
};

for (let clave in user2){
    console.log(clave);
    console.log(usuario2[clave]);
}
//kew word 'this'

const user3 = {
    username: 'gabriel.mejia',
    password: 'eliatomjs3',
    lovesJavascript: true,
    favoriteNumber: 23,
    sayHiTo: function(){
        console.log( this.username + ' Say hi!');
    }
};

user3.sayHiTo();

function Persona() {
    this.firstname = 'Gabriel';
    this.lastname = 'Mejia';
}

var juan = new Persona();
console.log(juan)