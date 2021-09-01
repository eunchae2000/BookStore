var express = require('express');
var router = express.Router();
const mypageController = require('../controller/mypageController');

/* TODO:
1. 로그인한 사용자에 한해서 배송지 추가, 수정, 삭제
2. 카드 추가, 수정, 삭제
3. 마이페이지의 메인 페이지
 */

 // 마이페이지 - 메인
 router.get('/main', mypageController.mypage);

// 배송지 추가
router.post('/ship/:deleivery_uid', mypageController.shipInsert);
// 배송지 추가 페이지
router.get('/ship', mypageController.shipInsertPage);

// 배송지 수정
router.post('/update/:delivery_uid', mypageController.shipUpdate);
// 배송지 수정 페이지
router.get('/update/:delivery_uid', mypageController.shipUpdatePage);

// 배송지 삭제
router.delete('/delete/:book_user_user_uid')

// 카드 추가
// 카드 추가 페이지

// 카드 수정
// 카드 수정 페이지

// 카드 삭제

module.exports = router;