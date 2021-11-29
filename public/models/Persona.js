"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const personaSchema = new _mongoose.Schema({
  /*firstName:{
      type:String,
      required:true
  },*/
  cedula: String,
  primerNombre: String,
  segundoNombre: String,
  primerApellido: String,
  segundoApellido: String,
  telefono: String,
  celular: String,
  email: String,
  sexo: String,
  foto: String
});

var _default = (0, _mongoose.model)("Persona", personaSchema);

exports.default = _default;
//# sourceMappingURL=Persona.js.map