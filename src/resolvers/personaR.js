import Persona from "../models/Persona.js";

export const PersonaR = {
    Query: {
        async persona() {
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
