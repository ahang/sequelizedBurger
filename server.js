//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var db = require("./models")

var app = express();
var PORT = process.env.PORT || 3000;

//Serve static content from public directory
app.use(express.static(process.cwd() + "/public"));
app.use(methodOverride("_method"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Setting up Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Importing routes
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

db.sequelize.sync({ force: true}).then(function() {
    app.listen(PORT, function() {
        console.log("Server Operational");
    });
});