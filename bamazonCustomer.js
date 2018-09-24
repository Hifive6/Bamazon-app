const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table")
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    insecureAuth: true,
    password: "MS@Dc02830786",
    database: "bamazonDB"
});
connection.connect(function (err) {
    if (err) throw err

    loadProducts()

})
const loadProducts = () => {
    connection.query("SELECT * FROM products", (err, res) => {

        console.table(res)
        prompCustomerforItem(res)
    })
}

const prompCustomerforItem = inventory => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "choice",
                message: "What is the ID of the item you would you like to purchase? [Quit with Q]",
                validate: val => !isNaN(val) || val.toLowerCase() === "q"

            }
        ])
        .then(val => {

            checkIfShouldExit(val.choice);
            const choiceId = parseInt(val.choice);
            const product = checkInventory(choiceId, inventory);


            if (product) {

                promptCustomerForQuantity(product);
            }
            else {

                console.log("\nThat item is not in the inventory.");
                loadProducts();
            }
        });

}

const checkIfShouldExit = choice => {
    if (choice.toLowerCase() === "q") {
        console.log('Thank you please come back!!! :).')
        process.exit(0);
    }
}
const checkInventory = (choiceId, inventory) => {
    const item = inventory.filter(item => item.id === choiceId);
    return item.length > 0 ? item[0] : null;
}
const makePurchase = (product, quantity) => {
    console.log(product)
    connection.query(
        "UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = ?",
        [quantity, product.id],
        function (err, res) {

            console.log("\nSuccessfully purchased " + quantity + " " + product.product_name + "'s!");
            loadProducts();
        }
    );
}
const promptCustomerForQuantity = product => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "quantity",
                message: "How many would you like? [Quit with Q]",
                validate: val => val > 0 || val.toLowerCase() === "q"
            }

        ])
        .then(val => {

            checkIfShouldExit(val.quantity);
            const quantity = parseInt(val.quantity);


            if (quantity > product.stock_quantity) {
                console.log("\nInsufficient quantity!");
                loadProducts();
            }
            else {

                makePurchase(product, quantity);
            }
        });
}