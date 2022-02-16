"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const tipoPersonaSchema = new _mongoose.Schema({
  /*firstName:{
      type:String,
      required:true
  },*/
  tipo: String
});

var _default = (0, _mongoose.model)("TipoPersona", tipoPersonaSchema);

exports.default = _default;
//# sourceMappingURL=TipoPersona.js.map