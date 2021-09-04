exports.mypage = 'select * from book_delivery';
exports.deliveryList = 'select * from book_delivery';
exports.cardList = 'select * from book_card';
exports.shipInsert = 'insert into book_delivery(delivery_code, delivery_adress, delivery_detail) values(?, ?, ?)';
exports.shipUpdate = 'update book_delivery set delivery_code =?, delivery_adress=?, delivery_detail=? where delivery_uid=?';
exports.shipDelete = 'delete from book_delivery where delivery_uid=?';
exports.cardInsert = 'insert into book_card(card_uid, card_period, card_kind) values(?, ?, ?)';
exports.cardUpdate = 'update book_card set card_uid =?, card_period=?, card_kind=? where card_uid=?';
exports.cardDelete = 'delete from book_card where card_uid=?';