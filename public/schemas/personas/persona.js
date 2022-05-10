"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Persona = void 0;
const Persona = "\ntype Query{\n    personasIglesia(input:PersonaInputTodoIglesia):[Persona]  \n    personasEliminadas:[Persona]   \n    persona(input:PersonaInputBuscarId):[Persona]\n    personaCantidad:Int \n    personas:[Persona] \n}\n\ntype Persona{\n    _id:ID\n    codIglesia:String\n    cedula:String\n    primerNombre:String\n    segundoNombre:String\n    primerApellido:String\n    segundoApellido:String\n    fechaNacimiento:String\n    telefono:String\n    celular:String\n    direccion:String\n    email:String\n    sexo:String\n    foto:String\n    tipoPersona:String\n    estado:Boolean\n\n\n    nombreIglesiaOrigen:String\n    cargoEjercido:String \n    tiempoPermanencia:Int\n    tieneCartaAutorizacion:Boolean\n    iglesiaLocal:Boolean\n\n    fechaLlegada:String\n    invitadoPor:String\n    observacionUbicacion:String\n    actividadLlegada:String\n\n    oracionFe:Boolean\n    fechaOracionFe:String\n    lugarOracionFe:String\n    responsableOracionFe:String\n\n    bautizmo:Boolean\n    fechaBautizmo:String\n    lugarBautizmo:String\n    responsableBautizmo:String\n\n    escuelasRef:[Escuela]!\n    tipoProcesosRef:[TipoProceso]!\n    gruposRef:[Grupo]!\n    seminariosRef:[Seminario]!\n\n    escuelas: [ID]\n    tipoProcesos:[TipoProceso]\n    grupos:[ID]\n    seminarios:[ID]\n\n    fechaRegistro:String\n}\n\n\n\n\n\ntype Escuela{\n    _id:ID\n    tipo:String\n    color:String\n    colorTextoNegro:Boolean\n}\n\ntype TipoProceso{\n    _id:ID\n    tipo:String\n}\n\ntype Grupo{\n    _id:ID\n    tipo:String\n    color:String\n}\n\ntype Seminario{\n    _id:ID\n    tipo:String\n    color:String\n}\n\n\n  \n\n\ninput PersonaInputBuscarId{\n    _id:ID\n}\n\ninput PersonaInputTodoIglesia{\n    codIglesia:String\n}\n\ninput PersonaInputTodo{\n    codIglesia:String\n    cedula:String\n    primerNombre:String\n    segundoNombre:String\n    primerApellido:String\n    segundoApellido:String\n    fechaNacimiento:String\n    telefono:String\n    celular:String\n    direccion:String\n    email:String\n    sexo:String\n    foto:String\n    tipoPersona:String,\n\n    nombreIglesiaOrigen:String\n    cargoEjercido:String \n    tiempoPermanencia:Int\n    tieneCartaAutorizacion:Boolean\n    iglesiaLocal:Boolean\n\n    fechaLlegada:String\n    invitadoPor:String\n    observacionUbicacion:String\n    actividadLlegada:String\n\n    oracionFe:Boolean\n    fechaOracionFe:String\n    lugarOracionFe:String\n    responsableOracionFe:String\n\n    bautizmo:Boolean\n    fechaBautizmo:String\n    lugarBautizmo:String\n    responsableBautizmo:String\n\n\n    escuelas: [ID]\n    tipoProcesos:[ID]\n    grupos:[ID]\n    seminarios:[ID]\n\n    fechaRegistro:String\n}\n\ninput EscuelaInput{\n    tipo:String\n    color:String\n    idEscuela:String\n    colorTextoNegro:Boolean\n}\n\ntype TipoProcesoInput{\n    tipo:String\n}\n\ntype GrupoInput{\n    tipo:String\n    color:String\n}\n\ntype SeminarioInput{\n    tipo:String\n    color:String\n}\n\n\ntype Mutation{\n    crearPersona(input:PersonaInputTodo):Persona\n    actualizarPersona(_id:ID,input:PersonaInputTodo):Persona\n    eliminarPersona(_id:ID):Persona\n}\n";
/*

export const Persona=`
type Query{
    personasIglesia(input:PersonaInputTodoIglesia):[Persona]  
    personasEliminadas:[Persona]   
    persona(input:PersonaInputBuscarId):[Persona]
    personaCantidad:Int 
    personas:[Persona] 
}

type Persona{
    _id:ID
    codIglesia:String
    cedula:String
    primerNombre:String
    segundoNombre:String
    primerApellido:String
    segundoApellido:String
    fechaNacimiento:String
    telefono:String
    celular:String
    direccion:String
    email:String
    sexo:String
    foto:String
    tipoPersona:String
    estado:Boolean


    nombreIglesiaOrigen:String
    cargoEjercido:String 
    tiempoPermanencia:Int
    tieneCartaAutorizacion:Boolean

    fechaLlegada:String
    invitadoPor:String
    observacionUbicacion:String
    actividadLlegada:String

    oracionFe:Boolean
    fechaOracionFe:String
    lugarOracionFe:String
    responsableOracionFe:String

    bautizmo:Boolean
    fechaBautizmo:String
    lugarBautizmo:String
    responsableBautizmo:String

    escuelasRef:[Escuela]!
    
    escuelas: [ID]
    tipoProcesos:[TipoProceso]
    grupos:[Grupo]
    seminarios:[Seminario]

    fechaRegistro:String
}





type Escuela{
    _id:ID
    tipo:String
    color:String
    colorTextoNegro:Boolean
}

type TipoProceso{
    _id:ID
    tipo:String
}

type Grupo{
    _id:ID
    tipo:String
    color:String
}

type Seminario{
    _id:ID
    tipo:String
    color:String
}


  


input PersonaInputBuscarId{
    _id:ID
}

input PersonaInputTodoIglesia{
    codIglesia:String
}

input PersonaInputTodo{
    codIglesia:String
    cedula:String
    primerNombre:String
    segundoNombre:String
    primerApellido:String
    segundoApellido:String
    fechaNacimiento:String
    telefono:String
    celular:String
    direccion:String
    email:String
    sexo:String
    foto:String
    tipoPersona:String,

    nombreIglesiaOrigen:String
    cargoEjercido:String 
    tiempoPermanencia:Int
    tieneCartaAutorizacion:Boolean

    fechaLlegada:String
    invitadoPor:String
    observacionUbicacion:String
    actividadLlegada:String

    oracionFe:Boolean
    fechaOracionFe:String
    lugarOracionFe:String
    responsableOracionFe:String

    bautizmo:Boolean
    fechaBautizmo:String
    lugarBautizmo:String
    responsableBautizmo:String


    escuelas: [ID]
    tipoProcesos:[TipoProcesoInput]
    grupos:[GrupoInput]
    seminarios:[SeminarioInput]

    fechaRegistro:String
}

input EscuelaInput{
    tipo:String
    color:String
    idEscuela:String
    colorTextoNegro:Boolean

}
input EscuelaInput1{
    idEscuela:[ID]
}

type TipoProcesoInput{
    tipo:String
}

type GrupoInput{
    tipo:String
    color:String
}

type SeminarioInput{
    tipo:String
    color:String
}


type Mutation{
    crearPersona(input:PersonaInputTodo):Persona
    actualizarPersona(_id:ID,input:PersonaInputTodo):Persona
    eliminarPersona(_id:ID):Persona
}
`


*/

exports.Persona = Persona;
//# sourceMappingURL=persona.js.map