/*
REACT ROUTING permite navegar por el sitio sin que la página esté recargándose permanentemente.

SPA = Single Page Application ==> REACT-ROUTER

ReactRouter es una librería que sirve para definir de forma declarativa, las vistas que deben renderizarse, dependiendo de la URL.

>>> npm install react-router-dom

<Router /> --> <App /> --> <Route path='/messages' /> --> <Messenger /> --> [...]
                       --> <Route path='/login' /> --> <Login /> --> [...]
                       --> <Route path='/contacts' /> --> <Contacts /> --> [...]

--------------------------------------------------------------------------------

Historial ==> El objeto Window dentro del DOM proporciona acceso al historial de navegación a través del objeto History, el cual a su vez da acceso a métodos y propiedades que permiten avanzar y retroceder en el historial de navegación del usuario, y manipular el contenido de ese historial.

--------------------------------------------------------------------------------

TIPOS DE ROUTER

<HashRouter /> --> http://example.com/#/about (legacy)
    - Configuración del servidor más simple (el 'request' es siempre a la misma URL).
    - Agrega un '#' a la URL.

<BrowserRouter /> --> http://example.com/about
    - Requiere configuraciones extras en ambiente de producción.
    - URL más prolija.

*/

// HashRouter

import { HashRouter, Route } from "react-router-dom";

const app = ReactDom.getElementById("app");
app.render(
  <HashRouter>
    <App />
  </HashRouter>
);

<Route
  exact
  strict
  sensitive
  path="[...]"
  // LAS QUE SIGUEN, SON 3 FORMAS ALTERNATIVAS DE RENDERIZAR LOS COMPONENTES
  component={"[componente]"}
  render={() => <componente />}
  children={() => <componente />}
>
  [...]
</Route>;

/* --------------------------------------------------------------------------------

PROPIEDADES DEL COMPONENTE <ROUTE />

    - PATH: URL o array de URLs que se comparan con el 'path' actual, para evaluar si renderizar los componentes definidos en dicha ruta actual.

    - EXACT (bool): si se encuentra dentro de Route, implica que el 'path' debe coincidir de manera completa y exacta, y no únicamente su inicio.

    - STRICT (bool): si se encuentra dentro de Route, implica que el 'path' debe coincidir incluso en las barras '/' de la ruta.

    - SENSITIVE (bool): si se encuentra dentro de Route, el 'path' va a ser 'case-sensitive' (sensible a mayúsculas y minúsculas).

COMPONENT VS. RENDER VS. CHILDREN (Desventajas/Ventajas)

    - COMPONENT: Es más directo (no requiere función flecha), pero o se le pueden pasar propiedades al componente (ej: onClick).

    - RENDER: Sí se le pueden pasar propiedades, igual que como a cualquier componente, desde su componente padre, pero requiere el uso de una función flecha, a la cual se le pueden pasar argumentos.Toma una función que retorna UI con código JS (puede hacerse renderizado condicional en línea).
    
    - CHILDREN: Sí se le pueden pasar propiedades, igual que como a cualquier componente, desde su componente padre, pero requiere el uso de una función flecha, a la cual se le pueden pasar argumentos. Similar a 'render' pero SIEMPRE renderiza.

    - Cuarta Alternativa: No definir ninguno de los anteriores, y renderizar los componentes entre medio de las tags de apertura y cierre <Route></Route>, como se renderizan los componentes hijos en cualquier App de React.

(*) Cuando el Path y la ubicación actual coinciden, <Route /> devuelve un objeto 'info' que contiene tres propiedades (match, location, history), que se pasa como 'prop' del componente renderizado o como parámetro de la función en línea.
*/

// EJEMPLOS

function Home() {
  return (
    <div>
      <h2>Home, Soy Henry!!</h2>
    </div>
  );
};

const Root = (
  <Router>
    <NavBar />

    {/* COMPONENT */}
    <Route exact strict sensitive path="/MainPage" component={<MainPage />}>
      {/* No se le pueden pasar props */}
    </Route>

    {/* REACT - ANIDACIÓN DE COMPONENTES */}
    <Route exact strict sensitive path="/Home">
      <Home prop1="x" prop2={"y"} />
      {/* De esta forma se pueden pasar props, y cualquier cantidad de componentes */}
    </Route>

    {/* RENDER */}
    <Route exact path="/about" render={() => <About prop1="x" prop2={"y"} />}>
    {/* De esta forma se pueden pasar props */}
    {/* Si se quisiera pasar mas de un componente, se debe poner un return en la función flecha y envolver todo el contenido en una etiqueta padre (REACT FRAGMENT) ↓ (idem 'children')*/}
    <Route
      exact path="/about" render={() => {return (<><Ejemplo1 /><Ejemplo2 /></>)}}/>
    </Route>

    {/* CHILDREN */}
    <Route path="/aboutUs" children={() => <AboutUs prop1="x" prop2={"y"} />}>
      <h2>About Us</h2> {/* De esta forma se pueden pasar props */}
    </Route>

    {/* DEFAULT PATH */}
    {/* La URL entra a este componente si no llega a coincidir con ninguna otra ruta (pagina personalizada de Err.404 Page Not Found) */}
    <Route path="/">
      <h2>DEFAULT - PAGE NOT FOUND</h2>
    </Route>
  </Router>
);

// EN LA VERSION ACTUALIZADA DE REACT-ROUTER-DOM NO PUEDEN ANIDARSE LOS COMPONENTES, Y LA PROPIEDAD QUE SE UTILIZA PARA RENDERIZAR LOS COMPONENTES SE LLAMA 'ELEMENT' (REEMPLAZA A COMPONENT, RENDER Y CHILDREN, TODO JUNTO).

render(Root, document.getElementById("app"));

// --------------------------------------------------------------------------------

// ETIQUETA < LINK /> PARA LA BARRA DE NAVEGACIÓN (VER < NavLink />)

// Prop TO: Indica el path hacia el cual se debe redirigir al usuario una vez que haga 'click' en el link.

import React from "react";
import { Link } from "react.router.dom";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <h2>Barra de Navegación</h2>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/ejemplo">Ejemplo</Link>
    </div>
  );
}

/* --------------------------------------------------------------------------------

ETIQUETA < NAVLINK /> PARA LA BARRA DE NAVEGACIÓN

El componente <NavLink /> mantiene la misma funcionalidad de <Link />, pero permite dar estilos, dependiendo de la ruta actual.

PROPIEDADES

    - activeClassName: indica la clase que se va a asignar al Link cuando la ruta coincida con la especificada en la propiedad 'to="[...]"'.

    - exact (bool): aplica estilos sólo cuando la ruta coincida de manera exacta con la especificada en la propiedad 'to="[...]"'.

    - activeStyle: permite definir un estilo en línea para cada Link.
*/

import React from "react";
import { NavLink, Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="nav-bar">
            <h2>Barra de Navegación</h2>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink exact to='/about' activeClassName='selected'>About</NavLink>
            <NavLink exact to='/ejemplo' activeStyle={{color: '#f22'}}>Ejemplo</NavLink>
        </div>
    )
}

// PARA DAR ESTILO A LOS LINKS DE LA BARRA DE NAVEGACIÓN, SE USA EL PSEUDO-SELECTOR DE CSS '.ACTIVE', Y CUANDO SE SELECCIONE UNA SECCIÓN DE LA BARRA, SE LE VAN A APLICAR LOS EFECTOS DENTRO DE TAL SELECTOR.

/* --------------------------------------------------------------------------------

PROPIEDADES DEL OBJETO 'INFO' DE <ROUTE /> (PARÁMETROS QUE SE PUEDEN PASAR A LAS FUNCIONES EN LÍNEA EN 'RENDER' Y 'CHILDREN')

    - HISTORY: objeto que contiene, entre otras cosas, la información acerca de la cantidad de movimientos que hizo el usuario dentro del sitio, y cuáles fueron esos movimientos exactamente:
            - go: f() que permite moverse 'n' lugares en el historial.
            - goBack: f() que permite ir un paso atrás -→ go(-1).
            - goForward: f() que permite ir un paso adelante -→ go(1).
            - length: número de entradas en el stack de navegación.
            - push: f() que permite agregar otra entrada al stack de navegación.
            - replace: f() que permite reemplazar la entrada actual por otra.
            - action: string que indica la acción por la que se llegó a la ruta actual.
            - block: f() que permite bloquear la navegación hacia otras rutas.

    - LOCATION: objeto que describe la ubicación en la que se encuentra parado el usuario (hash, pathname, search (parametros de búsqueda de la URL), state).

    - MATCH: objeto, usualmente más utilizado, que contiene cuatro propiedades fundamentales: 
            - isExact: (true/false) describe si 'path' y 'location.pathname' son iguales. Si el valor es 'true' el componente se renderiza.
            - params: parámetros que está recibiendo la ruta.
            - path: path que coincide con el componente actual.
            - url: ruta actual del usuario.

--------------------------------------------------------------------------------

PROPS DE LAS FUNCIONES EN LINEA (búsqueda por 'params')
*/

function Home() {
  return <div><h2>Hola, soy el usuario {props.match.params.id}</h2></div>
  // De dónde recibe las props esta función, se si quiere que el número sea igual a uno ingresado por la URL?
};

const Root2 = (
    <Router>
    <NavBar />
    <Route path="/:id" /* ←-- ASI ==> ':' + parámetro */
    render={(props) => <User match={props} />}>
    {/* ↓ CON DESTRUCTURING ↓ */}
    {/* render={({ match }) => <User match={match} />}> */}
    </Route>
    </Router>
);

render(Root2, document.getElementById("app"));

/*
Si existen muchos componentes posibles por renderizar en un sitio de gran tamaño, sería muy ineficiente renderizar todos esos componentes en un mismo archivo, de forma condicional, y representa una candid gigante de código, totalmente innecesario. En tal caso, se hace lo siguiente:

    - Se hace una búsqueda por ID recibido → {props.match.params.id}
    - Se muestra la información en pantalla en función de ese ID
    - fetch / axios.get → response → componente nuevo con detalle
*/

// --------------------------------------------------------------------------------

// EJEMPLO CON LA APP DEL CLIMA RE HENRY

function Home(props) {
    const apiKey = "4ae2636d8dfbdc3044bede63951a019b";
    console.log(props);
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${props.match.params.city}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));

  return (
    <div>
      <h1>Weather App</h1>
      <h3>Ciudad: {props.match.params.city}</h3>
    </div>
  );
}

const Root3 = (
    <Router>
        <NavBar />
        <Route path="/:city" render={({ match }) => <Home match={ match } />}>
            {/* CIUDAD ACÁ !!! */}
        </Route>
    </Router>
)

render(Root3, document.getElementById("app"));

/* --------------------------------------------------------------------------------
BÚSQUEDA POR QUERY

El ejemplo anterior muestra la búsqueda por 'params'. Hay otra búsqueda, que es por 'query' (contenido de location.search), en la cual, en lugar de especificar los parámetros de búsqueda en la URL a través de ':' en el path, se hace de la siguiente forma:


"https://www.appdelclima.com/Home/[ciudad]?[prop]=[valor]&[prop]=[valor][...]"

    - ? ==> Llamado a QUERY
    - & ==> Agregar otra prop

--ENTONCES-- Cuando la URL se topa con un '?', llena la información en location.search, y la búsqueda se realiza por 'Query', en caso contrario, llena la información en match.params, y la búsqueda la realiza por 'params'.

--------------------------------------------------------------------------------

LOCATION VS. HISTORY.LOCATION

Siempre es mejor trabajar con history.location, ya que el objeto history es mutable, no es seguro ingresar a location directamente desde el objeto window, porque puede que este último pierda la referencia a la ubicación actual en el historial de navegación.

--------------------------------------------------------------------------------

USE-PARAMS

'useParams' es un Hook de React, que permite simplificar la búsqueda por 'params' al momento de renderizar contenido dependiente de la URL.

Cuando la URL especificada dentro de <Route> es dinámica (puede variar), pueden obtenerse los valores pasados como parámetros dentro del path, a través del Hook 'useParams':
*/

import React from 'react';
import { useParams } from 'react-router-dom';

export default function Mostrar() {
    let params = useParams();
    return <span>Estoy en {params.ciudad}</span>;
}

// ********************

import React from 'react';
import { useParams } from 'react-router-dom';

export default function Ejemplo(){
    let params = useParams();
    console.log(params)

    const apiKey = "4ae2636d8dfbdc3044bede63951a019b";
    fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${params.ciudad}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));

    return(
        <>
        <h2>{params.id}</h2>
        <h3>{params.ciudad}</h3>
        <h4>{params.nombre}</h4>
        </>
    )
}

const Root4 = (
    <Router>
        <NavBar />
        <Route
        path='/:id/:ciudad/:nombre'
        render={() => <Ejemplo />} />
        {/* YA NO ES NECESARIO MASAR MATCH COMO PROP */}
    </Router>
)

render(Root4, document.getElementById("app"));

/*
url >>> [...]/123456789/London/Mike

params = {
    id: '123456789',
    ciudad: 'London',
    nombre: 'Mike'
}

--------------------------------------------------------------------------------

USE-HISTORY

'useHistory' es un Hook de React que funciona de la misma forma que 'useParams' pero para acceder al objeto 'history', sin necesidad de pasar el mismo explícitamente como prop al componente <Route>.
*/

import React from 'react';
import { useHistory } from 'react-router-dom';

export default function History(){
    let history = useHistory();
    // [...]
}

/* --------------------------------------------------------------------------------

USE-LOCATION

'useLocation' es un Hook de React que funciona de la misma forma que 'useParams' y 'useHistory' pero para acceder al objeto 'location', sin necesidad de pasar el mismo explícitamente como prop al componente <Route>.
*/

import React from 'react';
import { useLocation } from 'react-router-dom';

export default function History(){
    let location = useLocation();
    // [...]
}

/* --------------------------------------------------------------------------------

NESTED ROUTING - USE-ROUTE-MATCH

*/

function Home() {
    let match = useRouteMatch();
    return(
        <div>
            <h2>Home</h2>
            <Link to='/linkAbsolute'>Link Absolute</Link><br />
            <Lint to={`${match.url}/linkRelative`}>Link Relative</Lint><br />
        </div>
    )
}

/* --------------------------------------------------------------------------------

<PROMPT />

El 'Prompt' es un componente que permite mostrar un pop'up de confirmación si el usuario quiere abandonar el path actual:
*/

<>
<Prompt when={'condition'} message='Seguro que desea abandonar?' />

{/*
    - when: booleano que determina si el prompt debe mostrarse o no, cuando se intente navegar hacia otro sitio.

    - message: se le puede pasar un string o una función. En el caso del string, va a ser simplemente un mensaje pop-up, y en el caso de la función, se permite mayor personalización, posibilitando el acceso a 'location' y 'action'.

--------------------------------------------------------------------------------

<REDIRECT />

El 'Redirect' es un componente que al renderizarse, redirigirá al usuario automáticamente hacia un nuevo path, reemplazando la ubicación actual en el stack de navegación.
*/}

<Route exact path='/'>
 {loggedIn ? <Redirect to='/dashboard' /> : <HomePage />}
</Route>

{/*
    - to: puede ser un string indicando la URL a la cual debe redirigir, o un objeto con mayor información (pathname, search y state).

    - from: string indicando una URL desde la cual, si la aplicación intenta acceder, automáticamente se redirigirá hacia la URL en la prop 'to'.

    - exact, strict, sensitive.

Este componente es útil para los casos en que un sitio web actualiza alguna de sus páginas o documentos, como por ejemplo, un formulario de inicio de sesión, y sabe que los usuarios viejos o cualquier otra persona que entre a la página a través de un link, va a parar al formulario desactualizado, entonces en su componente principal (ej. app.js) donde están definidas todas las rutas, introduce un componente:
*/}
<Redirect from='/formulario-viejo' to='/formulario-nuevo' />

<Route path='/formulario-nuevo'>
    <FormularioNuevo />
</Route>

{/* O */}

<Route path='/old/object'>
    <Redirect to={{
        pathname: '/new',
        search: '?name=object', // --> /new?name=object (búsqueda por query)
        state: {name: {UserName}} // información adicional
    }} />
</Route>

<Route path="/new">
    <New />
</Route>
</>
