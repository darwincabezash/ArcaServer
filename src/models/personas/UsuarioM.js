import {Schema, model  } from "mongoose";

const usuarioSchema = new Schema({
    usuario:String,
    password:String,
    permisos:[Schema.Types.ObjectId]
});

export default model("UsuarioM",usuarioSchema);