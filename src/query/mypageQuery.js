exports.shipList = 'select * from book_delivery where book_user_user_uid=?';
exports.shipInsert = 'insert into book_delivery(delivery_uid, delivery_code, delivery_adress, delivery_detail, book_user_user_uid) values(?, ?, ?, ?, ?)';
exports.shipUpdate = 'update book_delivery set delivery_code =?, delivery_adress=?, delivery_detail=? where delivery_uid=?';
exports.shipDelete = 'delete from book_delivery where delivery_uid=?';
exports.shipDetail = 'select * from book_delivery where delivery_uid=?'; 
exports.cardList = 'select * from book_card where book_user_user_uid=?';
exports.cardInsert = 'insert into book_card(card_uid, card_period, card_kind, card_code, book_user_user_uid) values(?, ?, ?, ?, ?)';
exports.cardUpdate = 'update book_card set card_code=?, card_kind=?, card_period=? where card_uid=?';
exports.cardDelete = 'delete from book_card where card_uid=?';
exports.cardDetail = 'select * from book_card where card_uid=?'
// 카드, 배송지 상세보기 추가