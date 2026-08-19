/// objetos


let persona = {
    nombre : "yonervix",
    apellido : "gonzalez",
    edad : 21
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);


// modificar propiedades de un objeto
persona.nombre = "yonervix gonzalez";
console.log(persona.nombre);

// eliminar propiedades de un objeto

delete persona.edad;


//metodos funciones 

let persona2 = {
    nombre : "juan",
    apellido : "gonz",
    edad : 30, 
    walk : function(){
        console.log("estoy caminando");
    }
}

persona2.walk();

