import { makeExecutableSchema } from "@graphql-tools/schema";
import {resolvers} from "./resolvers";

const typeDefs = `

type Query{
    hello:String
    nuevo(name: String!):String
    greet(name: String!):String
    usandoDestructuracion(name: String):String
    task:[Task]
    user:[User]
    persona:[Persona]   
    tipoPersona:[TipoPersona]   
}

type Task{
    _id:ID
    title:String!
    description:String!
    number:Int
}

type User{
    _id:ID
    firstName:String
    lastName:String
    age:Int
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

type TipoPersona{
    _id:ID
    tipo:String
}



type Mutation{
    createTask(input:TaskInput):Task
    createUser(input:UserInput):User
    deleteUser(_id:ID):User
    updateUser(_id:ID,input:UserInput):User
    crearPersona(input:PersonaInput):Persona
    crearTipoPersona(input:TipoPersonaInput):TipoPersona
    eliminarTipoPersona(_id:ID):TipoPersona
    actualizarTipoPersona(_id:ID,input:TipoPersonaInput):TipoPersona

}

input TaskInput{
    title:String!
    description:String!
    number:Int 
}

input UserInput{
    firstName:String
    lastName:String
    age:Int
}

input PersonaInput{
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

input TipoPersonaInput{
    tipo:String
}


`;


export default makeExecutableSchema({
    typeDefs:typeDefs,
    resolvers:resolvers
});



/*

const typeDefs = `

type Query{
    hello:String
    nuevo(name: String!):String
    greet(name: String!):String
    usandoDestructuracion(name: String):String
    task:[Task]
    user:[User]
    persona:[Persona]   

}

type Task{
    _id:ID
    title:String!
    description:String!
    number:Int
}

type User{
    _id:ID
    firstName:String
    lastName:String
    age:Int
}

type Persona{
    _id:ID
    cedula:String
    primerNombre:String
    segundoNombre:String
    primerApellido:String
    segundoApellido:String
    telefono:String
    celular:String
    email:String
    sexo:String
    foto:String
}



type Mutation{
    createTask(input:TaskInput):Task
    createUser(input:UserInput):User
    deleteUser(_id:ID):User
    updateUser(_id:ID,input:UserInput):User
    crearPersona(input:PersonaInput):Persona

}

input TaskInput{
    title:String!
    description:String!
    number:Int 
}

input UserInput{
    firstName:String
    lastName:String
    age:Int
}

input PersonaInput{
    cedula:String
    primerNombre:String
    segundoNombre:String
    primerApellido:String
    segundoApellido:String
    telefono:String
    celular:String
    email:String
    sexo:String
    foto:String
}


`;

*/