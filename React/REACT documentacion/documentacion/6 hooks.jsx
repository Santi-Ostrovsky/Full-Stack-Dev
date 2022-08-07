// Hooks son una nueva característica en React 16.8. Estos te permiten usar el estado y otras características de React sin escribir una clase.

import React, { useState } from 'react';

function Example() {
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// Aquí, useState es un Hook (hablaremos de lo que esto significa en un momento). Lo llamamos dentro de un componente de función para agregarle un estado local. React mantendrá este estado entre re-renderizados. useState devuelve un par: el valor de estado actual y una función que le permite actualizarlo. Puedes llamar a esta función desde un controlador de eventos o desde otro lugar. Es similar a this.setState en una clase, excepto que no combina el estado antiguo y el nuevo. El único argumento para useState es el estado inicial. En el ejemplo anterior, es 0 porque nuestro contador comienza desde cero.


// /////////////////////////////////////////////////////////////////
// Declarando múltiples variables de estado
// Puedes usar el Hook de estado más de una vez en un mismo componente:

function ExampleWithManyStates() {
  // Declarar múltiple variables de estado!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}
// La sintaxis de desestructuración de un array nos permite dar diferentes nombres a las variables de estado que declaramos llamando a useState. Estos nombres no forman parte de la API useState. En su lugar, React asume que si llamas a useState muchas veces, lo haces en el mismo orden durante cada renderizado. 

// /////////////////////////////////////////////////////
// ¿Pero qué es un Hook?
// Los Hooks son funciones que te permiten “enganchar” el estado de React y el ciclo de vida desde componentes de función. Los hooks no funcionan dentro de las clases — te permiten usar React sin clases.
// React proporciona algunos Hooks incorporados como useState. También puedes crear tus propios Hooks para reutilizar el comportamiento con estado entre diferentes componentes. Primero veremos los Hooks incorporados.

// Hook de efecto {#️effect-hook}

// Es probable que hayas realizado recuperación de datos, suscripciones o modificación manual del DOM desde los componentes de React. Llamamos a estas operaciones “efectos secundarios” (o “efectos” para abreviar) porque pueden afectar a otros componentes y no se pueden hacer durante el renderizado.

// El Hook de efecto, useEffect, agrega la capacidad de realizar efectos secundarios desde un componente de función. Tiene el mismo propósito que componentDidMount,componentDidUpdate y componentWillUnmount en las clases React, pero unificadas en una sola API.

// Por ejemplo, este componente establece el título del documento después de que React actualiza el DOM:

import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar a componentDidMount y componentDidUpdate:
  useEffect(() => {
    // Actualiza el título del documento usando la Browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
// }
// Cuando llamas a useEffect, le estás diciendo a React que ejecute tu función de “efecto” después de vaciar los cambios en el DOM. Los efectos se declaran dentro del componente para que tengan acceso a sus props y estado. De forma predeterminada, React ejecuta los efectos después de cada renderizado — incluyendo el primer renderizado.
// Los Hooks te permiten organizar efectos secundarios en un componente según qué partes están relacionadas (como agregar y eliminar una suscripción), en lugar de forzar una división basada en métodos del ciclo de vida.

///////////////////////////////////////////////////////////////////////////
