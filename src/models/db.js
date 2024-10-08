const {MongoClient} = require('mongodb');

let singleton;

async function connect() {
    if (singleton) return singleton;

    const cliente = new MongoClient(process.env.DB_HOST);
    await cliente.connect();

    singleton = cliente.db(process.env.DB);
    return singleton;
}

let findAll = async (collection)=>{
    const db = await connect();
    return await db.collection(collection).find().toArray();
}

let findOne = async (collection, _id)=>{
    const db = await connect();
    let obj = await db.collection(collection).find({'id':new 
ObjectId(_id)}).toArray();
    if(obj)
        return obj[0];
    return false;
}

let updateOne= async (collection, object, param)=>{
    const db = await connect();
    let result= await db.collection(collection).updateOne(param, {$set: object}
);
    return result;
}

let insertOne = async (collection, object) => {
    const db = await connect();
    return await db.collection(collection).insertOne(object);
}
module.exports = {findAll, findOne, updateOne, insertOne}