/*
EXPRESS -- https://expressjs.com/

Express es un framework rápido y minimalista para NodeJS que permite levantar un servidor y hacer peticiones.

' npm  install express --save '

Para correr este archivo: ' nodemon 05_express.js '
*/

const express = require("express");
const app = express(); // EXPRESS ES UNA FUNCION

/*
Una vez que llamamos a express desde el archivo e inicializamos una variable con express(), podemos hacer uso de los métodos de express para peticiones:

- GET() ==> método HTTP para el cual aplica la función del middleware.
        Toma 2 parámetros:
            - el Path o ruta al cual se aplica la función del middleware.
            - la función del middleware, que toma 3 parámetros: request, resolve, callback (OPTATIVO - por convención, se llama next()):

            --> app.get('/', function(req, res, next) { next() })
            --> app.get('/', (req, res, next) => next())
*/

// Express identifica el Content-Type de manera automática, pero en caso de querer configurarlo manualmente, también puede hacerse.
app.get("/", function (req, res) {
  // status code --> 200. Caso de querer enviar un codigo distinto, aclararlo con res.status(code).send(text) --> ej: res.status(400).send('Bad request'); res.status(404).sendFile('absolute/path/to/404.png').
  res.send("HELLO, THIS IS THE BEGINNING OF MY BACK-END APP!!");
});

app.get("/home", (req, res) => res.send("HOME"));
app.get("/400", (req, res) => res.status(400).send("BAD REQUEST"));
app.get("/404", (req, res) => res.status(404).send("NOT FOUND"));

/*
- USE()

- SET()

- LISTEN() ==> método para indicar en qué puerto debe escuchar. EJ: app.listen(3000) --> localhost.
*/

app.listen(3000);

/*

- ENGINE()

-----------------------------------------------------------------

EXPRESS ROUTING

app.get('/ab?cd' [...])

    - ? ==> El elemento que antecede al signo de pregunta, puede o no pertenecer a la ruta.
*/

app.get("/ab?cd", (req, res) => res.send("AB?CD"));
// Esto significa que a la ruta se puede ingresar tanto por '/abcd' como por '/acd'.

/*********************

app.get('/ef*gh', [...])

    - * ==> El elemento que antecede al asterisco, puede ser repetido cualquier cantidad de veces, y la ruta va a seguir respondiendo de manera positiva (tiene que aparecer como mínimo una vez).
*/

app.get("/ef*gh", (req, res) => res.send("EF*GH"));
// Esto significa que a la ruta se puede ingresar tanto por '/efgh' como por '/efffffffffffffgh'

/* -----------------------------------------------------------------

NEXT()

Sirve para repetir una solicitud .get() a una misma ruta y que la segunda se ejecute.

JS lee linea por linea, una vez que encuentra una coincidencia la reproduce, y las que sigan las descarta. Por lo tanto, si hay dos metodos .get() con la misma ruta, el segundo metodo nunca se va a ejecutar, a menos que el primero ejecute un next():
*/

app.get("/next", (req, res, next) => {
  next();
});

// En el primer .GET() no se imprime nada, pero en el segundo si. En el primero, puede hacerse cualquier operación dentro, como hacer llamados a una DB (Data base - base de datos).
// SI EL PRIMER .GET() HACE UN RES.SEND(), EL SEGUNDO NO SE EJECUTA (es parecido a un 'return', solo que no corta la ejecucion, simplemente no ejecuta el proximo res.send()) Para cortar efectivamente la ejecución del GET se pone un 'return'.

app.get("/next", (req, res) => res.send("\nEste es el segundo '.GET( )'"));

/* -----------------------------------------------------------------

PARÁMETROS

De ser necesarios, pueden pasarse parámetros a la ruta, por params (:).
*/

app.get("/welcome/:name", (req, res) => {
  // >>> localhost:3000/welcome/Santi
  let name = req.params.name;
  // let {name} = req.params; // Destructuring
  res.send(`Welcome, <i><b>${name}</b></i>`);
  console.log(req.params); // { name: 'Santi' }
});

/* -----------------------------------------------------------------

QUERY

Al trabajar con parámetros por query, NO deben ser aclarados en la ruta, pero se condiciona la respuesta de la ruta a la existencia de dichos parametros por query:
*/

app.get("/hola", (req, res) => {
  // >>> localhost:3000/hola?nombre=Santi&apellido=Ostrovsky (query string)
  let { nombre, apellido } = req.query;
  if (nombre && apellido) res.send(`Hola, ${nombre} ${apellido}!`);
  else res.send("Falta información de contacto.");
  console.log(req.query); // { nombre: 'Santi', apellido: 'Ostrovsky' }
});

/* -----------------------------------------------------------------

PAGINA ERROR

Cuando la ruta no coincide con nada de lo anteriormente especificado, puede rutearse a una pagina de error:
*/

app.get("*", (req, res) => {
  res.status(404).send("<h1>Error 404</h1><hr/><h2><i>Page not found</i></h2>");
});

/* -----------------------------------------------------------------

MIDDLEWAREs

Los MiddleWares son funciones que definen procesos, que suceden entre la petición y la respuesta del servidor, como por ejemplo, el 'parseo' de la información de formato JSON a objetos JS, de ser necesario.

Express ya tiene definidos los MiddleWares necesarios para que las peticiones sean exitosas. Sin embargo, existe la posibilidad de crear MiddleWares personalizados para realizar tareas o validaciones específicas. Para utilizar y definir MiddleWares, se usa express().use() (en este caso, app.use()):
*/

// Lo siguiente no va a ser ejecutado en la pagina, ya que todas las peticiones a todas las urls distintas de las definidas anteriormente, van a ser detenidas por el mensaje 'Error 404' de linea 127.
app.use("/mid", function (req, res, next) {
  console.log(`Se hizo un request a ${req.url}`);
  next();
});

app.get("/mid", (req, res) =>
  res.send(
    "En consola se imprimió el mensaje 'Se hizo un request a /', indicado por el MiddleWare definido en linea 141-"
  )
);

/*

Un framework muy utilizado para los MiddleWares es 'Morgan' https://www.npmjs.com/package/morgan

Se utiliza igual que express:
    - Debe instalarse con: 'npm i morgan'; e
    - Importarse con: const morgan = require('morgan').

Morgan es un Logger, nos va a dar información de lo que esté pasando en el servidor.
*/

const logger = require("morgan");

app.use(logger("dev")); // 'dev' es un comando de Morgan, y lo que va a hacer es dar un mensaje por consola por cada acción del servidor; por cada pedido y cada respuesta.

// Devuelve algo asi --> GET / 304 0.324 ms - - ([tipo de solicitud] [ruta] [tiempo de respuesta (ms)])

// SI HAY MAS DE UN MIDDLEWARE, ES REQUISITO QUE TENGAN UN NEXT(), PARA PODER AVANZAR A LOS SIGUIENTES.

// Si un MiddleWare se usa de manera global como en la linea 165, se aplica a todas las rutas. En caso de querer que el middleware se aplique a una única ruta o petición, puede agregarse como segundo parametro en los metodos de express:

app.get("/", express.json(), (req, res) => res.send("JSON INFO")); // Se aplica el middleware express.JSON para parsear información JSON a objeto JavaScript.

/* -----------------------------------------------------------------

PUBLICAR ALGO EN LA BASE DE DATOS - INGRESO DE INFORMACIÓN AL SERVIDOR

Al igual que con el objeto http en web server, para ingresar información se hace una petición de tipo POST:
*/

app.post("/", (req, res) => console.log(req.body));

/*
Para probar peticiones que no sean de tipo GET, puede usarse el software Postman (o extensiones de VSCode como RapidAPI Client o Thunder).

Prueba 1: hacer un envío de información desde postman a traves de un POST, y que esa información sea un objeto RAW en formato JSON, para lo cual debe usarse el express MiddleWare 'express.json()':
*/

app.use(express.json()); // <--

/*
Esto sirve, por ejemplo, si se tuviera que mandar mucha información por URL en un query string, no sería lo más conveniente mandar tanto contenido suelto, por lo que el método POST puede hacerse de manera mas fácil, enviando información extra por 'body', el cual puede enviarse como un objeto JSON.

Ejemplo: Si como parametros de query se necesitan nombre y apellido del usuario, puede mandarse:

{ nombre: [user.name], apellido: [user.lastName] } <-- req.body

En el body se puede mandar mas información, no sólo objetos JSON.

-----------------------------------------------------------------

EXPRESS ROUTER

No está bueno tener toda la información, contenido y/o funciones en un mismo archivo. Para tener un código ordenado, es necesario modularizar.

De la misma forma en la que React nos provee con React-Router para poder conectar distintas páginas en el UI, express nos provee de la herramienta Router para conectar las rutas del back.

Para utilizar Router, hay que importarlo:
*/

// const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Estas en About"));

router.get("/santiago", (req, res) => res.send("Santiago"));

router.get("/profile/:id", (req, res) => res.send(req.params.id));

module.exports = router;

// Una vez que tenemos estas rutas definidas, importamos las mismas desde el archivo en el que las queramos utilizar, y podemos hacer lo siguiente:

const routes = require("./01_intro"); // ejemplo

// Ahora, como MiddleWare, puede hacerse que todas las rutas que coincidan con '/', puedan acceder a las rutas especificadas en './intro.js', que bien podría ser './routes.js' ↓

// app.use("/about", routes);

// Ahora, cuando se esté en '/about', se va a renderizar "Estas en About".
// Cuando se esté en '/about/Santiago', se va a renderizar "Santiago".
// Y cuando se esté en '/about/profile/1234', se va a renderizar "1234".

/*
De esta forma, se pueden modularizar las rutas, y dividirlas por secciones. En un archivo, pueden guardarse las rutas que se desprendan de Home, las que se desprendan de User, y cualquier otra pagina ejemplo que haya. Y, combinando rutas con MiddleWares, se pueden obtener resultados muy poderosos, como el de acceder al perfil de un usuario y renderizar los componentes pertinentes a su contenido, una vez que el usuario esté autenticado:
*/

function isAuthenticated(req, res, next) {
  console.log(true);
  next();
}

app.get("/", isAuthenticated, (req, res) => {
  let obj = {
    nombre: "Santiago",
    apellido: "Ostrovsky",
  };
  res.json(obj);
});

/*
VER CARPETA 05_EXPRESS-DEMO:
    - /myapp/routes
    - app.js

-----------------------------------------------------------------

CORS - CROSS-ORIGIN RESOURCE SHARING --> https://www.npmjs.com/package/cors

Cuando el cliente realiza una solicitud principal (main request), el servidor espera que todas las peticiones se hagan del mismo dominio.

Para hacer solicitudes de varios dominios distintos (por ejemplo, en una pagina quiero renderizar una imagen de un dominio, y por debajo una imagen de un dominio distinto), se usan las CROSS-ORIGIN REQUESTS (controladas por CORS).

Para esto, el CORS debe ser configurado, para avisar al servidor que se van a hacer peticiones de dominios distintos desde un mismo cliente.

VER CARPETA 05_EXPRESS-DEMO:
    - /cors/
    - app.js

*/

// 'npm install cors'
const cors = require("cors");
// const app = require('express');

// Se habilitan todas las solicitudes CORS
app.use(cors()); // De esta manera se acepta TODO. Es peligroso, pero se puede utilizar. De otra forma, se pueden configurar opciones como en la siguiente variable, que luego van a ser utilizadas en la ruta ejemplo definida en linea 308.

// Se configuran las opciones para el middleware del módulo 'cors'. Si no se cambia nada, estas son las opciones que toma por default:
var corsOptions = {
  origin: "*", // '*' peligroso --> CUALQUIER cliente puede hacer peticiones
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Se setean los headers para la respuesta que se le envía al cliente
app.use((req, res, next) => {
  // Al no definirse una ruta, las siguientes autorizaciones rigen para TODAS las rutas
  res.header("Access-Control-Allow-Origin", "http://localhost:3001"); //Autorizo recibir solicitudes de este dominio
  res.header("Access-Control-Allow-Credentials", true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); //Autorizo recibir solicitudes con dichos headers
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE"); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
  next(); // los MiddleWares personalizados SIEMPRE llevan un next()
});

// Se habilitan CORS para una ruta en particular
app.get("/example-route", cors(), (req, res, next) => {
  // cors() acepta todas las configuraciones como esta definido en linea 278
  res.sendStatus(200);
});

// Se habilitan CORS para una ruta en particular, pasándole las opciones definidas en linea 281
app.get("/example-route", cors(corsOptions), (req, res, next) => {
  // cors(corsOptions) solo acepta las configuraciones definidas en linea 281.
  res.sendStatus(200);
});

// -----------------------------------------------------------------
