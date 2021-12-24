
export const Persona=`
type Query{
    personas:[Persona]   
    persona(input:PersonaInputBuscarId):[Persona]
}

type Persona{
    _id:ID
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
}


input PersonaInputBuscarId{
    _id:ID
}

input PersonaInputTodo{
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
}

type Mutation{
    crearPersona(input:PersonaInputTodo):Persona
}
`
