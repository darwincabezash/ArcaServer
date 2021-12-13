import {Schema, model  } from "mongoose";

const escuelaSchema = new Schema({
    /*firstName:{
        type:String,
        required:true
    },*/
    tipo:String,
    color:String
});

export default model("EscuelaM",escuelaSchema);