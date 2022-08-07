console.log(" \nOBJETO CONSOLE \n");

console.log("Esto es un mensaje estándar en la consola.");
console.warn("Esto es un aviso (warning)");
console.error("Esto es un mensaje de error.");
console.info("Esto es un mensaje informativo");
/* "dir" es un método de la consola para reconocer objetos y mostrar
sus propiedades en lugar de transmitir cadenas de forma literal en la
consola.')    */
console.dir("Esto es un 'dir'.");

console.log("\n");
// La consola en si misma es un objeto:
console.log(console);

// ------------------------------------------------------------------

console.log(" \nPATRONES DE SUSTITUCIÓN \n");

/* Ademas de las concatenaciones de valores con coma [,], con mas [+],
y con [`${}`], existe algo llamado "patrones de substitución".    */

const ejemplo1 = "EJEMPLO 1";
const EJEMPLO1 = `[primera parte] ${ejemplo1} [segunda parte].`;

console.log(EJEMPLO1);

console.log();
/* Los patrones de substitución sirven para introducir valores dentro
de un string, y son los siguientes:

- %s => para Strings.
- %d o %i => para Números.
- %f => para puntos decimales.
- %o => para objetos.
- %j => para elementos JSON.

Luego de cerrar un string con los patrones de substitución, se debe
agregar al final de la expresión, separados con comas [,], los
elementos que van a reemplazar a dichos patrones dentro del string: */

const str = "STRING";
const num = 9999;
const float = 123.456;
const obj = { nombre: "Santiago", edad: 26 };
const arr = [1, 2, 3, 4, 5];

console.log("[primera parte] %s [segunda parte]", str);
console.log("[primera parte] %d [segunda parte]", num);
console.log("[primera parte] %f [segunda parte]", float);
console.log("[primera parte] %o [segunda parte]", obj);
console.log("[primera parte] %o [segunda parte]", arr);

console.log("\n[p1] %s [p2] %i [p3] %f [p4] %o", str, num, float, obj);

// ------------------------------------------------------------------

console.log(" \nLISTAS DESPLEGABLES EN LA CONSOLA \n");

console.group("Lista de números:");
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.groupEnd();

// groupCollapsed se usa para listas desplegables ya colapsadas.
console.log();

console.groupCollapsed("Lista de números:");
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.groupEnd();

// ------------------------------------------------------------------

console.log("\nTABLAS\n");

console.table(arr);
console.table(obj);
console.table(Object.entries(obj));
console.table(Object.entries(obj).sort());

// ------------------------------------------------------------------

console.log("\nCONTADOR DE TIEMPO \n");

console.time("Marca de tiempo"); // iniciar contador de tiempo
const arreglo = Array(100000); // crear un arreglo de 100mil items

for (let i = 0; i < arreglo.length; i++) {
  arreglo[i] = i; // asignar el valor de pos. i a cada item
}

console.timeEnd("Marca de tiempo"); // cerrar contador de tiempo

// El valor pasado dentro de console.time entre los paréntesis, tiene
// que ser igual en la apertura y en el cierre, ya que opera como un
// 'flag' identificatorio de la expresión.

// ------------------------------------------------------------------

console.log("\nCOUNT \n");

for (let i = 0; i < 100; i++) {
  console.count("cuenta");
  console.log(i);
}

// ------------------------------------------------------------------

console.log("\nMENSAJE DE CONTROL \n");

let a = 1;
let b = 2;
let prueba1 = "a debe ser menor que b.";

console.assert(a < b, { a, b, prueba1 });
// controlar que 'a' sea menor que 'b', y pasar las variables.
// Si en algún momento la condición se rompe... ↓

let c = 3;
let d = 2;
let prueba2 = "c debe ser menor que d";

console.assert(c < d, { c, d, prueba2 });

// ------------------------------------------------------------------

console.log("\nOBJETO -DATE- \n");

console.log(Date()); // Despliega hora y fecha (y zona horaria).

console.log();
let fecha = Date(); // Se puede guardar en una variable
let fecha2 = new Date(); // También dentro del prototipo 'Date'.
console.log(fecha);
console.log(fecha2); // Se expresa en modo JSON.

/* Cuando una variable se guarda dentro del PROTOTIPO de Date, se le
pueden aplicar todos sus métodos:    */

console.log("\nObtener fecha del mes:");
console.log(fecha2.getDate());

console.log("\nObtener día de la semana:");
console.log(fecha2.getDay()); // ( D=0, L=1, M=2, M=3, J=4, V=5, S=6 )

console.log("\nObtener mes del año:");
console.log(fecha2.getMonth());
// ( E=0, F=1, M=2, A=3, M=4, J=5, J=6, A=7, S=8, O=9, N=10, D=11 )

console.log("\nObtener año:");
console.log("\n", fecha2.getFullYear());

console.log("\nObtener hora:");
console.log("\n", fecha2.getHours());

console.log("\nObtener minutos:");
console.log("\n", fecha2.getMinutes());

console.log("\nObtener segundos:");
console.log("\n", fecha2.getSeconds());

console.log("\nObtener milisegundos:");
console.log("\n", fecha2.getMilliseconds());

console.log("\nObtener fecha en string:");
console.log("\n", fecha2.toDateString());

console.log("\nObtener fecha completa en string:");
console.log("\n", fecha2.toString());

console.log("\nObtener fecha del mes:");
console.log(fecha2.toString());

console.log("\nObtener DD/MM/AAAA en string:");
console.log("\n", fecha2.toLocaleDateString());

console.log("\nObtener DD/MM/AAAA + HH/MM en string:");
console.log("\n", fecha2.toLocaleString());

console.log("\nObtener hora en string:");
console.log("\n", fecha2.toLocaleTimeString());

console.log("\nUTC (Coordinated Universal Time) - Hora del meridiano cero:");
console.log("\nDía del mes:", fecha2.getUTCDate());
console.log("\nDía de la semana:", fecha2.getUTCDay());
console.log("\nHora del día:", fecha2.getUTCHours());
console.log("\nMinutos:", fecha2.getUTCMinutes());
console.log("\nSegundos:", fecha2.getUTCSeconds());
console.log("\nMilisegundos:", fecha2.getUTCMilliseconds());
console.log("\nUTC fecha y hora en string:", fecha2.toUTCString());
