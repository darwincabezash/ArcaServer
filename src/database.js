//Clave de la base de datos
//eXUm9alHXEvVxNl1

var mongoose = require('mongoose');


const url = 'mongodb+srv://darwin:eXUm9alHXEvVxNl1@cluster0.5szny.mongodb.net/PRUEBA?retryWrites=true&w=majority';

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

