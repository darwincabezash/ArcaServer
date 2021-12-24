import Persona from "../../models/personas/Persona.js";

export const PersonaR = {
    Query: {
        async persona(_, { input }) {
            return await Persona.find({"_id":input._id}).limit(1);
        },
        async personas() {
            return await Persona.find();
        }
    }, Mutation: {        
        //Crear Persona
        async crearPersona(_, { input }) {
            console.log(input);
            const nuevaPersona = new Persona(input);
            await nuevaPersona.save();
            return nuevaPersona;
        },
    }

}
