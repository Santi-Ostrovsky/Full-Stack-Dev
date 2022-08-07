// Manejar eventos en elementos de React es muy similar a manejar eventos con elementos del DOM.
// Hay algunas diferencias de sintaxis:

// Los eventos de React se nombran usando camelCase, en vez de minúsculas.
// Con JSX pasas una función como el manejador del evento, en vez de un string.

// Por ejemplo, el HTML:

<button onclick="activateLasers()">
  Activate Lasers
</button>
En React es algo diferente:

<button onClick={activateLasers}>
  Activate Lasers
</button>


// Otra diferencia es que en React no puedes retornar false para prevenir el comportamiento por defecto. Debes, explícitamente, llamar preventDefault. Por ejemplo, en un HTML plano, para prevenir el comportamiento por defecto de enviar un formulario, puedes escribir:

<form onsubmit="console.log('You clicked submit.'); return false">
  <button type="submit">Submit</button>
</form>

// En cambio en React, esto podría ser:

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

// Cuando estás utilizando React, generalmente no necesitas llamar addEventListener para agregar escuchadores de eventos a un elemento del DOM después de que este es creado. En cambio, solo debes proveer un manejador de eventos cuando el elemento se renderiza inicialmente.

// Cuando defines un componente usando una clase de ES6, un patrón muy común es que los manejadores de eventos sean un método de la clase. Por ejemplo, este componente Toggle renderiza un botón que permite al usuario cambiar el estado entre “ENCENDIDO” y “APAGADO”:

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}