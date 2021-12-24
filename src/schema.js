import { makeExecutableSchema } from "@graphql-tools/schema";

//Schemas
import {Persona} from "./schemas/personas/persona.js";
import {TipoPersona} from "./schemas/personas/tipoPersona.js";
import { TipoProcesoS } from "./schemas/catalogos/tipoProcesoS.js";
import { GrupoS } from "./schemas/catalogos/grupoS.js";
import { EscuelaS } from "./schemas/catalogos/escuelaS.js";
import { EtapaS } from "./schemas/catalogos/etapaS.js";
import {UsuarioS} from "./schemas/personas/usuarioS";
import { PermisoS } from "./schemas/catalogos/permisoS";
import { UtilidadesS } from "./schemas/utilidades/utilidadesS";
import { SeminarioS } from "./schemas/catalogos/seminarioS";


//Resolvers
import {PersonaR} from "./resolvers/personas/personaR.js";
import {TipoPersonaR} from "./resolvers/personas/tipoPersonaR.js";
import {TipoProcesoR} from "./resolvers/catalogos/tipoProcesoR.js";
import {GrupoR} from "./resolvers/catalogos/grupoR.js";
import {EscuelaR} from "./resolvers/catalogos/escuelaR.js";
import {EtapaR} from "./resolvers/catalogos/etapaR.js";
import { UsuarioR } from "./resolvers/personas/usuarioR";
import { PermisoR } from "./resolvers/catalogos/permisoR";
import { UtilidadesR } from "./resolvers/utilidades/utilidadesR";
import {SeminarioR } from "./resolvers/catalogos/seminarioR";



export default makeExecutableSchema({
    typeDefs:[Persona,TipoPersona,TipoProcesoS,GrupoS,EscuelaS,EtapaS,UsuarioS,PermisoS,UtilidadesS,SeminarioS],
    resolvers:[PersonaR,TipoPersonaR,TipoProcesoR,GrupoR,EscuelaR,EtapaR,UsuarioR,PermisoR,UtilidadesR,SeminarioR]
});
