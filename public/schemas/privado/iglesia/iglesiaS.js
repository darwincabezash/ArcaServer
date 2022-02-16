"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IglesiaS = void 0;
const IglesiaS = "\ntype Query{\n    iglesia(input:IglesiaInput):[Iglesia]\n    iglesias:[Iglesia]\n}\n\ntype Iglesia{\n    _id:ID\n    nombreIglesia:String\n    estado:Boolean\n    logo:String\n}\n\ninput IglesiaInput{\n    _id:ID\n    nombreIglesia:String\n    estado:Boolean\n    logo:String\n}\n\ntype Mutation{\n    crearIglesia(input:IglesiaInput):Iglesia\n    eliminarIglesia(_id:ID):Iglesia\n    actualizarIglesia(_id:ID,input:IglesiaInput):Iglesia\n}\n";
/*





export const IglesiaS=`
type Query{
    iglesia:[Iglesia]
}

type Iglesia{
    _id:ID
    tipo:String
    permisosisos:[ID],
    estado:Boolean
}

input IglesiaInput{
    tipo:String,
    permisosisos:[ID]
}

type Mutation{
    crearIglesia(input:IglesiaInput):Iglesia
    eliminarIglesia(_id:ID):Iglesia
    actualizarIglesia(_id:ID,input:IglesiaInput):Iglesia
}
`



*/

exports.IglesiaS = IglesiaS;
//# sourceMappingURL=iglesiaS.js.map