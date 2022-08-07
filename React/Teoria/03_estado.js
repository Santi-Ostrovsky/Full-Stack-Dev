/*
ESTADOS Y CICLO DE VIDA DE LOS COMPONENTES

Considerar el siguiente ejemplo:
*/
const root = ReactDOM.createRoot(document.getElementById("root"));

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);

/*
En este componente, el reloj creado se renderiza una única vez (dentro de la función), y no es un componente 'reutilizable' y encapsulado. Para eso, debe renderizarse el contenido del componente completo, por fuera de la función, y las modificaciones que deban hacerse dinámicamente, se harán a través de la modificación del ESTADO de los elementos dentro del componente.

Idealmente, el reloj actualizaría la interfaz de usuario (UI) cada segundo, y ese sería un detalle implementado dentro del propio reloj, y el render debería ser algo así:
*/

root.render(<Clock />);

/*
Para poder implementarlo de esta forma, es necesario agregar un ESTADO al componente 'Clock'.

El ESTADO (State) es similar a 'props', pero privado y controlado en un 100% por el propio componente. (los estados se expresan en objetos)

Para agregar el STATE al componente 'Clock' es necesario convertirlo, de un componente funcional a un componente de clase (ES6), de la siguiente manera:
*/

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

/*
Ahora, 'Clock' es un componente de Clase, y el método 'render()' (propio de React) va a ser llamado cada vez que suceda una actualización del documento.

El problema es que mientras <Clock /> se renderice en el mismo nodo del DOM, una única instancia del componente Clock va a ser utilizada. Para evitar eso, se agrega un ESTADO LOCAL (local state) y métodos de 'lifecycle'.

-- PASOS --
1- Cambiar 'this.props.state' por 'this.state.date'.
2- Agregar un constructor que asigne el estado original --> 'this.state'.
3- Remover la propiedad 'date' del elemento 'Clock'.

↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓
*/

class Clock extends React.Component {
  constructor(props) {
    super(props); // Los componentes de clase con funciones constructoras siempre deben llamar al constructor base con 'super(props)'.
    this.state = { date: new Date() };
  }
  // En este punto, estamos fuera del constructor pero dentro de la clase Clock.
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
// Afuera del componente de clase Clock.
// const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Clock />);

/*
Ahora, es necesario agregar 'Lifecycle Methods' a la clase, para que el componente Clock tenga su propio timer y se actualice a cada segundo.

En aplicaciones con muchos componentes, es importante liberar espacio y recursos utilizados por componentes destruidos:

    - MOUNTING ==> Se inicia un timer cuando el componente Clock es renderizado en el DOM por primera vez.

    - UNMOUNTING ==> Se elimina el timer cuando el DOM creado por el componente Clock es removido.

Pueden declararse métodos especiales en los componentes de clase para correr código específicamente cuando los componentes son montados y/o desmontados:

    - componentDidMount() {...} --> Este método corre después de que el output del componente haya sido renderizado en el DOM. En este caso, es un buen lugar para insertar el timer.

    - componentWillUnmount() {...} --> Este método corre al eliminar el componente Clock del DOM. En este caso, es un buen lugar para interrumpir el timer con el método de JavaScript 'clearInterval([...])'.

A su vez, puede definirse un método en el cual se modifique el ESTADO del componente Clock con el método de React 'setState()':

    - tick () {
        this.setState({ date: new Date() });
    }
*/

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // componentDidMount() es un método que React llama SIEMPRE que un componente se renderiza, esté textualmente definido en el programa o no. Los métodos de ciclo de vida, no es necesario llamarlos o invocarlos, ya que se ejecutan de manera automática cuando el componente entra en la etapa a la cual corresponde cada uno de los métodos.
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    // se guarda el ID del timer en 'this' (this.timerID)
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);

/*
Ahora el componente Clock se actualiza a cada segundo, por sí solo.

Cuando el componente Clock es pasado a 'root.render()', React llama al constructor de Clock. Como Clock necesita mostrar la hora en el momento, inicializa 'this.state' con un objeto que incluye el tiempo en una instancia del Objeto Date, lo cual se va a actualizar en el futuro a través del método 'setState()'.

Seguido, React llama al método 'render()' del componente Clock, y así es como React sabe qué debe ser renderizado en el documento, y actualiza el DOM de acuerdo a lo que se renderice dentro del componente Clock.

Cuando el output de Clock es insertado en el DOM, React llama al método de lifecycle 'componentDidMount', en donde el componente Clock le pide al browser que inicie el timer para llamar al método 'tick()' a cada segundo.

Cada segundo el browser llama al método 'tick()', en donde el componente Clock agenda una actualización del UI llamando a 'setState()', con un objeto que contiene una nueva instancia del objeto Date. Gracias al llamado de 'setState()' , React sabe que el ESTADO cambió, y vuelve a llamar al método 'render()' para saber qué debe mostrarse en pantalla. Esta vez, 'this.state.date' en el método 'render()' va a ser diferente, entonces al renderizar, el output va a incluir el tiempo actualizado, y React va a actualizar el DOM de acuerdo a esos cambios.

Si en algún momento el componente Clock es removido del DOM, React llama al método de lifecycle 'componentWillUnmount()' para detener el timer.

-------------------------------------------------------------

COSAS A SABER DE 'STATE':

    - Los estados deben expresarse como objetos, como parámetro dentro del método 'state()':
        → MAL --> this.state.comment = 'Hello';
        → BIEN --> this.state({ comment: 'Hello' });
        El único lugar donde puede asignarse 'this.state' es en constructor.

    - Las actualizaciones de estados pueden ser asincrónicas, por lo que no se debe contar con los valores de 'this.props' y 'this.state' al calcular el próximo estado del elemento:
        → MAL --> this.setState({
            counter: this.state.counter + this.props.increment
        });
        → BIEN --> this.setState((state, props) => ({
            counter: state.counter + props.increment
        }))
        La forma correcta utiliza una segunda forma de 'setState()' que acepta una función en lugar de un objeto. Esa función va a recibir el estado previo como argumento y las propiedades al momento de aplicar la actualización del segundo argumento (puede ser con 'arrow-functions' o con funciones normales).

    - Los estados se fusionan al actualizarse. Cuando se llama a 'setState()', React fusiona el objeto proveído en el estado actual con el estado actualizado, siendo que sólo las propiedades que fueron modificadas en el nuevo objeto 'state' van a tener cambios reflejados, mientras que las propiedades sin cambios van a quedar igual que antes de la actualización:
        - Si se tiene el siguiente this.state:
            this.state = {
                posts: [],
                comments: []
            };
        - Y se actualiza de esta manera:
            this.setState({ posts: null });
        - La única propiedad del estado en modificarse va a ser 'posts', cambiando su valor de un arreglo varío a 'null', mientras que 'comments' va a seguir siendo un arreglo vacío.

    - Los datos fluyen hacia abajo, mientras que los eventos fluyen hacia arriba. Ni los elementos padres ni los hijos saben si un componente tiene estado o no, ni tampoco importa si están definidos como funciones o como clases. Es por esto que los estados son llamados 'locales' o 'encapsulados', no son accesibles a otros componentes más que el que lo tiene y modifica:
        --> <FormattedDate date={this.state.date} />
        --> function FormatterDate(props){
            return <div>It is {props.date.toLocaleTimeString()}</div>;
        }
        - El elemento padre le pasa su estado al elemento hijo, pero el hijo lo toma como una propiedad, sin saber si el valor es una propiedad, un estado, o un valor tipeado a mano ('hard-codeado').

-------------------------------------------------------------

FASES DE CICLO DE VIDA DE LOS COMPONENTES

    1) MOUNTING / MONTAJE
    2) UPDATE / ACTUALIZACIÓN
    3) UNMOUNTING / DESMONTAJE

Al existir componentes que se renderizan ante ciertas condiciones, se establecen esas posibilidades y sus efectos a través de métodos de ciclo de vida.

La etapa de montaje representa el momento en el que un componente se renderiza en la interfaz, permitiendo al usuario interactuar con el mismo, o simplemente visualizarlo.

En caso de tener que actualizar dicho componente, no debe hacerse en la etapa de montaje, si no en la etapa propia de actualización.

Finalmente, una vez que el componente ya no sea necesario, y luego de haberse actualizado las veces que sean necesarias (puede no haberse actualizado nunca), entra en la etapa de desmontaje, en la cual el componente deja de ser renderizado en la interfaz.

-------------------------------------------------------------

MÉTODOS DEL CICLO DE VIDA DE LOS COMPONENTES

    MOUNTING / MONTAJE ==> componentDidMount()
    - constructor()
    - getDerivedStateFromProps()
    - render()

    UPDATING / ACTUALIZACIÓN ==> componentDidUpdate()
                             ==> forceUpdate()
    - getDeriverStateFromProps()
    - shouldComponentUpdate()
    - render()
    - getSnapShotBeforeUpdate()

    UNMOUNTING / DESMONTAJE ==> componentWillUnmount() 

https://www.w3schools.com/react/react_lifecycle.asp


*/
