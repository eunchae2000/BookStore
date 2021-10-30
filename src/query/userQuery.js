// 회원가입 쿼리문
exports.signUp = 'insert into book_user (user_uid, user_password, user_name) values(?, ?, ?)'

// 로그인 쿼리문
exports.signIn = 'select * from book_user where user_uid=? and user_password=?'

// 로그인한 유저에게 보이는 메인 페이지
exports.mainUser = 'select * from book_info'