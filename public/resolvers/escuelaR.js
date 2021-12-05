"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EscuelaR = void 0;

require("core-js/modules/es.promise.js");

var _EscuelaM = _interopRequireDefault(require("../models/EscuelaM.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EscuelaR = {
  Query: {
    async escuela() {
      return await _EscuelaM.default.find();
    }

  },
  Mutation: {
    //Crear Escuela
    async crearEscuela(_, _ref) {
      let {
        input
      } = _ref;
      const nuevaEscuela = new _EscuelaM.default(input);
      await nuevaEscuela.save();
      return nuevaEscuela;
    },

    //Eliminar Escuela
    async eliminarEscuela(_, _ref2) {
      let {
        _id
      } = _ref2;
      var escuelaEliminada = await _EscuelaM.default.findByIdAndDelete(_id);
      return escuelaEliminada;
    },

    //Actualizar Escuela
    async actualizarEscuela(_, _ref3) {
      let {
        _id,
        input
      } = _ref3;
      return await _EscuelaM.default.findByIdAndUpdate(_id, input, {
        new: true
      });
    }

  }
};
exports.EscuelaR = EscuelaR;
//# sourceMappingURL=escuelaR.js.map