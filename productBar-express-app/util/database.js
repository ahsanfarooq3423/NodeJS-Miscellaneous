const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ahsanfarooq3423:mongodb8008@cluster0-wgwie.mongodb.net/shop?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
let _db;

const mongoConnect = callback => {
    client.connect(err => {
      _db =  client.db();  
      callback()
      console.log(err)
    });
}


const getDb = () => {
    if (_db) {
        return _db;
    }
}

exports.getDb = getDb;
exports.mongoConnect = mongoConnect

