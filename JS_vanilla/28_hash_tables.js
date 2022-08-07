// --------------------------------------

// HASH TABLE

/*
- Manera de, a través de una función 'Hash', determinar cómo estamos guardando la información.

- Supongamos que estamos guardando diferentes datos, hay que pasar los datos por la función, y retorna la ubicación de los datos.

guardar persona con teléfono, dni y otros valores que la identifiquen como nombre y apellido.

const person = {
    nombre: 'Santiago'
    cel: +5491127290390
}

function hash (nombre) {
    return this[nombre]length;
} // Esta función siempre debería retornar el mismo output para el mismo parámetro.

Esta función hash nos permite guardar esa información en algún lado, como por ejemplo una variable, la cual se declara y se iguala a la función, pasándole como parámetro el objeto.

Ej: guardar "Santiago" en sexta posición:
Ej: guardar "Franco" en tercera posición:
Ej: guardar "Daniel" en segunda posición:

[null, 'Daniel', 'Franco', null, null, 'Santiago']

si este array representada un archivero, en cada cajon podemos separar nombres por inicial (las A, las B, las C, etc...), y esos cajones se pueden crear para agrupar cualquier tipo de nombres, o agrupar por una condición determinada. EJ:

cajones = [null, null, 123456789, null, [{'Santiago: +5491127290390}, {'Brian': +5491123456789}]]

Para buscar el elemento Santiago, usar:
cajones[hash('Santiago)].find(function(personas){return personas['Santiago']})

*/

// -------------------------------------------------------------------

"use strict";

/*
Implementar la clase HashTable.

Nuestra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
*/

function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];
}

HashTable.prototype.hash = function (input) {
  //  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input.charCodeAt(i);
  }
  return sum % this.numBuckets;
};

HashTable.prototype.set = function (key, value) {
  // - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  if (typeof key != "string") throw new TypeError("Keys must be strings!");
  let i = this.hash(key);
  if (this.buckets[i] == undefined) this.buckets[i] = {};
  this.buckets[i][key] = value;
};

HashTable.prototype.get = function (key) {
  // - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  let i = this.hash(key);
  return this.buckets[i][key];
};

HashTable.prototype.hasKey = function (key) {
  // - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).
  // Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
  let i = this.hash(key);
  return this.buckets[i][key] != null;
};
