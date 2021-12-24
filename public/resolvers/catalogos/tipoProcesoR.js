"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TipoProcesoR = void 0;

require("core-js/modules/es.promise.js");

var _TipoProcesoM = _interopRequireDefault(require("../../models/catalogos/TipoProcesoM.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TipoProcesoR = {
  Query: {
    async tipoProceso() {
      return await _TipoProcesoM.default.find();
    }

  },
  Mutation: {
    //Crear tipo Proceso
    async crearTipoProceso(_, _ref) {
      let {
        input
      } = _ref;
      const nuevoTipoProceso = new _TipoProcesoM.default(input);
      await nuevoTipoProceso.save();
      return nuevoTipoProceso;
    },

    //Eliminar tipo Proceso
    async eliminarTipoProceso(_, _ref2) {
      let {
        _id
      } = _ref2;
      var tipoProcesoEliminado = await _TipoProcesoM.default.findByIdAndDelete(_id);
      return tipoProcesoEliminado;
    },

    //Actualizar tipo Proceso
    async actualizarTipoProceso(_, _ref3) {
      let {
        _id,
        input
      } = _ref3;
      return await _TipoProcesoM.default.findByIdAndUpdate(_id, input, {
        new: true
      });
    }

  }
};
exports.TipoProcesoR = TipoProcesoR;
//# sourceMappingURL=tipoProcesoR.js.map