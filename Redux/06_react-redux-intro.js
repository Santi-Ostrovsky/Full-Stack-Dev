/*
REACT & REDUX

IMPORTACIONES BASE EN COMPONENTE PRINCIPAL (APP) ↓
*/

import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
// import {BrowserRouter as Router } from 'react-router-dom';

export const store = createStore(counter);

// Aquí, envolvemos nuestro componente principal React dentro de las etiquetas del Provider, que vienen del paquete react-redux. Esto es necesario porque el store saber hacia dónde está pasando su estado. El componente Provider es donde "vive" el store, y dentro del mismo ira la etiqueta <Router> (HashRouter / BrowserRouter) en caso de corresponder.

ReactDOM.render(
  <Provider store={store}>
    {/* <Router> */}
    <Counter />
    {/* </Router> */}
  </Provider>,
  document.getElementById("root")
);

/* --------------------------------------------------------------------

SUSCRIPCIÓN AL 'STORE'

Cuando una aplicación trabaja con React y Redux al mismo tiempo, los componentes dejan de mantener un estado local para permitir que Redux guarde esos estados en su Store, de forma que los componentes puedan tomar los estados necesarios de ese Store.

No todos los componentes van a necesitar acceder a ese Store, y/o puede que algunos componentes sí tengan estado, pero sigan manteniendo un estado local.

Cuando se vuelve necesario que los componentes mantengan una relación con el Store para tomar estados del mismo, tales componentes tienen que estar SUSCRITOS al Store:

>>> store.subscribe(store.getState()) // Para tomar todos los estados
>>> store.subscribe(store.getState().[estado]) // Para tomar un estado particular

Los componentes de React reciben por props los valores de estado, y al cambiar, se genera un nuevo renderizado del componente.

--------------------------------------------------------------------

COMPONENTES PRESENTACIONALES VS. CONTAINERS

CONTAINERS (SMART COMPONENTS): Determinan información
    - Determinan cómo funcionan las cosas (trae datos, actualiza estados...)
    - Tienen poco o nada de DOM.
    - Sin estilos.
    - Proveen datos.
    - Invocan acciones.
    - Se conectan con Redux suscribiéndose a sus estados.
    - Para cambiar datos envía acciones a Redux..

COMPONENTES PRESENTACIONALES (DUMB COMPONENTS): Muestran información
    - Determinan cómo se ven las cosas (markup, estilos...)
    - Para leer datos, los toma de props.
    - Para cambiar datos invoca callbacks de sus props.
    - Generalmente, no tienen estado propio.
    - No se conectan con Redux.

La separación de componentes trae algunas ventajas:
    - Separa los problemas lógicos de los presentacionales.
    - Permite una mayor reutilización de componentes.
    - Se ubica la complejidad únicamente en los containers.


--------------------------------------------------------------------

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
    dispatch(getPost());
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${value}`)
      .then((r) => r.data)
      .then((d) => dispatch(receivePost(d)))
      .catch((e) => console.log(e));
  };
}

// --------------------------------------------------------------------
