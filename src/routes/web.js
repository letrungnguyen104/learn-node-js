const express = require('express');
const { getHomepage, getImage, postCreateUser } = require('../controllers/homeController');
const router = express.Router();

//Khai báo route
router.get('/', getHomepage)

router.get('/image', getImage)

router.post('/create-user', postCreateUser);

module.exports = router;