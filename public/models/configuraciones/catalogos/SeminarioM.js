"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const seminarioSchema = new _mongoose.Schema({
  tipo: String,
  color: String
});

var _default = (0, _mongoose.model)("SeminarioM", seminarioSchema);

exports.default = _default;
//# sourceMappingURL=SeminarioM.js.map