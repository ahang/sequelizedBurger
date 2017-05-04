//Importing MySQL connection
var connection = require("../config/connection.js");
console.log("ORM Config Operational");

//ORM Object for SQL Statement functions
var orm = {
    //Selecting all for SQL Statement
    selectAll: function(tableInput, callback) {
        var query = "SELECT * FROM ??";
        connection.query(query, [tableInput], function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
            console.log("Select All Completed");
        });
    },
    //Inserting a new item for SQL Statement
    insertOne: function(tableInput, colName, vals, callback) {
        var query = "INSERT INTO ?? ( ?? ) VALUES (?)";
        connection.query(query, [tableInput, colName, vals], function(err, result) {
            if (err) {
                throw err;
            }
            //console.log("The result is.... in ORM" + result);
            //console.log("callingback the result");
            callback(result);
            //console.log("Insert One completed");
        });
    },
    //Updating one row for SQL Statement
    updateOne: function(tableInput, colName, newInput, colId, pageId, callback) {
        var query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(query, [tableInput, colName, newInput, colId, pageId], function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
            console.log("Successfully modified updated");
        });
    }
};

//Exporting ORM object for model
module.exports = orm;


