var express = require('express');
var router = express.Router();
const userController = require('../controller/userController');


// 회원가입
router.post('/signup', userController.signUp);

// 회원가입 페이지
router.get('/signup', userController.signUpCom);

// 로그인
router.post('/signin', userController.signIn);

// 로그인 페이지
router.get('/signin', userController.signInCom);

// 로그아웃
router.get('/logout', userController.logout);

// 로그인 성공 시 메인 페이지
router.get('/main', userController.mainUser);

module.exports = router;