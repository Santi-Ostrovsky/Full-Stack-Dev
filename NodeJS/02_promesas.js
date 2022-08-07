// ver '../JS_vanilla/24_js_promise.js

/*
PROMESAS

JS asíncrono. Las promesas son una forma de permitirle a JavaScript, trabajar de manera asíncrona, de manera que no se detenga la ejecución de un programa por esperar el resultado de una operación específica.
Posibles resultados de las promesas:

--> RESOLVE (Promesa cumplida) --> valor = resolución
--> REJECT (Promesa incumplida) --> valor = motivo de rechazo

-----------------------------------------------------------------

PROPIEDADES

Las promesas son objetos que representan y gestionan el 'lifecycle' de una respuesta futura. Dentro del objeto, la promesa tiene dos propiedades indispensables:

--> status (pending || fulfilled || rejected)
--> information (value || reason)

Status:
    - Pending: todavía no se obtuvo respuesta del servidor.
    - Fulfilled: la respuesta del servidor fue satisfactoria.
    - Rejected: la petición al servidor fue rechazada.

Information:
    - Value: valor de la respuesta cuando la misma fue satisfactoria.
    - reason: motivo del rechazo cuando la petición no es satisfactoria.

                    Fulfilled --> Value
                   /
PROMESA --> Pending
                   \
                    Rejected --> Reason

-----------------------------------------------------------------

MÉTODO .THEN()

.then() es un método de las promesas, en el que como parámetro, se van a pasar las acciones que deben tomarse, tanto en el caso de que la promesa se cumpla, como en el que la petición sea rechazada:

>>> [promesa].then([successHandler], [errorHandler]);

Ambos parámetros representan funciones en las que se van a manejar los casos de respuesta:

>>> function successHandler() {...}
>>> function errorHandler() {...}
*/

fetch("https://www.linkedin.com/in/sostro/").then(
  (value) => console.log(value),
  (err) => console.log(err)
);

// o...

const fulfilled = (value) => console.log(value);
const rejected = (err) => console.log(err);

fetch("https://www.linkedin.com/in/sostro/").then(
  fulfilled(value),
  rejected(err)
);

/* -----------------------------------------------------------------

CONSTITUCIÓN DE LA PROMESA

Las promesas son objectos de la clase Promise, por lo que cada promesa va a ser creada como una instancia de dicha clase, a través de la palabra clave 'new':
*/

const cantidad = 10;

const promesa = new Promise(function (resolve, reject) {
  // Hasta que se resuelva --> Promise { <pending> }
  if (cantidad >= 10) resolve(cantidad); // cantidad >= 10 --> Promise { 10 }
  else reject("cantidad < 10"); // cantidad < 10 --> 'cantidad < 10'
});

promesa.then(
  // Una vez invocada la promesa
  (value) => console.log("fulfilled:", value), // se ejecuta esto si la respuesta es satisfactoria
  (err) => console.log("rejected:", err) // o se ejecuta esto si no lo es
);

/*
Posibles resultados de la promesa:
    - Cumplida --> 'fulfilled: 10'
    - Rechazada < 10 --> 'rejected: "cantidad < 10"'

(*) Si una misma promesa tiene mas de un llamado a '.then()', una vez resuelta (cumplida o no) se van a ejecutar TODOS los métodos '.then()'.

(*) Una vez que una promesa es resuelta, los valores arrojados por la misma NO CAMBIAN. Todos los métodos '.then()' llamados van a arrojar el mismo resultado, a menos que se haga una promesa nueva.

-----------------------------------------------------------------

.THEN() ANIDADO

Al hacerse una promesa, pueden ponerse tantos .then() como sea necesario, ya sea separados unos de otros, o de manera consecutiva (anidados):
*/

fetch("https://www.linkedin.com/in/sostro/")
  .then((data) => data.json) // convertir la respuesta a formato JSON
  .then((response) => dispatch({ type: "GET", payload: response })); // crea una acción cuyo contenido es el archivo JSON

/*
En este caso, cada .then() devuelve una nueva promesa, siendo que su 'status' y 'value' dependen del .then() anterior, y el argumento que tomen equivalga a ese 'value' (del .then() anterior). En caso de que el .then() anterior haya sido exitoso, el valor retornado se va a convertir en el 'value' del .then() siguiente dentro de su 'successHandler', y en el caso de que la petición haya sido rechazada, el error o respuesta negativa retornado se va a convertir en el 'reason' o 'err' del .then() siguiente dentro de su 'errorHandler'.

>>> (1) fetch('...') --> petición
>>> (2)   .then() --> respuesta de (1): fulfilled-successHandler, rejected-errorHandler
>>> (3)   .then() --> respuesta de (2): fulfilled-successHandler, rejected-errorHandler

                                                    Fulfilled --> Value
                                                   /
                    Fulfilled --> Value --> .then()
                   /                              \
PROMESA --> Pending                                Rejected --> Reason
                   \
                    Rejected --> Reason

-----------------------------------------------------------------

MÉTODO .CATCH()

El método .catch() equivale a:

>>> .then(null, [...])

Es decir, un '.then()' con un 'successHandler' sin definir, pero con un manejador de rechazo o error. De esta forma, se pueden dividir '.then()' y '.catch()' en métodos que atiendan individualmente las posibles respuestas a una petición.

>>> (1) fetch('...') --> petición
>>> (2)   .then() --> respuesta de (1): fulfilled-successHandler
>>> (3)   .catch() --> respuesta de (1): rejected-errorHandler

Si existen muchos .then() anidados sin .catch() entre medio, en caso de que alguna de todas esas peticiones sea rechazada, se va a invocar el primer .catch() existente, y se responderá con la razón por la cual fue rechazada la primera de las peticiones que no haya sido exitosa:

>>> (1) fetch('...') --> petición RECHAZADA
>>> (2)   .then() --> respuesta de (1): fulfilled-successHandler
>>> (3)   .then() --> respuesta de (2): fulfilled-successHandler
>>> (4)   .catch() --> case de error: rejected-errorHandler

(4) va a mostrar la causas del error en el rechazo de la petición (1). Esto se da porque al rechazarse una petición, todas las peticiones siguientes van a ser rechazadas por la misma causa, que va a ir pasándose de promesa en promesa, hasta llegar a un manejador de errores.

Si alguno de los .then() tiene como segundo parámetro, un manejador de errores, y la petición es rechazada, ese mismo manejador va a interrumpir la ejecución de la cadena de promesas, de manera que nunca se va a llegar al .catch(). La diferencia está en que con un .catch() al final sin manejadores de errores entre medio, se rechazan todas las peticiones con el mismo manejador; pero en caso de querer manejar el posible rechazo de cada una de las peticiones de manera particular, es necesario que cada .then() tenga su propio manejador de errores.

                                                            Fulfilled --> Value
                                                           /
                                        Fulfilled --> Value
                                       /                   \
                    Fulfilled --> Value                     Rejected --> CATCH(Reason)
                   /
PROMESA --> Pending

 -----------------------------------------------------------------

FLUJO DE PROMESAS
*/

function promesa_1() {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Terminó la primera promesa\n\n");
      resolve({ num: 123 });
    }, 2000); // 2 secs
  });
  console.log(promise);
  return promise;
}

function promesa_2(data) {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Terminó la segunda promesa\n\n");
      resolve({ ...data, nuevosDatos: "Nuevos Datos" });
    }, 2000);
  });
  console.log(promise);
  return promise;
}

function promesa_3(data) {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Terminó la tercera promesa\n\n");
      resolve({ ...data, chau: "Chau" });
    }, 2000);
  });
  console.log(promise);
  return promise;
}

const granPromesa = promesa_1()
  .then((data) => promesa_2(data))
  .then((data) => promesa_3(data))
  .then((datos) => {
    console.log(datos);
    return datos;
  })
  .then(null, (err) => err); // idem .catch()

granPromesa.then((data) => console.log(`granPromesa: ${data}`));

/* LA CONSOLA IMPRIME LO SIGUIENTE:

Promise { <pending> } ----------> 2 segundos
Terminó la primera promesa

Promise { <pending> } ----------> 2 segundos
Terminó la segunda promesa

Promise { <pending> } ----------> 2 segundos
Terminó la tercera promesa

{ num: 123, nuevosDatos: 'Nuevos Datos', chau: 'Chau' }
granPromesa: [object Object]

-----------------------------------------------------------------

PROMISE.ALL()

Cuando se quiere que los procesos, en lugar de suceder uno en consecuencia de otro, se espera que sucedan todos de manera simultánea, se usa:

>>> Promise.all([promesa_1(), promesa_2(), promesa_3(), ...etc])

Esto genera un proceso por el cual se comienza la ejecución de las promesas (se hacen las peticiones) simultáneamente, y se retorna un resultado una vez que todas las promesas hayan terminado de ejecutarse (cuando todas hayan sido resueltas satisfactoriamente o no).

Este método va a retornar un arreglo (array) con la respuesta de todas las promesas, en el orden en que fueron llamadas (promesa_1, promesa_2, etc.)
*/

Promise.all([promesa_1(), promesa_2(), promesa_3()])
  .then((resultado) => console.log("resultado:", resultado))
  .catch((err) => console.log("err:", err));

/*
En este caso, el parámetro 'resultado' va a contener un arreglo, en cuya posición '0' se va a encontrar la respuesta (fulfilled / rejected) de 'promesa_1()', en la posición '1' se va a encontrar la respuesta de 'promesa_2()', y en la posición '2' se va a encontrar la respuesta de 'promesa_3()'.

De esta forma, se va a esperar a que todas las promesas se cumplan al mismo tiempo, pero si una sola falla, todas lo van a hacer, de la misma forma en la que falla una cadena de promesas anidadas: la razón por la que una falle, va a ser la razón por la que todas las demás también lo hagan.

Promesas en serie --> .then()'s anidados
Promesas paralelas --> Promise.all()

-----------------------------------------------------------------
*/
