const mypageService = require('../services/mypageService');

exports.shipInsert = async(req, res) =>{
    let {delivery_code, delivery_adress, delivery_detail} = req.body;
    try{
        await mypageService.shipInsert(delivery_code, delivery_adress, delivery_detail);
        return res.redirect('');
    }catch(err){
        console.log(err)
        return res.status(500).json(err);
    }
}

exports.shipInsertPage = async(req, res)=>{
    try{
        return res.render();
    }catch(err){
        return res.status(500).json(err);
    }
}