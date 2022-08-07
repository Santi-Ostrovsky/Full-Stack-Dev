/*
< PROVIDER />

Todos los componentes containers deben tener acceso al Store para poder suscribirse a ella. Para lograr esto, loq eu recomienda Redux es utilizar un componente especial de React-Redux llamado <Provider />, que hace que el Store esté disponible para todos los container de la App, si pasarla explícitamente.
*/

import { Provider } from "react-redux";
import store, { history } from "./store.js";

const router = (
  <Provider store={store}>
    {/* Store es una propiedad OBLIGATORIA de <Provider /> */}
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute componente={PhotoGrid} />
        <Route path="view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

// --------------------------------------------------------------------
