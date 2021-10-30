var express = require('express');
var router = express.Router();
const mypageController = require('../controller/mypageController');

/* TODO:
1. 로그인한 사용자에 한해서 배송지 추가, 수정, 삭제
2. 카드 추가, 수정, 삭제
3. 마이페이지의 메인 페이지
 */

// 마이페이지 - 메인
router.get('/main/:book_user_user_uid', mypageController.mypage);

// !!!!! 카드 !!!!!

router.get('/card/detail/:card_uid', mypageController.cardDetail);

// 카드 추가
router.post('/card/insert/:book_user_user_uid', mypageController.cardInsert);

// 카드 추가 페이지
router.get('/card/insert', mypageController.cardInsertPage);

// 카드 수정
router.patch('/card/update/:card_uid', mypageController.cardUpdate);

//카드 수정 페이지
router.get('/card/update/:card_uid', mypageController.cardUpdatePage);

// 카드 삭제
router.delete('/card/delete/:card_uid', mypageController.cardDelete);


// !!!!! 배송지 !!!!!

router.get('/ship/detail/:delivery_uid', mypageController.shipDetail);

// 배송지 추가
router.post('/ship/insert/:book_user_user_uid', mypageController.shipInsert);

// 배송지 추가 페이지
router.get('/ship/insert', mypageController.shipInsertPage);

// 배송지 수정
router.patch('/ship/update/:delivery_uid', mypageController.shipUpdate);

// 배송지 수정 페이지
router.get('/ship/update/:delivery_uid', mypageController.shipUpdatePage);

// 배송지 삭제
router.delete('/ship/delete/:delivery_uid', mypageController.shipDelete);


module.exports = router;