/*
STORE

    - Contiene el estado de la aplicación.
    - Permite el acceso al estado a través de getState().
    - Permite que el estado sea actualizado a través de dispatch().
    - Registra los listeners a través de subscribe(listener).
    - Maneja la anulación del registro de listeners a través del retorno de la función subscribe(listener).
*/

import { createStore } from "redux";
import todoApp from "./reducers";

let store1 = createStore(todoApp);

/*
'createStore()', toma a partir del segundo parámetro, MiddleWares. Los mismos van a ser utilizados en el navegador y en tiempo de ejecución de la aplicación, ya sea para hacer pedidos a una API externa, o para utilizar herramientas del navegador como 'react-dev-tools'.
*/

// --------------------------------------------------------------------
