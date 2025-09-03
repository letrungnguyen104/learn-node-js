require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOSTNAME;
const mysql = require('mysql2');

//config template engine
configViewEngine(app);

//khai báo route
app.use('/test', webRoutes);

//Test connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3307', //default = 3306
    user: 'root',
    password: '104204',
    database: 'learnnodejs'
})

connection.query(
    'SELECT * FROM Users',
    (err, result, fields) => {
        console.log(">>> result = ", result);
        console.log(">>> fields = ", fields);
    }
)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
})