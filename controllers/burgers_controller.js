console.log("Controller Operational");
var express = require("express");

var router = express.Router();

//Importing the model to use database function
var burger = require("../models/burger.js");

//Creating routes and logic for each route
router.get("/", function(req, res) {
    //grabbing SQL String & MySQL DB connection and returning a data to hand off to handlebar template
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    //console.log(req.params.burger_name);
    //grabbing burger name to add to the MySQL DB
    console.log(req.body.burger);
    burger.newBurger([
        req.body.burger
    ], function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    //Updating our DB with the appropriate ID and value from the request
    console.log(req.body);
    console.log("The ID " + req.params.id);
    console.log("Value of Devoured " + req.body.devoured);
    burger.eaten(
        req.body.devoured, req.params.id, function() {
            res.redirect("/");
    });
});

//Export routes for server.js
module.exports = router;