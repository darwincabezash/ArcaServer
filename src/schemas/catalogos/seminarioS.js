
export const SeminarioS=`
type Query{
    seminario:[Seminario]   
}

type Seminario{
    _id:ID
    tipo:String
    color:String
}

input SeminarioInput{
    tipo:String
    color:String
}

type Mutation{
    crearSeminario(input:SeminarioInput):Seminario
    eliminarSeminario(_id:ID):Seminario
    actualizarSeminario(_id:ID,input:SeminarioInput):Seminario
}
`
