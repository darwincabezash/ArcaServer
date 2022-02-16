import {Schema, model  } from "mongoose";

const escuelaSchema = new Schema({
    /*firstName:{
        type:String,
        required:true
    },*/
    tipo:String,
    color: String,
    colorTextoNegro:Boolean
});

export default model("EscuelaM",escuelaSchema);