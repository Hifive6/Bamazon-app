DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazonDB;
ALTER USER root@localhost IDENTIFIED WITH mysql_native_password BY 'MS@Dc02830786';
CREATE TABLE products (
	id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(65, 2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY(id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("PS4", "Electronics", 299.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Samsung_tv", "Electronics", 400.00, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Couch", "Furniture", 245.89, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Desk", "Furniture", 99.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Sink", "Plumbing", 54.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Faucet", "Plumbing", 78.98, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Shovel", "Garden", 14.99, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Gloves", "Garden", 5.99, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Cheerios", "Pantry", 3.49, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Crackers", "Pantry", 2.69, 0);