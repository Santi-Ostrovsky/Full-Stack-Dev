console.log(" \nFUNCTIONS \n");

/* Use the Keyword 'function' to define one, then goes the name
of the function and its parameters (or an empty pair of
parentheses if it takes no arguments), and then the function's
codeblock goes in between curly brackets. Curly brackets replace
in JS what the colon was in Python. Finally, the function is
called in the same way it would be in Python.    */
function heyWorld() {
  console.log("Hello, World");
}

heyWorld();

// How curly brackets are used to separate codeblocks:
function thisNumIs(x) {
  var num = x;
  var output;
  if (num < 0) {
    output = "This number is negative.";
  }
  if (num >= 0) {
    output = "This number is positive.";
  }
  console.log(output);
}

thisNumIs(8);
thisNumIs(-1);

/* Global and local scopes for variables work the same way as
in Python, but, if the keyword 'var' is not used when defining
a variable inside a function, said variable becomes global when
defined, or modifies the assigned value to an existing global
variable.

When in doubt, the JS interpreter will always prioritize
local scope variables when both local and global variables have
the same name.    */

// 'return' works in the same way as in Python.

/* Functions that return arithmetic outputs, for example, can be
used to assign the value of a variable. For example:    */
function modify(n) {
  return (n * 5) / 10;
}

var modifiedNum = modify(5);
console.log(modifiedNum);

/* Different from Python, in JS functions can have multiple
'return' statements. Whenever a 'return' statement is reached,
the function task will stop and return the proper output.    */

// ----------------------------------------------------------------

console.log(" \nARROW FUNCTIONS", "\n");

var resta = function (a, b) {
  return a - b;
};

/* La función de arriba es una función anónima (o expresada), porque en
lugar de tener un nombre propio, está enlazada al nombre de una
variable. Es una de las formas de simplificación de las funciones en su
escritura, pero existe otra, todavía mas corta, para crear funciones en
una única línea, y es a través de las 'funciones flecha' o 'arrow
functions': */

var resta = (a, b) => {
  return a - b;
};

/* Si bien el complemento o extensión 'prettier' ubica las distintas
partes de la función en una línea nueva, esta función puede ser escrita
en una única línea, y puede acortarse todavía mas: */

var resta = (a, b) => a - b;

// Se lee: [nombre de función] es igual a (parámetros), retornar(=>) x.
// El return implícito solo funciona si la función tiene una sola linea.

console.log(resta(10, 6)); // 4

// Funciones declaradas: aquellas definidas con 'function' mas el
// nombre de la función.

// Funciones expresadas: aquellas sin nombre, pero asignadas como
// valor de una variable, y tienen un contenido ejecutable.
console.log();

/* Cuando las funciones flecha no reciben parámetros, es necesario
incluir los paréntesis. Pero cuando sí reciben (y el argumento es uno
solo), como en ejemplo que sigue, los paréntesis pueden omitirse.    */

var x2 = (a) => a * 2; // Prettier agrega los paréntesis pero no son
console.log(x2(4)); // necesarios.

/* IMPORTANTE: Las arrow functions no funcionan de la misma manera que
las funciones declaradas, en el sentido que las funciones declaradas
crean su propio scope, y las funciones flecha no. Si se intenta usar
una arrow function como método dentro de un objeto, no va a funcionar
si usa la palabra-clave 'this', ya que la misma hace referencia al
objeto dentro de ese contexto o scope, no la arrow function no crea
un scope. En ese caso, es necesario usar una función declarada.    */

// ----------------------------------------------------------------

console.log(" \nCARD COUNTING GAME \n");

let count = 0;

function cc(card) {
  let regex = /[JQKA]/; // Expresión regular, contenedor de caracteres.
  if (card > 1 && card < 7) {
    count++;
  } else if (card === 10 || regex.test(card)) {
    count--;
  }
  if (count > 0) return count + " Bet";
  return count + " Hold";
}

console.log(cc(2));

// ----------------------------------------------------------------

// FOR MORE ON FUNCTIONS, GO TO:
// https://www.youtube.com/watch?v=PkZNo7MFNFg  @2:47:17

var magic = function () {
  return new Date();
};

/* This is called Anonymous functions, when functions have no name.
It can be shortened even further by converting it into an arrow
function: */

var magic = () => {
  return new Date();
};

/* As seen, there is an 'arrow' after the parentheses which simplifies
the writing, but it can be simplified even more: */

var magic = () => new Date();

// -----------------------------------------------------------------

/* Las funciones pueden asignar valores predeterminados a los
argumentos necesarios cuando los mismos no se pasan o no están
definidos:    */

console.log();

function valoresPredeterminados(nombre = "El-sin-nombre", edad = "100") {
  console.log(`Mi nombre es ${nombre}, y tengo ${edad} años.`);
}

valoresPredeterminados("Santiago", 26);
valoresPredeterminados();

// -----------------------------------------------------------------

console.log();
// PARÁMETRO 'REST'.

/* Cuando hacemos una función que toma parámetros, pero no se sabe
cuántos parámetros va a tomar y es necesario que la funcionalidad de
la misma sea independiente de la cantidad de parámetros, se establece
dicha necesidad a través de puntos suspensivos dentro de la toma de
parámetros de la función [...]:    */

// Crear una función que sume todos los números ingresados:

function sumar(a, b, ...c) {
  /* El parámetro "...c" es un array que va a existir mientras que
    la función reciba más de dos valores, y su contenido va a depender
    de cuántos valores sean ingresados. Al ser un array, se le deben
    aplicar métodos de arrays para cuantificar sus valores:    */
  let resultado = a + b;

  c.forEach(function (n) {
    resultado += n;
  });

  return resultado;
}

console.log("sumar =>", sumar(1, 2, 3, 4, 5, 6, 7)); // 28

// ---------

console.log();
const restar = (...args) => args.reduce((a, b) => a - b, 0);

console.log("restar =>", restar(1, 2, 3, 4, 5));

// -----------------------------------------------------------------

console.log();
// FUNCIONES PARA EL ARCHIVO 21_IMPORT&EXPORT

const uppercaseString = (str) => str.toUpperCase();
const lowercaseString = (str) => str.toLowerCase();
//export { uppercaseString, lowercaseString };

// -----------------------------------------------------------------

console.log();
const num1 = 4;
const num2 = 200;
const num3 = 60;
const numeroMayor = (a, b, c) => (a > b && a > c ? a : b > a && b > c ? b : c);

console.log(numeroMayor(num1, num2, num3));
