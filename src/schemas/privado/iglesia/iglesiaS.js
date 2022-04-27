
export const IglesiaS = `
type Query{
    iglesia(input:IglesiaInput):[Iglesia]
    iglesias:[Iglesia]
}

type Iglesia{
    _id:ID
    nombreIglesia:String
    estado:Boolean
    logo:String
}

input IglesiaInput{
    _id:ID
    nombreIglesia:String
    estado:Boolean
    logo:String
}

type Mutation{
    crearIglesia(input:IglesiaInput):Iglesia
    eliminarIglesia(_id:ID):Iglesia
    actualizarIglesia(_id:ID,input:IglesiaInput):Iglesia
}
`




/*





export const IglesiaS=`
type Query{
    iglesia:[Iglesia]
}

type Iglesia{
    _id:ID
    tipo:String
    permisosisos:[ID],
    estado:Boolean
}

input IglesiaInput{
    tipo:String,
    permisosisos:[ID]
}

type Mutation{
    crearIglesia(input:IglesiaInput):Iglesia
    eliminarIglesia(_id:ID):Iglesia
    actualizarIglesia(_id:ID,input:IglesiaInput):Iglesia
}
`



*/