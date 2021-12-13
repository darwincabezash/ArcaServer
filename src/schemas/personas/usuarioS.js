
export const UsuarioS=`
type Query{
    usuario(input:UsuarioInput):[Usuario]
}

type Usuario{
    _id:ID
    usuario:String
    password:String
    permisos:[ID]
}

input UsuarioInput{
    usuario:String
    password:String
    permisos:[ID]

}

type Mutation{
    crearUsuario(input:UsuarioInput):Usuario
}

`
