const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'i_social'
});

db.connect( (error) => {
    if(error){
        console.log(error);
    } else {
        console.log('Initialising MySQL Connection...\n ...Connection Successful');
    }
})

app.get('/', (request, response) =>{
    response.send('<h1>Ehh, u should feel bad</h1>');
});

app.listen(2000, () => {
console.log('Server started on port 2000.');
});