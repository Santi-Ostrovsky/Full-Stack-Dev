/*
Los eventos en React se manejan de manera muy similar a los eventos del DOM en JS-vanilla, pero con algunas diferencias en la sintaxis:

    - Los eventos en React son nombrados usando camelCase en lugar de lowercase.
    - Con JSX, en el manejador de eventos se pasa una función, en lugar de un string.

        → HTML --> <button onclick="activarLaser()">Activar Laser</button>
        → JSX --> <button onClick={activarLaser}>Activar Laser</button>

    - En React, no se puede retornar 'false' para prevenir el comportamiento normal de un evento. Hay que invocar 'preventDefault()' de manera explícita:
        → HTML --> <form onsubmit="console.log('Enviado'); return false">
                       [...]
                   </form>
        → JSX --> function Form() {
                      function handleSubmit(e) {
                          e.preventDefault();
                          console.log("Enviado");
                      }
                      return (
                        <form onSubmit={handleSubmit}>
                            [...]
                        </form>
                      )
                  }

    - En React, no es necesario llamar al método 'addEventListener()' para agregar un manejador al elemento después de ser creado. En su lugar, se debe proveer un manejador cuando el elemento es renderizado.

    - Al definir un componente de clase, es recomendable que se defina un manejador de eventos como método de la clase. El el siguiente ejemplo, "Toggle" es un componente de clase que renderiza un botón, que permite alternar entre 'ON' y 'OFF'
*/
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
    // Esta Línea es necesaria en el constructor para que 'this' funcione en el callback *
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}
/*
 * Si no se 'bindea' 'this' al método handleClick(), 'this' va a ser undefined cuando se llame a la función. Para evitar eso, y también 'bindear' el 'this', puede usarse la sintaxis de campos públicos y estáticos de clases (arrow functions), al definir el método 'handleClick()' (#1) o al renderizar el evento dentro del método 'render()' (#2).
 */
// #1
handleClick = () => {
  console.log("this is:", this);
};
// #2
class Toggle extends React.Component {
  render() {
    return <button onClick={() => this.handleClick()}>Click THIS</button>;
  }
}
// SOLO DEBE APLICARSE UNA DE LAS DOS ALTERNATIVAS, NO AMBAS.

// -------------------------------------------------------------

/*
PASSING ARGUMENTS TO EVENT HANDLERS

Inside a loop, it is common to want to pass an extra parameter to an event handler. For example, if 'id' is the row ID, either of the following would work:
*/
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>;
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>;
/*
The above two lines are equivalent, and use arrow functions and Function.prototype.bind respectively.

In both cases, the 'e' argument representing the React event will be passed as a second argument after the ID. With an arrow function, we have to pass it explicitly, but with bind any further arguments are automatically forwarded.

(DELETE-ROW IS A REACT METHOD)
https://www.w3schools.com/react/react_lifecycle.asp
*/
