"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const permisoSchema = new _mongoose.Schema({
  nombre: String,
  estado: Boolean
});

var _default = (0, _mongoose.model)("PermisoM", permisoSchema);

exports.default = _default;
//# sourceMappingURL=PermisoM.js.map