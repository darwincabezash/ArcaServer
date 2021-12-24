import {Schema, model  } from "mongoose";

const usuarioSchema = new Schema({
    usuario:String,
    password: String,
    _idPersona:String,
});

export default model("UsuarioM",usuarioSchema);