"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const userSchema = new _mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: String,
  age: Number
});

var _default = (0, _mongoose.model)("User", userSchema);

exports.default = _default;
//# sourceMappingURL=User.js.map