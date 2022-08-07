/*
COMPOSICIÓN VS. HERENCIA

React tiene un poderoso modelo de composición, lo que recomienda usarse en lugar de herencia de propiedades, para poder reutilizar código entre los componentes.

--------------------------------------------------------------------

CONTENCIÓN

Algunos componentes no conocen a sus componentes hijos antes de tiempo, especialmente si se trata de componentes que representan contenedores genéricos. En estos casos se recomienda usar la 'prop' especial 'children' para pasar los elementos hijos directamente por el output del componente padre:
*/

function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      {/* HIJOS ↓↓↓↓ */}
      <h1 className="Dialog-title">Bienvenido</h1>
      <p className="Dialog-message">Gracias por visitar nuestro sitio!</p>
      {/* HIJOS ↑↑↑↑ */}
    </FancyBorder>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
ShadowRoot.render(<WelcomeDialog />);

/* 
Todo dentro de la etiqueta JSX <FancyBorder> se pasa al componente 'FancyBorder' como 'prop' 'children'. Como 'FancyBorder' renderiza {props.children} dentro de un <div>, los elementos pasados por props aparecen en el resultado final.

********************

En algunos casos, aunque poco comunes, es posible que se necesiten múltiples 'agujeros' en un componente. En tales casos, puede usarse una convención personal en lugar de 'children':
*/

function SplitPanel(props) {
  return (
    <div className="SplitPanel">
      <div className="SplitPanel-left">{props.left}</div>
      <div className="SplitPanel-right">{props.right}</div>
    </div>
  );
}

function App() {
  return <SplitPanel left={<Contacts />} right={<Chat />} />;
}

// Los elementos 'Contacts' y 'Chat' son sólo objetos, que pueden pasarse como 'props', como cualquier otro dato.

/* --------------------------------------------------------------------

ESPECIALIZACIÓN

A veces, puede pensarse en componentes como "casos especiales" de otros componentes. Por ejemplo, se podría decir que 'WelcomeDialog' es un caso especial de 'Dialog'.

En React, esto también se logra a través de la composición, donde un componente más "específico" renderiza a uno más "genérico", configurándolo con propiedades:
*/

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog title="Bienvenido" message="Gracias por visitar nuestro sitio!" />
  );
}

/* ********************

Y funciona de la misma manera para componentes de clase:
*/

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignup = this.handleSignUp.bind(this);
    this.state = { login: "" };
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program" message="Bienvenido a la nave!">
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSignup}>Ingresar!</button>
      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({ login: e.target.value });
  }

  handleSignUp() {
    alert(`Bienvenido a bordo, ${this.state.login}!`);
  }
}

/* --------------------------------------------------------------------

HERENCIA

En resumen, la composición de componentes siempre es mejor que la herencia, ya que a través de la composición se logra la flexibilidad necesaria para personalizar la vista y comportamiento de una forma explícita y segura, sin depender del comportamiento de otros componentes.
*/
