/*
LEVANTAMIENTO DE ESTADO

Muchas veces, los componentes necesitan reflejar cambios en los datos. Para eso, se recomienda 'levantar' el estado compartido al componente padre más cercano.

En el siguiente ejemplo, se crea una calculadora de temperatura para determinar si el agua hierve a una determinada temperatura. El componente 'BoilingVerdict' acepta un valor en 'celsius' como 'prop', y renderiza si es suficiente para que hierva el agua:
*/

function BoilingVerdict(props) {
  if (props.celsius >= 100) return <p>El agua va a hervir.</p>;
  else return <p>El agua NO va a hervir.</p>;
}

/*
Acto seguido, se crea el componente 'Calculator', que renderiza un <input> donde el usuario puede ingresar la temperatura y guarda el valor en 'this.state.temperature'. Adicionalmente, renderiza 'BoilingVerdict' para el valor del input recibido:
*/

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    return (
      <fieldset>
        <legend>Ingresar temperatura en Celsius:</legend>
        <input value={temperature} onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

/*
Ahora, debe agregarse un input, para aceptar un valor en grados Fahrenheit, y mantener ambos valores en sincronía.

Puede iniciarse por crear un componente 'TemperatureInput' desde la calculadora, y agregarle una 'prop' 'scale' para distinguir entre C° y F°:
*/

const scaleNames = {
  C: "celsius",
  F: "fahrenheit",
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>Ingresar temperatura en {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

/*
Ahora, puede modificarse el componente 'Calculator' para renderizar dos <input> distintos, uno por cada temperatura:
*/

class Calculator extends React.Component {
  render() {
    return (
      <div>
        <Temperature scale="C" />
        <Temperature scale="F" />
      </div>
    );
  }
}

/*
Al haber 2 inputs, es necesario crear una función para mantenerlos en sincronía. Cuando se llene uno de los campos, el otro debe auto-completarse con la información equivalente.

** Tampoco puede mostrarse 'BoilingVerdict' desde 'Calculator', y este último tampoco sabe la temperatura actual porque ese valor está dentro de 'TemperatureInput'.

Debajo, se escriben las funciones de conversión:
*/

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

/*
Y ahora una función que tome un string 'temperature' y una función conversora como argumentos, y retorne un string. Esta función va a usarse para calcular el valor de un input basado en el valor ingresado en el otro:
*/

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature); // se transforma el string a float
  if (Number.isNaN(input)) {
    return ""; // si no es un numero, se retorna un string vacío
  }
  const output = convert(input); // callback función conversora
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString(); // devolver un valor redondeado
}

/*
Si se llama a la función 'tryConvert('abc', toCelsius)', retorna un string vacío, y 'tryConvert('10.22', toFahrenheit)' retorna '50.396'.

Actualmente, ambos inputs mantienen sus valores individualmente. Si se ingresa un valor en Celsius, debería mostrarse el valor equivalente en Fahrenheit y vice-versa.

En React, compartir el estado se logra moviéndolo al componente padre más cercano que lo necesite. Esto se llama LEVANTAR EL ESTADO ('lifting state up'). Para esto, se remueve el estado local del componente 'TemperatureInput' y se mueve al componente 'Calculator'.

Si el componente 'Calculator' tiene el estado compartido, se vuelve 'la fuente de la verdad' para el valor actual de ambos inputs. Como las 'props' de ambos inputs dentro del componente 'TemperatureInput' vienen del mismo componente padre 'Calculator', los valores siempre van a estar sincronizados.

Entonces se tiene que reemplazar 'this.state.temperature' por 'this.props.temperature' en el componente 'TemperatureInput', y pasar la propiedad 'temperature' desde el componente 'Calculator' ('TemperatureInput' ya no tiene mas control sobre las temperaturas, ya que le llegan por 'props', y cuando quiera actualizar la temperatura tiene que llamar a 'this.props.onTemperatureChange()', que también llega por 'props').
*/

// TemperatureInput actualizado:
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const { temperature, scale } = this.props;
    return (
      <fieldset>
        <legend>Ingresar temperatura en {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

/*
Ahora el componente 'Calculator' va a guardar el valor actual de los inputs 'temperature' y 'scale' en su estado local, que se 'levantó' de los inputs y va a servir como 'fuente de la verdad'. Es la representación mínima de todos los datos necesarios para renderizar ambos inputs.

Por ejemplo, si se ingresa '37' en Celsius, el estado del componente 'Calculator' va a ser:
>>> { temperature: '37', scale: 'C' }

Pero si más tarde se edita el campo 'Fahrenheit' a un valor de '212', el estado de 'Calculator' va a ser:
>>> { temperature: '212', scale: 'F' }

Podría guardarse el valor de ambos inputs, pero resulta innecesario, ya que la función conversora nos muestra el valor del otro input basado en la temperatura y la escala del estado actual. Los inputs se mantienen sincronizados porque sus valores se computan en el mismo estado.
*/

// COMPONENTES TERMINADOS:

function BoilingVerdict(props) {
  if (props.celsius >= 100) return <p>El agua va a hervir.</p>;
  else return <p>El agua NO va a hervir.</p>;
}

const scaleNames1 = {
  C: "celsius",
  F: "fahrenheit",
};

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature); // se transforma el string a float
  if (Number.isNaN(input)) {
    return ""; // si no es un numero, se retorna un string vacío
  }
  const output = convert(input); // callback función conversora
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString(); // devolver un valor redondeado
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const { temperature, scale } = this.props;
    return (
      <fieldset>
        <legend>Ingresar temperatura en {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: "", scale: "C" };
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: "C", temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: "F", temperature });
  }

  render() {
    const { scale, temperature } = this.state;
    const celsius =
      scale === "F" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "C" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="C"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
      </div>
    );
  }
}

/*
Ahora, no importa cual de los dos inputs sea modificado por el usuario, el otro va a actualizarse en tiempo real mostrando la temperatura equivalente en la otra escala.
*/
