console.log(" \nMÓDULOS \n");

/*
Los módulos se exportan e importan de manera distinta a las funciones. En lugar de llamar funcionalidad de un archivo, se hacen archivos con una única funcionalidad, y se llaman dentro del index.js o archivo principal. Esto se llama "modularizar el código".
*/

// SYNTAX

function suma(a, b) {
  if (typeof a !== "number" || typeof b !== "number")
    throw new TypeError("Solo numeros");
  else return a + b;
}

module.exports = suma; // FORMA 1
// O
exports.suma = suma; // FORMA 2

// -----------------------------------------------------------------

// AHORA SE IMPORTA EL OTRO ARCHIVO

const suma = require("./00_prueba.js"); // Se usa el archivo prueba para ejemplificar la importación, pero ahí debería ingresarse el nombre del archivo que contiene la función 'suma()'.

// ********************
// FORMA 1
suma(2, 3); // 5
// el módulo exportado es una función en su totalidad.

// ********************
// FORMA 2
suma.suma(2, 3); // 5
// el módulo exportado es equivalente a Math o cualquier otro módulo, debe llamarse para ingresar a las propiedades (funciones) que contiene, y cada importación hecha con ese método va a manejarse de la misma manera, las funciones exportadas son propiedades del módulo importado.

/* ES DISTINTO EXPORTAR DE LAS SIGUIENTES MANERAS:
    1 - module.exports.suma = suma;
    2 - module.exports = suma;

El método 1 exporta la función 'suma' como una propiedad del módulo, mientras que el método 2 exporta la función 'suma' como la totalidad y único contenido del módulo.
*/

// -----------------------------------------------------------------

// MODULE.EXPORTS VS. EXPORTS.[MODULE] (poco importante, ambos métodos de exportación son equivalentes)

/*
Siempre que se exporte un módulo, va a hacerse por MODULE.EXPORTS, pero cuando se hace a través de EXPORTS.[MODULE] se hace con una 'referencia' a MODULE.EXPORTS (sólo sirve para 'escribir menos', funciona como un acceso directo).

Sin embargo, la diferencia está en que MODULE.EXPORTS retorna un objeto vacío por defecto, con una referencia en memoria (module.exports = {} // ref 1234567890), mientras que EXPORTS.[MODULE], retorna siempre esa referencia en memoria por defecto (exports.[module] = ref 1234567890).

Algo que puede hacerse para que MODULE.EXPORTS retorne un objeto con la información necesaria por defecto, es lo siguiente:

>>> module.exports.suma = suma => { suma: function suma(a, b){...} }
SYNTAX --> module.exports.[obj.prop] = [module] => { [module]: [complete function] }

Al retornar un objeto, se puede agregar [.modulo] para que lo que se quiere exportar sea tomado como una propiedad de dicho objeto, y que el programa tome los valores guardados en dicha propiedad como los que van a ser utilizados en otro archivo.

Esto equivale a EXPORTS.SUMA = SUMA
*/

// IMPORTANTE --> Se una función se importa como propiedad del objeto MODULE.EXPORTS se puede usar EXPORTS.SUMA = SUMA, pero si se importa la función como un 'todo', debe usarse MODULE.EXPORTS. Antes la duda, siempre usar MODULE.EXPORTS.
