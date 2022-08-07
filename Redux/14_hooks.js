/*
https://react-redux.js.org/api/hooks#useselector

Para conectar las funcionalidades de Redux en componentes de React, es necesario 'bindear' dichos componentes a través de la función 'connect()' brindada por el módulo 'react-redux'.

En caso de no querer usar dicha función en los componentes funcionales, puede hacerse uso de alguno de los siguientes hooks:

    - useReducer()
    - useDispatch()
    - useSelector()

Trabajando en un 100% con los Hooks, pueden no utilizarse las funciones 'mapStateToProps()' y 'mapDispatchToProps()', las cuales van de la mano con 'connect()'.

--------------------------------------------------------------------

Como todos los Hooks, los anteriores deben ser importados, en este caso de 'rect-redux' (menos useReducer()):
*/

import { useDispatch, useSelector } from "react-redux";

/* --------------------------------------------------------------------

USE REDUCER ()

Recibe como parámetros, el reducer y el estado inicial, y retorna un arreglo (similar a 'useState()') que en la primera posición ubica al estado, y en la segunda posición, la función dispatch, la cual envía una acción para modificar el estado global en el reducer.
*/

/* SYNTAX --> */ const [state, dispatch] = useReducer(
  reducer,
  initialArgument,
  init
);

// Acepta un reducer de tipo (state, action) => newState, y retorna el estado actual, emparejado con un método 'dispatch()':

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return { ...state };
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>➕</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>➖</button>
      <button onClick={() => dispatch({ type: "RESET" })}>R</button>
    </>
  );
}

// SI SE QUIERE ESPECIFICAR UN ESTADO INICIAL EN PARTICULAR PUEDE HACERSE DE LA SIGUIENTE MANERA:

// >>> const [state, dispatch] = useReducer(reducer, { count: initialCount });

/* --------------------------------------------------------------------

USE SELECTOR ()

Reemplaza a 'mapStateToProps()'
*/

/* SYNTAX --> */ const variable = useSelector((state) => state.value);

const name = useSelector((state) => state.name);
const age = useSelector((state) => state.age);
// Toma el estado que necesita del reducer, para ser utilizado en el componente
// Equivale a:
function mapStateToProps(state) {
  return {
    name: state.name,
    age: state.age,
  };
}

/*--------------------------------------------------------------------

USE DISPATCH ()

Reemplaza a 'mapDispatchToProps()'
*/

/* SYNTAX --> */ const action = useDispatch(action(params));

const dispatchMovie = useDispatch(getMovie(title));
const dispatchDetails = useDispatch(getMovieDetails(title));
// Despacha la acción para cambiar el estado global del Reducer
// Equivale a:
function mapDispatchToProps(dispatch) {
  return {
    getMovie: () => dispatch(getMovie(title)),
    getMovieDetails: () => dispatch(getMovieDetails(title)),
  };
}
