var pool = require('../../middleware/bookData');
var bookQuery = require('../query/bookQuery');

exports.main = async(req, res, next) =>{
    try{
        let list = await pool.query(bookQuery.main)
        return list[0]
    }catch(err){
        console.log(err);
        throw Error(err);
    }
}

exports.bookList = async(req, res) =>{
    try{
        let list = await pool.query(bookQuery.bookList);
        return list[0];
    }catch(err){
        throw Error(err);
    }
}

exports.bookInsert = async(book_name, book_publishing, book_writer, book_amount, book_num, book_detail) =>{
    try{
        let insert = await pool.query(bookQuery.bookInsert, [book_name, book_publishing, book_writer, book_amount, book_num, book_detail]);
        return insert[0]
    }catch(err){
        throw Error(err);
    }
}

exports.bookPatch = async(req, res) =>{
    try{
        let patch = await pool.query(bookService.bookPatch[book_name, book_publishing, book_writer, book_amount, book_num, book_detail]);
        return patch[0]
    }catch(err){
        throw Error(err);
    }
}

exports.bookDelete = async(req, res) =>{
    try{
        let del = await pool.query(bookQuery.bookDelete, [book_uid]);
        return del[0]
    }catch(err){
        throw Error(err);
    }
}

exports.bookRead = async(book_uid) =>{
    try{
        let detail = await pool.query(bookQuery.bookRead, [book_uid]);
        return detail[0];
    }catch(err){
        throw Error(err);
    }
}