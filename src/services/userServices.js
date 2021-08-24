var pool = require('../../middleware/bookData');
var userQuery = require('../query/userQuery');

exports.signUp = async(user_uid, user_password, user_name) =>{
    try{
        let signup = await pool.query(userQuery.signUp, [user_uid, user_password, user_name]);
        
        return signup[0]
    }catch(err){
        throw Error(err)
    }
} 

exports.signIn = async(user_uid, user_password) => {
    try{
        let login = await pool.query(userQuery.signIn, [user_uid, user_password]) 
        return login[0]
    }catch(err){
        throw Error(err);
    }
}