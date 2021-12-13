import { makeExecutableSchema } from "@graphql-tools/schema";

//Schemas
import {Persona} from "./schemas/personas/persona.js";
import {TipoPersona} from "./schemas/personas/tipoPersona.js";
import { TipoProcesoS } from "./schemas/configuraciones/tipoProcesoS.js";
import { GrupoS } from "./schemas/configuraciones/grupoS.js";
import { EscuelaS } from "./schemas/configuraciones/escuelaS.js";
import { EtapaS } from "./schemas/configuraciones/etapaS.js";
import {UsuarioS} from "./schemas/personas/usuarioS";
import {PermisoS } from "./schemas/configuraciones/permisoS";


//Resolvers
import {PersonaR} from "./resolvers/personas/personaR.js";
import {TipoPersonaR} from "./resolvers/personas/tipoPersonaR.js";
import {TipoProcesoR} from "./resolvers/configuraciones/tipoProcesoR.js";
import {GrupoR} from "./resolvers/configuraciones/grupoR.js";
import {EscuelaR} from "./resolvers/configuraciones/escuelaR.js";
import {EtapaR} from "./resolvers/configuraciones/etapaR.js";
import { UsuarioR } from "./resolvers/personas/usuarioR";
import {PermisoR } from "./resolvers/configuraciones/permisoR";



export default makeExecutableSchema({
    typeDefs:[Persona,TipoPersona,TipoProcesoS,GrupoS,EscuelaS,EtapaS,UsuarioS,PermisoS],
    resolvers:[PersonaR,TipoPersonaR,TipoProcesoR,GrupoR,EscuelaR,EtapaR,UsuarioR,PermisoR]
});
