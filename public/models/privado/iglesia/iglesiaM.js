"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const iglesiaSchema = new _mongoose.Schema({
  nombreIglesia: String,
  logo: String,
  estado: Boolean
});

var _default = (0, _mongoose.model)("IglesiaM", iglesiaSchema);

exports.default = _default;
//# sourceMappingURL=iglesiaM.js.map