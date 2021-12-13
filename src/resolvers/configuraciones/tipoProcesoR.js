import TipoProcesoM from "../../models/configuraciones/TipoProcesoM.js";

export const TipoProcesoR = {
    Query: {
        async tipoProceso() {
            return await TipoProcesoM.find();
        }
    }, Mutation: {        
        //Crear tipo Proceso
        async crearTipoProceso(_, { input }) {
            const nuevoTipoProceso = new TipoProcesoM(input);
            await nuevoTipoProceso.save();
            return nuevoTipoProceso;
        },

        //Eliminar tipo Proceso
        async eliminarTipoProceso(_, { _id }) {
            var tipoProcesoEliminado = await TipoProcesoM.findByIdAndDelete(_id);
            return tipoProcesoEliminado;
        },

        //Actualizar tipo Proceso
        async actualizarTipoProceso(_, { _id,input }) {
            return await TipoProcesoM.findByIdAndUpdate(_id, input, { new: true });
        },
    }

}
