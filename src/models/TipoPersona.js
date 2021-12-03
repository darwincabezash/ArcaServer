import {Schema, model  } from "mongoose";

const tipoPersonaSchema = new Schema({
    /*firstName:{
        type:String,
        required:true
    },*/
    tipo:String,
});

export default model("TipoPersona",tipoPersonaSchema);