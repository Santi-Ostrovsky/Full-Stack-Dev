/*
FORMULARIOS

Los elementos <form> en HTML se manejan de manera distinta a los elementos del DOM en React, porque los elementos <form> naturalmente mantienen un estado interno. Por ejemplo:
*/
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>;
/*
Este formulario, que toma solamente un nombre, tiene el comportamiento normal de un formulario HTML de ingresar a una nueva página cuando se envían los datos del formulario.

Si se quiere lograr el mismo comportamiento en React, funciona, pero en la mayoría de los casos es más conveniente usar una función de JavaScript, que maneje el envío del formulario y tenga acceso a los datos ingresados por el usuario. La manera más convencional de lograr esto, es con la técnica de los 'Componentes Controlados'.

--------------------------------------------------------------------

FORMULARIOS CONTROLADOS VS. FORMULARIOS NO CONTROLADOS.

En los formularios controlados, los inputs van a estar asociados o 'bindeados' al estado del componente que lo maneja, manipula su valor y controla el envío. (componentes controlados)

En los formularios no controlados, los valores de los inputs son tomados del DOM, mientras que los componentes en React no manipulan esos valores, solo los toman de forma directa (componentes no controlados).

--------------------------------------------------------------------

CAMPOS & KEYS

En los formularios, cada campo (input) tiene que tener un key respectivo y único. Es posibilita generar cambios dinámicos en el formulario a partir de, por ejemplo, el idioma en el cual está el navegador del usuario.

En el siguiente ejemplo, se ve la diferencia entre un formulario de ingreso de Nombre, Apellido y Inicial, en español y húngaro, siendo que el orden de los campos cambia entre uno y otro, y el botón de "cambio de idioma" va a ordenar los campos dependiendo del idioma seleccionado, cambiando también de lugar la información ingresada en cada campo hasta el momento:
--------------------------------------------------------------------
*/

function Ejemplo({ lang }) {
  if (lang === "hun") {
    // SI EL IDIOMA SELECCIONADO ES 'HÚNGARO' MOSTRAR ESTE FORMULARIO
    return (
      <form>
        <input
          key="lastName"
          type="text"
          placeholder="Vezetéknév"
          name="lastName"
        />
        <input
          key="firstName"
          type="text"
          placeholder="Keresztnév"
          name="firstName"
        />
        <input
          key="middleInitial"
          type="text"
          placeholder="KB"
          style={{ width: 30 }}
          name="middleInitial"
        />
      </form>
    );
  }
  return (
    // PERO SI ES OTRO IDIOMA, MOSTRAR ESTE FORMULARIO
    <form>
      <input
        key="firstName"
        type="text"
        placeholder="First Name"
        name="firstName"
      />
      <input
        key="middleInitial"
        type="text"
        placeholder="MI"
        style={{ width: 30 }}
        name="middleInitial"
      />
      <input
        key="lastName"
        type="text"
        placeholder="Last Name"
        name="lastName"
      />
    </form>
  );
}

export default function Lang() {
  const [lang, setLang] = useState("hun");

  return (
    <div>
      <Ejemplo lang={lang} />
      <button // BOTÓN QUE CAMBIA EL IDIOMA ENTRE HÚNGARO Y ESPAÑOL (TIPO TOGGLE)
        onClick={(e) => setLang((old) => setLang(old == "hun" ? "es" : "hun"))}
      >
        Lang
      </button>
    </div>
  );
}

/* --------------------------------------------------------------------



*/
