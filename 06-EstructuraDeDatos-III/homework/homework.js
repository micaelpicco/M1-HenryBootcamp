"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function () {
  var left = 0;
  var right = 0;
  if (this.left === null && this.right === null) return 1;
  if (this.left != null) left = this.left.size();
  if (this.right != null) right = this.right.size();
  return 1 + right + left;
};

BinarySearchTree.prototype.insert = function (newValue) {
  if (newValue < this.value) {
    if (this.left === null) return (this.left = new BinarySearchTree(newValue));
    else {
      return this.left.insert(newValue);
    }
  } else {
    if (this.right === null)
      return (this.right = new BinarySearchTree(newValue));
    else {
      return this.right.insert(newValue);
    }
  }
};

// BinarySearchTree.prototype.contains = function (search) {
//   if (this.value === search) return true;
//   if (this.left != null) {
//     if (this.left.contains(search)) return true;
//   }
//   if (this.right != null) {
//     if (this.right.contains(search)) return true;
//   }
//   return false;
// };

BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) {
    return true;
  }
  if (value < this.value) {
    if (!this.left) {
      return false;
    } else {
      return this.left.contains(value);
    }
  }
  if (value > this.value) {
    if (!this.right) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, expresion) {
  switch (expresion) {
    case "pre-order": {
      cb(this.value);
      this.left?.depthFirstForEach(cb, expresion);
      this.right?.depthFirstForEach(cb, expresion);
      break;
    }

    case "post-order": {
      this.left?.depthFirstForEach(cb, expresion);
      this.right?.depthFirstForEach(cb, expresion);
      cb(this.value);
      break;
    }

    default: {
      this.left?.depthFirstForEach(cb, expresion);
      cb(this.value);
      this.right?.depthFirstForEach(cb, expresion);
      break;
    }
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, queue = []) {
  cb(this.value);
  this.left ? queue.push(this.left) : 1;
  this.right ? queue.push(this.right) : 1;
  queue.length ? queue.shift().breadthFirstForEach(cb, queue) : 1;
};

let arbol = new BinarySearchTree(10);
arbol.insert(15);
arbol.insert(5);
arbol.insert(7);
arbol.insert(3);
arbol.insert(14);
arbol.insert(16);

var testArr = [];

arbol.breadthFirstForEach(function (val) {
  testArr.push(val);
});
testArr;
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
