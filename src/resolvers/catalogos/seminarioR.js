import SeminarioM from "../../models/catalogos/SeminarioM.js"

export const SeminarioR = {
    Query: {
        async seminario() {
            return await SeminarioM.find();
        }
    }, Mutation: {        
        //Crear Seminario
        async crearSeminario(_, { input }) {
            const nuevoSeminario = new SeminarioM(input);
            await nuevoSeminario.save();
            return nuevoSeminario;
        },

        //Eliminar Seminario
        async eliminarSeminario(_, { _id }) {
            var seminarioEliminado= await SeminarioM.findByIdAndDelete(_id);
            return seminarioEliminado;
        },

        //Actualizar Seminario
        async actualizarSeminario(_, { _id,input }) {
            return await SeminarioM.findByIdAndUpdate(_id, input, { new: true });
        },
    }

}
