
export const PermisoS=`
type Query{
    permiso:[Permiso]   
}

type Permiso{
    _id:ID
    nombre:String
    estado:Boolean
}

input PermisoInput{
    nombre:String
    estado:Boolean
}

type Mutation{
    crearPermiso(input:PermisoInput):Permiso
}
`
