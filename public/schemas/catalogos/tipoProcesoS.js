"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TipoProcesoS = void 0;
const TipoProcesoS = "\ntype Query{\n    tipoProceso:[TipoProceso]   \n}\n\ntype Mutation{\n    crearTipoProceso(input:TipoProcesoInput):TipoProceso\n    eliminarTipoProceso(_id:ID):TipoProceso\n    actualizarTipoProceso(_id:ID,input:TipoProcesoInput):TipoProceso\n}\n\ntype TipoProceso{\n    _id:ID\n    tipo:String\n}\n\ninput TipoProcesoInput{\n    tipo:String\n}\n";
exports.TipoProcesoS = TipoProcesoS;
//# sourceMappingURL=tipoProcesoS.js.map