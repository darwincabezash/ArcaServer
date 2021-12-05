"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsuarioS = void 0;
const UsuarioS = "\ntype Query{\n    usuario:[Usuario]   \n}\n\ntype Usuario{\n    _id:ID\n    usuario:String\n    clave:String\n    permisos:[Permiso]\n}\n\ntype Permiso{\n    _id:ID\n    permiso:String\n}\n\ninput UsuarioInput{\n    usuario:String\n    clave:String\n    permisos:[ID]\n}\n\ntype Mutation{\n    crearUsuario(input:UsuarioInput):Usuario\n}\n\n \n\n";
/****permisos:[{
        _id:ID
        acceso:Number   
    }]* 
    
crearUsuario(input:UsuarioInput):Usuario


    input UsuarioInput{
    usaurio:String
    clave:String
    permisos:[{
        acceso:Number 
    }]
}


    
    permisos:[{
        acceso:Number   
    }]
    */

exports.UsuarioS = UsuarioS;
//# sourceMappingURL=usuarioS.js.map