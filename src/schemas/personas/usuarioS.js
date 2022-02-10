
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
    codIglesia:String
}

input UsuarioInput{
    usuario:String
    password:String
    _idPersona:String
    codIglesia:String
}

type Mutation{
    crearUsuario(input:UsuarioInput):Usuario
}

`
