var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    insecureAuth: true,
    password: "MS@Dc02830786",
    database: "bamazonDB"
});
connection.connect(function(err){
    if (err) throw err
    console.log(`${connection.threadId}`)
    connection.end();
})
