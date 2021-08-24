var express = require('express');
var router = express.Router();
const userController = require('../controller/userController');


// 회원가입
router.post('/signup', userController.signUp);

router.get('/signup', userController.signUpCom);

// 로그인
router.post('/signin', userController.signIn);

router.get('/signin', userController.signInCom);

module.exports = router;