import {Schema, model  } from "mongoose";
import {PermisoM} from "./PermisoM";

const usuarioSchema = new Schema({
    usuario:String,
    clave:String,
    permisos:[{
        type: Schema.Types.ObjectId,
        ref: "permiso"
    }]
});

export default model("UsuarioM",usuarioSchema);


/** permisos:[[{
        acceso:Number
    }]] */