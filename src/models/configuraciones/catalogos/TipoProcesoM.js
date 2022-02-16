import {Schema, model  } from "mongoose";

const tipoProcesoSchema = new Schema({
    /*firstName:{
        type:String,
        required:true
    },*/
    tipo:String,
});

export default model("TipoProcesoM", tipoProcesoSchema);
