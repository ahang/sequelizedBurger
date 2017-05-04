console.log("Controller Operational");
var express = require("express");

var router = express.Router();

//Importing the model to use database function
var db = require("../models/burger.js");

//Creating routes and logic for each route
router.get("/", function(req, res) {

});

router.post("/", function(req, res) {

});

router.put("/:id", function(req, res) {

});

//Export routes for server.js
module.exports = router;