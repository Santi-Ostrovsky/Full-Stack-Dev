/*
COMPONENTES CONTROLADOS

En HTML, los elementos de formulario mantienen su estado y se actualizan al recibir valores por el usuario. En React, el estado mutable es mantenido en en las propiedades del estado del componente, sólo siendo posible su modificación con 'setState()'.

Pueden combinarse ambos, haciendo que el componente que renderiza un formulario también controle lo que sucede con cada input subsecuente. Cuando un elemento <input> dentro de un formulario es controlado por un componente React, se llama COMPONENTE CONTROLADO:
*/

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" }; // Puede ponerse algo en este campo, si se quiere que el input tenga un valor ingresado por defecto (*)

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Se ingresó el nombre: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

/*
(*) lo mismo puede hacerse con una 'textarea' o con un 'select', para que una de las opciones esté seleccionada por defecto. En el caso del 'select', se puede pasar un array como valor del atributo 'value', junto con el atributo 'multiple={true}' para aceptar mas de una opción: <select multiple={true} value={['B', 'C']}.

Como el atributo 'value' está en el elemento <form>, el valor que se muestre siempre va a ser 'this.state.value', volviendo a React la 'única fuente de verdad'. A su vez, 'handleChange()' actualiza el estado en cada tecla presionada, actualizando el estado del elemento al mismo tiempo que el usuario ingresa información.

En un componente controlado, el valor del input siempre esta manejado por el estado en React. Si bien significa escribir más código, ahora el valor se puede pasar a otros elementos del UI (user interface) o resetearlo desde otro manejador de eventos.

--------------------------------------------------------------------

MANEJAR MUCHOS EVENTOS SIMULTÁNEAMENTE

Cuando es necesario manejar múltiples elementos <input> controlados, puede agregarse un atributo 'name' a cada elemento y dejar que la función 'handler' elija qué hacer, basado en el valor de 'this.target.name':
*/

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDoing: true,
      numberOfGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { target, name } = event;
    const value = target.type === "checked" ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <form>
        <label>
          Asiste:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Número de invitados:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.state.handleChange}
          />
        </label>
      </form>
    );
  }
}

/* --------------------------------------------------------------------

INPUTS CONTROLADOS CON VALOR NULO

Especificar el valor de 'value' en un componente controlado previene que el usuario cambie el input a menos que esa sea la intención. Si se especificó un valor en 'value' pero el input sigue siendo editable, accidentalmente puede cambiarse ese valor a 'null' o 'undefined'.

--------------------------------------------------------------------

ALTERNATIVAS A LOS COMPONENTES CONTROLADOS

Puede ser tedioso usar componentes controlados, porque se necesita crear un manejador de eventos para cada manera en la que los datos pueden alterarse, desde un mismo componente. Puede ser particularmente difícil cuando se quiere convertir un código preexistente a React o integrar una React a un librería fuera de React.

En estos casos, pueden utilizarse los COMPONENTES NO CONTROLADOS para implementar elementos <input> dentro de formularios HTML (08_componentes-no-controlados.js).
*/

// OTRA SOLUCIÓN ALTERNATIVA ES USAR UNA LIBRERÍA ESPECÍFICA PARA CREAR FORMULARIOS EN REACT, COMO 'FORMIK' --> https://formik.org/
