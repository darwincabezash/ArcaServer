"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _schema = require("@graphql-tools/schema");

var _resolvers = require("./resolvers");

const typeDefs = "\n\ntype Query{\n    hello:String\n    nuevo(name: String!):String\n    greet(name: String!):String\n    usandoDestructuracion(name: String):String\n    task:[Task]\n    user:[User]\n    persona:[Persona]   \n    tipoPersona:[TipoPersona]   \n}\n\ntype Task{\n    _id:ID\n    title:String!\n    description:String!\n    number:Int\n}\n\ntype User{\n    _id:ID\n    firstName:String\n    lastName:String\n    age:Int\n}\n\ntype Persona{\n    _id:ID\n    cedula:String\n    primerNombre:String\n    segundoNombre:String\n    primerApellido:String\n    segundoApellido:String\n    fechaNacimiento:String\n    telefono:String\n    celular:String\n    direccion:String\n    email:String\n    sexo:String\n    foto:String\n}\n\ntype TipoPersona{\n    _id:ID\n    tipo:String\n}\n\n\n\ntype Mutation{\n    createTask(input:TaskInput):Task\n    createUser(input:UserInput):User\n    deleteUser(_id:ID):User\n    updateUser(_id:ID,input:UserInput):User\n    crearPersona(input:PersonaInput):Persona\n    crearTipoPersona(input:TipoPersonaInput):TipoPersona\n    eliminarTipoPersona(_id:ID):TipoPersona\n    actualizarTipoPersona(_id:ID,input:TipoPersonaInput):TipoPersona\n\n}\n\ninput TaskInput{\n    title:String!\n    description:String!\n    number:Int \n}\n\ninput UserInput{\n    firstName:String\n    lastName:String\n    age:Int\n}\n\ninput PersonaInput{\n    cedula:String\n    primerNombre:String\n    segundoNombre:String\n    primerApellido:String\n    segundoApellido:String\n    fechaNacimiento:String\n    telefono:String\n    celular:String\n    direccion:String\n    email:String\n    sexo:String\n    foto:String\n}\n\ninput TipoPersonaInput{\n    tipo:String\n}\n\n\n";

var _default = (0, _schema.makeExecutableSchema)({
  typeDefs: typeDefs,
  resolvers: _resolvers.resolvers
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


exports.default = _default;
//# sourceMappingURL=schema copy.js.map