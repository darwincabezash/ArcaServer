"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Persona = void 0;
const Persona = "\ntype Query{\n    persona:[Persona]   \n}\n\n\ntype Persona{\n    _id:ID\n    cedula:String\n    primerNombre:String\n    segundoNombre:String\n    primerApellido:String\n    segundoApellido:String\n    fechaNacimiento:String\n    telefono:String\n    celular:String\n    direccion:String\n    email:String\n    sexo:String\n    foto:String\n}\n\n\ninput PersonaInput{\n    cedula:String\n    primerNombre:String\n    segundoNombre:String\n    primerApellido:String\n    segundoApellido:String\n    fechaNacimiento:String\n    telefono:String\n    celular:String\n    direccion:String\n    email:String\n    sexo:String\n    foto:String\n}\n\ntype Mutation{\n    crearPersona(input:PersonaInput):Persona\n}\n";
exports.Persona = Persona;
//# sourceMappingURL=persona.js.map