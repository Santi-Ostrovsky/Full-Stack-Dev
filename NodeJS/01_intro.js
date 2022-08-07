/*
Node es un motor de ejecución de JS. Está escrito en C++, para tener un mejor tiempo de procesamiento, ya que el "ensamblaje" del código se hace en binario, y para ello se necesita el uso de un lenguaje de bajo nivel, como C++.

Alto Nivel --> const $Dome = parseInt(arr.split('').reverse().filter(n => n % 2 == 0).map(n => n**).join(''));

Bajo Nivel --> 10100110100111010100011001110101011100000101010100001101011010

-----------------------------------------------------------------

Node es un "Motor de ejecución de JavaScript".

    - Motor JS V8.
    - V8 es un motor de Google de código abierto.
    - V8 implementa estándares ECMAScript (específicamente ECMA-262).
    - Está escrito en C++ y utilizado por Google Chrome, pero puede utilizarse en cualquier otra aplicación.
    - V8 puede usarse por sí solo, o embebido en cualquier aplicación C++.

-----------------------------------------------------------------

LIVUB

Livub es una librería de Node escrita en C, que permite organizar el código a través de la utilización de módulos, principalmente bajo los estándares de CommonJS (module.imports + require()) (el tipo de importación de los módulos debe aclararse en el package.json y mantener el mismo estándar a lo largo de toda la aplicación).

    - Organiza el código en módulos para que sea más reutilizable.
    - Permite la lectura y escritura de archivos (input/output).
    - Lee y escribe en bases de datos.
    - Envía y recibe datos de internet.
    - Interpreta formatos estándares.
    - Maneja procesos que llevan mucho tiempo.

-----------------------------------------------------------------

NodeJS Binding: Proceso de Node que interpreta el C++ de motor V8 de Chrome, y Libuv escrito en C, y permite la incorporación de la librería JS núcleo de Node a todo el código anterior.

-----------------------------------------------------------------

EJECUCIÓN DE UN ARCHIVO JS EN NODE:

// index.js
>>> console.log(10)

// ejecución (en consola)
>>> node index.js

10

-----------------------------------------------------------------

COMANDO "nodemon" --> Como el anterior (node) pero aguarda a que hayan cambios en el archivo para volver a ejecutarse:

// index.js
>>> console.log(10)

// en consola
>>> nodemon index.js

10

// index.js (cambio)
>>> console.log(10)
>>> console.log('Hola')

10
Hola

-----------------------------------------------------------------

INSTALACIÓN DE MÓDULOS DESDE NPM (NODE PACKAGE MANAGER)

NPM es un sistema de gestión de paquetes, desde donde se descargan las dependencias para utilizar tanto módulos de front como React y Redux, así como dependencias para el back.

Para buscar módulos y paquetes, tanto creados por la comunidad como los estándares, ingresar a https://www.npmjs.com/ y buscar los paquetes con mayor número de descargas semanales.

Para más información sobre NPM, ver la documentación: https://docs.npmjs.com/

-----------------------------------------------------------------

CREACIÓN DE NUESTRO PROPIO PAQUETE

- Dentro del directorio correcto en consola, ingresar:

>>> npm init

Esto crea un package.json con indicación de las dependencias correspondientes. Si no se agrega nada mas al comando, Node va a preguntar acerca del nombre, la versión, descripción, entry point (archivo de ingreso - index.js), comandos para testear, repositorio de Git, palabras clave, autor y licencias del paquete. Para evitar responder todas las preguntas, iniciar el paquete agregando "-y" al comando npm:

>>> npm init -y

Todos los parámetros anteriores, pueden ser modificados en el package.json en cualquier momento.

Dentro del package.json, en el objeto "scripts" se enumeran los posibles comandos NPM, en donde "test" está reservado al testeo de las aplicaciones por convención, y en "start" se especifica qué debe hacer Node al momento de iniciar (por ejemplo: node index.js, hace una ejecución simple del archivo index.js). Todos los demás comandos dentro del objeto "scripts", deben correrse con el comando "npm run [comando]".

[...]
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "dev": "nodemon index.js"
},
[...]

En caso de correr "test" o "start" se ingresa "npm test" o "npm start".
Para correr el comando "dev" se ingresa "npm run dev".

-----------------------------------------------------------------

GIT-IGNORE

Al instalarse las dependencias con "npm install" se crean, la carpeta "node_modules" y el archivo ".gitignore", en donde se especifica qué cosas deben ignorarse al momento de "pushear" o subir los repositorios a Git, en donde pueden incorporarse las dependencias dentro de node_modules para no subirlas con el resto de los archivos.

Por lo general, los .gitignore se ven así:

# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*


-----------------------------------------------------------------

SEMÁNTICA DE VERSIONADO

xx.yy.zz ==> ejemplo: 1.3.2

x ==> Major Changes: cambios rotundos a las versiones, generalmente no compatibles con versiones anteriores.

y==> Minor Changes: nueva funcionalidad, retro-compatible.

z ==> Patches: parches, arreglo de "bugs", retro-compatible.

-----------------------------------------------------------------

[ ~ ] vs [ ^ ]

~1.2.3 ==> "~" significa que la versión se va a actualizar ante un "patch" (z).

^1.2.3 ==> "^" significa que la versión se va a actualizar ante un "minor change" (y).

-----------------------------------------------------------------

COMANDOS NPM

- npm install (blank-all / [nombre-de-paquete])

- npm install --save [nombre-de-paquete] (para las dependencias de desarrollo)

- npm install -g [nombre-de-paquete] (para instalar dependencias a nivel global dentro del ordenador, no solamente para ese proyecto)

- npm update (para actualizar npm)

- npm audit (para escanear errores en las dependencias)

- npm start (para ejecutar el script "start")

- npm test (para ejecutar el script "test")

- npm run [script] (para ejecutar cualquier otro script)

- npm -l (lista de los comandos y su uso)

- npm -h (ayuda y descripción de comandos)

- npm [comando] -h (ayuda sobre un comando específico)

-----------------------------------------------------------------

FILE SYSTEM

let fs = require('fs');

Tiene los siguientes métodos:

    - readFileSync ==> leer archivo de forma sincrónica, parando toda la ejecución hasta que se termine de leer ([archivo], [modo-de-lectura]).

        >>> let data = fs.readFileSync('./carpeta/ejemplo.js', 'utf-8')

    - readFile ==> leer archivo de forma asíncrona: cuando termine de leer, se ejecuta el callback ([archivo], [modo-de-lectura], callback(errores, data)).

        >>> fs.readFile('./carpeta/ejemplo.js', 'utf-8', (err, data) => {
            if(err) console.log(err) return;
            console.log(data);
        })

https://nodejs.org/api/fs.html

-----------------------------------------------------------------

VARIABLE PROCESS

STDIN / STDOUT -- {BUSCAR / VER 'HW' HENRY M-3 01-NODE}

*/
