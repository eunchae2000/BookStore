var bookService = require('../services/bookService');

exports.main = async(req, res, next) =>{
    try{
        await bookService.main();
        return res.render('main', {title: 'cocobook'});
    }catch(err){
        return res.status(500).json(err)
    }
}

exports.signUp = async(req, res, next) =>{
    const {user_uid, user_password, user_name} = req.body;
    try{
        await bookService.signUp(user_uid, user_password, user_name);
        return res.redirect('/cocobook/signup')
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
        await bookService.logIn(user_uid, user_password);
        return req.redirect('/cocobook/login');
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

exports.mypage = async(req, res, next) =>{
    try{
        await bookService.mypage();
        return res.render('mypage', {title: 'mypage'});
    }catch(err){
        return res.status(500).json(err);
    }
}