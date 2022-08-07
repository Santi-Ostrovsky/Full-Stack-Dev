/*
REDUX

En React, el flujo de la información es hacia abajo, mientras que el flujo de los eventos es hacia arriba.

El hecho de que el 'data-flow' sea hacia abajo, implica que una función debe estar declarada en el componente principal, e ir pasándose por props a los componentes hijos hasta llegar al componente que necesita utilizar dicha función.

Esto puede traer inconvenientes, como perder el registro de la información o manejar la misma información en dos componentes distintos y generar inconsistencias.

REDUX ofrece la idea de 'un único centro de información', de manera que todos los componentes puedan observar estas funcionalidades en un elemento externo, y que todos los componentes puedan acceder a el, si que la funcionalidad pertenezca a un único elemento, si no que sea de todos.

De esta forma, teniendo un 'store' o 'storage' (conjunto de estados) de la información, todos los componentes van a estar enterados de los cambios en la información, y todos van a tener la información actualizada en caso de necesitarla.

Esto no significa que todos los componentes deban estar conectados al 'store'. Algunos componentes pueden seguir manteniendo estados locales y seguir manipulando la información de manera local. Por ejemplo, en una SPA, la página 'About' no necesita estar accediendo al banco de estados, ya que no necesita desplegar información dinámica, por lo que no va a ser necesario que este componente esté vinculado.

En resumen, REDUX es un almacén de estados globales, que al tener componentes asociados, comparte dichos estados con los componentes que se encuentren asociados al banco de estados.

*********** npm install redux ***********

--------------------------------------------------------------------

3 PRINCIPIOS BÁSICOS:

    - 'Single source of truth': el estado de toda la aplicación es almacenado en un árbol de objetos dentro de una sola 'store' o almacén' (hay un único 'store' por aplicación).

    - los estados son 'read only': no pueden ser modificados directamente. La única manera de cambiar un estado es 'emitir una acción' (action), que es un objeto que describe el cambio (método store.dispatch()- Contiene un objeto (igual que setState()), el cual contiene como mínimo una propiedad llamada 'type', cuyo valor es un string que describe la acción que se busca realizar).

    - Los cambios son realizados con funciones puras: para especificar cómo el árbol de estados es transformado por acciones, se escriben 'reducers' puros (métodos de Redux).
*/

function visibilityFilter(state = "SHOW_ALL", action) {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return { ...state };
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case "COMPLETE_TODO":
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, { completed: true });
        }
        return todo;
      });
    default:
      return { ...state };
  }
}

import { combineReducers, createStore } from "redux";
const reducer = combineReducers({ visibilityFilter, todos });

/* ---> */ const _store = createStore(reducer); /* <--- */

/*
Resumen ==> Utilizando la función dispatch() se almacenan los estados en el scope global de la aplicación (no pueden ser modificados por asignación directa), pasando como parámetro, un objeto descriptivo, explicando lo que debe llevarse a cabo. Una vez que la acción es despachada, va a ir a parar al 'reducer', que hace el cambio en el store (almacén de estados).

El reducer es una función definida por nosotros, la cual debe ser pura (siempre el mismo output para un mismo input), implicando que no podría, por ejemplo, usarse un Math.random() en un reducer ya que el output no es controlado, ni tampoco podrían hacerse solicitudes a una API de forma directa.

El store siempre es uno solo, no puede haber más de un almacén de estados por aplicación, pero sí puedo definir más de un reducer, y hacer que cada reducer se encargue de manejar una parte específica del store.

Los reducers SIEMPRE DEVUELVEN UN NUEVO ESTADO. El estado siempre se pisa, si se quiere mantener sin cambios, debe actualizarse a un estado idéntico, porque SIEMPRE se pisa.

ACTION ----> DISPATCHER ----> REDUCER ----> STATE ----> CHANGE ----> ACTION ---> [...]
   EVENT   |                  STORE                  |           EVENT

--------------------------------------------------------------------
*/

const store = createStore(reducer);

// inicialización de estado, conocido globalmente por la aplicación
let initialState = {
  owner: "Santiago Ostrovsky",
  account: 0,
};

// action --> objeto --> prop obligatoria: type (sting)
// state toma como valor default el initialState para la primera vez que se invoque
function reducer(state = initialState, action) {
  // reducer SIEMPRE tiene que devolver un estado, por lo que siempre debe tener un caso DEFAULT
  if (action.type === "DEPOSIT_10") {
    // action SIEMPRE tiene un TYPE
    return {
      // return --> SIEMPRE re-define el estado
      ...state, // debe tomar una copia del estado anterior para no eliminar propiedades no modificadas
      account: state.account + 10, // {owner: 'Santiago Ostrovsky', account: 10}
      // podría ser --> account: state.account + action.amount
    };
  } else if (action.type === "WITHDRAW_10") {
    return {
      ...state,
      account: state.account - 10, // {owner: 'Santiago Ostrovsky', account: -10}
    };
  } else {
    return { ...state }; // Caso DEFAULT, se retorna el estado, sin importar cuál sea su valor
  }
}

// Wallet.jsx
function Wallet() {
  // MODIFICA EL ESTADO GLOBAL
  return (
    <div>
      <button onClick={() => dispatch({ type: "DEPOSIT_10", amount: 10 })}>
        Deposit $10
      </button>
      <button onClick={() => dispatch({ type: "WITHDRAW_10", amount: 10 })}>
        Withdraw $10
      </button>
    </div>
  );
}

// Summary.jsx
function Summary() {
  // RENDERIZA EL ESTADO GLOBAL
  owner; // owner --> state.owner
  account; // account --> state.account
}

// STATE y ACTION no son palabras reservadas, son CONVENCIONES

/* --------------------------------------------------------------------

       contiene        define     dispara          sent to          actualiza
STORE ---------> STATE ------> UI -------> ACTIONS -------> REDUCER ------  -> STORE

--------------------------------------------------------------------
*/
