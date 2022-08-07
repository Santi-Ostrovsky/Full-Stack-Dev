/*
REDUCERS

Las acciones describen qué pasó, pero no especifican cómo cambió el estado de la app. Ese trabajo es de los reducers:
*/

const addContact = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case "UPDATE_CONTACT":
      return {
        /* handleContactUpdate */
      };
    case "DELETE_CONTACT":
      return {
        /* handleContactDelete */
      };
    case "EMPTY_CONTACT_LIST":
      return {
        /* handleContactList */
      };
    default:
      return { ...state };
  }
};

/*
Cuando una aplicación es muy grande, los reducers pueden dividirse en archivos separados para mantenerlos independientes, y controlando datos específicos.

Esto se logra a través de la función 'combineReducers()' de Redux, la cual permite crear muchos reducers para luego combinarlos, pero teniendo la posibilidad de llamar a cada uno de manera individual. Esto se hace porque el Store acepta un único reducer, y en caso de tener muchos, pueden combinarse con esta función:
*/

import { combineReducers } from "redux";

//En caso de haber más de un reducer:
let combined = combineReducer({ r1, r2, ...r3 });
let $tore = createStore(combined);

export default $store;

/*     O     */

export const todoApp = combineReducers({
  visibilityFilter,
  todos,
});

// --------------------------------------------------------------------
