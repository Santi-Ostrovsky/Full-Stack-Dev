var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource"); // envía la respuesta http http://expressjs.com/en/5x/api.html#res.render
});

router.get("/api", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
