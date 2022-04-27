"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Persona = void 0;
const Persona = "\ntype Query{\n    personaIglesia(input:PersonaInputTodoIglesia):[Persona]\n    personas:[Persona]   \n    personasEliminadas:[Persona]   \n    persona(input:PersonaInputBuscarId):[Persona]\n    personaCantidad:Int\n\n\n\n    \n}\n\ntype Persona{\n    _id:ID\n    codIglesia:String\n    cedula:String\n    primerNombre:String\n    segundoNombre:String\n    primerApellido:String\n    segundoApellido:String\n    fechaNacimiento:String\n    telefono:String\n    celular:String\n    direccion:String\n    email:String\n    sexo:String\n    foto:String\n    tipoPersona:String\n    estado:Boolean\n\n\n    nombreIglesiaOrigen:String\n    cargoEjercido:String \n    tiempoPermanencia:Int\n    tieneCartaAutorizacion:Boolean\n\n    fechaLlegada:String\n    invitadoPor:String\n    observacionUbicacion:String\n    actividadLlegada:String\n\n    oracionFe:Boolean\n    fechaOracionFe:String\n    lugarOracionFe:String\n    responsableOracionFe:String\n\n    bautizmo:Boolean\n    fechaBautizmo:String\n    lugarBautizmo:String\n    responsableBautizmo:String\n\n    escuelas:[Escuela]\n    tipoProcesos:[TipoProceso]\n    grupos:[Grupo]\n    seminarios:[Seminario]\n\n    fechaRegistro:String\n}\n\ntype Escuela{\n    _id:ID\n    tipo:String\n    color:String\n    idEscuela:String\n    colorTextoNegro:Boolean\n\n}\n\ntype TipoProceso{\n    _id:ID\n    tipo:String\n}\n\ntype Grupo{\n    _id:ID\n    tipo:String\n    color:String\n}\n\ntype Seminario{\n    _id:ID\n    tipo:String\n    color:String\n}\n\n\n  \n\n\ninput PersonaInputBuscarId{\n    _id:ID\n}\n\ninput PersonaInputTodoIglesia{\n    codIglesia:String\n}\n\ninput PersonaInputTodo{\n    codIglesia:String\n    cedula:String\n    primerNombre:String\n    segundoNombre:String\n    primerApellido:String\n    segundoApellido:String\n    fechaNacimiento:String\n    telefono:String\n    celular:String\n    direccion:String\n    email:String\n    sexo:String\n    foto:String\n    tipoPersona:String,\n\n    nombreIglesiaOrigen:String\n    cargoEjercido:String \n    tiempoPermanencia:Int\n    tieneCartaAutorizacion:Boolean\n\n    fechaLlegada:String\n    invitadoPor:String\n    observacionUbicacion:String\n    actividadLlegada:String\n\n    oracionFe:Boolean\n    fechaOracionFe:String\n    lugarOracionFe:String\n    responsableOracionFe:String\n\n    bautizmo:Boolean\n    fechaBautizmo:String\n    lugarBautizmo:String\n    responsableBautizmo:String\n\n    escuelas:[EscuelaInput]\n    tipoProcesos:[TipoProcesoInput]\n    grupos:[GrupoInput]\n    seminarios:[SeminarioInput]\n\n    fechaRegistro:String\n}\n\ninput EscuelaInput{\n    tipo:String\n    color:String\n    idEscuela:String\n    colorTextoNegro:Boolean\n\n}\n\ntype TipoProcesoInput{\n    tipo:String\n}\n\ntype GrupoInput{\n    tipo:String\n    color:String\n}\n\ntype SeminarioInput{\n    tipo:String\n    color:String\n}\n\n\ntype Mutation{\n    crearPersona(input:PersonaInputTodo):Persona\n    actualizarPersona(_id:ID,input:PersonaInputTodo):Persona\n    eliminarPersona(_id:ID):Persona\n}\n";
exports.Persona = Persona;
//# sourceMappingURL=persona.js.map