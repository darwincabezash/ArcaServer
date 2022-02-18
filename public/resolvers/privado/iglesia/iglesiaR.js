"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IglesiaR = void 0;

require("core-js/modules/es.promise.js");

var _IglesiaM = _interopRequireDefault(require("../../../models/privado/iglesia/IglesiaM.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const IglesiaR = {
  Query: {
    async iglesia(_, _ref) {
      let {
        input
      } = _ref;
      return await _IglesiaM.default.find({
        "_id": input._id
      }).limit(1);
    },

    async iglesias() {
      return await _IglesiaM.default.find();
    }

  },
  Mutation: {
    //Crear Iglesia
    async crearIglesia(_, _ref2) {
      let {
        input
      } = _ref2;
      const nuevoIglesia = new _IglesiaM.default(input);
      await nuevoIglesia.save();
      return nuevoIglesia;
    },

    //Eliminar Iglesia
    async eliminarIglesia(_, _ref3) {
      let {
        _id
      } = _ref3;
      var iglesiaEliminada = await _IglesiaM.default.findByIdAndDelete(_id);
      return iglesiaEliminada;
    },

    //Actualizar Iglesia
    async actualizarIglesia(_, _ref4) {
      let {
        _id,
        input
      } = _ref4;
      return await _IglesiaM.default.findByIdAndUpdate(_id, input, {
        new: true
      });
    }

  }
};
exports.IglesiaR = IglesiaR;
//# sourceMappingURL=iglesiaR.js.map