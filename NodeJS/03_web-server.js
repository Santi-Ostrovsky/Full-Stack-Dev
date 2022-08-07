/*
SERVIDOR WEB

Un servidor web es cualquier computadora o sistema que procese solicitudes (requests) y devuelva una respuesta (response) a través de una protocolo de red.

          Request
        ---------->
CLIENTE             SERVIDOR
        <----------
          Response

-----------------------------------------------------------------

PROTOCOLOS

UTP vs TCP/IP

UTP ==> El servidor manda paquetes de datos de manera permanente al cliente, sin importar qué datos han sido recibidos por este último.

TCP/IP ==> El servidor manda paquetes de datos al cliente, y aguarda una confirmación de recepción por parte de este último para mandar un nuevo paquete de datos. De no recibirse confirmación de recepción por parte del cliente, el servidor vuelve a mandar el paquete de datos cuya recepción no ha sido confirmada.

-----------------------------------------------------------------

HTTP

Debe importarse el módulo 'http' para poder trabajar con el protocolo.

>>> const http = require('http');

********************
*/
const http = require("http");

// console.log(http);

const ObjetoHTTP = {
  // _connectionListener: [Function: connectionListener],
  // METODOS
  METHODS: [
    "ACL",
    "BIND",
    "CHECKOUT",
    "CONNECT",
    "COPY",
    "DELETE",
    "GET",
    "HEAD",
    "LINK",
    "LOCK",
    "M-SEARCH",
    "MERGE",
    "MKACTIVITY",
    "MKCALENDAR",
    "MKCOL",
    "MOVE",
    "NOTIFY",
    "OPTIONS",
    "PATCH",
    "POST",
    "PROPFIND",
    "PROPPATCH",
    "PURGE",
    "PUT",
    "REBIND",
    "REPORT",
    "SEARCH",
    "SOURCE",
    "SUBSCRIBE",
    "TRACE",
    "UNBIND",
    "UNLINK",
    "UNLOCK",
    "UNSUBSCRIBE",
  ],
  // CÓDIGOS DE ESTADO
  STATUS_CODES: {
    100: "Continue",
    101: "Switching Protocols",
    102: "Processing",
    103: "Early Hints",
    200: "OK",
    201: "Created",
    202: "Accepted",
    203: "Non-Authoritative Information",
    204: "No Content",
    205: "Reset Content",
    206: "Partial Content",
    207: "Multi-Status",
    208: "Already Reported",
    226: "IM Used",
    300: "Multiple Choices",
    301: "Moved Permanently",
    302: "Found",
    303: "See Other",
    304: "Not Modified",
    305: "Use Proxy",
    307: "Temporary Redirect",
    308: "Permanent Redirect",
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Timeout",
    409: "Conflict",
    410: "Gone",
    411: "Length Required",
    412: "Precondition Failed",
    413: "Payload Too Large",
    414: "URI Too Long",
    415: "Unsupported Media Type",
    416: "Range Not Satisfiable",
    417: "Expectation Failed",
    418: "I'm a Teapot",
    421: "Misdirected Request",
    422: "Unprocessable Entity",
    423: "Locked",
    424: "Failed Dependency",
    425: "Too Early",
    426: "Upgrade Required",
    428: "Precondition Required",
    429: "Too Many Requests",
    431: "Request Header Fields Too Large",
    451: "Unavailable For Legal Reasons",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    505: "HTTP Version Not Supported",
    506: "Variant Also Negotiates",
    507: "Insufficient Storage",
    508: "Loop Detected",
    509: "Bandwidth Limit Exceeded",
    510: "Not Extended",
    511: "Network Authentication Required",
  },
  /*
  Agent: [Function: Agent] { defaultMaxSockets: Infinity },
  ClientRequest: [Function: ClientRequest],
  IncomingMessage: [Function: IncomingMessage],
  OutgoingMessage: [Function: OutgoingMessage],
  Server: [Function: Server],
  ServerResponse: [Function: ServerResponse],
  createServer: [Function: createServer],
  validateHeaderName: [Function: __node_internal_],
  validateHeaderValue: [Function: __node_internal_],
  get: [Function: get],
  request: [Function: request],
  maxHeaderSize: [Getter],
  globalAgent: [Getter/Setter]
  */
};

/*
Una vez importado el módulo HTTP, se le puede dar uso a todos sus métodos y propiedades.
*/

http.createServer(function (request, response) {}).listen(3000, "127.0.0.1");

/*
Para comenzar, se usa '.createServer()', método que va a tomar como parámetro, una función con un 'request' y un 'response'.

--> Tener en cuenta que el método se escribe desde el lado del servidor, de manera que en el parámetro 'request' se espera una petición por parte del cliente, mientras que el parámetro 'response' determina cuál va a ser la acción que toma el servidor ante esa petición.

En todas las interacciones que se hagan por http, el mismo módulo (paquete http) será el que determine cuál es la versión de http que está siendo utilizada, los headers, el body, y los datos, entre otras cosas, al momento de enviar un mensaje, ya sea del cliente al servidor o viceversa.

-----------------------------------------------------------------

En el siguiente ejemplo, se usa .createServer() sin un request:
*/

http
  .createServer((req, res) => {
    // Acá iría una serie de event-listeners que van a tomar la información solicitada por el objeto request.

    // ↓ Para crear una respuesta, se empieza por escribir un header.
    res.writeHead(200, { "Content-Type": "text/plain" });
    // writeHead() toma como primer parámetro, un status-code (200 = OK), y en el segundo parámetro, un objeto con información acerca del tipo de respuesta (en este caso, se especifica que el tipo de contenido de la respuesta es de texto plano - sin código ni html).

    res.end("Hola Mundo!\n");
    // end() toma como parámetro la respuesta final por parte del servidor. En este caso, devuelve la respuesta de tipo texto "Hola Mundo!".
  })
  .listen(1337, "127.0.0.1"); // Por último, se concatena el método .listen(), que va a tomar como parámetros, el puerto y la dirección en donde va a estar escuchando los pedidos el servidor.

// ******************** CASO DE MUCHAS RUTAS ********************
const fs = require("fs");

http
  .createServer((req, res) => {
    //
    console.log(req);

    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Hola Mundo!\n");
      //
    } else if (req.url === "/home") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("HOME!!\n");
      //
    } else if (req.url === "/api") {
      // SE RETORNA OTRO TIPO DE CONTENIDO --> APP/JSON
      res.writeHead(200, { "Content-Type": "application/json" });
      let obj = {
        nombre: "Santiago",
        apellido: "Ostrovsky",
      };
      res.end(JSON.stringify(obj)); // OPERACIÓN INVERSA DE HACER UN PEDIDO A UNA API, EN DONDE SE TOMA TEXTO Y SE LO TRADUCE A UN JSON, ACÁ SE INTRODUCE UN OBJETO EN FORMATO JSON Y SE LO CONVIERTE EN TEXTO PLANO.

      // CASO DEFAULT: LA RUTA NO ES VÁLIDA, RETORNAR COD. 404.
    } else if (req.url === "/html") {
      res.writeHead(200, { "Content-Type": "text/html" }); // (*)
      const file = fs.readFileSync(__dirname + "/html/ejemplo.html"); // readFileSync para que el proceso sea sincrónico, suponiendo el caso de que no se sabe si el archivo existe o no, para que la respuesta sea inmediata (/que el sitio se quede esperando una respuesta para seguir adelante).
      // __dirname indica que se esta utilizando una ruta dentro del mismo directorio. Es una ruta absoluta, en lugar de una relativa (./[...]).
      res.end(file);
      //
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("NO ES UNA RUTA VALIDA\n");
    }
  })
  .listen(1337, "127.0.0.1");

// (*) Si se envía un archivo, en este caso un HTML, debe aclararse que el texto es de un tipo en particular. Como se aclara que el texto es HTML, se lee el archivo correctamente, desplegando el contenido de texto dentro del archivo, pero de haberse aclarado 'text/plain', el servidor lo interpretaría y devolvería como un simple texto, en donde se puede ver el esqueleto del documento HTML con todas sus etiquetas, tal como se ve en el editor de código.

/* -----------------------------------------------------------------

PLANTILLAS HTML

En el caso de tener un documento HTML disponible para mas de uno de los casos de respuesta de un servidor, pueden reemplazarse valores dentro de las etiquetas para que coincidan con la información necesaria.

En el HTML ::       */
<>
  <DOCTYPE html />
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>PLANTILLA EJEMPLO</title>
    </head>
    <body>
      <h1>PLANTILLA EJEMPLO</h1>
      <p>Bienvenido, {nombre}</p>
    </body>
  </html>
</>;

// ********************

// En el JS ::

http
  .createServer((req, res) => {
    //
    if (req.url === "/welcome") {
      res.writeHead(200, { "Content-Type": "text/html" });
      // Definición de variables (archivo y nombre)
      let file = fs.readFileSync(__dirname + "/html/template.html");
      let nombre = "Santiago";
      // Reemplazar {nombre} por "Santiago"
      file = file.replace("{nombre}", nombre);
      // enviar respuesta (archivo)
      res.end(file);
      //
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("RUTA INVALIDA");
    }
  })
  .listen(1337, "127.0.0.1");

/*
EN EL NAVEGADOR ::

(<h1>) PLANTILLA EJEMPLO
(<p>)Bienvenido, Santiago

-----------------------------------------------------------------

DE STRING A URL

Cuando un usuario realiza una búsqueda, las palabras van a estar separadas por un espacio, pero el navegador no acepta espacios en blanco en la URL, por que lo que dicho espacio debe ser convertido a caracteres aceptados.

En los navegadores, el espacio se toma bajo el conjunto de caracteres '%20', pero hay una función que realiza la conversión por nosotros: 'encodeURI()'.
*/

// Búsqueda de beatles por API (John Lennon ==> John%20Lennon)

var beatles = [
  {
    name: "John Lennon",
    birthdate: "09/10/1940",
    profilePic:
      "https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg",
  },
  {
    name: "Paul McCartney",
    birthdate: "18/06/1942",
    profilePic:
      "http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg",
  },
  {
    name: "George Harrison",
    birthdate: "25/02/1946",
    profilePic:
      "https://canaldosbeatles.files.wordpress.com/2012/02/george-george-harrison-8321345-438-600.jpg",
  },
  {
    name: "Richard Starkey",
    birthdate: "07/08/1940",
    profilePic:
      "http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg",
  },
];

const json = "application/json";
const text = "text/plain";

http
  .createServer((req, res) => {
    //
    if (req.url === "/api" || req.url === "/api/") {
      res.writeHead(200, { "Content-Type": json });
      res.end(JSON.stringify(beatles));
      //
    } else if (req.url.substring(0, 5) === "/api/" && req.url.length > 5) {
      let beatle = req.url.split("/").pop();
      let foundBeatle = beatles.find((n) => beatle === encodeURI(n.name));
      if (foundBeatle) {
        res.writeHead(200, { "Content-Type": json });
        res.end(JSON.stringify(foundBeatle));
        //
      } else {
        res.writeHead(404, { "Content-Type": text });
        res.end("INVALID BEATLE");
        //
      }
    } else {
      res.writeHead(404, { "Content-Type": text });
      res.end("PAGE NOT FOUND");
    }
  })
  .listen(3000, "127.0.0.1");

// (*) encodeURI :: [espacio] ==> '%20'
// (*) decodeURI :: '%20' ==> [espacio]

/* -----------------------------------------------------------------

SERIALIZE // DESERIALIZE

Proceso que se realiza para manipular la información recibida por el servidor, de manera que la base de datos la interprete, guarde y reproduzca.

SERIALIZATION
                              [File]
                            /
[Object] --> [Data-Stream] --> [Data-Base]
                            \
                              [Memory]

SERIALIZATION
     [File]
            \
[Data-Base] --> [Data-Stream] --> Object
            /
   [Memory]

-----------------------------------------------------------------

REST-FUL API

Rest, es una arquitectura o forma de diseño del back-end de una aplicación en internet. 'RE.S.T' viene de 'Representational State Transfer' (Transferencia representacional de estado), y está basado en HTTP.

**********

MÉTODOS DE UNA REST-FUL API

    - POST --> Crea una nueva tarea ('/tasks')
    - DELETE --> Elimina una tarea existente ('/tasks/{id}')
    - GET --> Obtener una tarea específica ('/tasks/{id}')
    - GET --> Buscar tareas('/tasks')
    - PUT --> Actualizar una tarea existente ('/tasks/{id}')

*/
