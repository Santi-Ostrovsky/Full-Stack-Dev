// IMPORTAR REDUX
const redux = require("redux");

// DECLARAR EL ESTADO INICIAL
const initialState = {
  owner: "Santiago",
  todo: [],
  completed: [],
};

// CREAR UN REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        // se agrega el item añadido a través de action.text
        todo: [...state.todo, action.text],
      };
    case "REMOVE":
      return {
        ...state,
        todo: state.todo.filter((val, index) => index !== action.index),
        // se filtra el array 'todo' quitando el index correspondiente
        completed: [...state.completed, state.todo[action.index]],
        // se agrega el elemento de 'todo' con el index correspondiente
        // el estado se actualiza al final de la función, por lo que puede usarse el elemento removido de state.todo en el paso anterior, no se perdió todavía.
      };
    default:
      return { ...state };
  }
};

// CREAR EL STORE
const store = redux.createStore(reducer);

// CREAR ACTION CREATOR - ADD
function addTodo(text) {
  return { type: "ADD", text };
}

// CREAR ACTION CREATOR - REMOVE
function removeTodo(index) {
  return { type: "REMOVE", index };
}

// --------------------------------------------------------------------

console.log(store.getState()); // --> undefined. El estado todavía no está seteado

// store.dispatch({type:'ADD', text:'comprar pan'}) ↓
store.dispatch(addTodo("comprar pan"));

console.log(store.getState());
// --> {owner: 'Santiago', todo: ['comprar pan'], completed: []}

store.dispatch(addTodo("comprar yerba"));

console.log(store.getState());
// --> {owner: 'Santiago', todo: ['comprar pan', 'comprar yerba'], completed: []}

store.dispatch(removeTodo(0));

console.log(store.getState());
// --> {owner: 'Santiago', todo: ['comprar yerba'], completed: ['comprar pan']}

// TODOS LOS CONSOLE.LOG PUEDEN REEMPLAZARSE POR LA SIGUIENTE LINEA (UNA ÚNICA LÍNEA PARA TODOS LOS CONSOLE LOG, SE ACTUALIZA CADA VEZ QUE CAMBIE EL ESTADO):
store.subscribe(() => console.log(store.getState()));
