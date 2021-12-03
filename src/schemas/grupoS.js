
export const GrupoS=`
type Query{
    grupo:[Grupo]   
}

type Grupo{
    _id:ID
    tipo:String
}

input GrupoInput{
    tipo:String
}

type Mutation{
    crearGrupo(input:GrupoInput):Grupo
    eliminarGrupo(_id:ID):Grupo
    actualizarGrupo(_id:ID,input:GrupoInput):Grupo
}
`
