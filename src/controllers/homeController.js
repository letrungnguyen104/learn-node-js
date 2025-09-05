const connection = require('../config/database');

const getHomepage = (req, res) => {
    return res.render('home.ejs');
}

const getImage = (req, res) => {
    res.render('sample.ejs');
}


const postCreateUser = (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    // let { email, name, city } = req.body;

    connection.query(
        `INSERT INTO Users(email, name, city)
        VALUES (?, ?, ?)`,
        [email, name, city],
        (err, results) => {
            res.send('Create user succeed!');
        }
    );
};

module.exports = {
    getHomepage,
    getImage,
    postCreateUser
}