const db = require("./db");
async function registrarUsuario(nick) {
    return await db.insertOne("usuario",{"nick": nick});

}
/*hoje*/
async function insertOne(collection, objeto){
    const db = await connect();
    return db.collection(collection).insertOne(objeto);
}

let buscarUsuario = async (idUser)=>{
    let user= await db.findOne("usuarios",idUser);
}
module.exports = {registrarUsuario}

