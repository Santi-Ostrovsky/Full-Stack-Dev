// Los elementos son los bloques más pequeños de las aplicaciones de React.

// Un elemento describe lo que quieres ver en la pantalla:

// const element = <h1>Hello, world</h1>;

// A diferencia de los elementos del DOM de los navegadores, los elementos de React son objetos planos, y su creación es de bajo costo. React DOM se encarga de actualizar el DOM para igualar los elementos de React.

// Renderizando un elemento en el DOM
// Digamos que hay un <div> en alguna parte de tu archivo HTML:

// <div id="root"></div>
// Lo llamamos un nodo “raíz” porque todo lo que esté dentro de él será manejado por React DOM.

// Las aplicaciones construidas solamente con React usualmente tienen un único nodo raíz en el DOM. Dado el caso que estés integrando React en una aplicación existente, puedes tener tantos nodos raíz del DOM aislados como quieras.

// Para renderizar un elemento de React, primero pasamos el elemento del DOM a ReactDOM.createRoot(), luego pasamos el elemento de React a root.render():

// const root = ReactDOM.createRoot(
//   document.getElementById('root')
// );
// const element = <h1>Hello, world</h1>;
// root.render(element);