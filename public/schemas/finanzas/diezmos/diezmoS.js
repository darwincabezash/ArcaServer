"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DiezmoS = void 0;
const DiezmoS = "\ntype Query{\n    diezmo:[Diezmo]   \n}\n\ntype Diezmo{\n    _id:ID\n    estado:Boolean\n    dia: Int\n    mes: Int\n    anio:Int\n    fechaCreacion: String\n    idPersona: String\n    monto:Int\n}\n\ninput DiezmoInput{\n    estado:Boolean\n    dia: Int,\n    mes: Int,\n    anio:Int,\n    fechaCreacion: String,\n    idPersona: String,\n    monto:Int\n}\n\n\ntype Mutation{\n    crearDiezmo(input:DiezmoInput):Diezmo\n    \n}\n";
exports.DiezmoS = DiezmoS;
//# sourceMappingURL=diezmoS.js.map