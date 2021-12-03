import { makeExecutableSchema } from "@graphql-tools/schema";

//Schemas
import {Persona} from "./schemas/persona.js";
import {TipoPersona} from "./schemas/tipoPersona.js";
import {User} from "./schemas/user.js";
import {Task} from "./schemas/task.js";
import { TipoProcesoS } from "./schemas/tipoProcesoS.js";
import { GrupoS } from "./schemas/grupoS.js";
import { EscuelaS } from "./schemas/escuelaS.js";


//Resolvers
import {PersonaR} from "./resolvers/personaR.js";
import {TipoPersonaR} from "./resolvers/tipoPersonaR.js";
import {TipoProcesoR} from "./resolvers/tipoProcesoR.js";
import {GrupoR} from "./resolvers/grupoR.js";
import {EscuelaR} from "./resolvers/escuelaR.js";


export default makeExecutableSchema({
    typeDefs:[Persona,TipoPersona,User,Task,TipoProcesoS,GrupoS,EscuelaS],
    resolvers:[PersonaR,TipoPersonaR,TipoProcesoR,GrupoR,EscuelaR]
});
