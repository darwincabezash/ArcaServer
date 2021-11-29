import {Schema, model  } from "mongoose";

const personaSchema = new Schema({
    /*firstName:{
        type:String,
        required:true
    },*/
    cedula:String,
    primerNombre:String,
    segundoNombre:String,
    primerApellido:String,
    segundoApellido:String,
    telefono:String,
    celular:String,
    email:String,
    sexo:String,
    foto:String
});

export default model("Persona",personaSchema);