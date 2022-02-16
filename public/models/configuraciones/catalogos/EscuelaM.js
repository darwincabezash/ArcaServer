"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const escuelaSchema = new _mongoose.Schema({
  /*firstName:{
      type:String,
      required:true
  },*/
  tipo: String,
  color: String,
  colorTextoNegro: Boolean
});

var _default = (0, _mongoose.model)("EscuelaM", escuelaSchema);

exports.default = _default;
//# sourceMappingURL=EscuelaM.js.map