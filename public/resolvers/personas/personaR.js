"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PersonaR = void 0;

require("core-js/modules/es.promise.js");

var _Persona = _interopRequireDefault(require("../../models/personas/Persona.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PersonaR = {
  Query: {
    async persona(_, _ref) {
      let {
        input
      } = _ref;
      return await _Persona.default.find({
        "_id": input._id
      }).limit(1);
    },

    async personas() {
      return await _Persona.default.find();
    }

  },
  Mutation: {
    //Crear Persona
    async crearPersona(_, _ref2) {
      let {
        input
      } = _ref2;
      console.log(input);
      const nuevaPersona = new _Persona.default(input);
      await nuevaPersona.save();
      return nuevaPersona;
    },

    //Actualizar Persona
    async actualizarPersona(_, _ref3) {
      let {
        _id,
        input
      } = _ref3;
      return await _Persona.default.findByIdAndUpdate(_id, input, {
        new: true
      });
    }

  }
};
exports.PersonaR = PersonaR;
//# sourceMappingURL=personaR.js.map