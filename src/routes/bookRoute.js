var express = require('express');
var router = express.Router();
const bookController = require('../controller/bookController');

// 상세 페이지
// router.get('/:book_uid', bookController.bookDetail);

// 책 리스트
router.get('/list', bookController.bookList);

// 책 추가
router.post('/insert', bookController.bookInsert);

// 책 추가 페이지
router.get('/insert', bookController.insertPage);

// 책 수정
router.patch('/patch/:book_uid', bookController.bookPatch);

// 책 수정 페이지
router.get('/patch/:book_uid', bookController.bookPatchPage);

// 책 삭제
router.delete('/delete/:book_uid', bookController.bookDelete);

// 상세보기
router.get('/read/:book_uid', bookController.bookRead);

router.get('/detail/:book_uid', bookController.bookDetail);

module.exports = router;