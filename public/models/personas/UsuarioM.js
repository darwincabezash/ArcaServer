"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const usuarioSchema = new _mongoose.Schema({
  usuario: String,
  password: String,
  _idPersona: String,
  codIglesia: String
});

var _default = (0, _mongoose.model)("UsuarioM", usuarioSchema);

exports.default = _default;
//# sourceMappingURL=UsuarioM.js.map