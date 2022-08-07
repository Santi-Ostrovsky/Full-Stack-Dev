console.log(" \nCATCHING ERRORS \n");

/* TRY - CATCH - FINALLY --> Estructura que permite agarrar errores
y prevenir que los mismos detengan la ejecución del programa JS (idem
Python). */

try {
  // Probar expresión y ver si resulta en error.
} catch (error) {
  // Si resulta en error, capturar el mismo, y hacer [...]
} finally {
  // Finalmente, [...] (este paso siempre se ejecuta pero no
  // es requerido.)
}

// ------------------------------------------------------------------

// Ejemplo: imprimir una variable inexistente.

var a = "Esta es la variable 'a' y existe";

try {
  console.log(b); // la variable 'b' no existe
} catch (error) {
  console.log(`Error --> ${error}`); // si 'try' da error, imprime el error
} finally {
  console.log("\n--> Bloque final, siempre se ejecuta.\n");
}

// Si fuera a hacerse lo mismo con la variable 'a', la misma existe
// asi que no saltaría ningún error.

console.log('--------------------\nNuevo bloque "try" ↓ \n');

try {
  console.log(a);
} catch (error) {
  console.log(`Error --> ${error}`); // si 'try' da error, imprime el error
} finally {
  console.log("\n--> Bloque final, siempre se ejecuta.\n");
}

/* Si hubieran más líneas de código dentro del 'try', una vez que el
programa se encuentra con un error, deja de leer el resto de las líneas,
como un 'return' dentro de una función.    */

// Sirve para detectar todo tipo de errores.

console.log('--------------------\nNuevo bloque "try" ↓ \n');

let num = 1; // Division por cero

try {
  console.log(Num); // Variable 'num' mal escrita, 'Num' no existe.
  console.log("Esta linea no se ejecuta.");
} catch (error) {
  console.log(`Error --> ${error}\n`);
}

console.log('--------------------\nNuevo bloque "try" ↓ \n');

// 'isNaN'() sirve para saber si (algo) no es un numero. Entonces:

try {
  let numero = 10;
  if (isNaN(numero)) {
    throw new Error("No es un numero."); // Si el valor no es numero...
  }
  console.log(numero * 5);
} catch (error) {
  console.log(`Error --> ${error}`);
}

console.log('\n--------------------\nNuevo bloque "try" ↓ \n');

/* Uso de 'throw' y la creación de un nuevo error dentro de la clase/
prototipo de errores a traves de 'new Error()' */

try {
  let numero2 = "asd";
  if (isNaN(numero2)) {
    throw new Error("No es un numero"); // Si el valor no es numero...
  } // El error ya fue agarrado, creado y reportado, corte de bloque.
  console.log(numero2 * 5);
} catch (error) {
  console.log(`Error --> ${error}`);
}

// ------------------------------------------------------------------

// TIPOS DE ERRORES

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error

// ------------------------------------------------------------------

// CREACIÓN DE ERRORES

// Palabra-clave ==> THROW

// >>> if (true) throw new Error("Esto es un nuevo error");
