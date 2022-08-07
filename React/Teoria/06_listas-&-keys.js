/*
LISTAS DE ELEMENTOS

Así como en JavaScript se usa el método 'map()' para crear arreglos modificados con ciertas condiciones, en React, puede usarse dentro de llaves {} (JSX) para el renderizado de múltiples componentes o elementos de forma simultánea.
*/

const numbers = [1, 2, 3, 4, 5];
const doubles = numbers.map((n) => n * 2);
// doubles = [2, 4, 6, 8, 10]

/*
En React, transformar arrays en listas de elementos es casi idéntico, solo que para crear colecciones de elementos en JSX se usan las llaves {}.

En el siguiente ejemplo, se itera sobre 'numbers' usando 'map()', para retornar cada elemento dentro del arreglo como un elemento html <li>:
*/

const listItems = numbers.map((number) => <li>{number}</li>);
// Al renderizar la aplicación... ↓

// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ul>{listItems}</ul>);

// ********************
// La forma correcta de haberlo, es dentro de un componente:
function ListaDeNumeros(props) {
  const numbers = props.numbers; // Array 'numbers' pasado por 'props'
  const listItems = numbers.map((number) => <li>{number}</li>);

  return <ul>{listItems}</ul>;
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ListaDeNumeros numbers={numbers} />);

/* --------------------------------------------------------------------

KEYS - LLAVES

Al correr código en el ejemplo anterior, la consola devolverá una advertencia diciendo que una 'key' (llave / ID) debe proveerse para los items de las listas.

Una 'key' es una atributo especial de tipo 'string' que es necesario incluir al crear elementos dentro de una lista, y cada elemento debe tener un 'key' propio, distinto de los demás elementos.

En este caso, para solucionar el problema puede agregarse un atributo 'key' al elemento <li> dentro del método 'map()':
*/

const Items = numbers.map((number) => (
  <li key={number.toString()}>{number}</li>
));

/*
Las 'keys' ayudan a React a saber cuáles son los elementos que han sido modificados, añadidos o removidos en una colección de elementos, y deben ser asignados a los elementos de un array para darles una identidad estable.

La mejor forma de asignar una 'key' es con un string que identifique a cada elemento de manera única entre sus elementos hermanos. Usualmente se asigna la 'key' con datos ya existentes, o proveídos al componente a través de 'props' (ej: props.id):
*/
const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
/*
Como último recurso, cuando no hay otra forma de asignar una 'key' a cada elemento y no se tiene un ID estable para los mismos, puede usarse su posición en el arreglo (index):
*/
const todoItems2 = todos.map((todo, index) => <li key={index}>{todo.text}</li>);
/*
El uso de posiciones 'index' como 'keys' de los elementos no es recomendado ya que el orden de los mismos dentro de la lista puede ser alterado, lo que puede afectar de manera negativa al rendimiento de la aplicación y generar problemas en el estado del componente.

Si no se asigna una 'key' a cada elemento, React por defecto le asigna su posición dentro del arreglo (index).

Al extraer o dividir un componente, las 'keys' de los elementos deben permanecer en el contexto del array que engloba a dichos elementos:
*/

function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((num) => (
    <ListItem key={num.toString()} value={num} />
  ));
  return <ul>{listItems}</ul>;
}
/* La declaración de la 'key' de cada elemento queda en el marco superior 'NumberList' que contiene la lista, en lugar que el componente inferior 'ListItem' que contiene a los elementos de la lista.

==> Una buena práctica es añadir 'keys' a todos los elementos cuando se use el método 'map()'.

==> Las 'keys' de los elementos deben ser únicas respecto de los demás items de la misma lista (elementos hermanos), pero no es necesario que dichas 'keys' sean únicas a nivel global dentro de la aplicación.

--------------------------------------------------------------------

Otra forma de escribir la función 'NumberList()', es usando JSX dentro del 'return', y crear de manera directa la lista de elementos al retornar la función:
*/

function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;

  return (
    <ul>
      {numbers.map((num) => (
        <ListItem key={num.toString()} value={num} />
      ))}
    </ul>
  );
}
