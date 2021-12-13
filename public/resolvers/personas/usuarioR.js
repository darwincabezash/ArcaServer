"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsuarioR = void 0;

require("core-js/modules/es.promise.js");

var _UsuarioM = _interopRequireDefault(require("../../models/personas/UsuarioM.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UsuarioR = {
  Query: {
    async usuario(_, _ref) {
      let {
        input
      } = _ref;
      return await _UsuarioM.default.find({
        "usuario": input.usuario,
        "password": input.password
      }).limit(1);
    }

  },
  Mutation: {
    //Crear Usuario
    async crearUsuario(_, _ref2) {
      let {
        input
      } = _ref2;
      const nuevo_Usuario = new _UsuarioM.default(input);
      await nuevo_Usuario.save();
      return nuevo_Usuario;
    }

  }
};
exports.UsuarioR = UsuarioR;
//# sourceMappingURL=usuarioR.js.map