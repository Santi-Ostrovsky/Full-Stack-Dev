/*
Your function must always return the entire record collection object.
- If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
- If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
- If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
- If value is an empty string, delete the given prop property from the album.
Note: A copy of the recordCollection object is used for the tests.
*/

const { fileURLToPath } = require("url");

/*
- After updateRecords(recordCollection, 5439, "artist", "ABBA"), artist should be the string ABBA
- After updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracks should have the string Take a Chance on Me as the last and only element.
- After updateRecords(recordCollection, 2548, "artist", ""), artist should not be set
- After updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracks should have the string Addicted to Love as the last element.
- After updateRecords(recordCollection, 2468, "tracks", "Free"), tracks should have the string 1999 as the first element.
- After updateRecords(recordCollection, 2548, "tracks", ""), tracks should not be set
- After updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), albumTitle should be the string Riptide
*/

// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop != "tracks" && value != "") {
    records[id][prop] = value;
  } else if (prop == "tracks" && !records[id][prop]) {
    records[id][prop] = [value];
  } else if (prop == "tracks" && value != "") {
    if (records[id][prop]) {
      records[id][prop].push(value);
    } else if (!records[id][prop]) {
      records[id][prop] = [value];
    }
  } else if (value == "") {
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 2548, "tracks", "");

//console.log(recordCollection);

// -----------------------------------------------------------------------

/*
Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.
*/

/*
- multiplyAll([[1], [2], [3]]) should return 6
- multiplyAll([[1, 2], [3, 4], [5, 6, 7]]) should return 5040
- multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]) should return 54
*/

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

var prueba = [
  [1, 2],
  [3, 4],
  [5, 6, 7],
];
// console.log(multiplyAll(prueba1));

// -----------------------------------------------------------------------

/*
Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
*/

/*
- sum([1], 0) should equal 0.
- sum([2, 3, 4], 1) should equal 2.
- sum([2, 3, 4, 5], 3) should equal 9.
- Your code should not rely on any kind of loops (for or while or higher order functions such as forEach, map, filter, or reduce.).
- You should use recursion to solve this problem.
*/

function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

// console.log(sum([2, 3, 4, 5], 3));

// -----------------------------------------------------------------------

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
    // return 'No such contact'
  }
  return "No such contact";
  // Only change code above this line
}

//console.log(lookUpProfile("Sherlock", "number"));

// -----------------------------------------------------------------------

// Función que retorna un numero aleatorio en un rango entre min y max.

function randomRange(min, max) {
  // Only change code below this line
  return Math.floor(Math.random() * (max - min + 1)) + min;
  // Only change code above this line
}

//console.log(randomRange(1, 999));

// -----------------------------------------------------------------------

/*
Use the parseInt Function with a Radix
The parseInt() function parses a string and returns an integer. It takes a
second argument for the radix, which specifies the base of the number in
the string. The radix can be an integer between 2 and 36.

The function call looks like this: parseInt(string, radix);

>>> const a = parseInt("11", 2);

The radix variable says that 11 is in the binary system, or base 2. This
example converts the string 11 to an integer 3.

Use parseInt() in the convertToInteger function so it converts a binary
number to an integer and returns it:
- convertToInteger("10011") should return a number
- convertToInteger("10011") should return 19
- convertToInteger("111001") should return 57
- convertToInteger("JamesBond") should return NaN
*/

function convertToInteger(str) {
  return parseInt(str, 2);
}

// console.log(convertToInteger('111001'));

// -----------------------------------------------------------------------

// function sumArray(array, n){
//   for (let i = 0; i < array.length; i++){
//     for (let j = 0; j < array.length; j++){
//       if (n == array[i] + array[j]){
//         console.log(true);
//       }
//     }
//   } console.log(false);
// }

// -----------------------------------------------------------------------

let username2 = "Z97";
// Change below this line
let userCheck2 = /^[a-z][a-z]+\d*$/i;
/*
1) ^ - start of input
2) [a-z] - first character is a letter
3) [a-z]+ - following characters are letters
4) \d*$ - input ends with 0 or more digits
5) | - or
6) ^[a-z] - first character is a letter
7) \d\d+ - following characters are 2 or more digits
8) $ - end of input
9) i - ignore case of input
*/
// Change above this line
let ok2 = userCheck2.test(username2);
// console.log(ok2);

// -----------------------------------------------------------------------

// console.log(6 / "3"); // 6/3 = 2

// console.log("2" * "3"); // 2*3 = 6

// console.log(4 + 5 + "px"); // '9px'

// console.log("$" + 4 + 5); // '$45'

// console.log("4" - 2); // 4-2 = 2

// console.log("4px" - 2); // NaN

// console.log(7 / 0); // infinity

// console.log({}[0]); // undef

// console.log(parseInt("09")); // 9

// console.log(5 && 2); // 2 --------------- ???

// console.log(2 && 5); // 5 --------------- ???

// console.log(5 || 0); // 5

// console.log(0 || 5); // 5 --------------- ??? toma 0 como valor falso y x eso imprime 5?

// console.log([3] + [3] - [10]); // [[3], [3], [10]] --MAL-- => 23 ----- concatena los '3' y resta 10.

// console.log(3 > 2 > 1); // true -- MAL -- => false ------ true > 1 - false ???

// console.log([] == ![]); // true

// -----------------------------------------------------------------------

/*
Crear un método 'repeatify' que este disponible para todos los objetos Strings. Esta función
debe aceptar un entero que indica cuantas veces el string tiene que repetirse. La función
retorna el string repetido el número de veces que indicamos. Controlar que el número no sea
menor que cero, y si es cero que devuelva '' (String vacío).
*/

console.log();

String.prototype.repeatify = function (num = 1) {
  if (num <= 0) return "";
  let str = "";
  for (let i = 0; i < num; i++) {
    str += this;
  }
  return str;
};

var string = "Hola";

// console.log(string.repeatify(3));

// -----------------------------------------------------------------------

// Crear una función que devuelva un array filtrado, sin los arrays internos que contengan el elemento 'elem'.

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) newArr.push(arr[i]);
  }
  // Only change code above this line
  return newArr;
}

// console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6], ], 18));

// -----------------------------------------------------------------------

// Nested Arrays Depth

let nestedArray = [
  ["deep"],
  [["deeper"], ["deeper"]],
  [[["deepest"], ["deepest"]], [[["deepest-est?"]]]],
];

// console.log("elemento deep", nestedArray[0]);
// console.log('palabra "deep"', nestedArray[0][0]);
// console.log();
// console.log("elemento deeper", nestedArray[1][0]);
// console.log('palabra "deeper"', nestedArray[1][0][0]);
// console.log();
// console.log("elemento deepest", nestedArray[2][0][0]);
// console.log('palabra "deepest"', nestedArray[2][0][0][0]);
// console.log();
// console.log("elemento deepest-est", nestedArray[2][1][0][0]);
// console.log('palabra "deepest-est"', nestedArray[2][1][0][0][0]);
// console.log();

// -----------------------------------------------------------------------

/*
We have defined a variable, 'myNestedArray', set equal to an array. Modify
'myNestedArray', using any combination of strings, numbers, and booleans
for data elements, so that it has exactly five levels of depth (remember,
the outer-most array is level 1). Somewhere on the third level, include
the string deep, on the fourth level, include the string deeper, and on
the fifth level, include the string deepest.
*/

let myNestedArray = [
  // Only change code below this line
  [2],
  [
    [3, "deep"],
    [[4, "deeper"], [[5, "deepest"]]],
  ],
  // Only change code above this line
];

// -----------------------------------------------------------------------

//
function LinkedList() {
  this.head = null; // { head : null }
}

function Node(value) {
  (this.value = value),
    // { value : 'x', next : Node { value : 'y', next: null } }
    (this.next = null);
}

LinkedList.prototype.add = function (value) {
  //  - add: agrega un nuevo nodo al final de la lista;
  const node = new Node(value); // Creamos objecto (instancia de clase 'Node'), y le pasamos como valor, el valor del nodo.
  if (this.head == null) {
    // Hay head? (1, cualquier numero, cualquier combinación de letras) true, (0, null, undefined) false
    this.head = node; // Si la lista no tiene head, crealo, y dale el valor de Nodo (value: 'x', next: null).
  } else {
    // crear un posicionador.
    let current = this.head; // El lugar en el que estoy parado dentro de la lista enlazada.
    while (current.next != null) {
      // mientras haya un proximo vagón:
      current = current.next; // asignale a mi posición, el nexo con ese próximo vagón.
    }
    current.next = node; // Cuando el po
  }
};

LinkedList.prototype.remove = function () {
  //  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);

  if (this.head == null) {
    return null; // Si la lista está vacía, no tenemos que sacarle nada, y retornamos 'null'.
  } else if (this.head.next == null) {
    // si el head no tiene next (head es el único elemento)
    let result = this.head.value; // Guardes en una variable, el valor de ese elemento Node.
    this.head = null; // Eliminar el Node.
    return result; // Retornar el valor del nodo eliminado.
  } else {
    let current = this.head; // Definir posicionador (lugar en donde estoy parado, dentro de la lista).

    while (current.next.next) {
      current = current.next;
    }
    let result = current.next.value;
    current.next = null;
    return result;
  }
};

LinkedList.prototype.search = function (value) {
  if (!this.head) return null; // preguntamos si hay head. Si no lo hay, retornemos null
  let current = this.head; // creamos un posicionador en el head.
  if (typeof value != "function") {
    // preguntamos si el tipo de valor que se pasa por parámetro, NO es una función.
    while (current) {
      // mientras la posición, sea un valor válido:
      if (current.value == value) return current.value; // si el valor del nodo, es igual al parámetro, retornar el valor del nodo.
      current = current.next; // si no se cumple la igualdad, avanza el posicionador al next del próximo nodo.
    }
  } else {
    while (current) {
      if (value(current.value)) return current.value;
      current = current.next;
    }
  }
  return null;

  //   if (!this.head) {
  //     return null;
  //   }
  //   let current = this.head;
  //   while (current) {
  //     if (current.value == value) {
  //       return current.value;
  //     } else if (typeof value === "function") {
  //       if (value(current.value)) return current.value;
  //     }
  //     current = current.next;
  //   }
  //   return null;
};

// const LL = new LinkedList();
// LL.add(8);
// LL.add(3);
// LL.add(10);
// LL.search(3);

// --------------------------------------------------

function confirmEnding(str, target) {
  return str == str.slice(0, -target.length) + target;
}

// console.log(confirmEnding("Bastian", "n"));
// console.log(confirmEnding("Connor", "n"));

// --------------------------------------------------

const lab1 = {
  N: "pared",
  S: {
    N: "pared",
    S: "pared",
    E: "pared",
    O: {
      N: "pared",
      S: "destino",
      E: "pared",
      O: "pared",
    },
  },
  E: "pared",
  O: "pared",
};

function direcciones(laberinto) {
  let str = "";
  // iterar sobre los objetos hasta encontrar DESTINO o hasta que todas las opciones disponibles sean PARED.
  //   let arr = Object.values(laberinto)
  for (let prop in laberinto) {
    if (laberinto[prop] != "pared") {
      str += prop;
      if (laberinto[prop] == "destino") return str;
      return str + direcciones(laberinto[prop]);
    }
  }
  return ""; // sin destino retornar ''
}

// console.log(direcciones(lab1));

// --------------------------------------------------

LinkedList.prototype.addInPos = function (pos, value) {
  /* Tu codigo aqui */
  let current = this.head;
  let anterior = null;
  let contador = 0;
  let nuevoNodo = new Node(value);

  if (pos < 0) {
    return false;
  }
  while (contador < pos && current) {
    contador++;
    anterior = current;
    current = current.next;
  }
  if (posicionCursor < pos) {
    return false;
  }
  nuevoNodo.next = current;
  if (anterior != null) {
    anterior.next = nuevoNodo;
    return true;
  }
};

// ----------------------------------------

function OrderedLinkedList() {
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

OrderedLinkedList.prototype.removeLower = function () {
  if (!this.head) return null;
  else if (!this.head.next) {
    let aux = this.head;
    this.head = null;
    return aux;
  } else {
    let current = this.head;
    while (current.next) {
      current = current.next;
      if (!current.next) {
        let aux = current.value;
        current = null;
        return aux;
      }
    }
  }
};

let ll = new OrderedLinkedList();
ll.head = new Node(5);
ll.head.next = new Node(4);
ll.head.next.next = new Node(1);

// console.log(ll);
// console.log(ll.removeLower());
// console.log(ll.removeLower());
// console.log(ll.removeLower());
// console.log(ll.removeLower());

// ----------------------------------------

var restArray = function (array = []) {
  // Tu código acá
  if (array.length <= 0) {
    return -1;
  }
  let cont = 0;
  var ol = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      ol++;
      cont += restArray(array[i]);
    } else {
      cont += array[i];
    }
  }
  return cont - ol;
};

// console.log(restArray([1, [2, [3, 4]], [5, 6], 7]));
// console.log(restArray());

// ---------------------------------------------

Array.prototype.todos = function (fn) {
  // Escribi una función llamda todos en el prototipo de Arrays,
  // que recibe una funcion (callback). Asumir que fn devuelve siempre true o false.
  // La función todos debe devolver true si fn devuelve true cuando la invocamos pasandole de a uno todos los elemento del array
  // la funcion todos debe devolver false, si algún elemento del array hace que fn devuelva false;
  // por ejemplo:
  // [1,2,3].todos(function(elem) {
  //    return elem < 10;
  //  });
  // devuelve true
  // [1,2,3].todos(function(elem) {
  //    return elem < 2;
  //  });
  // devuelve false.
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i]) == false) return false;
  }
  return true;
};

// console.log(
//   "EL RESULTADO ES:",
//   [1, 2, 3].todos(function (elem) {
//     return elem < 10;
//   })
// );
// console.log(
//   "EL RESULTADO ES:",
//   [1, 2, 3].todos(function (elem) {
//     return elem < 2;
//   })
// );

// ---------------------------------------------

// El producto sale 200. Cada vez que lo compro sale +200. Cuantos puedo comprar con 1M? cuanta plata me sobra?

function problema() {
  // inicializar los valores
  let precio = 200,
    cantidad = 0,
    plata = 1000000;

  // crear bucle while
  while (plata >= precio) {
    cantidad++;
    plata -= precio;
    precio += 200;
  }

  // retornar todos los valores
  return `
  Precio del próximo producto: $${precio}
  Dinero restante: $${plata}
  Cantidad adquirida: ${cantidad}`;
}

// console.log(problema());

// ---------------------------------------------

// USAR .REDUCE() PARA CREAR UN OBJETO CON:
//  - El valor de la primera propiedad de cada objeto en el arreglo 'users' como nombre de una propiedad.
//  - El valor de la segunda propiedad de cada objeto en el arreglo 'users' como valor de la propiedad definida en el punto anterior.

const users = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 },
];

const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
// console.log(usersObj);

// --> { John: 34, Amy: 20, camperCat: 10 }

// ---------------------------------------------

// Diff Two Arrays - Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays. Note: You can return the array with its elements in any order.

// IMPERATIVE ↓
function diffArray(arr1, arr2) {
  const newArr = [];
  function newFunc(first, second) {
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) == -1) newArr.push(first[i]);
    }
  }
  newFunc(arr1, arr2);
  newFunc(arr2, arr1);
  return newArr;
}
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// DECLARATIVE ↓
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((item) => !arr1.includes(item) || !arr2.includes(item));
}
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// ---------------------------------------------

//Seek and Destroy - You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr, ...args) {
  return arr.filter((num) => !args.includes(num));
}
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// ---------------------------------------------

// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);

  return collection.filter((obj) =>
    sourceKeys.every(
      (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
    )
  );
}
// console.log(whatIsInAName(
//   [
//     { first: "Romeo", last: "Montague" },
//     { first: "Mercutio", last: null },
//     { first: "Tybalt", last: "Capulet" },
//   ],
//   { last: "Capulet" }
// ));

// ---------------------------------------------

// ARRAY DE NUMEROS PARES HASTA EL 100
const pares = Array(100)
  .fill(0)
  .map((e, i) => i + 1)
  .filter((e) => e % 2 === 0);

// console.log(pares);

// ---------------------------------------------

//

// ---------------------------------------------
