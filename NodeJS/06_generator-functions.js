/*
GENERATOR FUNCTIONS

Son funciones de las que se puede salir, interrumpiendo su ejecución, para luego volver a ingresar en ellas y retomar el trabajo interrumpido.

Pause --> 'yield'
Play --> 'next'
Stop --> 'return'

********************

SINTAXIS

    - function* --> retorna un Generator Object sobre el cual se puede invocar el metodo next().
*/

function* generatorExample() {
  console.log("\nIniciando Generator Function");
  yield "Yield 1";
  yield "Yield 2";
  console.log("Generation Function Terminada");
}

const generatorObject = generatorExample();

console.log("Object Generator -->", generatorObject, "\n"); // Object [Generator] {}

console.log(generatorObject.next()); // "Iniciando Generator Function" { value: 'Yield 1', done: false }
console.log(generatorObject.next()); // { value: 'Yield 2', done: false }
console.log(generatorObject.next()); // "Generator Function Terminada" { value: undefined, done: true }

/*
    - .next() --> devuelve un objeto con las propiedades { value, done }
        - value: El valor actual del objeto (valor del Yield en el cual se detuvo por ultima vez la ejecucion de la funcion).
        - done: booleano que describe si la funcion termino de ejecutarse o no.
*/

// Para reiniciar la ejecucion de la funcion, hay que definir un nuevo objeto cuyo valor sea la generator function:

const generatorObject_2 = generatorExample(); // --> NUEVA INSTANCIA

// -----------------------------------------------------------------

// GENERATOR FUNCTION CON PARAMETROS

function* generatorWithParams() {
  console.log("\nIniciando Generator Function con parametros");
  console.log("Yield 1 -->", yield);
  console.log("Yield 2 -->", yield);
  console.log("Generator Function con parametros Terminada");
}

const generatorObject_params = generatorWithParams();

console.log(generatorObject_params.next());
// "Iniciando Generator Function con parametros"
// { value: undefined, done: false }
console.log(generatorObject_params.next("Primer Parametro"));
// Yield 1 --> Primer Parametro
// { value: undefined, done: false }
console.log(generatorObject_params.next("Segundo Parametro"));
// Yield 2 --> Segundo Parametro
// "Generator Function con parametros Terminada"
// { value: undefined, done: true }

/* -----------------------------------------------------------------

YIELD VS RETURN

    - Yield --> PAUSA la ejecucion del generador y retorna un valor
    - Return --> FINALIZA la ejecucion del generador y retorna un valor

-----------------------------------------------------------------

INFINITE GENERATOR (ej: generador de IDs)

*/ console.log("\n");

function* naturalNumbers() {
  let number = 1;
  while (true) {
    yield number;
    number++;
  }
}

const numberGenerator = naturalNumbers();

console.log(numberGenerator.next()); // { value: 1, done: false }
console.log(numberGenerator.next()); // { value: 2, done: false }
console.log(numberGenerator.next()); // { value: 3, done: false }
console.log(numberGenerator.next()); // { value: 4, done: false }
console.log(numberGenerator.next().value); // 5
console.log(numberGenerator.next().value); // 6 ...

// -----------------------------------------------------------------
