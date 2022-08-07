var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" }); // En app.js linea 14, se llama a la acción de este método 'render', el cual retorna un objeto con la propiedad 'title', y va a ser lo que se reemplace en el template HTML de './views.index.ejs' --> la simbología del template html en este caso, va a ser '%= title %'.
  // render() renderiza una vista y envía el string HTML renderizado al cliente --> http://expressjs.com/en/5x/api.html#res.render
});

module.exports = router;
