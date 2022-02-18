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
    async personaIglesia(_, _ref) {
      let {
        input
      } = _ref;
      return await _Persona.default.find({
        "codIglesia": input.codIglesia,
        estado: {
          $in: [true, null]
        }
      });
    },

    async persona(_, _ref2) {
      let {
        input
      } = _ref2;
      return await _Persona.default.find({
        "_id": input._id
      }).limit(1);
    },

    async personas() {
      //return await Persona.find({ "estado": input._id });
      return await _Persona.default.find({
        estado: {
          $in: [true, null]
        }
      });
    },

    async personasEliminadas() {
      //return await Persona.find({ "estado": input._id });
      return await _Persona.default.find({
        estado: {
          $in: false
        }
      });
    },

    async personaCantidad() {
      return await _Persona.default.count();
    }

  },
  Mutation: {
    //Crear Persona
    async crearPersona(_, _ref3) {
      let {
        input
      } = _ref3;
      console.log(input);
      const nuevaPersona = new _Persona.default(input);
      await nuevaPersona.save();
      return nuevaPersona;
    },

    //Eliminar Persona
    async eliminarPersona(_, _ref4) {
      let {
        _id
      } = _ref4;
      var escuelaEliminada = await _Persona.default.findOneAndUpdate({
        _id: _id
      }, {
        estado: false
      }); //return escuelaEliminada;

      /*
                  var personaEliminada = await Persona.updateOne(
                      { _id: _id },
                      { $addToSet: { estado: false } }
         
                  )
                  */

      return escuelaEliminada;
    },

    //Actualizar Persona
    async actualizarPersona(_, _ref5) {
      let {
        _id,
        input
      } = _ref5;
      return await _Persona.default.findByIdAndUpdate(_id, input, {
        new: true
      });
    }

  }
};
exports.PersonaR = PersonaR;
//# sourceMappingURL=personaR.js.map