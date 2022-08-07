console.log("\nPROTOTYPE\n");

/* Todos los objetos en JS tienen una referencia a otro objeto 
llamado su prototipo. Ese prototipo es la Clase de dicho objeto.

Para 'testear' esto se puede hacer lo siguiente: [objeto].__proto__
y la respuesta de la consola será el prototipo del objeto, es 
decir, la Clase. Si el test se realiza sobre un objeto sin clase,
la respuesta de la consola será 'null prototype'.    */

/* Cada objeto creado en JS tiene sus propiedades, y a su vez
tiene un prototype. Si busco una propiedad que no está en el
objeto, JS va a buscarlo en el Proto. Si el Proto no tiene la
propiedad que busco, recién ahí me tira un error.

Por ejemplo, cuando tengo un array y quiero agregarle un elemento,
la función 'push()' no está en ese array, pero está definida en
el prototipo 'Array' como objeto superior de cada array creado.
Tal función está igualada a la operación de agregar un elemento
al array creado. Esto se llama prototype chain: cuando un objeto
no tiene una propiedad, se busca en el prototipo. Si ese prototipo
tampoco, va al prototipo del prototipo, y así hasta llegar al
prototipo mayor, Objeto. Si la propiedad no está, salta el error.

Si quisiera agregarle una función a una Clase, puedo hacerlo 
invocando al prototipo, de la siguiente forma:    */

function Persona(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
}

Persona.prototype.dobleEdad = function () {
  return this.edad * 2;
};

// Esta función no está en la definición de la Clase, pero fue
// agregada más adelante.

var juan = new Persona("Juan", "Garay", 30);

console.log(juan.dobleEdad()); // invoco la función.
console.log("");

/* ES MEJOR CREAR MÉTODOS DENTRO DEL PROTOTIPO DE LAS CLASES, ANTES
QUE CREAR MÉTODOS INTERNOS DE LA CLASE, PORQUE DE LA SEGUNDA FORMA 
TODOS LOS OBJETOS CREADOS EN LA CLASE VAN A TENER ESOS MÉTODOS DENTRO,
OCUPANDO MEMORIA DENTRO DEL PROGRAMA. ESTANDO DENTRO DEL PROTOTIPO,
LOS OBJETOS PUEDEN SEGUIR ACCEDIENDO A LOS MÉTODOS DE IGUAL MANERA
PERO NO VAN A ESTAR DENTRO DE LA DESCRIPCIÓN DE TALES OBJETOS COMO
ATRIBUTOS PROPIOS.    */

// -----------------------------------------------------------------
