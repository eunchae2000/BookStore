exports.signUp = 'insert into board_user(user_uid, user_password, user_name) values(?, ?, ?)'
exports.logIn = 'select type from board_user where user_uid=? and user_password=?'