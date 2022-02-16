"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GrupoR = void 0;

require("core-js/modules/es.promise.js");

var _GrupoM = _interopRequireDefault(require("../../models/configuraciones/catalogos/GrupoM.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GrupoR = {
  Query: {
    async grupo() {
      return await _GrupoM.default.find();
    }

  },
  Mutation: {
    //Crear Grupo
    async crearGrupo(_, _ref) {
      let {
        input
      } = _ref;
      const nuevoGrupo = new _GrupoM.default(input);
      await nuevoGrupo.save();
      return nuevoGrupo;
    },

    //Eliminar Grupo
    async eliminarGrupo(_, _ref2) {
      let {
        _id
      } = _ref2;
      var grupoEliminado = await _GrupoM.default.findByIdAndDelete(_id);
      return grupoEliminado;
    },

    //Actualizar Grupo
    async actualizarGrupo(_, _ref3) {
      let {
        _id,
        input
      } = _ref3;
      return await _GrupoM.default.findByIdAndUpdate(_id, input, {
        new: true
      });
    }

  }
};
exports.GrupoR = GrupoR;
//# sourceMappingURL=grupoR.js.map