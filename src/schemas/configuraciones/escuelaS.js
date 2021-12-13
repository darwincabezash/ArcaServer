
export const EscuelaS=`
type Query{
    escuela:[Escuela]   
}

type Escuela{
    _id:ID
    tipo:String
    color:String
}

input EscuelaInput{
    tipo:String
    color:String
}

type Mutation{
    crearEscuela(input:EscuelaInput):Escuela
    eliminarEscuela(_id:ID):Escuela
    actualizarEscuela(_id:ID,input:EscuelaInput):Escuela
}
`
