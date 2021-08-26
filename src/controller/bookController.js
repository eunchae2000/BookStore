var bookService = require('../services/bookService');

exports.main = async(req, res) =>{
    try{
        return res.render('main');
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.bookDetail = async(req, res) =>{
    const {book_uid} = req.body;
    try{
        let detail = await bookService.bookDetail(book_uid);
        return detail[0]
    }catch(err){
        return res.status(500).json(err);
    }
}
