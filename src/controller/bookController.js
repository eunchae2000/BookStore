var bookService = require('../services/bookService');

exports.main = async(req, res) =>{
    try{
        return res.render('main');
    }catch(err){
        return res.status(500).json(err);
    }
}