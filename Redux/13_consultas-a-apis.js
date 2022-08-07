/*
CONSULTAS A APIs

Si en algún momento de la ejecución de un programa, es necesaria una consulta a una API externa, la misma no puede realizarse dentro del reducer, ya que el mismo toma funciones puras (un mismo output para un mismo input).

LAS CONSULTAS A LAS APIs DEBEN HACERSE DESDE ACTIONS:
*/

// actions.js
import axios from "axios";

export function getPost() {
  return { type: "GET_POST" };
}

export function receivePost() {
  return { type: "RECEIVE_POST", post };
}

export function fetchPost(value) {
  return function (dispatch) {
    // Al retornar una función, se avisa al Middleware que es posible que se esté solicitando una tarea asíncrona.
    dispatch(getPost());
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${value}`)
      .then((r) => r.data)
      .then((d) => dispatch(receivePost(d)))
      .catch((e) => console.log(e));
  };
}

// --------------------------------------------------------------------

/*
FLUJO DE LAS CONSULTAS A APIs

1) Evento en el UI
2) Event Handler
3) Dispatch
4) Middleware (se encarga de hacer el pedido a la API)
5) Respuesta de la API
6) Ejecución del dispatch en Store
7) Store accede al Reducer
8) Reducer cambia el State correspondiente
9) Se envía un nuevo estado al componente
10) Nuevo renderizado del componente en el UI.

(*) UI = User Interface (interfaz de usuario)

*/

// --------------------------------------------------------------------

// Librería que permite hacer llamadas asíncronas --> REDUX-THUNK
