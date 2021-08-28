/* TODO:
1. 회원가입 시 자동 중복 확인
2. 로그인 시 아이디, 비밀번호 확인 
3. 로그인에 성공할 시 회원 전용 메인 페이지*/
var userServices = require('../services/userServices');

exports.signUp = async(req, res) =>{
    const {user_uid, user_password, user_name} = req.body;
    try{
        await userServices.signUp(user_uid, user_password, user_name)
        return res.redirect('/book/main')
    }catch(err){
        // 중복된 아이디가 있을 경우
        res.send('<script type="text/javascript">alert("이미 사용중인 아이디 입니다."); document.location.href="/user/signup";</script>')
        return res.status(500).json(err);
    }
}

exports.signUpCom = async(req, res) => {
    try{
        let user = req.session.user_uid;
        return res.render('signup', {user:user});
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.signIn = async(req, res) => {
    const {user_uid, user_password} = req.body;
    try{
        await userServices.signIn(user_uid, user_password);
        res.redirect('/user/main')
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.signInCom = async(req, res) =>{
    try{
        let user = req.session.user_uid;
        return res.render('login', {user:user});
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.logout = async(req, res) =>{
    if(req.session.user){
        console.log('로그아웃 처리');
        req.session.destroy(
            function(err){
                if(err){
                    console.log('세션 삭제시 에러');
                    return;
                }
                console.log('세션 삭제 성공');
                res.redirect('/book/main');
            }
        );
    }else{
        console.log('로그인 안 되어 있음');
        res.redirect('/user/signin');
    }
}

exports.mainUser = async(req, res) => {
    let {user_name} = req.params;
    try{
        let user = await userServices.mainUser(user_name);
        return res.render('usermain', {user:user});
    }catch(err){
        return res.status(500).json(err);
    }
}