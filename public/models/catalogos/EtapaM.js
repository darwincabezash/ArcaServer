"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const etapaSchema = new _mongoose.Schema({
  /*firstName:{
      type:String,
      required:true
  },*/
  tipo: String,
  edadI: Number,
  edadF: Number
});

var _default = (0, _mongoose.model)("EtapaM", etapaSchema);

exports.default = _default;
//# sourceMappingURL=EtapaM.js.map