function deciHolaAlUsuario(usuario) {
    return "Hola " + usuario + "!";
}
function decirAdiosUsuario(usuario) {
    return "Adiós " + usuario + "!";
}
function crearSaludo(usuario, cb) {
    return cb(usuario);
}
deciHolaAlUsuario("Gabriel");
crearSaludo("Dan", deciHolaAlUsuario);
crearSaludo("Dan", decirAdiosUsuario);

const autos = ["Ford", "Chevrolet", "Toyota", "Tesla"];
// Podemos escribir el callback en los paréntesis como una función anónima.
autos.forEach(function (elemento,indice) {
    console.log(elemento);
});
// O podemos crear una instancia de uan función para usarla como callbacl.
// Además. no necesitamos usar el argumento de índice, si no lo necesitas, no dudes en omitirlo.
function mostrarNombres(elemento) {
    console.log(elemento);
}
// / y llamar la funcion en el paréntesis de ForEach 
autos.forEach(mostrarNombres);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const palabra = ["Hola, ", "mi", "nombre", "es", "Martin"];
// Podemos escribir la función anónima directamente en los paréntesis de .reduce
// Si omitimos el elemento incial, siempre comenzará en el primer elemento.
const suma = numeros.reduce(function(acc, elemento) {
    return acc + elemento;  
});
// Podemos escribir una función fuera de los parents de .reduce (para usar varias veces más tarde)
function productos = numeros.reduce(multipicarDosNumeros);
// .reduce funciona en cualquier tipo de datos.
// En este ejempli configuramos una acumulador de arranque
const frase = palabra.reduce(function(acc. elemento){
    return acc + " " + elemento;
}, "frase completa:")
