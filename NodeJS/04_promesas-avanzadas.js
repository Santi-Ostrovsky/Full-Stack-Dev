const fs = require("fs");

const p = new Promise((resolve, reject) => {
  fs.readFile(__dirname + "/02_promesas.js", "utf-8", (err, data) => {
    if (err) reject(err);
    else resolve(data);
  });
});

p.then((data) => console.log(data.toString())).catch((err) => console.log(err));

// La terminal imprime todo el contenido de '/02_promesas.js', y ese valor va a quedar guardado en 'p'. Los datos dentro de 'p' pueden ser alterados y/o utilizados por una serie de '.then()'s concatenados, y el resultado de esa manipulación puede ser guardado en una nueva variable, pero el valor de 'p' como resultado obtenido de una promesa es INMUTABLE:

/*
[...]
console.log(`////////// 1000 líneas de código después...  //////////`);
[...]
*/

p.then((data) => console.log(data.toString())).catch((err) => console.log(err));

// LA TERMINAL VA A SEGUIR IMPRIMIENDO TODO  EL CONTENIDO DE '/02_PROMESAS.JS'.

// CONSOLE.LOG() != RETURN ==> Si en una cadena de promesas, un error se maneja simplemente con un console.log() en lugar de un 'throw Error' (que si retorna el error), es posible que el valor/respuesta de la promesa se pierda y se convierta en 'undefined'.

// ---------------------------------------------------------------

// ************* RESOLVE / REJECT -VS- CONSOLE.LOG() *************

// PROMESA SIMPLE --> RESUELVE '10'
const promesa_1 = new Promise((resolve, reject) => {
  resolve(10);
});
promesa_1.then((data) => console.log(`promesa_1 --> ${data}`));
// --> promesa_1 = { resolved, 10 }

// PROMESA SOBRE OTRA PROMESA --> RESUELVE [PROMESA ANTERIOR] + '5' (15)
const promesa_2 = promesa_1.then((data) => data + 5);
promesa_2.then((data) => console.log(`promesa_2 --> ${data}`));
// --> promesa_2 = { resolved, 15 }

// PROMESA QUE COMO SUCCESS-HANDLER DEVUELVE UN ERROR SOBRE EL VALOR ANTERIOR --> RECHAZA '15'
const promesa_3 = promesa_2.then((data) => {
  throw data; // UNHANDLED-REJECTION-ERROR --> Sucede un error no manejado
});
promesa_3.then((data) => console.log(`promesa_3 --> ${data}`));
// --> promesa_3 = { rejected, 15 }

// PROMESA QUE COMO ERROR-HANDLER DEVUELVE VALOR ANTERIOR --> RESUELVE [PROMESA ANTERIOR] + '5' (20)
const promesa_4 = promesa_3.then(null, (data) => data + 5);
promesa_4.then((data) => console.log(`promesa_4 --> ${data}`));
// --> promesa_4 = { resolved, 20 }

// PROMESA QUE IMPRIME EN CONSOLA VALOR ANTERIOR --> NO RESUELVE / RETORNA NADA, IMPRIME '20' PERO SU PROPIO VALOR ES 'UNDEFINED'.
const promesa_5 = promesa_4.then((data) => console.log("promesa_5: ", data)); // 20
promesa_5.then((data) => console.log(`promesa_5 --> ${data}`)); // undefined
// --> promesa_5 = { resolved, undefined }

// CUANDO UNA PROMESA RECHAZADA ES MANEJADA POR EL ERROR-HANDLER, EL RESULTADO ES POSITIVO (RESOLVED)

// CUANDO EL CONTENIDO DE UNA PROMESA ES 'UNDEFINED', SE PIERDE EL FLUJO DE DATOS Y LAS PROMESAS SUBSIGUIENTES NO VAN A TENER VALOR.
