
export const UsuarioS=`
type Query{
    usuario:[Usuario]   
}

type Usuario{
    _id:ID
    usuario:String
    clave:String
    permisos:[Permiso]
}

type Permiso{
    _id:ID
    permiso:String
}

input UsuarioInput{
    usuario:String
    clave:String
    permisos:[ID]
}

type Mutation{
    crearUsuario(input:UsuarioInput):Usuario
}

 

`

/****permisos:[{
        _id:ID
        acceso:Number   
    }]* 
    
crearUsuario(input:UsuarioInput):Usuario


    input UsuarioInput{
    usaurio:String
    clave:String
    permisos:[{
        acceso:Number 
    }]
}


    
    permisos:[{
        acceso:Number   
    }]
    */