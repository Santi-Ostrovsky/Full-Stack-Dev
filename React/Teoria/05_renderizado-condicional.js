/*
RENDERIZADO CONDICIONAL

En React, se pueden distinguir componentes en encapsulan cierto comportamiento, para luego renderizar algunos de ellos, dependiendo del estado de la aplicación.

En renderizado condicional funciona de la misma manera en la que funcionan las condiciones en JavaScript, a través de declaraciones 'if' y el uso de operadores condicionales o comparativos.

Considerar el siguiente ejemplo:
*/

function SaludarUsuario(props) {
  return <div>Bienvenido de nuevo, {props.name}!</div>;
}

function SaludarInvitado(props) {
  return <div>Ingrese a su cuenta.</div>;
}

/*
En un sitio web, se establece un saludo para usuarios ya registrados con su cuenta, y otro para cuando el usuario no se encuentra registrado con una cuenta en su navegador, o es la primera vez que ingresa al sitio. Para determinar cuál de los saludos es el apropiado, debería crearse un único componente para saludar al usuario, y que el resultado dependa del estado del mismo:
*/

function Saludar(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) return <SaludarUsuario name={props.UserName} />;
  else return <SaludarInvitado />;
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting isLoggedIn={false} />);

/* --------------------------------------------------------------------

ELEMENTOS EN VARIABLES

Pueden declararse variables para guardar elementos, lo que puede ayudar a renderizar de manera condicional parte de un componente sin modificar el resto de la aplicación.

Considerar el siguiente ejemplo:
*/
function LoginButton(props) {
  return <button onClick={props.onClick}>Log-In</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Log-Out</button>;
}

/*
Estos dos componentes representan botones para ingresar o salir de una cuenta. Pero como no pueden estar presentes al mismo tiempo, puede crearse un 'Stateful Component' o componente con estado, llamado 'LoginControl', que renderiza 'LogInButton' o 'LogOutButton', y un saludo apropiado (del ejemplo anterior), dependiendo del estado actual del usuario:
*/

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) button = <LogoutButton onClick={this.handleLogoutClick} />;
    else button = <LoginButton onClick={this.handleLoginClick} />;

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LoginControl />);

/*
Declarar una variable (button) con una declaración 'if', es una forma correcta de renderizar un componente de manera condicional.

Hay una forma más simple o abreviada de hacerlo, con condicionales en línea.

--------------------------------------------------------------------

CONDICIONALES EN LÍNEA - CON '&&'

En React, se pueden encapsular expresiones de JavaScript entre llaves, lo que incluye, por ejemplo, al operador lógico '&&':
*/

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h2>Hola!</h2>
      {unreadMessages.length > 0 && (
        <h3>Tienes {unreadMessages.length} mensajes sin leer.</h3>
      )}
    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Mailbox unreadMessages={messages} />);

/*
{messages} va a tomar el array de mensajes no leídos. En Javascript, 'true && expresión' devuelve la expresión, mientras que 'false && expresión' devuelve 'false'.
Por ello, en caso de contener mensajes, se va a renderizar el <h3> ya que se cumple la condición de que 'unreadMessages.length' sea mayor a '0'; de lo contrario, sólo se rendizará el <h2>Hola!</h2>.
    --> Un array de mensajes puede ser, por ejemplo:
        const messages = ['Hey', 'Re: Hey', 'Re:Re: Hey'];

* Tener en cuenta que una expresión 'falsy' causa que el elemento después de '&&' no se tenga en cuenta, pero sí va a retornarse la expresión 'falsy'.

--------------------------------------------------------------------

CONDICIONALES EN LÍNEA - CON 'IF-ELSE'

Otra forma de renderizar elementos de manera condicional, en línea, es utilizando operadores ternarios --> ' (condición) ? true : false ':
*/

function Mensaje(props) {
  const isLoggedIn = props.state.isLoggedIn;
  return (
    <div>
      El usuario <b>{isLoggedIn ? "no está" : "está"}</b>loggeado.
    </div>
  );
}

function LoginButton(props) {
  const isLoggedIn = props.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn ? (
        <LogoutButton onClick={this.handleLogoutClick} />
      ) : (
        <LoginButton onClick={this.handleLoginClick} />
      )}
    </div>
  );
}

/* --------------------------------------------------------------------

PREVENIR QUE UN COMPONENTE SE RENDERICE

En algunas ocasiones, es posible que se quiera esconder a un componente aunque haya sido renderizado por otro. Para lograr esto, en lugar de retornar el 'render output' en el componente, debe retornarse 'null'.

En el siguiente ejemplo, el componente 'Warning' va a ser renderizado dependiendo del valor de la propiedad 'warn' pasado por 'props'. Si es 'falsy', el componente no se renderiza.
*/

function Warning(props) {
  if (!props.warn) return null;
  return <div className="warning">Warning!</div>;
}
