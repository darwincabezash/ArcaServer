//Clave de la base de datos
//eXUm9alHXEvVxNl1

var mongoose = require('mongoose');


const url = 'mongodb+srv://DESARROLLO:x1012x1310xxxx@cluster0.vsjsk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
         



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

