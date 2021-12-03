import { makeExecutableSchema } from "@graphql-tools/schema";

//Schemas
import {Persona} from "./schemas/persona.js";
import {TipoPersona} from "./schemas/tipoPersona.js";
import {User} from "./schemas/user.js";
import {Task} from "./schemas/task.js";
import { TipoProcesoS } from "./schemas/tipoProcesoS.js";


//Resolvers
import {PersonaR} from "./resolvers/personaR.js";
import {TipoPersonaR} from "./resolvers/tipoPersonaR.js";
import {TipoProcesoR} from "./resolvers/tipoProcesoR.js";


export default makeExecutableSchema({
    typeDefs:[Persona,TipoPersona,User,Task,TipoProcesoS],
    resolvers:[PersonaR,TipoPersonaR,TipoProcesoR]
});
