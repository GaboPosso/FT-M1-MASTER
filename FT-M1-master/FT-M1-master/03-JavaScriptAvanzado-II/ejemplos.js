const harry = {
    nombre: 'Harry',
    saludar: function() {
        console.log(`Hola, me llamo ${this.nombre}!`)
    }
};

const saludar = harry.saludar;
