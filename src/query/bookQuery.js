exports.main = 'select * from bookStoreDB'
exports.signUp = 'insert into board_user(user_uid, user_password, user_name) values(?, ?, ?)'
exports.signIn = 'select type from board_user where user_uid=? and user_password=?'
exports.mypage = 'select user_uid, user_name from bookStoreDB'