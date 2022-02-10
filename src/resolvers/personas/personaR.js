import Persona from "../../models/personas/Persona.js";

export const PersonaR = {
    Query: {
        async personaIglesia(_, { input }) {
            return await Persona.find({"codIglesia":input.codIglesia})
        },
        async persona(_, { input }) {
            return await Persona.find({"_id":input._id}).limit(1);
        },
        async personas() {
            //return await Persona.find({ "estado": input._id });
            return await Persona.find({ estado: { $in: [true, null] } });
        },
        async personasEliminadas() {
            //return await Persona.find({ "estado": input._id });
            return await Persona.find({ estado: { $in: false } });
        },
        async personaCantidad() {
            return await Persona.count();
        },
    }, Mutation: {        
        //Crear Persona
        async crearPersona(_, { input }) {
            console.log(input);
            const nuevaPersona = new Persona(input);
            await nuevaPersona.save();
            return nuevaPersona;
        },


        //Eliminar Persona
        async eliminarPersona(_, { _id }) {

            var escuelaEliminada = await Persona.findOneAndUpdate({ _id: _id },{estado:false});
            //return escuelaEliminada;
/*
            var personaEliminada = await Persona.updateOne(
                { _id: _id },
                { $addToSet: { estado: false } }
   
            )
            */
            return escuelaEliminada;
        },


        //Actualizar Persona
        async actualizarPersona(_, { _id,input }) {
            return await Persona.findByIdAndUpdate(_id, input, { new: true });
        },
    }

}
