import UsuarioM from "../../models/personas/UsuarioM.js"

export const UsuarioR = {
    Query: {
        async usuario(_, { input }) {
            return await UsuarioM.find({"usuario":input.usuario,"password":input.password}).limit(1);
        }
    }, Mutation: {        
        //Crear Usuario
        async crearUsuario(_, { input }) {
            const nuevo_Usuario = new UsuarioM(input);
            await nuevo_Usuario.save();
            return nuevo_Usuario;
        },

    }

}
