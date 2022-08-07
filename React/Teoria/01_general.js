/*
Para iniciar una aplicación React, hay que abrir la consola o GitBash, e ingresar lo siguienteÑ
- "npx create-react-app [nombre-del-directorio]"
- "npm start"

--------------------------------------------------------------

TIPOS DE COMPONENTES

- FUNCIONALES ==> Componentes conformados por funciones:
>>> function welcome(props) {
>>>     return <h1>Hello {props.name}</h1>;
>>> }

>>> const Container = () => {
>>>     return (
>>>         <div className='container'>
>>>             <p>Hello</p>
>>>         </div>
>>>     );
>>> };

- DE CLASE ==> Componentes conformados por clases que heredan las propiedades de React.Component:
>>> class Welcome extends React.Component {
>>>     render() {
>>>         return <h1>Hello, {this.props.name}</h1>;
>>>     }
>>> }

--------------------------------------------------------------

PROPS

Los componentes React aceptan entradas de datos llamadas 'props', que retornan elementos de React describiendo lo que se debe renderizar en el documento.

Los datos 'props' contienen todos los parametros que los componentes necesitan para tomar y modificar los datos de la app.

↓↓ -- EJEMPLO-- ↓↓

En el archivo app.js se importa el componente 'Welcome.jsx' con la función 'Welcome', y se usa de la siguiente manera:

******************************************
import Welcome from '/.components/Welcome';

function App() {
    return (
        <Welcome message='Esto es un ejemplo' name="Santi" />
    )
}

export default App;
******************************************

Ahora, en el componente Welcome.jsx, se utiliza el destructuring para utilizar las propiedades del elemento 'Welcome' de la siguiente forma:

******************************************
export default function Welcome(props) {
    const { message, name } = props;
    return (
        <>
        <p>Hola {name}</p>;
        <p>{message}</p>;
        </>
        )
}
******************************************

Esto agregará los elementos <p> a la App con el texto "Hola Santi" y "Esto es un ejemplo".

--------------------------------------------------------------

RENDERIZAR ELEMENTOS REACT EN EL DOCUMENTO HTML

En el index.js, index.jsx o App.jsx, se debe determinar cual es el elemento 'Root' de la aplicación, y renderizar el contenido de la aplicación dentro del mismo.

En el index.html, debe haber un contenedor con el id='root' de la siguiente manera:

>>> <div id="root"></div>

Y en la definición del elemento 'root' dentro de React, se debe escribir el siguiente código:

>>> const root = ReactDOM.createRoot(document.getElementById('root'))
>>> root.render(<[componente-principal-de-la-app] />)

Esto va a permitir que todo el contenido dinámico de React se renderice dentro del elemento 'root' del HTML de manera asíncrona.

**********

OTRA FORMA de renderizar contenido React en el documento HTML, es hacerlo directamente sobre un elemento estático de dicho documento. Por ej:

(en el Doc. HTML)
[...]
    <h2>Lista</h2>
        <ul class='lista'>
        </ul>
[...]

(en React App)
>>> ReactDOM.render(<[component] />, document.getElementByID('lista'));

--------------------------------------------------------------

COMPONENTES FUNCIONALES **********

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

--------------------------------------------------------------

COMPONENTES DE CLASE (ES6) **********

class Welcome extends React.Component {

    constructor (props){        *optional*
        super(props);           *optional*
    }                           *optional*

    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}

--------------------------------------------------------------

Si los componentes retornan mas de un elemento al HTML, tales elementos deben estar dentro de un elemento padre, que puede ser un <div>, un <p>, cualquier otro elemento HTML, o una etiqueta vacía <> </>.

--------------------------------------------------------------

PROPS ==> Elementos React y sus atributos son las propiedades que se mandan de un componente a otro. Ej:

>>> const element = <Welcome name="Santi" />>

** Esto es un React-element, y sus atributos sean props --> props.name = "Santi" **

function Welcome(props) {
    return <p>Hello, {props.name}</p>;
}

>>> const root = ReactDOM.createRoot(document.getElementById('root));
>>> const element = <Welcome name="Santi" />;
>>> root.render(element)

** Esto renderiza en el documento HTML --> "Hello, Santi" **

(En este caso también puede hacerse un destructuring de las propiedades) ↓
function Welcome(props){
    const {name} = props;
    return <p>Hello, {name}</p>;
}
*/

// --------------------------------------------------------------

// HOOKS

/*
Los Hooks son funciones en las que se pueden guardar estados de los componentes. Toman un valor inicial que puede ser modificado dinámicamente sin añadir una nueva clase.

Para utilizarse, los hooks deben ser importados de la siguiente manera (en el componente):    */

import { useLayoutEffect, useState } from "react";

export default function Welcome() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>Contador de React con Hooks</div>
      <div>El número del contador es: {counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Sumar 1</button>
    </>
  );
}

// ******************************************

// TAMBIÉN PODRÍA ENCAPSULARSE LA FUNCIÓN setCounter EN UNA FUNCIÓN SEPARADA

export default function Welcome() {
  const [counter, setCounter] = useState(0);

  const contar = () => setCounter(counter++);
  return (
    <>
      <div>Contador de React con Hooks</div>
      <div>El número del contador es: {counter}</div>
      <button onClick={contar}>Sumar 1</button>
    </>
  );
}

/*
En este caso, la app mostrará en la página, un contenedor con el texto "El número del contador es: {número}" y un botón con el caption "Sumar 1", que cada vez que se presiona, suma 1 al contador de forma dinámica.
*/

/*
Los Hooks 'USE-EFFECT' también tienen efectos secundarios en componentes funcionales:
*/

import { useState, useEffect } from "react";

export default function Welcome() {
  const [semaforo, setSemaforo] = useState(false);

  useEffect (() => {
    console.log(semaforo)
  }, [semaforo])

  const contar = () => {
    setSemaforo(!semaforo)
  }
  return (
    <>
      <div>Contador de React con Hooks</div>
      <div>El semáforo está en: {semaforo ? 'Rojo' : 'Verde'}</div>
      <button onClick={contar}>Cambiar Color</button>
    </>
  );
}

/*
En este caso, la app mostrará en la página, un contenedor con el texto "El semáforo está en: {color-del-semáforo}" y un botón con el caption "Cambiar Color", que cada vez que se presiona, alterna entre 'Rojo' y 'Verde'. Cada vez que se presione el botón, el 'useEffect' va a desplegar el valor del semáforo (true/false) en la consola.
*/

// --------------------------------------------------------------

// REACT-ROUTER-DOM (ver 23_routing.js)

/*
React Router DOM es un paquete de NPM que nos habilita a implementar ruteado dinámico en una aplicación web.
*/

// ******************************************
// En la APP.js, importar los siguientes complementos:
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from './pages/Contact';
import AboutMe from './pages/About-Me';

function App() {
    return (
        <>
        <Router>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/contact'>Contacto</Link>
                </li>
                <li>
                    <Link to='/about-me'>About Me</Link>
                </li>
            </ul>
            <Routes>
                <Route path='/contact' element={<Contact />} />
                <Route path='/about-me' element={<AboutMe />} />
            </Routes>
        </Router>
        </>
    )
}
// ******************************************

// Ahora, en el componente "Contact.jsx", escribir lo siguiente:

// ******************************************
export default function Contact() {
    return (
        <>
        <div>Desde Contact</div>
        </>
    )
}
// ******************************************

// Y en el componente "AboutMe.jsx", escribir lo siguiente:

// ******************************************
export default function AboutMe() {
    return (
        <>
        <div>Desde About Me</div>
        </>
    )
}
// ******************************************

/*
Lo que hace esta combinación de componentes, es desplegar una página principal de la App, con una lista que tiene tres items: 'Home', 'Contacto' y 'About Me'. Por defecto, la página estará en Home, pero cuando se haga click en Contacto, la ruta cambiará a "localhost:3000/contact" y se desplegará el DIV con el contenido "Desde Contact", y cuando se haga click en About Me, la ruta cambiará a "localhost:3000/about-me" y se desplegará y DIV con el contenido "Desde About Me".
*/