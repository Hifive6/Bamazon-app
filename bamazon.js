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
    //afterConnection()
    // mainMenu()
    connection.end();
})

// function afterConnection() {
//     connection.query("SELECT * FROM products", function(err, res) {
//       if (err) throw err;
//       console.log(res);
//       connection.end();
//     });
//   }

// function mainMenu(){
//     // var query = "SELECT price FROM products"
//     connection.query("SELECT * FROM products", function(err, res){
//         // console.log(res);
//         // connection.end()
//         if(err) throw err
//         itemsArr = [];
//         res.forEach(function(element){
//             itemsArr.push(element.id.toString());
//             itemsArr.push(element.product_name.toString());
//             itemsArr.push(element.price);
// console.log(itemsArr)
//         })
        
    
//     inquirer.prompt({
//         name: 'name',
//         type: 'list',
//         message: 'What would like to buy',
//         choices: itemsArr

//     }).
//     then(function(select){


//     })
// })
// }


