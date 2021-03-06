exports.main = 'select book_name, book_publishing, book_writer, book_amount from book_info';
exports.bookRead = 'select * from book_info where book_uid=?';
exports.bookList = 'select * from book_info';
exports.bookInsert = 'insert into book_info(book_name, book_publishing, book_writer, book_amount, book_num, book_detail) values(?, ?, ?, ?, ?, ?)';
exports.bookPatch = 'update book_info set book_name =?, book_publishing=?, book_writer=?, book_amount=?, book_num=?, book_detail=? where book_uid=?';
exports.deleteBoard = 'delete from book_info where book_uid=?';