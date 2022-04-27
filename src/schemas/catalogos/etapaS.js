
export const EtapaS=`
type Query{
    etapa:[Etapa]   
}

type Etapa{
    _id:ID
    tipo:String
    edadI:Int
    edadF:Int
}

input EtapaInput{
    tipo:String
    edadI:Int
    edadF:Int
}

type Mutation{
    crearEtapa(input:EtapaInput):Etapa
    eliminarEtapa(_id:ID):Etapa
    actualizarEtapa(_id:ID,input:EtapaInput):Etapa
}
`
