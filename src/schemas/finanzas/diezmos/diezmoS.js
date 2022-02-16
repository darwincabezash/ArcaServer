
export const DiezmoS=`
type Query{
    diezmo:[Diezmo]   
}

type Diezmo{
    _id:ID
    estado:Boolean
    dia: Int
    mes: Int
    anio:Int
    fechaCreacion: String
    idPersona: String
    monto:Int
}

input DiezmoInput{
    estado:Boolean
    dia: Int,
    mes: Int,
    anio:Int,
    fechaCreacion: String,
    idPersona: String,
    monto:Int
}


type Mutation{
    crearDiezmo(input:DiezmoInput):Diezmo
    
}
`

