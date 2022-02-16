import DiezmoM from "../../../models/finanzas/diezmos/DiezmoM"

export const DiezmoR = {
    Query: {
        async diezmo() {
            return await DiezmoM.find();
        },
/*
        async diezmoCantidad() {
            return await DiezmoM.count();
        },*/
        
    }, Mutation: {        
        //Crear Diezmo
        async crearDiezmo(_, { input }) {
            const nuevaDiezmo = new DiezmoM(input);
            await nuevaDiezmo.save();
            return nuevaDiezmo;
        },
/*
        //Eliminar Diezmo
        async eliminarDiezmo(_, { _id }) {
            var diezmoEliminado = await DiezmoM.findByIdAndDelete(_id);
            return diezmoEliminado;
        },

        //Actualizar Diezmo
        async actualizarDiezmo(_, { _id,input }) {
            return await DiezmoM.findByIdAndUpdate(_id, input, { new: true });
        },*/
    }

}
