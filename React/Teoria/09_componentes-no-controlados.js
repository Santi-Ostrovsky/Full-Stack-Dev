/*
COMPONENTES NO CONTROLADOS

A diferencia de los componentes controlados, la información es manejada por el DOM mismo, en lugar de los componentes de React.

Para crear un componente NO controlado, el lugar de crear un manejador para cada evento posible y por cada actualización del estado, se usa una referencia ('ref') para obtener valores del DOM.

Por ejemplo, el siguiente componente no controlado, toma un nombre del usuario:
*/

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef(); // Se crea una referencia del DOM
  }

  handleSubmit(event) {
    alert("Se ingresó un nombre: " + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nombre:
          <input type="text" ref={this.input} />{" "}
          {/*  // ref = valor ingresado en el
          DOM, asignado como valor del input. */}
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

/*
Como se muestra en este ejemplo, la fuente de la verdad y del estado de la información, es el DOM.

Cuándo usar componentes controlados vs. componentes no controlados:
https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/

--------------------------------------------------------------------

VALORES POR DEFECTO

En el ciclo de vida del renderizado en React, el atributo 'value' en los elementos de formulario sobre-escribe los valores del DOM.

En un componente no controlado, generalmente se busca que React determine un valor inicial, pero que los cambios subsecuentes no sean controlados.Para este caso, puede definirse un valor por defecto ('defaultValue') en lugar de un 'value'.

Cambiando el valor por defecto de un elemento después de que un componente sea montado en una aplicación de React, no va a causar actualizaciones del valor en el DOM:
*/

class Ejemplo extends React.Component {
  // [...]
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nombre:
          <input defaultValue="Santiago" type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

// De la misma forma, los  inputs de tipo 'select'/'option' y 'textarea' aceptan valores por defecto, y los inputs de tipo 'checkbox' y 'radio', aceptan el atributo 'defaultChecked'.

/*--------------------------------------------------------------------

INPUTS DE TIPO 'FILE'

En HTML, los inputs de tipo 'file' permiten al usuario subir uno o mas archivos desde su almacenamiento local al servidor o ser manipulados por JavaScript.

En React, estos inputs siempre van a estar en componentes NO controlados porque el valor sólo puede estar determinado por el usuario y no puede programarse.

En su lugar, debe usarse el 'File API' para interactuar con los archivos. El siguiente ejemplo muestra cómo crear una referencia al Nodo del DOM para acceder con los archivos en un 'submitHandler':
*/

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`Archivo seleccionado → ${this.fileInput.current.files[0].name}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Subir Archivo:
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FileInput />);

/* --------------------------------------------------------------------

'REFs'

Las referencias 'ref' proveen una forma de acceder a los Nodos del DOM o elementos de React creados en el método 'render()'.

En el flujo normal de datos en React, 'props' es la única forma en que los componentes padres interactúan con sus componentes hijos. Para modificar estos últimos, se re-renderizan con nuevas propiedades 'props'.

Sin embargo, hay casos en los que es necesario modificar imperativamente un componente hijo por fuera del flujo normal de los datos, y es hijo puede ser, tanto una instancia de un componente en React como un elemento del DOM.

--------------------------------------------------------------------

CUANDO USAR 'REFs'

    - Al manejar 'focus', selecciones de texto y reproducciones multimedia.
    - Al iniciar animaciones imperativas.
    - Al integrar el código a librerías externas al DOM.

CUANDO NO USAR 'REFs'

    - Cuando se maneje cualquier actividad que pueda completarse de forma declarativa (ej: en lugar de usar los métodos 'open()' y 'close()' en un elemento de diálogo, pasar 'isOpen' como estado, por 'props').

--------------------------------------------------------------------

CREACIÓN DE 'REFs'

Las referencias se crean a través del método 'React.createRef()', y vinculado a los elementos de React a través del atributo 'ref'.
*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // <--
  }

  render() {
    return <div ref={this.myRef} />; // <--
  }
}

/* --------------------------------------------------------------------

ACCEDER A LOS 'REFs'

Cuando se pasa un 'ref' a un elemento en el método 'render()', una referencia a ese Nodo se vuelve accesible al atributo 'current' de la referencia.
*/
const node = this.myRef.current;
/*
El valor de los 'ref' depende de el tipo de Nodo:

    - Cuando el atributo se usa en un elemento HTML, la referencia creada en el constructor con 'React.createRef()' recibe el elemento del DOM adyacente como su propiedad 'current'.
    - Cuando es usado en un componente de clase personalizado, el objeto referido recibe la instancia montada del componente como suu 'current'.

NO puede usarse el atributo 'ref' en componentes funcionales porque las funciones no tienen instancias.

--------------------------------------------------------------------

PASAR 'REFs' A COMPONENTES FUNCIONALES

Como por defecto, no pueden utilizarse atributos 'ref' en funciones porque las mismas no tienen instancias, si se quiere permitir el envío de un 'ref' a un componente funcional, debe usarse la técnica 'forwardRef', en conjunto con 'useImperativeHandle()' (ver hooks), o se tiene que convertir el componente a uno de clase.

'forwardRef' es una técnica para pasar automáticamente un 'ref' de un componente a sus componentes hijos. Los casos más comunes están explicados más adelante (ver forwardRef).
*/

function CustomTextInput(props) {
  const textInput = useRef(null);

  function handleClick() {
    textInput.current.focus();
  }

  return (
    <div>
      <input type="text" ref={textInput} />
      <input type="button" value="Focus the text input" onClick={handleClick} />
    </div>
  );
}

/* --------------------------------------------------------------------

EXPONER REFERENCIAS DEL DOM A COMPONENTES PADRE

En algunos casos, puede que se quiera acceder a Nodos del DOM de un componente hijo desde el componente padre, lo que generalmente no es recomendado, ya que rompe la regla de componentes encapsulados. Sin embargo, puede ser útil para poner en foco ('focus'), o medir el tamaño o posición del Nodo hijo.

Mientras que puede usarse una referencia al componente hijo, no es lo ideal ya que sólo devolvería una instancia del componente, y no un Nodo del DOM, y, adicionalmente, no puede ser utilizado con componentes funcionales.

Para esos casos, usar la técnica 'ref forwarding' ('forwardRef'), lo que le permite a los componentes mostrar referencias de cualquier componente hijo como propia. Debe evitarse usar esta técnica mientras sea posible, aunque sea un 'escape' útil. Otra opción es la de usar el método 'findDOMNode()', lo que tampoco es recomendable, y es obsoleto cuando se trabaja en modo estricto ('StrictMode').

--------------------------------------------------------------------

CALLBACK 'REFs'

Se considera una mejor opción para controlar cuándo una referencia es creada o removida.

En lugar de pasar un atributo 'ref' creado por 'createRef()', se pasa una función, que recibe como argumento una instancia de componente React o de un elemento del DOM, lo cual puede guardarse para poder acceder a él en otra ubicación:
*/

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;

    this.setTextInputRef = (element) => (this.textInput = element);

    this.focusTextInput = () => {
      if (this.textInput) this.textInput.focus();
      // enfocar el text input usando el DOM API crudo
    };
  }

  componentDidMount() {
    this.focusTextInput();
    // auto-focus del input cuando se monta el componente
  }

  render() {
    // Usar el callback 'ref' para guardar una referencia del elemento del DOM de text input en un campo instanciado (ej: 'this.textInput').
    return (
      <div>
        <input type="text" ref={this.setTextInputRef} />
        <input
          type="button"
          value="Focus on text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

/*
React va a llamar al callback 'ref' con el elemento del DOM cuando el componente se monte, y con 'null' cuando se desmonte. Está garantizado que las referencias estén actualizadas antes de que se disparen los métodos 'componentDidMount()' y 'componentDidUpdate'.

Pueden pasarse callback 'refs' entre componentes como se puede como objetos 'ref' que fueron creados con 'React.createRef()':
*/

function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

class Parent extends React.Component {
  render() {
    return <CustomTextInput inputRef={(el) => (this.inputElement = el)} />;
  }
}

/*
En este ejemplo, 'Parent' le pasa su callback 'ref' como un 'inputRef' prop a 'CustomTextInput', y este último le pasa la misma función como un atributo especial 'ref' al elemento <input>. Como resultado, 'this.inputElement' en 'Parent' va a ser igualado al Nodo del DOM correspondiente al <input> en 'CustomTextInput'.

--------------------------------------------------------------------

** ADVERTENCIA **

Si el callback 'ref' es definido como arrow-function, va a ser llamado 2 veces durante las actualizaciones, una con 'null' y la siguiente con el elemento DOM correspondiente.

Esto se debe a que una nueva instancia de la función es creada en cada renderizado, por lo que React necesita limpiar la referencia vieja y agregar la nueva.

Esto puede evitarse definiendo el callback del 'ref' como un método en la clase, aunque no debería importar en la mayoría de los casos.
*/
