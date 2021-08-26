exports.signUp = 'insert into book_user (user_uid, user_password, user_name) values(?, ?, ?)'
exports.signIn = 'select * from book_user where user_uid=? and user_password=?'
exports.mainUser = 'select * from book_user'