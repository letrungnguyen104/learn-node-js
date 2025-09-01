const express = require('express');
const { getHomepage, getImage } = require('../controllers/homeController');
const router = express.Router();

//Khai báo route
router.get('/', getHomepage)

router.get('/image', getImage)

module.exports = router;