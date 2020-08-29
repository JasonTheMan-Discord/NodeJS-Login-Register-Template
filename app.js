const express = require('express');
const mysql = require('mysql');

// Load database credentials from env, otherwise, revert to defaults.
const db = mysql.createConnection({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASS || '',
    database: process.env.MYSQL_DATABASE || 'i_social'
});

// Use the port specified as an environment variable. If one is not specified, default to 2000.
const port = process.env.PORT || 2000;

// Inform the user of the attempt to connect to the MySQL database.
console.log("> Attempting to connect to MySQL database.");

db.connect((err) => {
    if(!err) {
        // Database connection was successful.
        console.log("> Connected to MySQL database successfully.");
        
        // Create a new instance of express called app.
        const app = express();
        
        // Only start registering routes whenever the database connection is successful.
        // Obviously this will look much different once the code has been modulated.
        app.get('/', (req, res) => {
            // Give the user a classic old hello world welcoming!
            res.send('<h1>Hello world!</h1>');
        });

        // Make the express app listen to the specified port.
        app.listen(port, () => {
            console.log(`Server started on port ${port}.`);
        });
    } else {
        // Connection failed. Therefore, we alert the user.
        
        console.log("> Failed to connect to MySQL database.");
        console.error(err);
        
        // Because an express app was never opened, there is no need to now close it! Hoorah!
    }
});

