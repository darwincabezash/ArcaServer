"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EtapaR = void 0;

require("core-js/modules/es.promise.js");

var _EtapaM = _interopRequireDefault(require("../../models/configuraciones/EtapaM.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EtapaR = {
  Query: {
    async etapa() {
      return await _EtapaM.default.find();
    }

  },
  Mutation: {
    //Crear Etapa
    async crearEtapa(_, _ref) {
      let {
        input
      } = _ref;
      const nuevaEtapa = new _EtapaM.default(input);
      await nuevaEtapa.save();
      return nuevaEtapa;
    },

    //Eliminar Etapa
    async eliminarEtapa(_, _ref2) {
      let {
        _id
      } = _ref2;
      var etapaEliminada = await _EtapaM.default.findByIdAndDelete(_id);
      return etapaEliminada;
    },

    //Actualizar Etapa
    async actualizarEtapa(_, _ref3) {
      let {
        _id,
        input
      } = _ref3;
      return await _EtapaM.default.findByIdAndUpdate(_id, input, {
        new: true
      });
    }

  }
};
exports.EtapaR = EtapaR;
//# sourceMappingURL=etapaR.js.map