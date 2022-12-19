"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  let numero = 0;
  let arrBinario = String(num)
    .split("")
    .map((num) => Number(num));
  let length = arrBinario.length - 1;
  for (let i = 0; i < arrBinario.length; i++) {
    numero += arrBinario[i] * 2 ** length;
    length--;
  }
  return numero;
}

function DecimalABinario(num) {
  // tu codigo aca
  let arrBinaria = [];
  while (num > 0) {
    arrBinaria.unshift(num % 2);
    num = Math.floor(num / 2);
  }
  return arrBinaria.join("");
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
