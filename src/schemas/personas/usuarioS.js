
export const UsuarioS=`
type Query{
    usuarios:[Usuario]
    usuario(input:UsuarioInput):[Usuario]
}

type Usuario{
    _id:ID
    usuario:String
    password:String
    _idPersona:String
}

input UsuarioInput{
    usuario:String
    password:String
    _idPersona:String
}

type Mutation{
    crearUsuario(input:UsuarioInput):Usuario
}

`
