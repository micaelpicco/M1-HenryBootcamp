/*
Resolver las siguientes consignas usando recursión. A modo de consejo, en un principio no se preocupen por validar que los argumentos sean del tipo de dato que estamos esperando; una vez que hayan encontrado una solución, pueden optimizarla y agregarle validaciones si quieren.

------------------------------------------------------------------------


1. Escribí una función llamada `power` que reciba dos parámetros: `base` y `exponente`. La función deberá retornar la potenciación correspondiente - es decir, la base elevada al exponente.
Nota: recuerden contemplar el caso de las potenciaciones con exponente 0 
*/

function power(base, exponente) {
  if (exponente === 0) return 1;
  if (exponente > 0) return power(base, exponente - 1) * base;
  if (exponente < 0) return power(base, exponente + 1) / base;
}

console.log(power(2, 4));
// 2^4 = 2^4
// 2^4 = 2^3 * 2^1
// 2^4 = (2^2 * 2^1) * 2^1
// 2^4 = ((2^1 * 2^1) * 2^1) * 2^1

/*
Ejemplos:
power(2,0)  debería retornar 1
power(2,2)  debería retornar 4
power(2,4)  debería retornar 16

------------------------------------------------------------------------


2. Escribí una función llamada `productOfArray` que reciba un arreglo de números y retorne el producto de todos ellos.
*/

function productOfArray(arr) {
  if (arr.length === 0) return 'array vacío';
  let i = arr.length - 1;
  function product(arr, i) {
    if (i === 0) return arr[i];
    return arr[i] * product(arr, i - 1);
  }
  return product(arr, i);
  //function productOfArray(arr) {
  //  if (arr.length === 0) {
  //    return 1;
  //  }
  //  return arr.pop() * productOfArray(arr);
  //}
}

console.log(productOfArray([1, 2, 3, 10]));

/*

Ejemplos:
productOfArray([1,2,3])         debería retornar 6
productOfArray([1,2,3,10])      debería retornar 60

------------------------------------------------------------------------


3. Escribí una función llamada recursiveRange que reciba como único argumento un número, y retorne la suma de todos los números enteros desde 0 hasta dicho número.

*/

function recursiveRange(num) {
  if (num === 0) return num;
  if (num > 0) return num + recursiveRange(num - 1);
  if (num < 0) return num + recursiveRange(num + 1);
}

console.log(recursiveRange(8));

/*
Ejemplos: 
recursiveRange(6)           debería retornar 21
recursiveRange(10)          debería retornar 55
*/

/*
Escribe una función recursiva que dado un número entero n retorne un arreglo con todos los números enteros en orden decreciente desde n a 1. La firma de la función debe ser: array countdown( int n ). 
Ejemplos:

a) countdown(1) retorna [1]
b) countdown(5) retorna [5, 4, 3, 2, 1]
*/

function arrayCountdown(n) {
  if (n === 0) return n;
  let arr = [];
  function countdown(arr, n) {
    arr.push(n);
    if (n === 1) return n;
    countdown(arr, n - 1);
    return arr;
  }
  return countdown(arr, n);
}

console.log(arrayCountdown(8));

//*/ //
// EJERCICIO 2
// Crear la funcion 'direcciones':
// La funcion debe retornar un string de los movimientos Norte(N), Sur(S), Este(E), Oeste(O)
// que se deben realizar, para llegar al destino de un laberinto dado.
//
// Ejemplo: dado el siguiente laberinto:

let laberintoExample = {
  // direccion = ""
  N: 'pared',
  S: {
    // direccion = "S"
    N: 'pared',
    S: 'pared',
    E: {
      // direccion = "SE"
      N: 'pared', // direccion = "SEN"
      S: 'pared',
      E: 'pared',
      O: 'pared',
    },
    O: {
      // direccion = "SO"
      N: 'pared',
      S: 'pared',
      E: 'pared',
      O: 'destino',
    },
  },
  E: 'pared',
  O: 'pared',
};

function direcciones(lab) {
  {
    for (let key in lab) {
      if (lab[key] === 'destino') return key;
      else if (typeof lab[key] === 'object') {
        const direccion = direcciones(lab[key]);
        if (direccion !== '') return key + direccion;
      }
    }
    return '';
  }
}

console.log(direcciones(laberintoExample));
// El retorno de la funcion 'direcciones' debe ser 'SEN', ya que el destino se encuentra
// haciendo los movimientos SUR->ESTE->NORTE
// Aclaraciones: el segundo parametro que recibe la funcion ('direccion') puede ser pasado vacio (null)
