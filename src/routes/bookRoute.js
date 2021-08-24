var express = require('express');
var router = express.Router();
const bookController = require('../controller/bookController');

// 메인 화면
router.get('/cocobook', bookController.main);

// 회원가입 화면
router.post('/cocobook/signup', bookController.signUp);

router.get('/cocobook/signcom', bookController.signUpCom);

// 로그인 화면
router.post('/cocobook/login', bookController.signIn);

router.get('/cocobook/logincom', bookController.signInCom);

// 로그아웃 화면
// 마이페이지 화면
router.get('/cocobook/mypage', bookController.mypage);
// 장바구니 화면
// 도서 정보 상세보기
module.exports = router;