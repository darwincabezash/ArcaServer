"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const grupoSchema = new _mongoose.Schema({
  /*firstName:{
      type:String,
      required:true
  },*/
  tipo: String
});

var _default = (0, _mongoose.model)("GrupoM", grupoSchema);

exports.default = _default;
//# sourceMappingURL=GrupoM.js.map