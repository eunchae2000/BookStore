const mypageQuery = require('../query/mypageQuery');
const pool = require('../../middleware/bookData');

exports.shipList = async(book_user_user_uid) =>{
    try{
        let delivery = await pool.query(mypageQuery.shipList, [book_user_user_uid]);
        return delivery[0]
    }catch(err){
        console.log(err);
        throw Error(err);
    }
}

exports.cardList = async(book_user_user_uid) =>{
    try{
        let card = await pool.query(mypageQuery.cardList, [book_user_user_uid]);
        return card[0]
    }catch(err){
        console.log(err);
        throw Error(err);
    }
}

exports.shipDetail = async(delivery_uid) =>{
    try{
        let detail = await pool.query(mypageQuery.shipDetail, [delivery_uid]);
        return detail[0]
    }catch(err){
        console.log(err);
        throw Error(err);
    }
}

exports.shipInsert = async(delivery_uid, delivery_code, delivery_adress, delivery_detail, book_user_user_uid)=>{
    try{
        let insert = await pool.query(mypageQuery.shipInsert, [delivery_uid, delivery_code, delivery_adress, delivery_detail, book_user_user_uid]);
        return insert[0]
    }catch(err){
        throw Error(err)
    }
}

exports.shipUpdate = async(delivery_code, delivery_adress, delivery_detail, delivery_uid, book_user_user_uid) =>{
    try{
        let update = await pool.query(mypageQuery.shipUpdate, [delivery_code, delivery_adress, delivery_detail, delivery_uid, book_user_user_uid]);
        return update[0]
    }catch(err){
        throw Error(err)
    }
}

exports.shipDelete = async(delivery_uid) =>{
    try{
        let del = await pool.query(mypageQuery.shipDelete, [delivery_uid]);
        return del[0]
    }catch(err){
        throw Error(err);
    }
}

exports.cardDetail = async(card_uid) =>{
    try{
        let detail = await pool.query(mypageQuery.cardDetail, [card_uid]);
        return detail[0]
    }catch(err){
        console.log(err)
        throw Error(err);
    }
}

exports.cardInsert = async(card_uid, card_period, card_kind, card_code)=>{
    try{
        let insert = await pool.query(mypageQuery.cardInsert, [card_code, card_kind, card_period, card_uid]);
        return insert[0]
    }catch(err){
        throw Error(err);
    }
}

exports.cardUpdate = async(card_code, card_period, card_kind, card_uid) =>{
    try{
        let update = await pool.query(mypageQuery.cardUpdate, [card_code, card_period, card_kind, card_uid]);
        return update[0]
    }catch(err){
        throw Error(err);
    }
}

exports.cardDelete = async(card_uid)=>{
    try{
        let cardDel = await pool.query(mypageQuery.cardDelete, [card_uid]);
        return cardDel[0]
    }catch(err){
        throw Error(err);
    }
}