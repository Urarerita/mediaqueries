let numero;
do {
  numero = prompt("Ingrese un número entre 1 y 10");
} while (numero < 1 || numero > 10);
console.log("Número válido: " + numero);