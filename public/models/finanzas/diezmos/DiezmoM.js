"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

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
const diezmoSchema = new _mongoose.Schema({
  estado: Boolean,
  dia: Number,
  mes: Number,
  anio: Number,
  fechaCreacion: String,
  idPersona: String,
  monto: Number
});

var _default = (0, _mongoose.model)("Diezmo", diezmoSchema);

exports.default = _default;
//# sourceMappingURL=DiezmoM.js.map