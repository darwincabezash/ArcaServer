"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EscuelaS = void 0;
const EscuelaS = "\ntype Query{\n    escuela:[Escuela]   \n}\n\ntype Escuela{\n    _id:ID\n    tipo:String\n    color:String\n}\n\ninput EscuelaInput{\n    tipo:String\n    color:String\n}\n\ntype Mutation{\n    crearEscuela(input:EscuelaInput):Escuela\n    eliminarEscuela(_id:ID):Escuela\n    actualizarEscuela(_id:ID,input:EscuelaInput):Escuela\n}\n";
exports.EscuelaS = EscuelaS;
//# sourceMappingURL=escuelaS.js.map