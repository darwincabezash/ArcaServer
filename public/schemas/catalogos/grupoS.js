"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GrupoS = void 0;
const GrupoS = "\ntype Query{\n    grupo:[Grupo]\n}\n\ntype Grupo{\n    _id:ID\n    tipo:String\n    permisos:[Perm]\n}\n\ntype Perm{\n    _id:String,\n    idPermiso:String,\n    nombre:String\n}\n\n\ninput GrupoInput{\n    tipo:String,\n    permisos:[PermInput]\n}\n\ninput PermInput{\n    idPermiso:String,\n    nombre:String\n}\n\ntype Mutation{\n    crearGrupo(input:GrupoInput):Grupo\n    eliminarGrupo(_id:ID):Grupo\n    actualizarGrupo(_id:ID,input:GrupoInput):Grupo\n}\n";
/*





export const GrupoS=`
type Query{
    grupo:[Grupo]
}

type Grupo{
    _id:ID
    tipo:String
    permisosisos:[ID],
    estado:Boolean
}

input GrupoInput{
    tipo:String,
    permisosisos:[ID]
}

type Mutation{
    crearGrupo(input:GrupoInput):Grupo
    eliminarGrupo(_id:ID):Grupo
    actualizarGrupo(_id:ID,input:GrupoInput):Grupo
}
`



*/

exports.GrupoS = GrupoS;
//# sourceMappingURL=grupoS.js.map