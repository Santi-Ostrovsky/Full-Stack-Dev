console.log(" \nCLOSURES \n");

/*
Closures ==> cuando hay funciones definidas dentro de otras (funciones
anidadas), y la función inferior o hija utiliza, opera y/o modifica variables
declaradas en la función superior o padre, por mas que se la invoque desde
otro lugar, independientemente de la invocación a la función superior. 
*/

function crearContador() {
  let contador = 0;

  return function incrementar() {
    /* La variable 'contador' esta en el scope superior de 'incrementar', sin embargo,
      al no estar re-definida, puede tomar el valor de la misma y manipularlo a través
      de la instrucción 'contador++'.
      
      La función 'incrementar' se invoca de manera automática, al ser invocara la función
      padre, ya que 'crearContador()' directamente retorna le función inferior.*/
    contador++;
    console.log(contador);
    return contador;
  };
}

const contador1 = crearContador(); // Sólo puede accederse a la función al asignarla
// como valor de otra variable, ya que invocándola por sí sola no hay resultados.
contador1();
contador1(); // --> la variable debe llamarse con paréntesis para invocar la función.
contador1();
contador1();
contador1();
contador1();

console.log('\nNueva variable "contador2":\n');

const contador2 = crearContador(); // contador comienza de cero en una nueva variable.
contador2();
contador2();
contador2();
contador2();
contador2();

console.log('\nRetomar cuenta de "contador1":\n');
// Pero no se pierde la cuenta generada en la variable anterior.
contador1();
contador1();
contador1();
contador1();

// -----------------------------------------------

console.log();

// Proteger una variable al crear otras funciones.

function saludar(saludo) {
  return function (nombre) {
    console.log(`${saludo} ${nombre}`);
  };
}

let saludarHola = saludar("Hola");
saludarHola("Santi"); // Hola Santi

// -----------------------------------------------

console.log();

// CREAR UN ARRAY CON 3 FUNCIONES
var crearFuncion = function () {
  var arreglo = [];

  for (let i = 0; i < 3; i++) {
    arreglo.push(function () {
      console.log(i);
    });
  }
  return arreglo;
};

var arr = crearFuncion();
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]); // UNDEF porque crea 3 arreglos

console.log();

// ------------------------
