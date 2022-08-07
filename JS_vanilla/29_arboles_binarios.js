/*

function BinarySearchTree (root) {
    // necesitamos un root o head, se puede definir a conveniencia
    this.root = root,
    this.left = null,
    this.right = null
}

const newTree8 = new BinarySearchTree(8)

// CADA NODO VA A SER UN NUEVO ARBOL

BinarySearchTree.prototype.add = function (value) {

    if (!newTree.left) {
        newTree.left = new BinarySearchTree(value);
    } else {
        const newTree3 = newTree8.left;
        newTree.left.add(value);
    }
}

----------------------------------------------

 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
 
 *El árbol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
 */

function BinarySearchTree(value) {
  (this.value = value), (this.right = null), (this.left = null);
}

BinarySearchTree.prototype.size = function () {
  //  - size: retorna la cantidad total de nodos del árbol
  if (!this.left && !this.right) return 1;
  else if (this.left && !this.right) return 1 + this.left.size();
  else if (!this.left && this.right) return 1 + this.right.size();
  else return 1 + this.left.size() + this.right.size();
  // ----
  // PROBAR CON UNA VARIABLE CONTADORA ITERANDO PARA UN LADO Y PARA EL OTRO
  // ----
};

BinarySearchTree.prototype.insert = function (value) {
  //  - insert: agrega un nodo en el lugar correspondiente
  if (value > this.value) {
    if (!this.right) this.right = new BinarySearchTree(value);
    else this.right.insert(value);
  } else {
    if (!this.left) this.left = new BinarySearchTree(value);
    else this.left.insert(value);
  }
};

BinarySearchTree.prototype.contains = function (value) {
  //  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  if (value === this.value) return true;
  else {
    if (value > this.value) {
      if (!this.right) return false;
      else return this.right.contains(value);
    } else {
      if (!this.left) return false;
      else return this.left.contains(value);
    }
  }
};

BinarySearchTree.prototype.depthFirstForEach = function (
  cb,
  order = "in-order"
) {
  //  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  if (order === "pre-order") {
    cb(this.value);
    if (this.left) this.left.breadthFirstForEach(cb, order);
    if (this.right) this.right.breadthFirstForEach(cb, order);
  } else if (order === "post-order") {
    if (this.left) this.left.breadthFirstForEach(cb, order);
    if (this.right) this.right.breadthFirstForEach(cb, order);
    cb(this.value);
  } else {
    if (this.left) this.left.breadthFirstForEach(cb, order);
    cb(this.value);
    if (this.right) this.right.breadthFirstForEach(cb, order);
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, arr = []) {
  //  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  if (this.left) arr.push(this.left);
  if (this.right) arr.push(this.right);
  cb(this.value);
  if (arr.length) arr.shift().breadthFirstForEach(cb, arr);
};
