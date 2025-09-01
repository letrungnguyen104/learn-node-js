const getHomepage = (req, res) => {
    res.send('Hello World with Nodemon!');
}

const getImage = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomepage,
    getImage
}