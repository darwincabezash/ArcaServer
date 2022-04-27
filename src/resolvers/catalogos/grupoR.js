import GrupoM from "../../models/configuraciones/catalogos/GrupoM.js"

export const GrupoR = {
    Query: {
        async grupo() {
            return await GrupoM.find();
        },
        async grupoCantidad() {
            return await GrupoM.count();
        }
    }, Mutation: {        
        //Crear Grupo
        async crearGrupo(_, { input }) {
            const nuevoGrupo = new GrupoM(input);
            await nuevoGrupo.save();
            return nuevoGrupo;
        },

        //Eliminar Grupo
        async eliminarGrupo(_, { _id }) {
            var grupoEliminado = await GrupoM.findByIdAndDelete(_id);
            return grupoEliminado;
        },

        //Actualizar Grupo
        async actualizarGrupo(_, { _id,input }) {
            return await GrupoM.findByIdAndUpdate(_id, input, { new: true });
        },
    }

}
