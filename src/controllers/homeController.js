const connection = require('../config/database');

const getHomepage = (req, res) => {

    let users = [];

    connection.query(
        'SELECT * FROM Users',
        (err, results, fields) => {
            users = results;
            console.log(">>> results home page: ", results);
            res.send(JSON.stringify(users));
        }
    )
}

const getImage = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomepage,
    getImage
}