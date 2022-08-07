console.log(" \nDESTRUCTURACIÓN \n");

/* La destructuración, es el proceso de asignar valores, a secuencias
de datos, de forma dinámica y con otra sintaxis:    */

let nums = [1, 2, 3];

// Si fuera necesario guardar cada uno de los valores del array 'nums'
// en una variable diferente (sin destructuración), se hace asi:

let uno = nums[0];
let dos = nums[1];
let tres = nums[2];

console.log(uno, dos, tres);

console.log();
// Sin embargo, con destructuración es más fácil:

let [one, two, three] = nums;

console.log(one, two, three);

// ------------------
console.log();
// Ahora con objetos:

let persona = {
  nombre: "Santiago",
  apellido: "Ostrovsky",
  edad: 26,
};

// Las nuevas variables deben llevar el nombre de los atributos del
// objeto.
let { nombre, apellido, edad } = persona;

console.log(nombre, apellido, edad);

// ------------------
console.log();
// También se puede usar para asignar valores de atributos existentes a
// nuevas variables definidas en la misma linea:

const newObj = {
  att1: "A",
  att2: "B",
};

const { att1: letraA, att2: letraB } = newObj;

/* Esto se lee: obtener el valor de newObj.att1 y newObj.att2, y asignar
dichos valores a las variables 'letraA' y 'letraB', respectivamente,
definiendo tales variables a través de la palabra clave 'const'.    */
console.log(letraA);
console.log(letraB);

// -------------------------------------------------------------------
console.log();
/* You can use the same principles from the previous two lessons to
destructure values from nested objects.    */

// Using an object similar to previous examples:

const user = {
  johnDoe: {
    age: 34,
    email: "johnDoe@freeCodeCamp.com",
  },
};

/* Here's how to extract the values of object properties and assign
them to variables with the same name:    */

const {
  johnDoe: { age, email },
} = user;

/* And here's how you can assign an object properties' values to
variables with different names:    */

const {
  johnDoe: { age: userAge, email: userEmail },
} = user;

/* Replace the two assignments with an equivalent destructuring
assignment. It should still assign the variables lowToday and highToday
the values of today.low and today.high from the LOCAL_FORECAST object. */

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

// Only change code below this line
const {
  today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST;
// Only change code above this line

// -------------------------------------------------------------------
console.log();
/* S6 makes destructuring arrays as easy as destructuring objects.

One key difference between the spread operator and array destructuring
is that the spread operator unpacks all contents of an array into a
comma-separated list. Consequently, you cannot pick or choose which
elements you want to assign to variables.    */

// Destructuring an array lets us do exactly that:

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);

// The console will display the values of a and b as 1, 2.

/* The variable a is assigned the first value of the array, and b is
assigned the second value of the array. We can also access the value at
any index in an array with destructuring by using commas to reach the
desired index:    */

const [c, d, , , e] = [1, 2, 3, 4, 5, 6];
console.log(c, d, 5);

// The console will display the values of a, b, and c as 1, 2, 5.

/* Use destructuring assignment to swap the values of x and y so that x
receives the value stored in y, and y receives the value stored in x:  */

let x = 8,
  y = 6;
// Only change code below this line
[x, y] = [y, x];

console.log("x=", x, "and y=", y);

// -------------------------------------------------------------------
console.log();
/* In some situations involving array destructuring, we might want to
collect the rest of the elements into a separate array.

The result is similar to Array.prototype.slice(), as shown below:    */

const [f, g, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(f, g);
console.log(arr);

// The console would display the values 1, 2 and [3, 4, 5, 7].

/* Variables f and g take the first and second values from the array.
After that, because of the rest parameter's presence, arr gets the rest
of the values in the form of an array. The rest element only works
correctly as the last variable in the list. As in, you cannot use the
rest parameter to catch a subarray that leaves out the last element of
the original array.    */

console.log();

/* Use destructuring assignment with the rest parameter to perform an
effective Array.prototype.slice() so that arr is a sub-array of the
original array source with the first two elements omitted.    */

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  // Only change code below this line
  let [, , ...arr] = list;
  // Only change code above this line
  return arr;
}
const slicedArr = removeFirstTwo(source);
console.log("source =>", source);
console.log("slicedArr =>", slicedArr);

// -------------------------------------------------------------------
console.log();
/* In some cases, you can destructure the object in a function argument
itself.    */

// Consider the code below:

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
};

/* This effectively destructures the object sent into the function. This
can also be done in-place:    */

const profileUpdate2 = ({ name, age, nationality, location }) => {};

/* When profileData is passed to the above function, the values are
destructured from the function parameter for use within the function. */

/* Use destructuring assignment within the argument to the function half
to send only max and min inside the function.    */

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

// Only change code below this line
// const half = (stats) => (stats.max + stats.min) / 2.0;
const half = ({ max, min }) => (max + min) / 2;
// Only change code above this line

console.log(half(stats));

// -------------------------------------------------------------------
console.log();
/* .    */
