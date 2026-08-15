const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Calculadora de suma");

readline.question("Introduce el primer número: ", (n1) => {
  readline.question("Introduce el segundo número: ", (n2) => {
    const suma = Number(n1);
    const suma3 = Number(n2);
    const resultado = suma + suma3;
    console.log("El resultado de la suma es: " + resultado);
    readline.close();
  });
});
