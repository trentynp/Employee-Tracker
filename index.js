const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");
// const sql = require("./sql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "~Ma009090",
  database: "employeesDB"
});


connection.connect(function (err) {
  if (err) throw err;
 
  firstPrompt();
});