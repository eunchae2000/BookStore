var pool = require('../../middleware/bookData');
var bookQuery = require('../query/bookQuery');

exports.main = async() =>{
    try{
        let list = await pool.query(bookQuery.main)
        return list[0]
    }catch(err){
        console.log(err);
        throw Error(err);
    }
}

exports.bookList = async() =>{
    try{
        let list = await pool.query(bookQuery.bookList);
        return list[0];
    }catch(err){
        throw Error(err);
    }
}

exports.bookInsert = async(book_name, book_publishing, book_writer, book_amount, book_num, book_detail, book_uid) =>{
    try{
        let insert = await pool.query(bookQuery.bookInsert, [book_name, book_publishing, book_writer, book_amount, book_num, book_detail, book_uid]);
        return insert[0]
    }catch(err){
        throw Error(err);
    }
}

exports.bookPatch = async(book_name, book_publishing, book_writer, book_amount, book_num, book_detail) =>{
    try{
        let patch = await pool.query(bookService.bookPatch[book_name, book_publishing, book_writer, book_amount, book_num, book_detail]);
        return patch[0]
    }catch(err){
        throw Error(err);
    }
}

exports.bookDelete = async(book_uid) =>{
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

exports.bookDetail = async(book_uid) =>{
    try{
        let detail = await pool.query(bookQuery.bookDetail, [book_uid]);
        return detail[0]
    }catch(err){
        throw Error(err);
    }
}