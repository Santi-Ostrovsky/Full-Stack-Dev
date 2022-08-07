/*
USE-EFFECT

Al igual que 'useState()', 'useEffect()' debe ser importado junto con React.

Qué hace? En lugar de crear un estado para un componente funcional, crea efectos secundarios que van a ejecutarse después de cada renderizado de dicho componente (montaje / renderizado inicial + cambios de estado local), a menos que se le pasen dependencias para restringir el efecto a ciertos comportamientos del componente o a la actualización de ciertos estados.

Puede usarse una cantidad indefinida de useEffect()'s en un mismo componente, y cada uno podrá tener un 'return' que va a ejecutarse cuando el componente sea desmontado del documento.
*/

import React, { useState, useEffect } from "react";

/*
Recibe como primer parámetro, una función que va a determinar cuáles son los efectos que le siguen a los renderizados, siendo posible la definición de otras funciones dentro de esta para determinar condiciones o otras funcionalidades de dichos efectos.
*/

export default function Effect() {
  const [contador, setContador] = useState(0);
  const [color, setColor] = useState("#4e4");
  const [color2, setColor2] = useState("#000");
  const contar = () => setContador(contador + 1);

  useEffect(() => {
    document.title = `Contador → ${contador}`;
    function mouseMove(e) {
      if (e.clientX < window.innerWidth / 2) {
        setColor("#4e4");
        setColor2("#000");
      } else {
        setColor("#f44");
        setColor2("#FFF");
      }
    }
    window.addEventListener("mousemove", mouseMove);
  });

  return (
    <div>
      <h2>Contador con efecto secundario</h2>
      <p>Verde ←-- | --→ Rojo ­</p>
      <button
        onClick={contar}
        style={{ background: color, color: color2, border: "double" }}
      >
        <i>Cambia el nombre de la pestaña</i>
      </button>
    </div>
  );
}

/*
En este caso, 'useEffect()' en la línea 21, contiene como parámetro una función flecha.

Esta función flecha contiene 3 cosas:
    1- El efecto de cambiar el título de la ventana y mostrar el contador en el mismo.
    2- Una función que determina qué hacer cuando sucede cierto evento.
    3- El llamado a la función interna para ejecutarla (a través de un EventListener).

********************

Como segundo parámetro, recibe un arreglo en donde se ubican las variables o estados que son modificados por el useEffect, y que le dan efecto a la función.

    - useEffect([función], [se-ejecuta-cuando-cambian-estas-variables])

    - useEffect([función], []) --> se ejecuta una única vez

En el ejemplo anterior, el navegador esta tomando cada movimiento del mouse dentro de la pestaña, pero sigue registrando movimientos de manera indefinida. Agregar dependencias dentro del arreglo, va a hacer que los eventos dejen de acumularse en la consola del navegador (agregar 'contador' va a ser que el método reconozca el cambio de ese estado particular, y no va a seguir actualizándolo en el navegador hasta que ocurra un evento nuevo).

********************

Otra forma de lograr esto, es a través del método 'return()' dentro de la función que toma 'useEffect()' como primer parámetro. En este return, puede revertirse cualquier cambio generado, anulándolo, de manera que el efecto va a existir cuando se cumpla una condición, y de manera automática va a dejar de contabilizarse la causa que lo genera:
*/

import React, { useState, useEffect } from "react";

export default function Effect() {
  const [contador, setContador] = useState(0);
  const [color, setColor] = useState("#4e4");
  const [color2, setColor2] = useState("#000");
  const contar = () => setContador(contador + 1);

  useEffect(() => {
    document.title = `Contador → ${contador}`;

    function mouseMove(e) {
      if (e.clientX < window.innerWidth / 2) {
        setColor("#4e4");
        setColor2("#000");
      } else {
        setColor("#f44");
        setColor2("#FFF");
      }
    }

    window.addEventListener("mousemove", mouseMove);

    // (*)
    return () => window.removeEventListener("mousemove", mouseMove);
  }, [contador]);

  return (
    <div>
      <h2>Contador con efecto secundario</h2>
      <p>Verde ←-- | --→ Rojo ­</p>
      <button
        onClick={contar}
        style={{ background: color, color: color2, border: "double" }}
      >
        <i>Cambia el nombre de la pestaña</i>
      </button>
    </div>
  );
}

/*

(*) En la función del useEffect(), se va a agregar un 'return' pura y exclusivamente si se quiere que el componente tenga cierto comportamiento al ser desmontado. Mientras el componente se actualice (o se actualicen específicamente los valores de estado indicados en las 'dependencias'), se va a ejecutar todo el bloque interno del useEffect(), pero el return sólo va a ejecutarse en el caso de 'componentWillUnmount()' - RECORDAR QUE ESTE HOOK REEMPLAZA LAS FUNCIONES DE CICLO DE VIDA EN LOS COMPONENTES FUNCIONALES -.

Lo que se pone dentro del return no es un llamado a función, sino la definición de una función, o una función flecha en caso de necesitar argumentos. Esto es porque la ejecución de esta función va a estar condicionada al desmontaje del componente, y de no ser así, la función se ejecutaría en cada actualización de estado, anulando al propio useEffect().

*/