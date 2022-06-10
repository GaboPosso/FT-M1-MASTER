//Repeatify
//OOP -Prototypes
/*Crear un método `repeatify` que este disponible para _todos_ los objetos `Strings`.
Esta función debe aceptar un `entero` que indica cuantas veces el string tiene que repetirse. 
La función retorna el string repetido el número de veces que indicamos. Controlar que el número 
no sea menor que cero, y si es cero que devuelva `''` (String vacío).
*/
function repeatify(string, times) {
    return times < 0 ? '' : string.repeat(times) ;    
};
console.log(repeatify('Hola',3));



function Shape(type, getType) {
    this.type = type;
    this.getType = function(){
    return this.type;
     }
}
const Triangle = function (a, b, c) {
        this.a = a;
          this.b = b;
        this.c = c;
}
Triangle.prototype.getPerimeter = function(){
return this.a + this.b + this.c;
}


var t = new Triangle(1, 2, 3);
console.log(t)
t instanceof Triangle
// true
Shape.prototype.isPrototypeOf(t);
// true
t.getPerimeter();

// 6
//t.getType();