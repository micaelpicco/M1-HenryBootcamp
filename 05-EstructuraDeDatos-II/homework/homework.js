"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;*/
/*
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);*/
/*
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this._length = 0;
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (data) {
  let node = new Node(data);
  let current = this.head;
  if (!current) {
    this.head = node;
    this._length++;
    return node;
  }
  while (current.next) {
    current = current.next;
  }
  current.next = node;
  this._length++;
  return node;
};

// LinkedList.prototype.remove = function () {
//   if (!this.head) return null;
//   if (this._length === 1) {
//     let first = this.head.value;
//     this.head = null;
//     return first;
//   }
//   let current = this.head;
//   let val;
//   while (current.next) {
//     current = current.next;
//   }
//   val = current.value;
//   current.next = null;
//   this._length--;
//   current = null;
//   return val;
// };

LinkedList.prototype.remove = function () {
  let current = this.head;
  if (!current) return null;
  if (current && !current.next) {
    let remove = current;
    current = null;
    this._length--;
    return remove.value;
  } else {
    let anterior;
    while (current.next) {
      anterior = current;
      current = current.next;
    }
    let remove = current.value;
    anterior.next = null;
    this._length--;
    return remove;
  }
};

let newList = new LinkedList();
newList.add(5);
newList.add(10);
console.log(newList);
console.log(newList.remove());
console.log(newList);

LinkedList.prototype.search = function (milanga) {
  let current = this.head;
  if (typeof milanga === "string" || typeof milanga === "number") {
    do {
      if (current.value === milanga) {
        return current.value;
      }
      current = current.next;
    } while (current);
    return null;
  }
  if (typeof milanga === "function") {
    do {
      if (milanga(current.value)) return current.value;
      current = current.next;
    } while (current);
    return null;
  }
};

LinkedList.prototype.addInPosition = function (value, newPosition) {
  if (newPosition > this._length) throw TypeError("Lugar no existente");
  let current1 = this.head;
  let current2 = this.head;
  let currentPlace = 1;
  let newNode = new Node(value);
  if (newPosition === 0) {
    newNode.next = current1;
    this.head = newNode;
    this._length++;
    return "Añadido al inicio";
  }
  while (newPosition > currentPlace) {
    currentPlace++;
    current1 = current1.next;
  }
  currentPlace = 1;
  while (newPosition - 1 > currentPlace) {
    currentPlace++;
    current2 = current2.next;
  }
  current2.next = newNode;
  current2 = current2.next;
  current2.next = current1;
  this._length++;
  return "Añadido en la posición " + newPosition + ".";
};

LinkedList.prototype.removePosition = function (position) {
  if (position > this._length) throw TypeError("Posición no existente.");
  let current = this.head;
  let current2 = this.head;
  let currentPosition = 1;
  if (position === 0) {
    this.head = current.next;
    this._length--;
    return "Nodo inicial removido.";
  }
  while (position + 1 > currentPosition) {
    current = current.next;
    currentPosition++;
  }
  currentPosition = 1;
  while (position - 1 > currentPosition) {
    current2 = current2.next;
    currentPosition++;
  }
  current2.next = current;
  this._length--;
  console.log(currentPosition);
  return "Nodo en posición " + position + " removido.";
};

// let nuevo = new LinkedList();
// nuevo.add(1);
// nuevo.add(7);
// nuevo.add(5);
// nuevo.add(9);
// console.log(nuevo);
// console.log(nuevo.addInPosition(10, 3));
// console.log(nuevo);
// console.log(nuevo.removePosition(3));
// console.log(nuevo);

let buscoTwo = function (nodeValue) {
  return nodeValue === "one";
};

// console.log(buscoTwo("one"));

// console.log(nuevo.search(buscoTwo));
/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.table = new Array(35);
  this.numBuckets = 35;
  this.size = 0;
}

HashTable.prototype.hash = function (key) {
  let sum = 0;
  for (let i = 0; i < key.length; i++) {
    sum += key.charCodeAt(i);
  }
  return sum % this.numBuckets;
};

HashTable.prototype.set = function (key, value) {
  let index = this.hash(key);
  if (typeof key !== "string") throw TypeError("Keys must be strings");
  if (this.table[index]) {
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index][i][1] = value;
        return;
      }
    }
    this.table[index].push([key, value]);
  } else {
    this.table[index] = [];
    this.table[index].push([key, value]);
    this.size++;
  }
  //this.tabla[this.hash(key)] = [key, value];
  //this.size++;
};

HashTable.prototype.get = function (parametro) {
  let index = this.hash(parametro);
  for (let i = 0; i < this.table[index].length; i++) {
    if (this.table[index][i][0] === parametro) return this.table[index][i][1];
  }
};
//return this.table[this.hash(parametro)][0][1];

HashTable.prototype.hasKey = function (milanganesa) {
  let index = this.hash(milanganesa);
  for (let i = 0; i < this.table[index].length; i++) {
    if (this.table[index][i][0] === milanganesa) return true;
  }
  return false;
};

// let x = new HashTable();

// x.set("foo", "bar1");
// x.set("ofo", "bar2");
// console.log(x);
// console.log(x.hash("ofo"));
// console.log(x.table[9]);
// console.log(x.get("ofo"));
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
// SOLUCION ALTERNATIVA

// function HashTable() {
//   this.numBuckets = 35;                   //defino el largo del array
//   this.table = [];
//   for (let i = 0; i < this.numBuckets; i++) {
//       this.table[i] = { };
//   }
// }

// HashTable.prototype.hasKey = function(key) {
//   let keyHashed = this.hash(key);
//   return (this.table[keyHashed].hasOwnProperty(key)) ? true : false;
// }

// HashTable.prototype.set = function(key, data) {
//   if (typeof(key) != 'string') {throw TypeError('Keys must be strings')}

//   let keyHashed = this.hash(key);

//   this.table[keyHashed][key] = data;
// }

// HashTable.prototype.get = function(key) {
//   let keyHashed = this.hash(key);

//   if (this.hasKey(key)) {
//       return this.table[keyHashed][key];
//   } else {
//       return 'No hay coincidencia'
//   }
// }
