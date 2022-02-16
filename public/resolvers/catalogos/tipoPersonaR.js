"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TipoPersonaR = void 0;

require("core-js/modules/es.promise.js");

var _TipoPersona = _interopRequireDefault(require("../../models/configuraciones/catalogos/TipoPersona.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TipoPersonaR = {
  Query: {
    async tipoPersona() {
      return await _TipoPersona.default.find();
    }

  },
  Mutation: {
    //Crear tipo Persona
    async crearTipoPersona(_, _ref) {
      let {
        input
      } = _ref;
      const nuevoTipoPersona = new _TipoPersona.default(input);
      await nuevoTipoPersona.save();
      return nuevoTipoPersona;
    },

    //Eliminar tipo Persona
    async eliminarTipoPersona(_, _ref2) {
      let {
        _id
      } = _ref2;
      var tipoPersonaEliminado = await _TipoPersona.default.findByIdAndDelete(_id);
      console.log(tipoPersonaEliminado);
      return tipoPersonaEliminado;
    },

    //Actualizar tipo Persona
    async actualizarTipoPersona(_, _ref3) {
      let {
        _id,
        input
      } = _ref3;
      console.log(_id);
      console.log(input);
      return await _TipoPersona.default.findByIdAndUpdate(_id, input, {
        new: true
      });
    }

  }
};
exports.TipoPersonaR = TipoPersonaR;
//# sourceMappingURL=tipoPersonaR.js.map