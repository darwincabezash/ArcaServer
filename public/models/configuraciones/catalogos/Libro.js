"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const libroSchema = new _mongoose.Schema({
  title: String,
  content: String //stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
  //stories: [{ type: Schema.Types.ObjectId }]

});

var _default = (0, _mongoose.model)("Libro", libroSchema);

exports.default = _default;
//# sourceMappingURL=Libro.js.map