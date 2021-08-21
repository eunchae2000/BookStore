var express = require('express');
var router = express.Router();
const bookController = require('../controller/bookController');

router.get('/cocobook', bookController.main);

router.post('/cocobook/signup', bookController.signUp);

router.post('/cocobook/login', bookController.logIn);

module.exports = router;