// CONEXIÓN DE REDUX A LOS CONTAINERS / 'BINDEO'

import Redux from "redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// la función 'connect' del módulo 'react-redux' es la que se encarga de 'bindear' ambos frameworks. 'connect' recibe 2 argumentos: 1- valores del estado a los que me quiero conectar (si no me quiero conectar a ninguno, el valor puede ser 'null'), 2- acciones que se van a despachar a redux (si no quiero despachar ninguna acción, el valor puede ser 'null').
import * as actionCreators from "../actions/actionCreators.js"; // EJEMPLO

import Main from "./Main.js"; // EJEMPLO

// mapStateToProps - es una función que se define por fuera del componente, que recibe como parámetro, el valor del estado global, al ser invocado por 'connect' (equivalente a store,getState()), en donde se establecen qué valores de estado van a ser utilizados por el componente llamado por 'connect'. En este caso, el componente 'Main' va a tomar los valores de estado 'posts' y 'comments'.
// mapStateToProps SIEMPRE retorna un objeto, en donde las 'keys' van a ser los nombres de las variables que van a ser utilizadas en el componente, y los 'values', los valores de estado tomados de Redux.
function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  };
}

// mapDispatchToProps -
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);
// 'connect' devuelve una función, que luego es invocada con el componente principal, en este caso, 'Main'.
// connect([estados], [acciones])(componente)
// estados ==> (state) => ({[nombre-de-la-prop]: state.counter})
// acciones ==> {increment, decrement, reset} // son las f() acciones

export default App;

// Todo lo anterior, equivale a ingresar el componente 'Main' en el renderizado de App en un proyecto de React, de la siguiente manera:
/* >>> */ <Main
  posts={store.getState().posts}
  comments={store.getState().comments}
/>; /* <<< */

/*
    - mapStateToProps: recibe el estado de la app y lo mapea a props de React.
    - mapDispatchToProps: recibe el método dispatch y retorna callback-props que van a pasarse a los componentes presentacionales.

--------------------------------------------------------------------
*/
