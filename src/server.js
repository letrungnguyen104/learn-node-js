require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOSTNAME;

//config template engine
configViewEngine(app);

//khai báo route
app.use('/test', webRoutes);

//Test connection

connection.query(
    'SELECT * FROM Users',
    (err, results, fields) => {
        console.log(">>> result = ", results);
    }
)

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
})