//Functions Fabric

function crearImpresoraDeMensajes(tipo, estilos){  
    return function mensajes(str) {   //Clousure de la función padre
        console.log(`%c ${tipo}: ${str}`, estilos);

    }
}

const error = crearImpresoraDeMensajes('Error', 'background: red; color: white;');
const warning = crearImpresoraDeMensajes('Warning', 'background: orange; color: white;');
const exito = crearImpresoraDeMensajes('Éxito', 'background: green; color: white;');

error('El ususario no inicio sesión');
warning('El usuario no tiene dirección');
exito('Usuario registrado');
