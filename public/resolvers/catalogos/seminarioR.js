"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SeminarioR = void 0;

require("core-js/modules/es.promise.js");

var _SeminarioM = _interopRequireDefault(require("../../models/configuraciones/catalogos/SeminarioM.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SeminarioR = {
  Query: {
    async seminario() {
      return await _SeminarioM.default.find();
    }

  },
  Mutation: {
    //Crear Seminario
    async crearSeminario(_, _ref) {
      let {
        input
      } = _ref;
      const nuevoSeminario = new _SeminarioM.default(input);
      await nuevoSeminario.save();
      return nuevoSeminario;
    },

    //Eliminar Seminario
    async eliminarSeminario(_, _ref2) {
      let {
        _id
      } = _ref2;
      var seminarioEliminado = await _SeminarioM.default.findByIdAndDelete(_id);
      return seminarioEliminado;
    },

    //Actualizar Seminario
    async actualizarSeminario(_, _ref3) {
      let {
        _id,
        input
      } = _ref3;
      return await _SeminarioM.default.findByIdAndUpdate(_id, input, {
        new: true
      });
    }

  }
};
exports.SeminarioR = SeminarioR;
//# sourceMappingURL=seminarioR.js.map