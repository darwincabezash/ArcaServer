"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var _PermisoM = require("./PermisoM");

const usuarioSchema = new _mongoose.Schema({
  usuario: String,
  clave: String,
  permisos: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "permiso"
  }]
});

var _default = (0, _mongoose.model)("UsuarioM", usuarioSchema);
/** permisos:[[{
        acceso:Number
    }]] */


exports.default = _default;
//# sourceMappingURL=UsuarioM.js.map