var pool = require('../../middleware/bookData');
var userQuery = require('../query/userQuery');

exports.signUp = async(user_uid, user_password, user_name) =>{
    try{
        let signup = await pool.query(userQuery.signUp, [user_uid, user_password, user_name]);
        return signup[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
} 

exports.signIn = async(user_uid, user_password) => {
    try{
        let user = await pool.query(userQuery.signIn, [user_uid, user_password]) 
        return user[0]
    }catch(err){
        throw Error(err);
    }
}

exports.mainUser = async(user_name, user_uid) => {
    try{
        let user = await pool.query(userQuery.mainUser, [user_name, user_uid])
        return user[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}