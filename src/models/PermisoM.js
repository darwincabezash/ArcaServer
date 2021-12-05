import {Schema, model  } from "mongoose";

const permisoSchema = new Schema({
    permiso:String
});

export default model("PermisoM",permisoSchema);




/** permisos:[[{
        acceso:Number
    }]] */