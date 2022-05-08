const { userInfo } = require("os");

function Persona() {
    this.firstname = 'Gabriel';
    this.lastname = 'Mejia';
}

var juan = new Persona();
console.log(juan)

function Gato(nombre) {
    // El nuevo operador crea un objeto, "this"
    this.nombre = nombre;
    this.maullar = function() {
        return 'Mi nombre es ' + this.nombre + ' ... Meow!';
    }
    // Devuelve el objeto this
}
const sam = new Gato('Sam');
const kitty = new Gato('Kitty');
console.log(sam.maullar());
console.log(kitty.maullar());


// creo un objeto con un vacio como proto
var obj = Object.create({})

//creoo un objeto a partir de un proto de Objeto
var obj = Object.create(Object.prototype)
// que es lo mismo que crear un objeto vacio literal
var obj = {}

// No hace falta guardar el resultado porque los objetos se pasan por referencia
Object.assign(obj, {nombre:'Emi', apellido:'Chequer'}) 
obj.nombre

function Persona(nombre, apellido, ciudad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.ciudad = ciudad;
}

Persona.prototype.saludar = function() {
    console.log('Soy '+ this.nombre+ ' de ' +this.ciudad);
}
var Emi = new Persona ('Emi', 'Chequer', 'Buenos Aires');

Emi.saludar()

function Alumno(nombre,apellido,ciudad, curso) {
    // podría copiar las mismas propiedades de Persona acá adentro
    this.nombre = nombre;
    this.apellido = apellido;
    this.ciudad = ciudad;
    this.curso = curso;

}
// lo que nosotros queremos es poder reutilizar las propiedades de persona,
function Alumno(nombre, apellido, ciudad, curso){
    //usemos nuestro constructor Persona dentro del de alumno
    Persona.call(this, nombre, apellido, ciudad)
}

//CALL PARA ENCADENAR CONSTRUCTORES PARA UN OBJETO

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;

    if (precio < 0)

    throw RangeError ('No se puede crear el producto ' +this.nombre+ 'con un precio negativo' );
    return this;
}

function Comida(nombre, precio) {
    Producto.call(this, nombre, precio);
    this.categoria = 'comida';
}
Comida.prototype = new Producto();

function Juguete(nombre, precio){
    Producto.call(this, nombre, precio);
    this.categoria='juguete';
}
Juguete.prototype = new Producto();

var queso = new Comida('feta',5);
var diversion = new Juguete('robot', 40);
