"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PermisoS = void 0;
const PermisoS = "\ntype Query{\n    permiso:[Permiso]   \n}\n\ntype Permiso{\n    _id:ID\n    nombre:String\n    estado:Boolean\n}\n\ninput PermisoInput{\n    nombre:String\n    estado:Boolean\n}\n\ntype Mutation{\n    crearPermiso(input:PermisoInput):Permiso\n}\n";
exports.PermisoS = PermisoS;
//# sourceMappingURL=permisoS.js.map