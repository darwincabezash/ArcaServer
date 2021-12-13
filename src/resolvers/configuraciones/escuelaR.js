import EscuelaM from "../../models/configuraciones/EscuelaM.js"

export const EscuelaR = {
    Query: {
        async escuela() {
            return await EscuelaM.find();
        }
    }, Mutation: {        
        //Crear Escuela
        async crearEscuela(_, { input }) {
            const nuevaEscuela = new EscuelaM(input);
            await nuevaEscuela.save();
            return nuevaEscuela;
        },

        //Eliminar Escuela
        async eliminarEscuela(_, { _id }) {
            var escuelaEliminada = await EscuelaM.findByIdAndDelete(_id);
            return escuelaEliminada;
        },

        //Actualizar Escuela
        async actualizarEscuela(_, { _id,input }) {
            return await EscuelaM.findByIdAndUpdate(_id, input, { new: true });
        },
    }

}
