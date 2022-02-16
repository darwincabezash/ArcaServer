
export const Persona=`
type Query{
    personaIglesia(input:PersonaInputTodoIglesia):[Persona]
    personas:[Persona]   
    personasEliminadas:[Persona]   
    persona(input:PersonaInputBuscarId):[Persona]
    personaCantidad:Int



    
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

    escuelas:[Escuela]
    tipoProcesos:[TipoProceso]
    grupos:[Grupo]
    seminarios:[Seminario]

}

type Escuela{
    _id:ID
    tipo:String
    color:String
    idEscuela:String
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

    escuelas:[EscuelaInput]
    tipoProcesos:[TipoProcesoInput]
    grupos:[GrupoInput]
    seminarios:[SeminarioInput]

}

input EscuelaInput{
    tipo:String
    color:String
    idEscuela:String
    colorTextoNegro:Boolean

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
