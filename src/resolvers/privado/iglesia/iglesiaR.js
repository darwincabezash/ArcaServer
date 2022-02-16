import IglesiaM from "../../../models/privado/iglesia/IglesiaM.js"

export const IglesiaR = {
    Query: {
        async iglesia(_, { input }) {
            return await IglesiaM.find({"_id":input._id}).limit(1);
        },
        async iglesias() {
            return await IglesiaM.find();
        }
    }, Mutation: {        
        //Crear Iglesia
        async crearIglesia(_, { input }) {
            const nuevoIglesia = new IglesiaM(input);
            await nuevoIglesia.save();
            return nuevoIglesia;
        },

        //Eliminar Iglesia
        async eliminarIglesia(_, { _id }) {
            var iglesiaEliminada = await IglesiaM.findByIdAndDelete(_id);
            return iglesiaEliminada;
        },

        //Actualizar Iglesia
        async actualizarIglesia(_, { _id,input }) {
            return await IglesiaM.findByIdAndUpdate(_id, input, { new: true });
        },
    }

}
