/*
ASYNC - AWAIT

Las Async functions permiten la utilización de código asíncrono, basado en promesas, sin la necesidad de explícitamente encadenar tales promesas:

async function asyncCall() {
  const result = await resolveAfter2Seconds();
  return result;
}

const asyncCall = async () => {...}

********************

    - ASYNC --> forma de llamar a la funcion
    - AWAIT --> forma de solicitarle a JS que pause la ejecución

*/

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("\n>>> RESOLVED");
    }, 2000);
  });
}

async function asyncCall() {
  console.log(">>> LLAMANDO");
  const result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();

// >>> LLAMANDO
// ... 2 segundos
// >>> RESOLVED

// -----------------------------------------------------------------

// Definir una funcion que tome la cantidad de segundos que toma en resolverse una promesa
function resolveAfterNSeconds(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`>>> RESOLVED 'N' AFTER ${n} SECONDS`);
    }, n + "000");
  });
}

// Definir una Async function que llame a la funcion anterior y tome la cantidad de segundos
async function asyncCall_2(n) {
  console.log(">>> LLAMANDO 'N'");
  const result = await resolveAfterNSeconds(n);
  console.log(result);
}

asyncCall_2(3); // 3 segundos
asyncCall_2(4); // 4 segundos
asyncCall_2(5); // 5 segundos

/* -----------------------------------------------------------------

'asyncCall' y 'asyncCall_2' son promesas, por lo cual podemos asignarle el valor de cualquiera de las dos a una variable, y esa variable va a ser una promesa que puede ser concatenada con otras promesas:
*/

const b = asyncCall_2(6); // 'b' (promiseB) va a ser resuelta con un valor de 'undefined' (porque asyncCall_2 (la promiseA) no esta retornando un valor de forma explicita).

const c = b.then((data) => console.log("promiseC -->", data)); // 'c' (promiseC) es otra promesa (promiseB.then()) que toma el valor retornado por la promesa anterior y lo imprime en consola - en este caso, imprime 'undefined').

/* -----------------------------------------------------------------

ASYNC-AWAIT LOOPS

Es SUPER ineficiente, por lo que si se quieren retornar muchas promesas de formas simultánea, se debe hacer con un Promise.all().

-----------------------------------------------------------------

TRY / CATCH
*/

try {
  // Intenta ejecutar este codigo, y si puede ejecutarlo sin errores, sigue la ejecución del programa sin entrar al 'catch'.
} catch (error) {
  // Si el código dentro del 'try' arroja un error, maneja dicho error para no tener la ejecución de todo el programa.
}

/*

Dentro del bloque TRY, puede ejecutarse tanto código sincrónico como asíncrono, y dentro de un mismo bloque, ante un error, el CATCH va a prevenir la interrupción de toda la app.

-----------------------------------------------------------------

VENTAJAS Y DESVENTAJAS DE ASYNC-AWAIT SOBRE PROMESAS

VENTAJAS:
    - El codigo es mas limpio y similar a codigo sincrónico.
    - Permite manejar errores de código sincrónico como asíncrono en un mismo lugar (try/catch)

*/
