var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);
// var func = require("./routes/html.js");
// func(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});