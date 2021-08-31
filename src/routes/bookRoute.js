var express = require('express');
var router = express.Router();
const bookController = require('../controller/bookController');

// 메인 화면
router.get('/main', bookController.main);

// 상세 페이지
// router.get('/:book_uid', bookController.bookDetail);

// 책 리스트
router.get('/list', bookController.bookList);

// 책 추가
router.post('/insert', bookController.bookInsert);

router.get('/insert', bookController.insertPage);

// 책 수정
router.patch('/patch/:book_uid', bookController.bookPatch);

router.get('/patch/:book_uid', bookController.bookPatchPage);

// 책 삭제
router.delete('/delete/:book_uid', bookController.bookDelete);

// 상세보기
router.get('/read/:book_uid', bookController.bookRead);

module.exports = router;