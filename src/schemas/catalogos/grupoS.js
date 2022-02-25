
export const GrupoS = `
type Query{
    grupo:[Grupo]
    grupoCantidad:Int
}

type Grupo{
    _id:ID
    tipo:String
    permisos:[Perm]
}

type Perm{
    _id:String,
    idPermiso:String,
    nombre:String
}


input GrupoInput{
    tipo:String,
    permisos:[PermInput]
}

input PermInput{
    idPermiso:String,
    nombre:String
}

type Mutation{
    crearGrupo(input:GrupoInput):Grupo
    eliminarGrupo(_id:ID):Grupo
    actualizarGrupo(_id:ID,input:GrupoInput):Grupo
}
`




/*





export const GrupoS=`
type Query{
    grupo:[Grupo]
}

type Grupo{
    _id:ID
    tipo:String
    permisosisos:[ID],
    estado:Boolean
}

input GrupoInput{
    tipo:String,
    permisosisos:[ID]
}

type Mutation{
    crearGrupo(input:GrupoInput):Grupo
    eliminarGrupo(_id:ID):Grupo
    actualizarGrupo(_id:ID,input:GrupoInput):Grupo
}
`



*/