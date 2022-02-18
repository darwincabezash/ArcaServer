"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = connect;

require("core-js/modules/es.promise.js");

//clave de la base de datos
//eXUm9alHXEvVxNl1
const {
  MongoClient
} = require('mongodb');

const url = 'mongodb+srv://darwin:eXUm9alHXEvVxNl1@cluster0.5szny.mongodb.net/PRUEBA?retryWrites=true&w=majority';

async function connect() {
  try {
    const dbName = 'PRUEBA';
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('usuarios'); // const findResult = await collection.find({}).toArray();
    //console.log('Found documents =>', findResult);

    const insertResult = await collection.insertOne({
      name: "ppppp",
      lastName: "cccc",
      city: "Cuenca"
    });
    console.log('Inserted documents =>', insertResult);
    console.log('Connected successfully to server');
  } catch (e) {
    console.log('Error on server: ' + e);
  }
}
//# sourceMappingURL=database2.js.map