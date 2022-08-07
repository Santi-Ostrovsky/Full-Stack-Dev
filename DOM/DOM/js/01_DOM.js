/*

NODO, VALOR : {
    ELEMENT_NODE: 1,
    ATTRIBUTE_NODE: 2,
    TEXT_NODE: 3,
    CDATA_SECTION_NODE: 4,
    ENTITY_REFERENCE_NODE: 5,
    ENTITY_NODE: 6,
    PROCESSING_INSTRUCTION_NODE: 7,
    COMMENT_NODE: 8,
    DOCUMENT_NODE: 9,
    DOCUMENT__NODE: 10,
    DOCUMENT_FRAGMENT_NODE: 11,
    NOTATION_NODE: 12,
}

--------------------------------------

DOM METHODS (document.[...])

    METODOS DE ELEMENTOS
    - getElementById([nombre-del-id])
    - getElementsByName([valor-del-atributo-name])
    - getElementsByTagName([nombre-de-la-etiqueta])
    - getElementsByClassName([nombre-de-la-clase])
    - QuerySelector(*) ==> primer elemento que coincida
    - QuerySelectorAll(*) ==> todos los elementos que coincidan
    * ==> En estos paréntesis, se pueden buscar los siguientes tipos de elementos:
    SÍMBOLO, TIPO DE ELEMENTO : {
        #: ,
        .: ,
        "[etiqueta]": ,
    }

    METODOS DE ATRIBUTOS
    - setAttribute('[nombre-del-atributo]', '[valor]')
    - getAttribute('[nombre-del-atributo]') ==> devuelve el valor del atributo ingresado
    - removeAttribute('[nombre-del-atributo]')

https://developer.mozilla.org/en-US/docs/Web/API/Document

--------------------------------------

ATRIBUTOS GLOBALES ([element].attribute) (comunes a todos los elementos html) (las propiedades con multiples palabras separadas por un guion medio, en JS se escriben en camelCase)

https://www.w3schools.com/tags/ref_standardattributes.asp

    - class => lista de clases de un elemento, separadas por espacios.
    - contenteditable => indica si el elemento puede ser modificado por el usuario (true/false)
    - dir => indica la direccionalidad del elemento.
    - hidden => Esconde el elemento (bool)
    - id => define un ID.
    - style => contiene declaraciones de estilo CSS a aplicarse a un elemento.
    - tabindex => se ingresa el numero en el cual estará posicionado el elemento en el orden del TAB.
    - title => despliega un cartel de texto con información (valor del atributo).

--------------------------------------

ATRIBUTOS DE INPUTS (input.[...])

    - className
    - value
    - type
    - accept => especificar tipo de archivo aceptado en los inputs de tipo 'file'.
    - form => se usa es un elemento para hacerlo formar parte de un formulario ingresando el ID del elemento 'formulario' padre.
    - minlength => establece la cantidad minima de caracteres en un input de texto.
    - placeholder
    - required

--------------------------------------

CLASES - CLASSLIST - METODOS DE CLASSLIST

CLASSLIST ==> lista de las clases de un elemento.

METODOS DE CLASSLIST

    - add ==> para agregar una clase al elemento --> [elemento].classList.add('[nueva-clase]')
    - remove ==> para eliminar una clase del elemento --> [elemento].classList.remove('[clase]')
    - item ==> para acceder a una clase en particular, puede hacerse como si fuera un array pero con paréntesis en lugar de corchetes --> [elemento].classList.item([index]).
    - contains ==> Para comprobar si el elemento posee una clase --> [elemento].classList.contains('[clase]').
    - replace ==> Para reemplazar una clase por otra --> [elemento].classList.replace('[clase-a-reemplazar]', '[clase-nueva]'). (devuelve 'false' si la clase a reemplazar no existe).
    - toggle ==> Para agregar una clase (si la misma no existe en el elemento) o removerla (si ya existe) --> [elemento].classList.toggle('[clase]'). Toma un segundo parametro separado por coma, true o false, que fuerza el resultado (true para agregar, false para remover).

--------------------------------------

OBTENCIÓN DE ELEMENTOS

    - textContent ==> Devuelve solamente el texto, sin modificaciones de formato de HTML como <b> (negrita). Devuelve TODO el texto, aunque el mismo tenga 'visibility: hidden'.
    - innerText ==> Devuelve caracteres de forma textual, respetando espacios y tabulaciones, pero sin respetar las etiquetas como <b> (negrita). NO USAR, NO ES ESTÁNDAR, CONSUME RECURSOS.
    - outerText ==> NO SE USA, DEPRECATED.
    - innerHTML ==> Devuelve todo el contenido interno de la etiqueta, respetando los elementos HTML internos, como la etiqueta <b> (negrita), y 'visibility: hidden' (no muestra la porción oculta).
    - outerHTML ==> Devuelve el contenido interno del elemento, con las etiquetas de lo contienen.

    EN RESUMEN: UTILIZAR 
            --> textContent
            --> innerHTML
            --> outerHTML

--------------------------------------

CREACIÓN DE ELEMENTOS

    - createElement() ==> Para crear una etiqueta
    - createTextNode() ==> Para crear contenido textual
    - createDocumentFragment() ==> Mas eficiente, ya que se usa para crear contenido que se carga sobre la pagina, sin necesidad de cargar todos los elementos de la misma desde cero.

--------------------------------------

OBTENCIÓN Y MODIFICACIÓN DE CHILDs (NODOS HIJOS - PROPIEDADES)

    - firstChild ==> los espacios en blanco entre etiquetas cuentan como elementos de texto, son nodos dentro del documento. Por lo tanto, al ingresar, por ejemplo, contenedor.firstChild, si la etiqueta que sigue esta en otra linea dentro del documento html, el elemento seleccionado será el espacio de texto en blanco entre ambas etiquetas.
    - lastChild ==> idem anterior.
    - firstElementChild ==> devuelve un elemento, elimina el problema de 'firstChild'
    - lasElementChild ==> idem anterior.
    - childNodes ==> Devuelve todos los nodos hijos en una lista de nodos (incluye etiquetas y espacios de texto). No es un array, es una lista de nodos, pero puede recorrerse con metodos como forEach, porque cuenta como objeto en JavaScript.
    - children ==> Devuelve un HTMLCollection, conteniendo únicamente los elementos html sin espacios de texto en blanco. A diferencia de childNodes, no se puede recorrer con un forEach, si no con un for-in (indice) o con un for-of (valor de los elementos).

--------------------------------------

    CREACIÓN DE CHILDs (NODOS HIJOS)

    - appendChild([elemento-nuevo]) ==> Para crear elementos dentro de otros elementos (si se usa para crear una etiqueta, habrá elementos anidados. si se usa para crear un textNode, será el contenido interno de la etiqueta a la cual se le aplicó el método appendChild. Usando innerHTML, el documento determinará cuándo el contenido es una etiqueta y cuándo es contenido textual).
    - replaceChild([elemento-nuevo], [elemento-reemplazado])
    - removeChild([elemento-a-remover])
    - hasChildNodes() ==> Devuelve bool dependiendo de si un elemento padre tiene elementos hijos dentro (true/false) (tener en cuenta que el texto dentro de la etiqueta también cuenta como un nodo hijo).

--------------------------------------

PROPIEDADES DE PARENTS (NODOS PADRES)

    - parentElement ==> Debe usarse casi siempre
    - parentNode ==> solo en los casos en los que el nodo padre de un elemento no sea otro elemento si no un nodo de texto.

--------------------------------------

PROPIEDADES DE SIBLINGS (NODOS HERMANOS)

    - nextSibling
    - previousSibling
    - nextElementSibling
    - previousElementSibling

-------------------------------------

METODOS EXTRAS DE NODOS

    - closest() ==> Devuelve el elemento contenedor mas cercano al selector utilizado (de forma ascendente).

-------------------------------------
*/
