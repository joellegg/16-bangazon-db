// Require in the Database method from the sqlite3 module
// We will be using the verbose execution mode, which will help with debugging errors.
const { Database } = require('sqlite3').verbose();

// Returns a new database object and automatically opens the database
// Database method accepts a callback function for successful connection
const db = new Database('bangazon.sqlite', () => console.log('Tables added!'));

// Passing in IF NOT EXISTS after CREATE TABLE will check to make sure there are no tables named 'customers'
// If it does exist, this line will not run
db.run("CREATE TABLE IF NOT EXISTS Customers (customer_id INTEGER PRIMARY KEY, name TEXT, address TEXT, city TEXT, state TEXT, postal_code INT, phone_number INT)");
db.run("CREATE TABLE IF NOT EXISTS Payment_Options (payment_id INTEGER PRIMARY KEY, name TEXT, account_number INT)");
db.run("CREATE TABLE IF NOT EXISTS Products (product_id INTEGER PRIMARY KEY, name TEXT, price INT)");
db.run("CREATE TABLE IF NOT EXISTS Orders (order_id INTEGER PRIMARY KEY, customer_id INT, payment_id INT, payment_status INT)");
db.run("CREATE TABLE IF NOT EXISTS Order_Line (line_id INTEGER PRIMARY KEY, order_id INT, product_id INT)");
