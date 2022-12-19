"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let pivot = array[array.length - 1];
  if (array.length < 1) return array;
  let left = [];
  let right = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (pivot > array[i]) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([9, -3, 5, 2, 6, 8, -6, 1, 4, 3]));

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let half = array.length / 2;
  if (array.length < 2) {
    return array;
  }
  function ordenar(left, right) {
    let final = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        final.push(left.shift());
      } else {
        final.push(right.shift());
      }
    }
    return [...final, ...left, ...right];
  }
  let left = array.splice(0, half);
  return ordenar(mergeSort(left), mergeSort(array));
}
console.log(mergeSort([9, -3, 5, 2, 6, 8, -6, 1, 4, 3]));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
