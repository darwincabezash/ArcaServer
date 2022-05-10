"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const permSchema = new _mongoose.Schema({
  idPermiso: String,
  nombre: String
});
const grupoSchema = new _mongoose.Schema({
  tipo: String,
  color: String,
  permisos: [permSchema]
});

var _default = (0, _mongoose.model)("GrupoM", grupoSchema);
/*


import {Schema, model  } from "mongoose";

const grupoSchema = new Schema({
    
    tipo:String,
    permisos:[Schema.Types.ObjectId]
});

export default model("GrupoM",grupoSchema);


*/


exports.default = _default;
//# sourceMappingURL=GrupoM.js.map