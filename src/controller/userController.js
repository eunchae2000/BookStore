var userServices = require('../services/userServices');

exports.signUp = async(req, res) =>{
    // 회원가입에 필요한 정보를 받아오는 부분
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
        // 회원가입 시 입력한 정보를 세션에 저장
        let user = req.session.user_uid;
        return res.render('signup', {user:user});
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.signIn = async(req, res) => {
    // 로그인 시 필요한 정보를 입력하는 부분
    const {user_uid, user_password} = req.body;
    try{
        let signin = await userServices.signIn(user_uid, user_password);
        if (signin[0].user_uid == user_uid && signin[0].user_password == user_password){
            // 로그인 성공
            res.send('<script type="text/javascript">alert("환영합니다!"); document.location.href="/user/main";</script>')
        }
        res.redirect('/user/main')
    }catch(err){
        // 로그인 실패
        res.send('<script type="text/javascript">alert("아이디 또는 비밀번호를 확인해주세요!"); document.location.href="/user/signin";</script>')
        return res.status(500).json(err);
    }
}

exports.signInCom = async(req, res) =>{
    try{
        // 로그인 한 유저의 정보를 세션에 저장
        let user = req.session.user_uid;
        return res.render('login', {user:user});
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.logout = async(req, res) =>{
    // 로그아웃 시 로그인 한 회원의 세션을 파괴
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
    // 로그인한 회원의 이름을 가져오는 부분
    let {user_name} = req.params;
    try{
        let user = await userServices.mainUser(user_name);
        return res.render('usermain', {user:user});
    }catch(err){
        return res.status(500).json(err);
    }
}