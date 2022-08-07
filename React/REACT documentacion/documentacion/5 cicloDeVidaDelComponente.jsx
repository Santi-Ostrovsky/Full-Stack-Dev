// //EN LOS CICLOS DE VIDA DE LOS COMPONENTES DE REACT HAY 2 FASES:
// FASE RENDER: pura y sin efectos colaterales, puede ser pausada, aboratada o reiniciada por REACT.


// FASE COMMIT: puede operar sobre el DOM, ejecutar side-effects, agendar actualizaciones.COMMIT

// ESTAS DOS FASES POSEEN 3 ETAPAS:

// MONTAJE- ACTUALIZACIÓN - DESMONTAJE 

// LA ETAPA DE MONTAJE: ES CUANDO SE CREA EL COMPONENTE Y SE MUESTRA EN LA APP, ES DECIR SE MONTA EN LA UI.ESTA FASE POSEE 4 FUNCIONES:

// CONSTRUCTOR(PROPS): Este método se ejecuta cuando se instancia un componente. Nos permite definir el estado inicial del componente, hacer bind de métodos y definir propiedades internas en las que podemos guardar muchos datos diferentes, por ejemplo la instancia de una clase.

// COMPONENTWILLMOUNT(): Este método se ejecuta cuando el componente se está por renderizar. En este punto es posible modificar el estado del componente sin causar una actualización 

// RENDER(): En este momento de la fase de montado se van a tomar las propiedades, el estado y el contexto y se va a generar la UI inicial de este componente. Esta función debe ser pura (no puede tener efectos secundarios) y no debe modificar nunca el estado del componente.

// CUANDO TERMINA DE MONTARSE EL COMPONENTE SE LO LLAMA CO0N EL METODO "componentDidMount"

// COMPONENTDIDMOUNT()
// Este último método de la fase de montado se ejecuta una vez el componente se renderizó en el navegador (este no se ejecuta al renderizar en el servidor) y nos permite interactuar con el DOM o las otras APIs del navegador

// ///////////////////////////////////
// ETAPA DE ACTUALIZACION: CUANDO CAMBIAMOS ALGUN ESTADO O VARIABLE DE NUESTRO COMPONENTE, SI CREAMOS UN NUEVO PROP CON Newprops, setState() O forceUpdate(). 
// UNA VEZ Q SE PRODUCE UN CAMBIO SE EJECUTA EL METODO componentDidUpdate();

// //////////////////////////////////
// EL RENDER SE DA CUANDO SE EJECUTE UN CAMBIO EN LOS PROPS O EN LOS ESTADOS DEL COMPONENTE
// UNA VEZ QUE EL COMPONENTE SE RENDERIZA SE ACTUALIZA EL DOM
// RENDER: EN LA ETAPA DE MONTAJE Y ACTUALIZACION

/////////////////////////////////////////////////////////////////////////
// Mediante los  “eventos del ciclo de vida del componente”, React te da algunos métodos que se disparan en diferentes puntos para crear un componente hasta que este se destruya.

// Puedes declarar los métodos para “hacer hook” en los ciclos de vida de los componentes y así controlar, modificar, o mejorar los comportamientos de los componentes de tus apps. Una aplicación seria cuando necesites integrar con otras bibliotecas de Javascript. 


// Algunos ejemplos de hooks de ciclo de vida en React son: 
// componentDidMount(), componentWillMount(), componentWillUnmount(), shouldComponentUpdate(), componentWillUpdate().

// ¿Qué hace cada uno de estos eventos de ciclo de vida?
// componentWillMount()
// Este método es llamado antes de la renderización inicial del componente, para que pueda ser llamado antes que se ejecute el método render. No puedes ejecutar ningún tipo de manipulación del DOM aquí porque el componente aún no está disponible en el DOM. Este método es llamado en el servidor y en el cliente.

// componentDidMount()
// Este debe ser uno de los métodos más utilizados en algunas integraciones, pues es un método que es llamado justo después de la renderización del componente, para que pueda ser llamado después de que el método render es ejecutado. ¿Confuso?

// Es el mejor sitio para ejecutar llamadas de AJAX, por ejemplo en un formulario autocomplete en que necesites hacer la petición al servidor y recoger la información del servidor, después de una acción del usuario. Este método se llama solamente en el cliente.

// componentWillUnmount()
// Este método es llamado justo después de que el componente es eliminado del DOM.


// shouldComponentUpdate()
// Este método determina si hay que renderizar o no. Nunca se llama en la renderización inicial y siempre se llama antes que se ejecute el método render. Este método te permite optimizar la renderización.

// componentWillUpdate()
// Este método es llamado justo cuando el shouldComponentUpdate retorna true. Es llamado justo antes de que el componente se renderize con nuevos datos.