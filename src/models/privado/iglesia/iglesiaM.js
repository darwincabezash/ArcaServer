import {Schema, model  } from "mongoose";

const iglesiaSchema = new Schema({
    nombreIglesia:String,
    logo: String,
    estado:Boolean
});

export default model("IglesiaM",iglesiaSchema);