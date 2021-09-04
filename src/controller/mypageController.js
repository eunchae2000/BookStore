const { reset } = require('nodemon');
const mypageService = require('../services/mypageService');

exports.mypage = async(req, res) => {
    try{
        let main = await mypageService.mypage();
        let delivery = await mypageService.deliveryList();
        let card = await mypageService.cardList();
        return res.render('mypage', {main:main, delivery:delivery, card:card});
    }catch{
        return res.status(500).json(err);
    }
}

exports.deliveryList = async(req, res)=>{
    try{
        let delivery = await mypageService.deliveryList();
        return res.render('mypage', {delivery:delivery});
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.cardList = async(req, res) =>{
    try{
        let card = await mypageService.cardList();
        return res.render('mypage', {card:card});
    }catch(err){
        return res.status(500).json(err)
    }
}

exports.shipInsert = async(req, res) =>{
    let {delivery_code, delivery_adress, delivery_detail} = req.body;
    try{
        await mypageService.shipInsert(delivery_code, delivery_adress, delivery_detail);
        return res.redirect('/mypage/main');
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.shipInsertPage = async(req, res)=>{
    try{
        return res.render('shipInsert');
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.shipUpdate = async(req, res)=>{
    let {delivery_code, delivery_adress, delivery_detail} = req.body;
    try{
        await mypageService.shipUpdate(delivery_code, delivery_adress, delivery_detail);
        return res.redirect('/mypage/main');
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.shipUpdatePage = async(req, res) => {
    try{
        return res.render();
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.shipDelete = async(req, res)=>{
    let {delivery_uid} = req.params;
    try{
        await mypageService.shipDelete(delivery_uid);
        return res.redirect('/delete');
    }catch{
        return res.status(500).json(err);
    }
}

exports.cardInsert = async(req, res)=>{
    let{card_uid, card_period, card_kind} = req.body;
    try{
        let cardIns = await mypageService.cardInsert(card_uid, card_period, card_kind);
        return res.redirect('/mypage/main', {cardIns:cardIns});
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.cardInsertPage = async(req, res)=>{
    try{
        return res.render('cardInsert');
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.cardUpdate = async(req, res)=>{
    let {card_uid, card_period, card_kind} = req.body;
    try{
        let cardUp = await mypageService.cardUpdate(card_uid, card_period, card_kind);
        return res.redirect('/mypage/main', {cardUp:cardUp});
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.cardUpdatePage = async(req, res)=>{
    try{
        return red.render();
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.cardDelete = async(req, res)=>{
    let {card_uid} = req.params;
    try{
        let cardDel = await mypageService.cardDelete(card_uid);
        return red.redirect('/mypage/main', {cardDel});
    }catch(err){
        return res.status(500).json(err);
    }
}