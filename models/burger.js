//Importing the ORM to create functions to interact with the database
var orm = require("../config/orm.js");
console.log("Burger Models Operational");

var burger = {
    all: function(callback) {
        //Querying all items from the burgesr table
        orm.selectAll("burgers", function(result) {
            callback(result);
        });
    },

    newBurger: function(vals, callback) {
        //Inserting a burger into the burgers table
        orm.insertOne("burgers", "burger_name", vals, function(result) {
            //console.log("Trying to callback function in models");
            callback(result);
        });
    },

    eaten: function(newInput, pageId, callback) {
        //Updating devoured column to true based on burger ID
        orm.updateOne("burgers", "devoured", newInput, "id", pageId, function(result) {
            callback(result);
        });
    }
};

//Exporting the database function for the controller
module.exports = burger;