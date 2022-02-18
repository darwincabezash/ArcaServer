"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PermisoR = void 0;

require("core-js/modules/es.promise.js");

var _PermisoM = _interopRequireDefault(require("../../models/configuraciones/catalogos/PermisoM"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PermisoR = {
  Query: {
    async permiso() {
      return await _PermisoM.default.find();
    }

  },
  Mutation: {
    //Crear Permiso
    async crearPermiso(_, _ref) {
      let {
        input
      } = _ref;
      const nuevoPermiso = new _PermisoM.default(input);
      await nuevoPermiso.save();
      return nuevoPermiso;
    }

  }
};
exports.PermisoR = PermisoR;
//# sourceMappingURL=permisoR.js.map