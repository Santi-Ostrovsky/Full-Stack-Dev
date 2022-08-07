// LISTAS ENLAZADAS (SIMPLEMENTE ENLAZADAS)
// ----------------------------------------

function Nodo(data) {
  this.data = data;
  this.next = null;
}

function List() {
  this._length = 0;
  this.head = null;
}

/*
- Es como si leyéramos un libro en el cual la pagina que sigue no es el numero de pagina + 1, sino que al pie de la pagina que estamos leyendo, por ejemplo, dice a cuál pagina hay que ir para seguir leyendo.

- También puede asemejarse a una búsqueda del tesoro, en la que cada pista nos indica dónde esta la siguiente.


- Cada elemento en una lista se llama Nodo, y ese nodo va a indicar cual es el siguiente nodo en el espacio de memoria. Ej: el siguiente nodo es el '4' (haciendo referencia al espacio de memoria que el nodo 4 esta ocupando, no al nombre del nodo).
*/

// ----------------------------------

// - TODAS LAS LISTAS TIENEN UN HEAD.

class linkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
}

// linkedList.prototype.add = function (data) {
//   let current = this.head;
//   let node = new Node(data);
//   this.head = current;
//   if (this.head == null) {
//     this.head = node;
//     return node;
//   }
//   while (current.next) {
//     current = current.next;
//   }
//   current.next = node;
// };

class Node {
  constructor(data) {
    (this.data = data), (this.next = null);
  }
}

// const newNode = new Node(8);

const newList = new linkedList();

// - Una vez creada la clase List y la Clase node, puedo incluir un método en el prototipo de List para crear Nodos, pasándole como argumento el valor/contenido del nodo.

// - El HEAD de la lista siempre apunta al primer nodo.

newList.add(4);
newList.add(10);

/*
List {
    head: Node {
        data: 8,
        next: Node {
            data: 4,
            next: Node {
                data: 10,
                next: null
            }
        }
    }
}
*/

// --> la lista se va anidando en el atributo next de cada objeto. A través del método 'add' dentro del prototipo de List, se busca al último nodo, es decir, aquel nodo cuyo valor de 'nodo.next' sea null, y va a ingresar el nuevo nodo de valor x dentro de ese 'nodo.next', anidando un nuevo objeto.

newList.add(20);

console.log(newList);

/*
List {
    head: Node {
        data: 8,
        next: Node {
            data: 4,
            next: Node {
                data: 10,
                next: Node {
                    data: 20,
                    next: null
                }
            }
        }
    }
}
*/

// --------------------------------------

// LISTAS DOBLEMENTE ENLAZADAS

/*
En los ejemplos anteriores, sólo se puede recorrer la lista en un único sentido.

En algunos casos, puede servir recorrer la lista en ambos sentidos, para lo que se usa una lista doblemente enlazada, lo cal significa que los Nodos no sólo saben cual es el nodo que sigue, sino también el anterior.

Ej: data: x,
    prev: a,
    next: b;

*/

// --------------------------------------

("use strict");

// Implementar la clase LinkedList, definiendo los siguientes métodos:

function LinkedList() {
  this.head = null;
}

function Node(value) {
  (this.value = value), (this.next = null);
}

LinkedList.prototype.add = function (value) {
  //  - add: agrega un nuevo nodo al final de la lista;
  const node = new Node(value);
  if (!this.head) {
    this.head = node;
  } else {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
};

LinkedList.prototype.remove = function () {
  // - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  if (!this.head) {
    return null;
  } else if (!this.head.next) {
    let res = this.head.value;
    this.head = null;
    return res;
  } else {
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    let res = current.next.value;
    current.next = null;
    return res;
  }
};

LinkedList.prototype.search = function (value) {
  // - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true.
  // Ejemplo:
  // search(3) busca un nodo cuyo valor sea 3;
  // search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  // En caso de que la búsqueda no arroje resultados, search debe retornar null.
  var current = this.head;
  if (!this.head) {
    return null;
  }
  while (current) {
    if (current.value == value) {
      return current.value;
    } else if (typeof value === "function") {
      if (value(current.value)) return current.value;
    }
    current = current.next;
  }
  return null;
};
