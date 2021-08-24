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

exports.signUp = async(user_uid, user_password, user_name) =>{
    try{
        let signup = await pool.query(bookQuery.signUp, [user_uid, user_password, user_name]);
        return signup[0]
    }catch(err){
        throw Error(err)
    }
} 

exports.signIn = async(user_uid, user_password) => {
    try{
        let login = await pool.query(bookQuery.signIn, [user_uid, user_password])
        return login[0]
    }catch(err){
        throw Error(err);
    }
}

exports.mypage = async(req, res, next) =>{
    try{
        let userInfo = await ppol.query(bookQuery.mypage);
        return userInfo[0]
    }catch(err){
        throw Error(err);
    }
}