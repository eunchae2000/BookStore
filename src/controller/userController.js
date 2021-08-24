/* TODO:
1. 회원가입 시 자동 중복 확인
2. 로그인 시 아이디, 비밀번호 확인 */

var pool = require('../../middleware/bookData')
var bookService = require('../services/bookService');
const bcrypt = require("bcrypt");

exports.signUp = async(req, res, next) =>{
    const {user_uid, user_password, user_name} = req.body;
    try{
        var signup = await bookService.signUp(user_uid, user_password, user_name);
        var user = await pool.findOne({user_uid});
        if(user){
            return res.status(400).json({error: [{msg: "User already exists"}] });
        }
        user = pool({
            user_uid,
            user_password,
            user_name,
        });
        const salt = await bcrypt.genSalt(10);
        user.user_password = await bcrypt.hash(user_password, salt);

        await user.save();
        return res.redirect('/signin')
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.signUpCom = async(req, res, next) => {
    try{
        return res.render('signup');
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.signIn = async(req, res, next) => {
    const {user_uid, user_password} = req.body;
    try{
        var signin = await bookService.signIn(user_uid, user_password);
        if(signin.code == 0){
            res.cookie('user_uid', signin.user_uid);
            res.cookie('user_password', signin.user_name);
        }
        return req.redirect('/main');
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.signInCom = async(req, res, next) =>{
    try{
        return res.render('login');
    }catch(err){
        return res.status(500).json(err);
    }
}