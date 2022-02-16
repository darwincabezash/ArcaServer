"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TipoPersona = void 0;
const TipoPersona = "\ntype Query{\n    tipoPersona:[TipoPersona]   \n}\n\ntype Mutation{\n    crearTipoPersona(input:TipoPersonaInput):TipoPersona\n    eliminarTipoPersona(_id:ID):TipoPersona\n    actualizarTipoPersona(_id:ID,input:TipoPersonaInput):TipoPersona\n}\n\ntype TipoPersona{\n    _id:ID\n    tipo:String\n}\n\ninput TipoPersonaInput{\n    tipo:String\n}\n";
exports.TipoPersona = TipoPersona;
//# sourceMappingURL=tipoPersona.js.map