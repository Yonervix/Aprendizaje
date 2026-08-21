const numeros = [1, 2, 3, 4, 5];

numeros.push(6);

let [primero, segundo, tercero, cuarto, quinto] = numeros;

console.log(primero); // 1
console.log(segundo); // 2

//solo los dos primeros elementos

let [primero2, segundo2] = numeros;

console.log(primero2);

//saltar el primer elemento 

let [, segundo3, tercero3, cuarto3, quinto3] = numeros;
console.log(segundo3); // 2

let [primero4, ...resto] = numeros;
console.log(resto); // [2, 3, 4, 5, 6]
