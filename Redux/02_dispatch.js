/*
DISPATCH()

Es la encargada de enviar las acciones al 'store'.

Los Action Creators pueden guardarse todos en un archivo, y ser importados, para mayor comodidad:
*/

import * as action from "./actionCreators";

store.dispatch(action.increment());
store.dispatch(action.addComment());
store.dispatch(action.removeComment());

// --------------------------------------------------------------------
