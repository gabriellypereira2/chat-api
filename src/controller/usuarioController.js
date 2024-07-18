const token = require("../util/token");
const usuarioMOdel = require('../models/usuarioModel');

exports.entrar=async(nick)=>{
    let resp = await usuarioMOdel.registrarUsuario(nick);
    if(resp.insertedId){
        return {"idUser":resp.insertedId,
                "token": await token.setToken(JSON.stringify(resp.insertedId).replace(/"/g, ''),nick),
                "nick":nick}
    }
}