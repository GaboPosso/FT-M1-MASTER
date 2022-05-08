// Ejercio: Crear una clase para representar los datos de una persona
class Persona{
    constructor(nombre, apellido, id, edad, correo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.correo = correo;
        this.id = id;
    }
}

let persona = new Persona('Gabriel', 'Mejia', 28, 1053828956, 'gabopos@gmail.com')
console.log(persona);

// Ejercicio 10: Declarar una función utilizacion la instrucción function

function sumar(a, b){
    var suma = a + b;
    
    return suma;
}
console.log(sumar(2, 3));
//Ejercicio 11:  Resolver problemas de referencia de variables.
// Error típico: ReferenceError: Identificador is not defined.
function saludar(nombre){
    console.log('Hola, mi nombre es ' + nombre);
}
saludar('Gabriel')
var numero = 8;
function mostrarNumero(){
    console.log('El número es: ' + numero);
}
mostrarNumero(numero);

//Ejercicio 13: Creación de ua constante con la sentencia const.

var nombre = 'Gabriel';   
let lenguaje = 'Javascript';
const pi = 3.141592;

nombre = 'Gabriel Posso';
lenguaje = 'JAavascript ES6';
//pi = 3.141592 //(TypeError)No se puede asignar un valor nuevo a una constante

const estudiante = {id: 6, nombre: 'Gabriel Posso'}
console.log(estudiante);

//Ejercicio 14: Crear literales de distintos tipos de datos:

let computador ={marca: 'MSI', ram: '32G', procesador: 'intel i7'};
console.log(computador)

//Ejercicio : Crear objetos por medio de constructores

new String('Javascript');
new Array(2, 3, 5, 7, 11);
//Funciones
function restar(a, b){return a - b;}
restar(5,4);

persona = new Object();
persona.id = 1;
persona.nombre = 'Gabriel';

console.log(persona);


