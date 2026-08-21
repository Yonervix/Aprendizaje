// herencia 

class animal {
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }
    sound() {
        console.log("hace un sonido");
    }

    
}

class dog extends animal {
    

    run () {
        console.log("el perro corre");
    }
}

mydog = new dog("firulais", "macho");

mydog.sound();
mydog.run();