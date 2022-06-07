
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.
> Si se declara una variable sin usar `var`, directamente se declara como una variable `global`.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); //10 -  Se modificó dentro del bloque y fuera (var)
  console.log(a); //8 - Se modificó en la función c, declarada abajo
  var f = function(a, b, c) {
    b = a;
    console.log(b); //8 //a declarada en la instancia de la función c(a=8,b=9,c=10)
    b = c; 
    var x = 5;
  }
  f(a,b,c);
  console.log(b);//9
}
c(8,9,10);
console.log(b);//10 
console.log(x);//1 No cambia porque se declaro de forma global sin var
```

```javascript
console.log(bar); //undefined
console.log(baz);//error: Not declared
foo(); //-- 
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); //Franco - Se modifico dentro del bloque pero como es var se modifica global.
```

```javascript
var instructor = "Tony";
console.log(instructor); //Tony 
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); //Franco 
   }
})();
console.log(instructor); //Tony - se modifico dentro del contexto de la función pero no en el global
```

```javascript
var instructor = "Tony"; //Var: Global, puede ser redeclarada y modificada
let pm = "Franco";
if (true) {
    var instructor = "The Flash"; // se modifica var a 'The Flash'
    let pm = "Reverse Flash"; // Crea una nueva instancia dentro del bloque de pm
    console.log(instructor); //The Flash - Modifica a the flash 
    console.log(pm); //Reverse Flash - Se modifica pero solo dentro del bloque
}
console.log(instructor);// The Flash - Se modifico dentro y fuera del bloque (var)
console.log(pm);//Franco - No se modifica porque solo se modifico dentro del bloque.
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // En presencia de String si la operacion es diferente de suma, Js convierte los String en Number
"2" * "3" // 6 
4 + 5 + "px" // "9px" Primero hace la suma y luego concatena
"$" + 4 + 5 // "$45" Concatena el String 
"4" - 2 // 2 //Convierte el String a Number
"4px" - 2 // NaN . Not a Number
7 / 0 // Infinity
{}[0] //[0] Devuelve el arreglo
parseInt("09") //9 devuelve un entero en base decimal 
5 && 2 //2
2 && 5 //5
5 || 0 //5
0 || 5 //5
[3]+[3]-[10] //NaN
3>2>1 //false (true)
[] == ![] //true

```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).
### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); //undefined: hace el hoisting de la  variable al nombrarla
   console.log(foo()); // busca la función en memoria y la ejecuta

   var a = 1; //asigna un valor a la variable
   function foo() { 
      return 2; 
   }
}
test(); //No retorna nada, porque test no tiene return en su contexto de ejecución
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack; //'Friskies'
    }
    return snack; //'Friskies'
}

getFood(false); //No retorna nada porque no cumple la condición
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez'; //asignamos un valor a la variable con var 
var obj = {
   fullname: 'Natalia Nerea',  //fullname como propiedad de un objeto, no es una variable
   prop: {
      fullname: 'Aurelio De Rosa',// fullname como una propiedad dentro de una propiedad de un objeto
      getFullname: function() { //función como objeto entonces puede asignarse como propiedad 
         return this.fullname; //
      }
   }
};

console.log(obj.prop.getFullname()); //Aurelio Rosa, porque this está en el contexto de obj.prop.getFullname()

var test = obj.prop.getFullname;

console.log(test()); //Pasa el valor por referencia por lo que test toma el valor antes de la función
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
//1 Imprime sin delay
//4 Imprime sin delay
//3 Imprime sin con delay 0 ms
//2 Imprime con dela 1000 ms

```
