"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DiezmoR = void 0;

require("core-js/modules/es.promise.js");

var _DiezmoM = _interopRequireDefault(require("../../../models/finanzas/diezmos/DiezmoM"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DiezmoR = {
  Query: {
    async diezmo() {
      return await _DiezmoM.default.find();
    }
    /*
            async diezmoCantidad() {
                return await DiezmoM.count();
            },*/


  },
  Mutation: {
    //Crear Diezmo
    async crearDiezmo(_, _ref) {
      let {
        input
      } = _ref;
      const nuevaDiezmo = new _DiezmoM.default(input);
      await nuevaDiezmo.save();
      return nuevaDiezmo;
    }
    /*
            //Eliminar Diezmo
            async eliminarDiezmo(_, { _id }) {
                var diezmoEliminado = await DiezmoM.findByIdAndDelete(_id);
                return diezmoEliminado;
            },
    
            //Actualizar Diezmo
            async actualizarDiezmo(_, { _id,input }) {
                return await DiezmoM.findByIdAndUpdate(_id, input, { new: true });
            },*/


  }
};
exports.DiezmoR = DiezmoR;
//# sourceMappingURL=diezmoR.js.map