// Dependencies
// =============================================================
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
// var path = require("path");

var PORT = process.env.PORT || 3000;
// var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: true })
app.use(bodyParser.urlencoded({extended: true}));


require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
