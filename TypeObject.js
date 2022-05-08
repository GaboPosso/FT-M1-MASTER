//Ejercicio 37: Determinar si una variable definida es de tipo objeto.

let x = {};
let y = 'Javascript';
let z = 5;

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log();
console.log(typeof x === 'object');
console.log(typeof y === 'object');
console.log(typeof z === 'object');
console.log();
//Determine a qué tipo de dato pertene un objeto.

let fecha = new Date();
let error = new Error();
let string = new String();
let objeto = new Object();

console.log(typeof fecha);
console.log(typeof error);
console.log(typeof string);
console.log(typeof object);

if (error instanceof Date){
    console.log('La variable "error" es de tipo Date');
} else if( error instanceof Error){
    console.log('La variable "error" es de tipo Error');
} else if(error instanceof String){
    console.log('La variable "error" es de tipo String.');
}else{
    console.log('No se pudo determinar el tipo de dato de la variable "error".');
}

if (string instanceof Date){
    console.log('La variable "string" es de tipo Date');
} else if( string instanceof Error){
    console.log('La variable "string" es de tipo Error');
} else if(string instanceof String){
    console.log('La variable "string" es de tipo String.');
}else{
    console.log('No se pudo determinar el tipo de dato de la variable "string".');
}

if (fecha instanceof Date){
    console.log('La variable "fecha" es de tipo Date');
} else if( fecha instanceof Error){
    console.log('La variable "fecha" es de tipo Error');
} else if(fecha instanceof String){
    console.log('La variable "fecha" es de tipo String.');
}else{
    console.log('No se pudo determinar el tipo de dato de la variable "fecha".');
}