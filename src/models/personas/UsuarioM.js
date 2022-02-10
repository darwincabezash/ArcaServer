import {Schema, model  } from "mongoose";

const usuarioSchema = new Schema({
    usuario:String,
    password: String,
    _idPersona: String,
    codIglesia: String
});

export default model("UsuarioM",usuarioSchema);