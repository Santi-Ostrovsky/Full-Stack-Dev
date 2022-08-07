console.log('\nCALLBACKS \n');

/* JS trata a las funciones de forma 'First Class', lo cual significa que las funciones
se pueden pasar como argumentos a otras funciones, retornarlas como resultado de una
función, y guardarlas en variables u otras estructuras de datos.    */

// Cuando una función se usa como argumento en otra función, la primera se llama CALLBACK.

function holaUsuario (usuario) {
    return 'Hola ' + usuario + '!';
}

function chauUsuario (usuario) {
    return 'Chau ' + usuario + '!';
}

function crearSaludo (usuario, callback) {
    return callback(usuario);
}

// Las primeras dos funciones son normales, pero la tercera tiene toma otra función
// (callback) como argumento, mas el parámetro que dicho callback va a tomar:

console.log(crearSaludo('Santi', holaUsuario));
console.log(crearSaludo('Santi', chauUsuario));

// AMBAS FUNCIONES INTRODUCEN UN DATO COMO PARÁMETRO Y LA FUNCIÓN CALLBACK.
/* ACLARACIÓN ==> en la función 'crear saludo', se retorna un valor que ya invoca a la
función callback, por lo que no es necesario hacerlo cuando se invoca crear saludo. En
caso de invocar la función callback cuando se crea el saludo, a través de la inserción de
paréntesis al final de función callback, salta un error ya que estaría invocando la
palabra 'callback' dentro de la función crear saludo, y esa es sólo una variable que se
iguala a un parámetro, el cual es la función callback. No puede haber doble invocación.  */

// EJEMPLOS DE CALLBACKS - METODOS DE ARRAY: forEach(), map() y 
// reduce(). - VER 03_Arrays.js -.