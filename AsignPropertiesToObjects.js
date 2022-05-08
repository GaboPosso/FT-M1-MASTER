//Ejercicio 35: Crear y asignar propiedades a un objeto.
// Primera Forma
let computador = {};
computador.procesador = "Intel Core i7";
computador.ram = 32;
computador.marca = "MSI";
computador.board = "ASUS";

console.log(computador.procesador);

computador.procesador = "Intel Core i7  Eighth Generation."

console.log(computador.procesador);

//Segunda Forma
computador = {procesador: 'Intel core i7', ram: 32, marca: 'MSI', board: 'ASUS' , 'Sistema Operativo': 'Windows 11'};
console.log(computador.procesador);
console.log(computador);