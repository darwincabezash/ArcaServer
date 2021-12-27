"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SeminarioS = void 0;
const SeminarioS = "\ntype Query{\n    seminario:[Seminario]   \n}\n\ntype Seminario{\n    _id:ID\n    tipo:String\n    color:String\n}\n\ninput SeminarioInput{\n    tipo:String\n    color:String\n}\n\ntype Mutation{\n    crearSeminario(input:SeminarioInput):Seminario\n    eliminarSeminario(_id:ID):Seminario\n    actualizarSeminario(_id:ID,input:SeminarioInput):Seminario\n}\n";
exports.SeminarioS = SeminarioS;
//# sourceMappingURL=seminarioS.js.map