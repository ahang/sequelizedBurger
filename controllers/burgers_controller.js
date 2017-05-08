console.log("Controller Operational");
var express = require("express");
var router = express.Router();

//Importing the model to use database function
var db = require("../models");

//Creating routes and logic for each route
router.get("/", function(req, res) {
    db.Burgers.findAll({}).then(function(result) {
        var hbsObject = {
            burgers: result
        };
        res.render("index", hbsObject)
    });
});

router.post("/", function(req, res) {
    db.Burgers.create({
        burger_name: req.body.burger
    }).then(function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    // console.log(req);
    // console.log(req.body.devoured);
    // console.log(req.params.id);
    db.Burgers.update({
        devoured: req.body.devoured
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(results) {
        res.redirect("/");
    });
});

//Export routes for server.js
module.exports = router;