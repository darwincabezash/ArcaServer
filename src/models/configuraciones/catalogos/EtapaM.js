import {Schema, model  } from "mongoose";

const etapaSchema = new Schema({
    /*firstName:{
        type:String,
        required:true
    },*/
    tipo:String,
    edadI:Number,
    edadF:Number
});

export default model("EtapaM",etapaSchema);