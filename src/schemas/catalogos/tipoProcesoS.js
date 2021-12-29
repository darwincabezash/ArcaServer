
export const TipoProcesoS=`
type Query{
    tipoProceso:[TipoProceso]   
    tipoProcesoCantidad:Int

}

type Mutation{
    crearTipoProceso(input:TipoProcesoInput):TipoProceso
    eliminarTipoProceso(_id:ID):TipoProceso
    actualizarTipoProceso(_id:ID,input:TipoProcesoInput):TipoProceso
}

type TipoProceso{
    _id:ID
    tipo:String
}

input TipoProcesoInput{
    tipo:String
}
`;