import EtapaM from "../../models/catalogos/EtapaM.js"

export const EtapaR = {
    Query: {
        async etapa() {
            return await EtapaM.find();
        }
    }, Mutation: {        
        //Crear Etapa
        async crearEtapa(_, { input }) {
            const nuevaEtapa = new EtapaM(input);
            await nuevaEtapa.save();
            return nuevaEtapa;
        },

        //Eliminar Etapa
        async eliminarEtapa(_, { _id }) {
            var etapaEliminada = await EtapaM.findByIdAndDelete(_id);
            return etapaEliminada;
        },

        //Actualizar Etapa
        async actualizarEtapa(_, { _id,input }) {
            return await EtapaM.findByIdAndUpdate(_id, input, { new: true });
        },
    }

}
