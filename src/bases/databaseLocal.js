//Clave de la base de datos
//eXUm9alHXEvVxNl1

var mongoose = require('mongoose');


//const url = 'mongodb+srv://DESARROLLO:x1012x1310xxxx@cluster0.vsjsk.mongodb.net/Desarrollo?retryWrites=true&w=majority';
         
const url = 'mongodb://127.0.0.1:27017/?replicaSet=MongoLocal&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';

export async function conectarMongoDB(){
  
try{
    mongoose.connect(url).th;
    var mongoDb = mongoose.connection;
  
  console.log('Connected successfully to server MongoDb');
}
catch(e){
    console.log('Error on connection: '+e);
}

}

