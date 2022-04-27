"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsuarioS = void 0;
const UsuarioS = "\ntype Query{\n    usuarios:[Usuario]\n    usuario(input:UsuarioInput):[Usuario]\n}\n\ntype Usuario{\n    _id:ID\n    usuario:String\n    password:String\n    _idPersona:String\n    codIglesia:String\n}\n\ninput UsuarioInput{\n    usuario:String\n    password:String\n    _idPersona:String\n    codIglesia:String\n}\n\ntype Mutation{\n    crearUsuario(input:UsuarioInput):Usuario\n}\n\n";
exports.UsuarioS = UsuarioS;
//# sourceMappingURL=usuarioS.js.map