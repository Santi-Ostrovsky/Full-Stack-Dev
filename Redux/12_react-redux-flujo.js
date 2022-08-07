/*
ORDEN DE FUNCIONES Y FLUJO DE DATOS EN LOS COMPONENTES

1) imports
2) componente
3) mapStateToProps
4) mapDispatchToProps
5) export default connect
    --> connect(mapStateToProps/null, mapDispatchToProps/null)([componente]);
*/

// 1)

import { counter } from "./04_store";

import * as actionCreators from "./01_actions";
// o... ↓
import { increment, decrement, reset } from "./01_actions";

import { bindActionCreators } from "redux";

import { connect } from "react-redux";

// ********************

// 2) (puede ser componente funcional o de clase, es lo mismo)

const Counter = (props) => {
  const { counter, increment, decrement, reset } = props;
  return (
    <>
      <span>Clicked {counter} times</span>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
      {/* Si se tiene que pasar un parámetro, se usa arrow function */}
      {/* <button onClick={() => decrement(n)}> - </button> */}
      <button onClick={reset}> R </button>
    </>
  );
};

// ********************

// 3)

function mapStateToProps(state) {
  return { counter: state.count };
}

// ********************

// 4)

// Usar la siguiente opción sólo si se están usando todas las funciones del reducer
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}
// si no usar una de estas formas para especificar qué funciones deben ser ejecutadas
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ increment, decrement, reset }, dispatch);
}
// o... ↓
const mapDispatchToProps = (dispatch) => {
  return {
    increment: function () {
      dispatch(increment());
    },
    decrement: function () {
      dispatch(decrement());
    },
    reset: function () {
      dispatch(reset());
    },
  };
};

// ********************

// 5) En caso de no tomar estados o no despachar cambios, se reemplazan los parámetros de 'connect' por 'null', respectivamente.

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// --------------------------------------------------------------------
