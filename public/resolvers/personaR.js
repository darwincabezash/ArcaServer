"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PersonaR = void 0;

require("core-js/modules/es.promise.js");

var _Persona = _interopRequireDefault(require("../models/Persona.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PersonaR = {
  Query: {
    async persona() {
      return await _Persona.default.find();
    }

  },
  Mutation: {
    //Crear Persona
    async crearPersona(_, _ref) {
      let {
        input
      } = _ref;
      console.log(input);
      const nuevaPersona = new _Persona.default(input);
      await nuevaPersona.save();
      return nuevaPersona;
    }

  }
};
exports.PersonaR = PersonaR;
//# sourceMappingURL=personaR.js.map