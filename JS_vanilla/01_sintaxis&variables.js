console.log(" \nJavaScript Lessons \n");

// in-line comments are created by a double slash [/]

/*
Multi-line comments are created by a slash-star combination [/][*]
and must be closed with a star-slash combination [*][/]
*/

// All lines of code must end with a semi-colon [;]

// -----------------------------------------------------------------

console.log(" \nDATA TYPES \n"); /*

- undefined
- null
- boolean
- string
- number
- object
*/

// -----------------------------------------------------------------

console.log(" \nDEFINING VARIABLES \n");

var myName = "Santi1"; /* 'var' keyword. Usable throughout the whole
                          program. 'var' always define variables in
                          a global scope, even when defined inside
                          functions. To differentiate between
                          global and local scope variables, they
                          must be defined with 'var' and 'let'
                          respectively. */

myName2 = "Santi2"; /* no keyword. Re-assignment of a declared
                       variable.   */

let myName3 = "Santi3"; /* 'let' keyword. Only used in the scope
                            where the variable is defined. Variables
                            defined with the 'let' keyword cannot
                            be redefined, meaning that the variable
                            can have its value changed by simply
                            re-assigning it as if it was a Python
                            variable, but not through the 'let'
                            keyword.    */

const myName4 = "Santi4"; /* 'const' keyword. A variable that can
                             never change, Error otherwise.
                             Constant variables are Read-Only
                             variables, meaning that they cannot
                             be either re-declared or their values
                             re-assigned. It is common practice to
                             name constant variables in all capital
                             letters, like NAME, to easily identify
                             them when scanning the code.
Although, while string variables cannot be modified, arrays defined
with the 'const' keyword can be altered by changing individual
values with index reference between brackets:

const myArray = [1, 2, 3];
myArray[0] = 10;
myArray[1] = 20;
myArray[2] = 30;
console.log(myArray); --→ [10, 20, 30]

To prevent data mutation, we can use 'Object.freeze(x)':

function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI); --→ 99.

If we have a block of code like this one, where the constant PI is
defined inside an object, it is possible to change its value
through the 'try-catch' block. BUT, if we use 'Object.freeze(x)'
after the variable is defined, there will be no way to change its
value. So, the way we must change that block in order to 'freeze'
it, is the following:

function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI); --→ TypeError: Cannot assign to read only property
                     'PI' of object

As can be seen, console returned an error, because a frozen object
cannot be modified.
                     */
// DECLARING VS ASSIGNING VARIABLES

var a; /* Declaring a variable under the name of 'a', without value.
          (null Data). */

var b = 2; /* Declaring a variable 'b' and assigning the value of
            ' 2' to it, in the same line.
            '=' → Assignment operator. */

a = 7; /* Assigning the value '7' to the previously declared variable
          'a'. */

b = a; /* Re-assigning the value of the variable 'b' to the content
          of the variable 'a'. */

// -----------------------------------------------------------------

console.log(" \nPRINTING IN CONSOLE [CONSOLE.LOG()] \n");

/* In Python, to print something out in the console, we use the
command 'print'. In JS, we must use 'console.log()'. */

console.log("'a' equals", a);

// -----------------------------------------------------------------

console.log(" \nOTHER SYNTAX NOTES \n");

/* For strings, not only single quotes ['] and double quotes ["]
can be used to define strings, but also 'back-ticks' [``] */
var myStr = `Hello`;
console.log(myStr);

/* Uses of the backslash [\] as an escape symbol:
- \', \", \\, \n, as in Python.
- \r (carriage return)
- \t (tab)
- \v (vertical tab)
- \b (backspace)
- \f (from feed)    */

/* In JS, strings are immutable, in the sense that once defined and
assigned a value, individual characters of the string cannot be
altered through index operations, like in Python. To modify it, the
entire string must be changed.    */

/* To get an individual character from a string, in stead of just
typing 'string[x]', we must call the length function in bracket
notation, like so: string[string.length x] (being x the index number
of the character we want to get, like 2 or -1).    */

/* Los back-tics sirven para encerrar strings que contengan otras
cosas dentro, como métodos de concatenación: ${} : */

console.log("");

var nombre = "Santi";
var hola = `Hola, ${nombre}`;

console.log(hola);

// -----------------------------------------------------------------

console.log(" \nSTRICT MODE \n");

/* Strict mode is code execution mode which doesn't allow the use
of undeclared variables (like Python variables). It can be set as
a general outer scope mode for the entire file (at the top), or as
a local execution mode inside a function.

Strict mode is set by typing the command "use strict" AS A STRING,
IN BETWEEN QUOTES.

Strict mode makes it easier to write "secure" JS scripts. As an
example, mistyping a variable name creates a new global variable.
In strict mode, this will throw an error, making it impossible to
accidentally create a global variable, which will not allow the code
to run properly, despite not throwing any error feedbacks.    */

// -----------------------------------------------------------------

console.log(" \nSTRING METHODS \n");

/*

Métodos estáticos

String.fromCharCode(num1 [, ...[, numN]])
Devuelve una cadena creada utilizando la secuencia de valores Unicode
    especificada.

String.fromCodePoint(num1 [, ...[, numN]])
Devuelve una cadena creada utilizando la secuencia de puntos de código
    especificada.

String.raw()
Devuelve una cadena creada a partir de una plantilla literal sin formato.

Propiedades de la instancia

String.prototype.length
Refleja la length de la cadena. Solo lectura.

Métodos de instancia

String.prototype.charAt(index)
Devuelve el caracter (exactamente una unidad de código UTF-16) en el
    index especificado.

String.prototype.charCodeAt(index)
Devuelve un número que es el valor de la unidad de código UTF-16 en el
    index dado.

String.prototype.codePointAt(pos)
Devuelve un número entero no negativo que es el valor del punto de
    código del punto de código codificado en UTF-16 que comienza en la pos especificada.

String.prototype.concat(str[, ...strN])
Combina el texto de dos (o más) cadenas y devuelve una nueva cadena.

String.prototype.includes(searchString [, position])
Determina si la cadena de la llamada contiene searchString.

String.prototype.endsWith(searchString[, length])
Determina si una cadena termina con los caracteres de la cadena
    searchString.

String.prototype.indexOf(searchValue[, fromIndex])
Devuelve el índice dentro del objeto String llamador de la primera
    aparición de searchValue, o -1 si no lo encontró.

String.prototype.lastIndexOf(searchValue[, fromIndex])
Devuelve el índice dentro del objeto String llamador de la última
    aparición de searchValue, o -1 si no lo encontró.

String.prototype.localeCompare(compareString[, locales[, options]])
Devuelve un número que indica si la cadena de referencia compareString
    viene antes, después o es equivalente a la cadena dada en el orden
    de clasificación.

String.prototype.match(regexp)
Se utiliza para hacer coincidir la expresión regular regexp con una
    cadena.

String.prototype.matchAll(regexp)
Devuelve un iterador de todas las coincidencias de regexp.

String.prototype.normalize([form])
Devuelve la forma de normalización Unicode del valor de la cadena
    llamada.

String.prototype.padEnd(targetLength[, padString]) (en-US)
Rellena la cadena actual desde el final con una cadena dada y devuelve
    una nueva cadena de longitud targetLength.

String.prototype.padStart(targetLength[, padString])
Rellena la cadena actual desde el principio con una determinada cadena
    y devuelve una nueva cadena de longitud targetLength.

String.prototype.repeat(count)
Devuelve una cadena que consta de los elementos del objeto repetidos
    count veces.

String.prototype.replace(searchFor, replaceWith)
Se usa para reemplazar ocurrencias de searchFor usando replaceWith.
    searchFor puede ser una cadena o expresión regular, y replaceWith
    puede ser una cadena o función.

String.prototype.replaceAll(searchFor, replaceWith) (en-US)
Se utiliza para reemplazar todas las apariciones de searchFor usando
    replaceWith. searchFor puede ser una cadena o expresión regular, y
    replaceWith puede ser una cadena o función.

String.prototype.search(regexp)
Busca una coincidencia entre una expresión regular regexp y la cadena
    llamadora.

String.prototype.slice(beginIndex[, endIndex])
Extrae una sección de una cadena y devuelve una nueva cadena.

String.prototype.split([sep[, limit] ])
Devuelve un arreglo de cadenas pobladas al dividir la cadena llamadora
    en las ocurrencias de la subcadena sep.

String.prototype.startsWith(searchString[, length])
Determina si la cadena llamadora comienza con los caracteres de la
    cadena searchString.

String.prototype.substr()
Devuelve los caracteres en una cadena que comienza en la ubicación
    especificada hasta el número especificado de caracteres.

String.prototype.substring(indexStart[, indexEnd])
Devuelve una nueva cadena que contiene caracteres de la cadena
    llamadora de (o entre) el índice (o indeces) especificados.

String.prototype.toLocaleLowerCase( [locale, ...locales])
Los caracteres dentro de una cadena se convierten a minúsculas
    respetando la configuración regional actual.

Para la mayoría de los idiomas, devolverá lo mismo que toLowerCase().

String.prototype.toLocaleUpperCase( [locale, ...locales])
Los caracteres dentro de una cadena se convierten a mayúsculas
    respetando la configuración regional actual.

Para la mayoría de los idiomas, devolverá lo mismo que toUpperCase().

String.prototype.toLowerCase()
Devuelve el valor de la cadena llamadora convertido a minúsculas.

String.prototype.toString()
Devuelve una cadena que representa el objeto especificado. Redefine
    el método Object.prototype.toString().

String.prototype.toUpperCase()
Devuelve el valor de la cadena llamadora convertido a mayúsculas.

String.prototype.trim()
Recorta los espacios en blanco desde el principio y el final de la
    cadena. Parte del estándar ECMAScript 5.

String.prototype.trimStart() (en-US)
Recorta los espacios en blanco desde el principio de la cadena.

String.prototype.trimEnd()
Recorta los espacios en blanco del final de la cadena.

String.prototype.valueOf()
Devuelve el valor primitivo del objeto especificado. Redefine el método
    Object.prototype.valueOf().

String.prototype.@@iterator() (en-US)
Devuelve un nuevo objeto Iterator que itera sobre los puntos de código
    de un valor de cadena, devolviendo cada punto de código como un valor de cadena.

*/

//---------------------------------------------------------

// var nombre = 'Santi";
// var numero = 60;
// console.log(typeof nombre); ==> String
// console.log(typeof numero); ==> number
