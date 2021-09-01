var bookService = require('../services/bookService');

exports.main = async(req, res) =>{
    try{
        let list = await bookService.main();
        return res.render('main', {list: list});
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.bookDetail = async(req, res) =>{
    try{
        let detail = await bookService.bookDetail();
        return res.render('bookDetail', {detail:detail});
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.bookList = async(req, res) =>{
    try{
        let list = await bookService.bookList();
        return res.render('listBook', {list:list});
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.bookInsert = async(req, res) =>{
    let {book_name, book_publishing, book_writer, book_amount, book_num, book_detail} = req.body;
    try{
        await bookService.bookInsert(book_name, book_publishing, book_writer, book_amount, book_num, book_detail);
        return res.redirect('/book/list');
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.insertPage = async(req, res)=>{
    try{
        return res.render('insertBook')
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.bookPatch = async(req, res) =>{
    let {book_name, book_publishing, book_writer, book_amount, book_num, book_detail} = req.body;
    let {book_uid} = req.params;
    try{
        await bookService.bookPatch(book_name, book_publishing, book_writer, book_amount, book_num, book_detail, book_uid);
        return res.render('/book/read/:book_uid')
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.bookPatchPage = async(req, res) =>{
    let {book_uid} = req.params;
    try{
        let patch = await bookService.bookRead(book_uid);
        return res.render('bookPatch', {patch:patch})
    }catch(err){
        return red.status(500).json(err);
    }
}

exports.bookDelete = async(req, res) =>{
    const{book_uid} = req.params;
    try{
        await bookService.bookDelete(book_uid);
        return res.redirect('/book/list')
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.bookRead = async(req, res) =>{
    let {book_uid} = req.params;
    try{
        let detail = await bookService.bookRead(book_uid);
        res.render('bookDetail', {detail:detail});
    }catch(err){
        return res.status(500).json(err);
    }
}