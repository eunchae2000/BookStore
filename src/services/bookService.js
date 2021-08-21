var pool = require('../../middleware/bookData');
var bookQuery = require('../query/bookQuery');

exports.main = async(req, res, next) =>{
    try{
        let list = await pool.query(bookQuery.mainBook);
        return list[0];
    }catch(err){
        console.log(err);
        throw Error(err);
    }
}

exports.signUp = async(req, res, next) =>{
    try{
        let signup = await pool.query(bookQuery.signUp);
        return signup[0]
    }catch(err){
        throw Error(err)
    }
} 

exports.logIn = async(req, res, next) => {
    try{
        let login = await pool.query(bookQuery.logIn)
        return login[0]
    }catch(err){
        throw Error(err);
    }
}