import PermisoM  from "../../models/configuraciones/PermisoM";

export const PermisoR = {
    Query: {
        async permiso() {
            return await PermisoM.find();
        }
    }
    
    , Mutation: {        
        //Crear Permiso
        async crearPermiso(_, { input }) {
            const nuevoPermiso = new PermisoM(input);
            await nuevoPermiso.save();
            return nuevoPermiso;
        }

    }

}
