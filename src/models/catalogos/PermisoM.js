import {Schema, model  } from "mongoose";

const permisoSchema = new Schema({
    nombre:String,
    estado:Boolean
});

export default model("PermisoM",permisoSchema);