
export const TipoPersona=`
type Query{
    tipoPersona:[TipoPersona]   
}

type Mutation{
    crearTipoPersona(input:TipoPersonaInput):TipoPersona
    eliminarTipoPersona(_id:ID):TipoPersona
    actualizarTipoPersona(_id:ID,input:TipoPersonaInput):TipoPersona
}

type TipoPersona{
    _id:ID
    tipo:String
}

input TipoPersonaInput{
    tipo:String
}
`;