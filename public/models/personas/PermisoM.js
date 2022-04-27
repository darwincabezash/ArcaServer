"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PermisoM = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = _mongoose.default.Schema;
const permisoSchema = new Schema({
  permiso: {
    type: String
  }
});

const PermisoM = _mongoose.default.model('PermisoM', permisoSchema);

exports.PermisoM = PermisoM;
//# sourceMappingURL=PermisoM.js.map