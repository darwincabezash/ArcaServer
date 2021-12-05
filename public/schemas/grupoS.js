"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GrupoS = void 0;
const GrupoS = "\ntype Query{\n    grupo:[Grupo]   \n}\n\ntype Grupo{\n    _id:ID\n    tipo:String\n}\n\ninput GrupoInput{\n    tipo:String\n}\n\ntype Mutation{\n    crearGrupo(input:GrupoInput):Grupo\n    eliminarGrupo(_id:ID):Grupo\n    actualizarGrupo(_id:ID,input:GrupoInput):Grupo\n}\n";
exports.GrupoS = GrupoS;
//# sourceMappingURL=grupoS.js.map