const MainPageController = require('../Controller/MainPageController');
const express = require('express');
const router = express.Router();

router
.route('/')
.get(MainPageController.Landing)

router
.route('/Music')
.get(MainPageController.Music)

router
.route('/AboutMe')
.get(MainPageController.AboutMe)

module.exports = router