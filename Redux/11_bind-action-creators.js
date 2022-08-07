/*
BIND ACTION CREATORS

Cuando un componente utiliza la totalidad de las funcionalidades de un archivo de reducers, se hace lo siguiente:
*/

// En lugar de importar cada función desde el reducer, se importa todo con un alias
import * as actionCreators from "./01_actions"; // ejemplo

import { bindActionCreators } from "redux"; // ver abajo

// En mapDispatchToProps, usar el método importado de Redux 'bindActionCreators()', el cual va tomar como primer parámetro, 'actionCreators' como la totalidad de las funcionalidades creadas dentro del reducer, y como segundo parámetro, el método 'dispatch'
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

/*
De esta forma, mapDispatchToProps retorna, como cambios a realizarse en el estado global en Store, la ejecución de todas las funciones es el Reducer.

--------------------------------------------------------------------
*/
