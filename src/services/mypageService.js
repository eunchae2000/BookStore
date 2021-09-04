const mypageQuery = require('../query/mypageQuery');
const pool = require('../../middleware/bookData');

exports.mypage = async() =>{
    try{
        let main = await pool.query(mypageQuery.mypage)
        return main[0]
    }catch(err){
        console.log(err);
        throw Error(err)
    }
}

exports.deliveryList = async() =>{
    try{
        let delivery = await pool.query(mypageQuery.deliveryList);
        return delivery[0]
    }catch(err){
        console.log(err);
        throw Error(err);
    }
}

exports.cardList = async() =>{
    try{
        let card = await pool.query(mypageQuery.cardList);
        return card[0]
    }catch(err){
        console.log(err);
        throw Error(err);
    }
}

exports.shipInsert = async(delivery_code, delivery_adress, delivery_detail)=>{
    try{
        let insert = await pool.query(mypageQuery.shipInsert, [delivery_code, delivery_adress, delivery_detail]);
        return insert[0]
    }catch(err){
        throw Error(err)
    }
}

exports.shipUpdate = async(delivery_code, delivery_adress, delivery_detail) =>{
    try{
        let update = await pool.query(mypageQuery.shipUpdate, [delivery_code, delivery_adress, delivery_detail]);
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

exports.cardInsert = async(card_uid, card_period, card_kind)=>{
    try{
        let cardIns = await pool.query(mypageQuery.cardInsert, [card_uid, card_period, card_kind]);
        return cardIns[0]
    }catch(err){
        throw Error(err);
    }
}

exports.cardUpdate = async(card_uid, card_period, card_kind) =>{
    try{
        let cardUp = await pool.query(mypageQuery.cardUpdate, [card_uid, card_period, card_kind]);
        return cardUp[0]
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