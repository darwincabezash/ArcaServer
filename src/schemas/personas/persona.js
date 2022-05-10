
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
    iglesiaLocal:Boolean

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
    tipoProcesosRef:[TipoProceso]!
    gruposRef:[Grupo]!
    seminariosRef:[Seminario]!

    escuelas: [ID]
    tipoProcesos:[TipoProceso]
    grupos:[ID]
    seminarios:[ID]

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
    iglesiaLocal:Boolean

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
    tipoProcesos:[ID]
    grupos:[ID]
    seminarios:[ID]

    fechaRegistro:String
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