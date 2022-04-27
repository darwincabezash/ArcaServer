"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const autorSchema = new _mongoose.Schema({
  name: String,
  libros: [{
    type: _mongoose.Schema.Types.ObjectId
  }]
});

var _default = (0, _mongoose.model)("Autor", autorSchema);

exports.default = _default;
//# sourceMappingURL=Autor.js.map