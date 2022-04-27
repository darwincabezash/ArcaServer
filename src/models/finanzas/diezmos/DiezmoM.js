/*import { Schema, model } from "mongoose";

const transaccionSchema = new Schema({
    idPersona:String,
    monto:Schema.Types.Float=0.0
  });

const diezmoSchema = new Schema({
    estado:Boolean,
    fechaDiezmo:String,
    fechaCreacion: String,
    anio:Number,
    transaccion: [transaccionSchema]
});

export default model("Diezmo", diezmoSchema);
*/

import { Schema, model } from "mongoose";


const diezmoSchema = new Schema({
  estado: Boolean,
  dia: Number,
  mes: Number,
  anio:Number,
  fechaCreacion: String,
  idPersona: String,
  monto:Number
});

export default model("Diezmo", diezmoSchema);
