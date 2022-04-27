import {Schema, model  } from "mongoose";

const seminarioSchema = new Schema({
    tipo:String,
    color:String
});

export default model("SeminarioM",seminarioSchema);