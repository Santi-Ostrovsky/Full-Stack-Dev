console.log(" \nCLASSES \n");

/* Las clases son plantillas para la creación de objetos según
un modelo predefinido. Se utilizan para representar entidades
o conceptos, como los sustantivos en el lenguaje.    */

// HOW TO DEFINE CLASES - Use 'function constructors'.

function Persona(nombre, apellido, edad) {
  this.firstName = nombre;
  this.lastName = apellido;
  this.age = edad;
}

console.log("");
var juan = new Persona("Juan", "Perez", 38);
console.log(juan);

/* Se crea una función (y el nombre va en mayúscula), y cada
propiedad va estar inicializada por la key-word 'this' tal como
'self' en Python.

Una vez hecho esto, la clase esta creada. Ahora, hay que crear los
objetos dentro de la clase. Para eso, creamos una variable de 
nombre x, y la asignamos como objeto de la Clase creada a traves
de la key-word 'new' + el nombre de la función constructora
(Clase), asignándole un valor a cada propiedad en forma de
argumentos (igual que en Python).

La función constructora no retorna nada porque la palabra 'new'
invoca la función constructora creando el objeto y 'bindea' a
traves de la palabra-clave 'bind' a cada parámetro del objeto
con una propiedad asignada en la clase.    

** 'bind' se va a ver más adelante.

Las Clases también pueden tener parámetros 'default' como los
switch statements, lo que hace que los objetos tengan valores
asignados de manera automática (a un valor predeterminado) si
los mismos no se pasan como parámetros al momento de definir
el objeto con la función 'new':    */

function Auto(marca, modelo, año) {
  this.marca = marca || "BMW";
  this.modelo = modelo || "X6";
  this.año = año || "2022";
}

/* En esta clase, si al definirse un objeto no se establece
alguno de los parámetros delimitados por la Clase, de
manera automática les serán asignados los valores descriptos
tras el operador por defecto '||' ('o' / 'or'):    */

console.log("");
var golcito = new Auto("Volkswagen", "Gol");
console.log(golcito);

// Automáticamente se le asignó el año 2022.
/* En caso de querer saltear un parámetro al crear el objeto,
para que tal parámetro sea un default, rellenar el espacio con
'null' (o undefined).    */

// También se puede usar el operador '&&' para otras operaciones
// lógicas.

// --------------------------------------------------------------

// ES6.

// OTRA FORMA de crear una clase es con la key-word 'constructor':

class Student {
  constructor(nombre, apellido) {
    (this.nombre = nombre), (this.apellido = apellido);
  }
  saludar() {
    console.log("Hola,", this.nombre);
  }
}

console.log("");

var Santi = new Student("Santi", "Ostrovsky");
Santi.saludar();
console.log(Santi);

/* Esta forma es más parecida a Python, aunque menos utilizada en
JS. (FORMA 'ES6').   */

// --------------------------------------------------------------

console.log(" \nMÉTODOS ESTÁTICOS \n");

/* Los métodos estáticos son aquellas funciones que están definidas
dentro de un objeto o clase, pero que pueden ser utilizadas sin
referenciarse a un objeto perteneciente a la clase donde el método
está definido. Ej: en la clase 'Student', hay un método 'saludar', que
por ser un método de la clase 'Student', sólo puede invocarse a través
de un objeto perteneciente a dicha clase; sin embargo, si ese fuera un
método estático, no sería necesario el objeto perteneciente a la clase
para invocar dicho método (en el caso del ejemplo, el objeto 'Santi').

Para crear un método estático, se le antepone la palabra-clave 'static'
al método definido (en el caso del método saludar, sería:
'static saludar()...'.    */

class NuevaClase {
  constructor(prop1, prop2) {
    (this.prop1 = prop1), (this.prop2 = prop2);
  }

  imprimirPropiedades() {
    console.log(`prop1 = ${this.prop1}, prop2 = ${this.prop2}`);
  }

  static metodoEstatico() {
    console.log("Esto es un método estático.");
  }
}

var obj1 = new NuevaClase("a", "b");

obj1.imprimirPropiedades();
NuevaClase.metodoEstatico(); /* el método se invoca a través de la
                                clase y no de objeto. */

// --------------------------------------------------------------

console.log(" \nMÉTODOS ESTÁTICOS \n");

/* Son métodos vinculados directamente a la clase, y no a los objetos.
Se definen con la palabra reservada 'static' y se llaman como métodos
de la clase.     */

class Alertas {
  constructor() {
    this.alerta = true;
  }

  // El siguiente método va a ser de la Clase, y no de los objetos
  // que se instancien de la misma.
  static alertar() {
    this.alert('Esto es una alerta de la Clase "Alertas"');
  }
}

// --------------------------------------------------------------

console.log(" \nMÉTODOS SETTERS Y GETTERS \n");

/* Son métodos que permiten establecer y obtener el valor de un
atributo dentro de una clase, pero que no fue definido al momento de
crear dicha clase.     */

class Perro {
  constructor(numero, nombre) {
    (this.numero = numero),
      (this.nombre = nombre),
      (this.raza = null); /* Se establece un tercer atributo a los
                           objetos dentro de la clase 'Perro', pero
                           que va a ser nulo de manera predeterminada
                           al momento de crear cada objeto.    */
  }

  /* Método 'SETTER' sirve para establecer el valor de un atributo no
  definido o nulo. Se inicia con la palabra-clave 'set', y por
  convención, los métodos setters inician su nombre con 'set'. Toman
  como parámetro el valor del atributo que se quiere inicializar y se
  iguala el valor del atributo a dicho parámetro.    */
  set setRaza(raza) {
    this.raza = raza;
  }

  /* Método 'GETTER' sirve para obtener un atributo dentro de la clase.
  Se inicia con la palabra-clave 'get', y por convención, los métodos
  getters inician su nombre con 'get'. No toma parámetros, ya que es
  un método que ya tiene instrucción de retornar un valor específico,
  solo será necesario anteponer el objeto a través del cual se
  pretende llamar al método.*/
  get getRaza() {
    return this.raza;
  }
}

var fatiga = new Perro(1, "Fatiga");

// LOS MÉTODOS SETEADORES Y OBTENEDORES NO SON TRATADOS COMO MÉTODOS,
// SINO COMO ATRIBUTOS, Y DEBEN SER INVOCADOS COMO TALES.

console.log(fatiga);
fatiga.setRaza = "callejero";
console.log(fatiga.raza); // solo se llama al atributo, igual abajo ↓
console.log(fatiga.getRaza); // get raza no es invocado '()' !!!

// -----------
console.log();

// Use getters and setters to Control Access to an Object

/* You can obtain values from an object and set the value of a property
within an object. These are classically called getters and setters.

Getter functions are meant to simply return (get) the value of an
object's private variable to the user without the user directly
accessing the private variable.

Setter functions are meant to modify (set) the value of an object's
private variable based on the value passed into the setter function.
This change could involve calculations, or even overwriting the previous
value completely.    */

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book("anonymous");
console.log(novel.writer); // anonymous
novel.writer = "newAuthor";
console.log(novel.writer); // newAuthor

/* Notice the syntax used to invoke the getter and setter. They do not
even look like functions. Getters and setters are important because they
hide internal implementation details.

Note: It is convention to precede the name of a private variable with an
underscore (_). However, the practice itself does not make a variable
private.    */

console.log();
/* Use the class keyword to create a Thermostat class. The constructor
accepts a Fahrenheit temperature.

In the class, create a getter to obtain the temperature in Celsius and a
setter to set the temperature in Celsius.

Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is
the value of temperature in Fahrenheit, and C is the value of the same
temperature in Celsius.

Note: When you implement this, you will track the temperature inside the
class in one scale, either Fahrenheit or Celsius. This is the power of a
getter and a setter. You are creating an API for another user, who can
get the correct result regardless of which one you track. In other words,
you are abstracting implementation details from the user.    */

// Only change code below this line
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }

  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }

  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);
