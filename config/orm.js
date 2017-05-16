var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM " + tableInput;
    connection.query(queryString, function(err, result) {
      console.log(result);
    });
  },
insertOne: function(table, burgerName) {
  var queryString = "insert into" + table + "(burger_name) values ?" ;
  console.log(queryString);
  connection.query(queryString, [burgerName] function(err, result) {
    console.log(result);
  });
  updateOne: function(table, objColVals, condition) {
    var queryString = "UPDATE" + table + " SET " + objColVals + " WHERE " + condition;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      console.log(result);
    });
},
// updateOne: function(table, objColVals, condition) {
//    var queryString = "UPDATE " + table + " SET " + objColVals + " WHERE "+ condition;
//     console.log(queryString);
//      connection.query(queryString, function(err, result) {
//       if (err) {         throw err;       }
//     });   },




module.exports = orm;
