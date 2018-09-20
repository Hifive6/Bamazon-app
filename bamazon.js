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
    listItems()
    connection.end();
})

function mainMenu(){
    inquirer.prompt({

    })
}


function listItems(){
    var query = "SELECT id, product_name, price FROM products WHERE ?";
    connection.query(query, function(res, err){
        console.log(res)
    })
} 

