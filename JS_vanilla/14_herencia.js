console.log("\nINHERITANCE \n");

// OBJECT INHERITANCE

/* 'Object.create' recibe un objeto como parámetro y crea un
nuevo objeto cuyo prototipo es el primero que pasamos, por lo
que vamos a poder acceder a todas las propiedades y métodos
del objeto base en los nuevos objetos creados (símil Python). */

var person = {
  nombre: "x",
  apellido: "y",
}; // Creado un objeto cualquiera

var Santi = Object.create(person); // Creado un objeto heredado.
console.log(Santi);
console.log(Santi.__proto__);

/* Object es el prototipo alfa, y tiene un método 'create' para
crear objetos nuevos.    */

// --------------------------------------------------------------

// CLASS INHERITANCE

/* En Class inheritance o herencia de clase, podemos hacer algo
exactamente igual al lenguaje Python, en el que una clase, al
crearse, hereda todas las propiedades y métodos de otra clase,
para poder ser utilizados en sus objetos:    */

class Student {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
  saludar() {
    console.log("Hola,", this.nombre);
  }
} // DEFINIDA UNA CLASE 'STUDENT' CON NOMBRE Y APELLIDO

class FailedStudent extends Student {
  constructor(nombre, apellido, promedio) {
    super(nombre, apellido);
    this.promedio = promedio;
  }
} // DEFINIDA CLASE HEREDADA 'FAILED.STUDENT' CON LAS PROP DE STUD.

var student1 = new FailedStudent("Alex", "Contrera", 12);

console.log("");
console.log(student1);
student1.saludar(); // LLAMO A LA FUNCIÓN MADRE SIN HABERLA
// DEFINIDO EN LA CLASE HEREDADA.

// --------------------------------------------------------------

// CONDUCTORES ANIDADOS - [prototype].call(props)

/* Otra forma de heredar propiedades de una clase madre, es usar
la palabra-clave 'call', como definición de un nuevo parámetro
o propiedad de la clase hija:    */

function Persona(nombre, apellido, dni) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.dni = dni;
}

Persona.prototype.saludar = function () {
  console.log("Hola, mi nombre es " + this.nombre, this.apellido);
};

var Lucas = new Persona("Lucas", "Petra", "40.564.336");

console.log("");

console.log(Lucas);
Lucas.saludar();

// HASTA ACA SE CREO UNA CLASE, CON UNA FUNCIÓN PROTO DE LA CLASE.

// --------------------------------------------------------------

// AHORA, CREAR UNA NUEVA CLASE QUE HEREDE LAS PROPIEDADES DE PERSONA

function Alumno(nombre, apellido, dni, promedio) {
  Persona.call(this, nombre, apellido, dni);
  this.promedio = promedio;
}

/* [clase].call(this (como self en python), props) + mas las
propiedades propias de la nueva clase.    */

var Erica = new Alumno("Erica", "Loom", "16.555.223", 8.5);

// CON ESTE MÉTODO, EL OBJETO ERICA NO TIENE ACCESO AL MÉTODO SALUDAR

console.log("");
console.log(Erica);

// PARA PODER USAR EL MÉTODO PADRE TENEMOS QUE CREAR EL NUEVO OBJETO
// A TRAVES DE OBJECT.CREATE:
Alumno.prototype = Object.create(Persona.prototype);
// ACA IGUALAMOS EL PROTOTYPE DE LA CLASE HIJA AL PROTOTYPE DE LA CLASE
// MADRE, Pero pisamos el constructor de la clase, asi que volvemos a
// crearlo:
Alumno.prototype.constructor = Alumno;
// Una vez creado el constructor y igualado el prototype a la clase
// madre, creamos un objeto nuevo:

var Franco = new Alumno("Franco", "Lopez", "20.444.556", 9);

console.log();
console.log(Franco);
Franco.saludar(); // Ahora el objeto Franco dentro de Alumnos SI tiene
// acceso al método 'saludar'.

// --------------------------------------------------------------

// OTRA FORMA DE HERENCIA → HERENCIA PROTOTÍPICA (DE OBJETOS) ↓

function Animal(nombre, genero) {
  (this.nombre = nombre), (this.genero = genero);
}

Animal.prototype.saludar = function () {
  console.log(`Hola, mi nombre es ${this.nombre}, y soy ${this.genero}.`);
};

var fatiga = new Animal("Fatiga", "macho");
var reina = new Animal("Reina", "hembra");

console.log();
console.log(fatiga);
console.log(reina);
fatiga.saludar();
reina.saludar();

console.log();
/* Hasta acá, todo bien, ahora vamos a crear una nueva clase 'Perros'
hereda las características de Animal, y agrega características nuevas.*/

function Perros(nombre, genero, color) {
  (this.super = Animal), this.super(nombre, genero), (this.color = color);
}

Perros.prototype = new Animal();
Perros.prototype.constructor = Perros;

var lolo = new Perros("Lolo", "macho", "negro");

// Cambia la función 'saludar' solo para los objetos dentro de la clase
// Perros.
Perros.prototype.saludar = function () {
  console.log(
    `Hola, mi nombre es ${this.nombre} y soy un perro ${this.genero}.`
  );
};

// Método nuevo de la clase 'Perros'.
Perros.prototype.soyColor = function () {
  return `Soy ${this.nombre} y soy de color ${this.color}`;
};

console.log(lolo);
fatiga.saludar(); // método 'saludar' correspondiente al obj. 'fatiga'
lolo.saludar(); // método 'saludar' correspondiente al obj. 'lolo'
console.log(lolo.soyColor()); // método único de 'Perros'

// --------------------------------------------------------------

/*
An object can inherit its behavior (methods) from another object by referencing its prototype object:

>>> ChildObject.prototype = Object.create(ParentObject.prototype);

Then the ChildObject received its own methods by chaining them onto its prototype:

>>> ChildObject.prototype.methodName = function() {...};

It's possible to override an inherited method. It's done the same way - by adding a method to ChildObject.prototype using the same method name as the one to override. Here's an example of Bird overriding the eat() method inherited from Animal:

>>> function Animal() { }
>>> Animal.prototype.eat = function() {
>>>   return "nom nom nom";
>>> };

>>> function Bird() { }

>>> Bird.prototype = Object.create(Animal.prototype);

>>> Bird.prototype.eat = function() {
>>>   return "peck peck peck";
>>> };

If you have an instance let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on the prototype chain of duck:

duck => Is eat() defined here? No.
Bird => Is eat() defined here? => Yes. Execute it and stop searching.
Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
Object => JavaScript stopped searching before reaching this level.    */

// --------------------------------------------------------------
