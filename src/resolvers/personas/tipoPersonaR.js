import TipoPersona from "../../models/personas/TipoPersona.js";

export const TipoPersonaR = {
    Query: {
        async tipoPersona() {
            return await TipoPersona.find();
        }
    }, Mutation: {        
        //Crear tipo Persona
        async crearTipoPersona(_, { input }) {
            const nuevoTipoPersona = new TipoPersona(input);
            await nuevoTipoPersona.save();
            return nuevoTipoPersona;
        },

        //Eliminar tipo Persona
        async eliminarTipoPersona(_, { _id }) {
            var tipoPersonaEliminado = await TipoPersona.findByIdAndDelete(_id);
            console.log(tipoPersonaEliminado);
            return tipoPersonaEliminado;
        },

        //Actualizar tipo Persona
        async actualizarTipoPersona(_, { _id,input }) {
           console.log(_id);
            console.log(input);
            return await TipoPersona.findByIdAndUpdate(_id, input, { new: true });
        },
    }

}
