"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let result = [];
  while (num % 2 === 0) {
    num /= 2;
    result.push(2);
  }
  while (num % 3 === 0) {
    num /= 3;
    result.push(3);
  }
  let primoA = function (numPrimo) {
    return 6 * numPrimo - 1;
  };
  let primoB = function (numPrimo) {
    return 6 * numPrimo + 1;
  };
  for (let i = 1; num > 1; i++) {
    if (num % primoA(i) === 0) {
      num /= primoA(i);
      result.push(primoA(i));
    }
    if (num % primoB(i) === 0) {
      num /= primoB(i);
      result.push(primoB(i));
    }
  }
  if (num === 1) result.unshift(1);

  return result;
}

console.log(factorear(471));

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let cut = true;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      [array[i], array[i + 1]] = [array[i + 1], array[i]];
      cut = false;
    }
  }
  if (cut === true) return array;
  bubbleSort(array);
  return array;
}
console.log(performance.now(bubbleSort([1, 5, 4, 3, 6, 7, 2])));
console.log(bubbleSort([1, 5, 4, 3, 6, 7, 2]));

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    let k = i - 1;
    let aux = array[i];
    while (k >= 0 && array[k] > aux) {
      array[k + 1] = array[k];
      k--;
    }
    array[k + 1] = aux;
  }
  return array;
}
console.log(insertionSort([1, 5, 4, 3, 6, 7, 2]));

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let min;
  let aux;
  for (let i = 0; i < array.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    aux = array[i];
    array[i] = array[min];
    array[min] = aux;
  }
  return array
}
console.log(selectionSort([5, 7, 4, 3, 6, 2, 1]));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
