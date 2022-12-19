"use strict";

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/
const factorial = (n) => (n > 1 ? n * factorial(n - 1) : 1);

console.log(factorial(5));

function nFactorial(n) {
  if (n < 0) return "Error. No existe el factorial de un número negativo.";
  if (n < 2) return n;
  else {
    return n * nFactorial(n - 1);
  }
}

console.log(nFactorial(5));

// const nFibonacci = (n) => (n > 2 ? nFibonacci(n - 1) + nFibonacci(n - 2) : 1);
const nFibonacci = function (n) {
  if (n < 0) return "Error kpo, no existe fibonacci negativo.";
  if (n < 2) return n;
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};
console.log(nFibonacci(30));

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.data = [];
  //this.contador = 0;
}

Queue.prototype.enqueue = function (milanga) {
  this.data = [...this.data, milanga];
  //this.contador++;
};

Queue.prototype.dequeue = function () {
  if (this.data.length === 0) return undefined;
  else {
    //this.contador--;
    return this.data.shift();
  }
};

Queue.prototype.size = function () {
  return this.data.length;
  //return this.contador
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};
