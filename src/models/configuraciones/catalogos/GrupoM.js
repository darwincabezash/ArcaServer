import {Schema, model  } from "mongoose";

const permSchema = new Schema({
    idPermiso:String,
    nombre:String
  });


const grupoSchema = new Schema({
    tipo:String,
    permisos:[permSchema]
});

export default model("GrupoM",grupoSchema);






/*


import {Schema, model  } from "mongoose";

const grupoSchema = new Schema({
    
    tipo:String,
    permisos:[Schema.Types.ObjectId]
});

export default model("GrupoM",grupoSchema);


*/