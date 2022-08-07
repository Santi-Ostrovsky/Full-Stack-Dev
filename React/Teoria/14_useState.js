// USE STATE ('useState()') ↓

import React from "react";

export default function Welcome(props) {
  //   const { nombre, apellido } = props;
  const [nombre] = React.useState(props.nombre);
  const [apellido] = React.useState(props.apellido);
  return (
    <div>
      <h1>
        Welcome, {nombre} {apellido},
      </h1>
      <p>
        This is a <b>Function</b> component !!
      </p>
    </div>
  );
}


// ==> SIMPLIFICAR USO IMPORTANDO EL HOOK DIRECTAMENTE ↓

import React, { useState } from "react";

export default function Welcome(props) {
  //   const { nombre, apellido } = props;
  const [nombre] = useState(props.nombre);
  const [apellido] = useState(props.apellido);
  return (
    <div>
      <h1>
        Welcome, {nombre} {apellido},
      </h1>
      <p>
        This is a <b>Function</b> component !!
      </p>
    </div>
  );
}

// SIMPLIFICAR PASANDO LAS CONSTANTES COMO PROPIEDADES DE UN OBJETO ↓

import React, { useState } from "react";

export default function Welcome(props) {
  //   const { nombre, apellido } = props;
  const [persona] = useState({
    nombre: props.nombre,
    apellido: props.apellido,
  });
  
  const {nombre, apellido} = persona
  const nombreCompleto = () => `${nombre} ${apellido}`;

  return (
    <div>
      <h1>
        Welcome, {nombreCompleto()},
      </h1>
      <p>
        This is a <b>Function</b> component !!
      </p>
    </div>
  );
}

// DENTRO DE LA DEFINICIÓN DE LA CONSTANTE, AGREGAR UNA FUNCION QUE PERMITA CAMBIAR LOS DATOS DENTRO DE LA MISMA, COMO UN ESTADO ↓

import React, { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);

  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);
  const reset = () => setContador(0);

  return (
    <div>
      <h2>Contador</h2>
      <div>
        <div>{contador}</div>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={reset}>R</button>
      </div>
    </div>
  );
}
