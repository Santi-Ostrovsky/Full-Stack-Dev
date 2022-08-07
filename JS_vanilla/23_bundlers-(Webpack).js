console.log(" BUNDLERS \n");

/*
PRIMEROS PASOS

- npm init

- npm install --save-dev webpack webpack-cli || npm i webpack webpack-cli

- CREAR ARCHIVO --> webpack.config.js

- EN webpack.config.js INTRODUCIR LO SIGUIENTE:
module.exports = {
    entry: './index.js', // punto de arranque del programa
    output: {
        path: __dirname, || path: __dirname + './[...]', // el path absoluto del directorio donde se quiere colocar el output
        filename: 'bundle.js' // nombre del archivo que va a contener el output, 'bundle.js' es el nombre típico
    }
}

- EN EL package.json, buscar el objeto '"scripts": {}', agregarle adentro lo siguiente:
>>> "build": "webpack"

- Ir a la consola, y poner "npm run start" o run [nombre] del primer atributo en el objeto SCRIPT. Después, poner "npm run build" ('build' es el nombre del archivo).

--> Debería haber aparecido el archivo "bundle.js" con el contenido del del modulo exportado dentro del directorio, minificado y optimizado.

- Ahora, desde la etiqueta <script> de html, en lugar de llamar al archivo 'index.js' se llama al 'bundle.js'.

********************

DESPUÉS DE TERMINAR CON TODOS LOS ARCHIVOS, SE VUELVE A INGRESAR 'npm run build' EN LA CONSOLA PARA ACTUALIZAR EL ARCHIVO bundle.js
*/

//

// -----------------------------------------------------------------
