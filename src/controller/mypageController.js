const mypageService = require('../services/mypageService');

exports.mypage = async(req, res) => {
    try{
        let session = req.session.user_uid;
        let delivery = await mypageService.shipList(session);
        let card = await mypageService.cardList(session);
        return res.render('mypage', {session:session, delivery:delivery, card:card});
    }catch(err){
        return res.status(500).json(error);
    }
}

exports.shipDetail = async(req, res)=>{
    let {delivery_uid} = req.params;
    try{
        let detail = await mypageService.shipDetail(delivery_uid);
        return res.render('shipDetail', {detail:detail});
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.shipInsert = async(req, res) =>{
    let {delivery_code, delivery_adress, delivery_detail, deliver_uid} = req.body;
    let {book_user_user_uid} = req.params;
    try{
        await mypageService.shipInsert(deliver_uid, delivery_code, delivery_adress, delivery_detail, book_user_user_uid);
        return res.redirect('/mypage/main/'+book_user_user_uid);
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.shipInsertPage = async(req, res)=>{
    try{
        let session = req.session.user_uid;
        return res.render('shipInsert', {session:session});
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.shipUpdate = async(req, res)=>{
    let {delivery_code, delivery_adress, delivery_detail} = req.body;
    let {delivery_uid} = req.params;
    try{
        await mypageService.shipUpdate(delivery_code, delivery_adress, delivery_detail, delivery_uid);
        return res.redirect('/mypage/main/'+req.session.user_uid);
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.shipUpdatePage = async(req, res) => {
    let {delivery_uid} = req.params;
    try{
        let delivery = await mypageService.shipDetail(delivery_uid);
        let session = req.session.user_uid;
        return res.render('shipUpdate' ,{delivery:delivery, session:session});
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.shipDelete = async(req, res)=>{
    let {delivery_uid, book_user_user_uid} = req.params;
    try{
        await mypageService.shipDelete(delivery_uid, book_user_user_uid);
        return res.redirect('/mypage/main/' + book_user_user_uid);
    }catch{
        return res.status(500).json(err);
    }
}

exports.cardDetail = async(req, res) =>{
    let {card_uid} = req.params;
    try{
        let detail = await mypageService.cardDetail(card_uid);
        return res.render('cardDetail', {detail:detail});
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.cardInsert = async(req, res)=>{
    let{card_uid, card_period, card_kind, card_code} = req.body;
    let{book_user_user_uid} = req.params;
    try{
        await mypageService.cardInsert(card_uid, card_period, card_kind, card_code, book_user_user_uid);
        return res.redirect('/mypage/main/'+ book_user_user_uid);
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.cardInsertPage = async(req, res)=>{
    try{
        let session = req.session.user_uid;
        return res.render('cardInsert', {session:session});
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.cardUpdate = async(req, res)=>{
    let {card_code, card_period, card_kind} = req.body; 
    let {card_uid} = req.params;
    try{
        await mypageService.cardUpdate(card_code, card_period, card_kind, card_uid);
        return res.redirect('/mypage/main/'+req.session.user_uid);
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.cardUpdatePage = async(req, res)=>{
    const {card_uid} = req.params;
    try{
        let card =await mypageService.cardDetail(card_uid);
        let session = req.session.user_uid;
        return res.render('cardUpdate', {card:card, session:session});
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.cardDelete = async(req, res)=>{
    let {card_uid, book_user_user_uid} = req.params;
    try{
        await mypageService.cardDelete(card_uid, book_user_user_uid);
        return res.redirect('/mypage/main/'+book_user_user_uid);
    }catch(err){
        return res.status(500).json(err);
    }
}