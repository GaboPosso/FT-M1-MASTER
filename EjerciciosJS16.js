//Ejercicio 16: Validar si una variable tiene un valor asignado

let a;
let b = 11;

if (a === undefined){
    console.log('No se ha asignado un valro a la varaible')
}
a = 'JS'

if (a === undefined){
    console.log('No se ha asignado un valro a la varaible')
} else {
    console.log('La variable tiene un valor asignado')
}
console.log();
if (b === undefined){
    console.log('No se ha asignado un valor a la variable "b"')
} else {
    console.log('La variable "b" tiene un valor asignado')
}
//Ejercicio 17: Determinar si una variable ha sido declarada con la función typeof

let c;
let d =11;

console.log(typeof c);
console.log(typeof d);

if (typeof a === 'undefined'){
    console.log('La variable "c" no tiene valor asignado.')
} else {
    console.log('La variable "c" tiene un valor asignado')
}
console.log()
if (typeof d === 'undefined'){
    console.log('La variable "d" no tiene valor asignado.')
} else {
    console.log('La variable "d" tiene un valor asignado')
}
//Ejercicio #18 : Comprobar si una fucnión retorna valor.

function funcion1(){
    return
}
function funcion2(){
    const A = 3;
}
function funcion3(){
    return 2+2;
}
function funcion4(){
    return true;
}
function funcion5(){
    return {};
}
let fn1 = funcion1();
console.log('funcion1 retorna ', fn1)
console.log()

let fn2 = funcion2();
console.log('funcion2 retorna ', fn2)
console.log()

let fn3 = funcion3();
console.log('funcion3 retorna ', fn3)
console.log()

let fn4 = funcion4();
console.log('funcion4 retorna ', fn4)
console.log()


let fn5 = funcion5();
console.log('funcion5 retorna ', fn5)
console.log()

if (fn1 === undefined){
    console.log('"funcion1" no retorna nada')
} else{ console.log('"funcon1" retorna un valor')}
console.log();
if (fn3 === undefined){
    console.log('"funcion3" no retorna nada')
} else{ console.log('"funcion3" retorna un valor')}

//Ejercicio 19: Validar si una variable es undefined o null.

let number = undefined;
if (number === undefined){
    console.log('(1) La variable "número" es undefined.')
}
if (number = null){
    console.log('(2) La variable "número" es null.')
}
number = null;

if (number === null){
    console.log('(3) La variable "número es null');
}
if(!number){
    console.log('(4) La variable "número es null');
}

//Promocionar valores a tipo lógico (booleano) cohersing

console.log(Boolean(-0));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(1));
console.log(Boolean(new Number(0)));
console.log(Boolean(NaN));

//Ejercicio 24: Determinar si una variable booleana ha sido inicializada

var ac = Boolean(true);
let bc = false;
let cb = '';
let db = new Number(5);

function ReconocerBooleano(vv){
    if (typeof vv === 'boolean'){
        return console.log('La variable ',vv,' es booleano');
    } return console.log('La variable '+ vv + ' no es booleano.');
    
}
ReconocerBooleano(ac);

//Ejercicio 32 : Crear una fecha por medio del objeto Date

let hoy = new Date();

console.log(hoy);

let fecha = new Date('May 13, 2013 03:17:19');

console.log(fecha);

fecha = new Date (2013, 5, 13);
 
console.log(fecha);

//Ejercicio 35: Validar si una variable es de tipo Date.

let x = new Date();
let y = 'Javascript';
let z = 2.71;
if(x instanceof Date){
    console.log('La variable x es de tipo Date.');
} else {
    console.log('La variable x no es de tipo Date.');
}
if(y instanceof Date){
    console.log('La variable y es de tipo Date.');
} else {
    console.log('La variable y no es de tipo Date.');
}
if(z instanceof Date){
    console.log('La variable z es de tipo Date.');
} else {
    console.log('La variable z no es de tipo Date.');
}