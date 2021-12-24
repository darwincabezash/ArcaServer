"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EtapaS = void 0;
const EtapaS = "\ntype Query{\n    etapa:[Etapa]   \n}\n\ntype Etapa{\n    _id:ID\n    tipo:String\n    edadI:Int\n    edadF:Int\n}\n\ninput EtapaInput{\n    tipo:String\n    edadI:Int\n    edadF:Int\n}\n\ntype Mutation{\n    crearEtapa(input:EtapaInput):Etapa\n    eliminarEtapa(_id:ID):Etapa\n    actualizarEtapa(_id:ID,input:EtapaInput):Etapa\n}\n";
exports.EtapaS = EtapaS;
//# sourceMappingURL=etapaS.js.map