/*
EVENTOS - EVENT-LISTENERS

https://www.w3schools.com/jsref/dom_obj_event.asp

>>> const button = document.querySelector('.button');
>>> 
>>> button.addEventListener('click', saludar);
>>> 
>>> function saludar() {
>>>     alert('hola usuario, diste click!');
>>> }

→ [elemento].addEventListener('[evento]', '[acción]').

Para agregar parámetros a la ejecución (referencias al evento), la función debe estar declarada dentro del event listener con una arrow-function:

>>> button.addEventListener('click', (e)=>{
>>>     alert(e) // 'e' hace referencia al evento
>>> })

>>> button.addEventListener('click', (e)=>{
>>>     e.preventDefault() // No se va a ejecutar el evento
>>> })

-------------------------------------

TIPOS DE EVENTOS:
    - MOUSE
    - TECLADO
    - INTERFAZ
    - TEMPORIZADORES

-------------------------------------

EVENT FLOW - FLUJO DE EVENTOS

    - Event Bubbling ==> (por defecto) los eventos suceden de adentro hacia afuera. Si hay un botón dentro de un contenedor, y ambos registran eventos del tipo 'click', al hacer click en el botón, se hará click también en el contenedor.

    - Event Capturing ==> a la inversa. los eventos suceden de afuera hacia adentro. Para cambiar el parametro por defecto, se debe agregar 'true' el final de la función del eventListener, como si fuera el acumulador de un metodo reduce() (para cambiar el orden de TODOS los eventos en una secuencia de contenedores, se le debe dar el valor 'true' a todos los eventListeners).

    PARA DETENER LA PROPAGACIÓN DE UN EVENTO, SE HACE DE LA SIGUIENTE MANERA:
    button.addEventListener('click', (e) => {
        alert('Hola, hiciste click!')
        e.stopPropagation();
    })

-------------------------------------

EVENTOS DEL MOUSE
    - CLICK
    - DBLCLICK
    - MOUSEOVER
    - MOUSEOUT
    - CONTEXTMENU
    - MOUSEENTER
    - MOUSELEAVE
    - MOUSEUP
    - MOUSEMOVE

-------------------------------------

EVENTOS DEL TECLADO
    - KEYDOWN ==> cuando se presiona sobre un elemento
    - KEYPRESS ==> cuando se presiona y se suelta sobre un elemento
    - KEYUP ==> cuando se suelta sobre un elemento

-------------------------------------

EVENTOS DE LA INTERFAZ
    - ERROR ==> cuando ocurre un error en la carga de un archivo multimedia.
    - LOAD ==> cuando se carga un objeto.
    - BEFOREUNLOAD ==> antes de abandonar el sitio.
    - UNLOAD ==> cuando se ha descargado una página.
    - RESIZE ==> cuando cambia el tamaño la vista del documento.
    - SCROLL ==> cuando se mueve la barra de desplazamiento.
    - SELECT ==> cuando el usuario selecciona un elemento <input> o <textarea>.

-------------------------------------

TEMPORIZADORES
    1 - setTimeout()
    2 - setInterval() ==> idem Timeout pero lo ejecuta hasta que se corte manualmente
    3 - clearTimeout()
    4 - clearInterval()

1- setTimeout(()=> alert('Hola!'), 2000)
   |--------| |-----------------| |----|
        A              B             C

A) Acción de evento.
B) Función flecha.
C) Intervalo de tiempo en milisegundos (2seg.).

   const timer = setTimeout(saludar, 2000)

   function saludar() {
       alert('Hola!')
   }

   clearTimeout(timer) ==> para detener el timer.

-------------------------------------



*/
