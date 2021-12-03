import {Schema, model  } from "mongoose";

const grupoSchema = new Schema({
    /*firstName:{
        type:String,
        required:true
    },*/
    tipo:String,
});

export default model("GrupoM",grupoSchema);