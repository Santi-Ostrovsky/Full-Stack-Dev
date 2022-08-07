console.log(" \nOBJECTS \n");

/* Objects in JS are defined as variables, but assigned a value
in between a curly brackets code block, where each attribute or
property will be followed by a colon ':', then given a value,
followed by a comma ',' to access the next line, like so:    */
var student1 = {
  name: "Roy",
  origin: "Argentina",
  "student age": "28",
  "average grade": "8.5",
  classes: ["All"],
};

// there are several ways to access objects' information.

// DOT NOTATION - 'object.attribute'
/* Bracket notation can only be used when attributes have no
spaces (single-word attributes). Estrictamente literal.    */
var student1Name = student1.name; // can make it a variable.
console.log(student1Name);
console.log(student1.origin); // or can directly print it out.

// BRACKET NOTATION - 'object.[attribute]'
/* Bracket notation is always mandatory when the attributes'
names have spaces in them, and they must be typed in between
quotes. Al no ser estrictamente literal, sirve para nombrar
funciones y otras propiedades de los objetos.    */
var student1Age = student1["student age"]; // can make it variable.
console.log(student1Age);
console.log(student1["average grade"]); // directly print out.

// UPDATING OBJECTS' PROPERTIES.

/* We can change the value of an object's attribute by calling
it without the 'var' keyword, and using the '=' sign as an
assignment operator:    */
student1.name = "Mark";
console.log(student1.name);

// ADDING NEW ATTRIBUTES / PROPERTIES

/* Similar to updating the attributes' values, we define new ones
as variables without the 'var' keyword, and using dot-notation
or bracket-notation depending on the attributes name:    */
student1.race = "White";
student1["is male"] = "Yes";
console.log(student1.race);
console.log(student1["is male"]);

// DELETING PROPERTIES FROM OBJECTS

/* the 'delete' keyword is used, followed by the attribute we
want to delete:    */
delete student1.classes; // Now the property 'classes: ['All']'
// no longer exists.
console.log(student1.classes); // UNDEFINED

// USING OBJECTS AS DICTIONARIES

/* Objects can be used as dictionaries with key-value pairs,
thus returning values paired to certain keys(attributes). Similar
to what a 'switch' block would do, this operation returns the
correct value when called:    */
function militaryDictionary(val) {
  var lookup = {
    a: "ALFA",
    b: "BRAVO",
    c: "CHARLIE",
    d: "DELTA",
    e: "ECHO",
    f: "FOXTROT",
  };
  return lookup[val];
}

console.log("");
console.log(militaryDictionary("a"));
console.log(militaryDictionary("b"));
console.log(militaryDictionary("c"));
console.log(militaryDictionary("d"));
console.log(militaryDictionary("e"));
console.log(militaryDictionary("f"));

// CHECK IF AN OBJECT HAS CERTAIN PROPERTIES

/* To check if an object has a certain property or attribute, we
must use the 'hasOwnProperty' keyword inside a function, like so:*/

function checkStud(checkProp) {
  if (student1.hasOwnProperty(checkProp)) {
    return student1[checkProp];
  } else {
    return "Property not found";
  }
}

console.log("");
console.log(checkStud("name"));
console.log(checkStud("career")); // Property not found

// COMPLEX OBJECTS

// Objects can be stored in arrays, inside a single variable:
var guys = [
  {
    fullName: "Thomas Lox",
    guyAge: 26,
    isMale: true,
    colors: ["red", "green", "blue"],
  },
  {
    fullName: "Laura Holiday",
    guyAge: 24,
    isMale: false,
    colors: ["orange", "yellow", "pink"],
  },
];

/* Now, lets access data stored in each object. Each object is an
element or item in the array, which means they can be indexed,
and the entire path must be used in order to extract individual
items:    */
console.log("");

var guy1Name = guys[0].fullName; // Stored in variable
console.log(guy1Name);
console.log(guys[1].colors[1]); // Directly printed out.

// NESTED OBJECTS

/* Nested objects can be very useful, and could also serve the
purpose of 'naming' an entire object:    */
var myStorage = {
  car: {
    "glove box": "title",
    "center console": "maps",
  },
  bank: {
    "bank account": "money",
    "safety deposit box": "jewelry",
  },
};

/* Now that we have 2 main objects in myStorage variable, we can
access them by using either 'car' or 'bank' as name references to
check what they store:    */
console.log("");

var gloveBoxContent = myStorage.car["glove box"];
console.log(gloveBoxContent);
console.log(myStorage.bank["bank account"]);

// -----------------------------------------------------------------

console.log(' \nKEYWORD "THIS" \n');

/* The key-word 'this', is equivalent to 'self' in Python objects,
refers to the object. It is used to automatically adapt object
functions to any property change:    */

var Santi = {
  nombre: "Santi",
  edad: 26,
  saludar: function () {
    return "Hello, " + this.nombre;
  },
};

/* As in the function 'saludar' we didn't type 'Hola Santi' but
instead we typed the keyword 'this' and the object's property
'nombre', any time said property changes, the function will
perform differently:    */

console.log("");
console.log(Santi.nombre);
console.log(Santi.saludar());

console.log("");
// Now change the property 'nombre':
Santi.nombre = "Santiago";
/* And check if the function still greets Santi, or if it now greets
    'Santiago':    */
console.log(Santi.saludar()); // IT DOES CHANGE THE PROPERTY NAME.

/* This is useful in the case we wanted to create a function that
serves the same purpose for more than one object, so that whenever
called, it will return the proper result depending on what object the
function was called on.    */

// -----------------------------------------------------------------

console.log(" \nFOR...IN LOOPS \n");

/* Objects don't have indexes or .length property, so regular FOR
loops cannot iterate through them. In stead, we use FOR...IN loops,
that can iterate through all key-value pairs inside an object.    */

/* for [variable/key] in [object] {
    [code block]
}     */

console.log("");

var monsters = {
  Canada: "Sasquatch",
  Nepal: "Yeti",
  Scotland: "Loch Ness Monster",
};

// Lets get all keys and all values:

for (let country in monsters) {
  console.log(country, "-->", monsters[country]);
}

console.log(monsters.__proto__);

// -----------------------------------------------------------------

console.log(" \nOBJETOS LITERALES \n");

/* Si se quisiera crear un objeto, cuyos valores sean iguales a los de
variables existentes, antes de ES6 podía hacerse de la siguiente
manera:    */

var nombre = "Fatiga";
var edad = 4;

var perro = {
  nombre: nombre,
  edad: edad,
};

console.log(perro);

/* Sin embargo, en ES6 se introdujo una forma más simple de asignar
valores pre-existentes a los atributos de un objeto:    */

var name1 = "Lolo";
var age = 7;

var dog = {
  name1,
  age,
  ladrar() {
    return "guau guau";
  },
};

/* De esta forma, el nombre de los atributos será igual al nombre de
las variables utilizadas, y el valor, corresponderá con el valor de
tales variables:    */

console.log(dog);
console.log(dog.ladrar());
// --> A su vez, pueden agregarse valores
// nuevos como la función 'ladrar'.

// dog = { name1 : 'Lolo', age : 7 , ladrar : [Function : ladrar] }
