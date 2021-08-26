var express = require('express');
var router = express.Router();
const bookController = require('../controller/bookController');

// 메인 화면
router.get('/main', bookController.main);

router.get('/:book_uid', bookController.bookDetail);

module.exports = router;