import { makeExecutableSchema } from "@graphql-tools/schema";

//Schemas
import {Persona} from "./schemas/personas/persona.js";
import {TipoPersona} from "./schemas/catalogos/tipoPersona.js";
import { TipoProcesoS } from "./schemas/catalogos/tipoProcesoS.js";
import { GrupoS } from "./schemas/catalogos/grupoS.js";
import { EscuelaS } from "./schemas/catalogos/escuelaS.js";
import { EtapaS } from "./schemas/catalogos/etapaS.js";
import {UsuarioS} from "./schemas/personas/usuarioS";
import { PermisoS } from "./schemas/catalogos/permisoS";
import { UtilidadesS } from "./schemas/utilidades/utilidadesS";
import { SeminarioS } from "./schemas/catalogos/seminarioS";
import { DiezmoS } from "./schemas/finanzas/diezmos/diezmoS";
import { IglesiaS } from "./schemas/privado/iglesia/iglesiaS";

import { typeDefsx } from "./schemas/catalogos/typeDefsx";


//Resolvers
import {PersonaR} from "./resolvers/personas/personaR.js";
import {TipoPersonaR} from "./resolvers/catalogos/tipoPersonaR.js";
import {TipoProcesoR} from "./resolvers/catalogos/tipoProcesoR.js";
import {GrupoR} from "./resolvers/catalogos/grupoR.js";
import {EscuelaR} from "./resolvers/catalogos/escuelaR.js";
import {EtapaR} from "./resolvers/catalogos/etapaR.js";
import { UsuarioR } from "./resolvers/personas/usuarioR";
import { PermisoR } from "./resolvers/catalogos/permisoR";
import { UtilidadesR } from "./resolvers/utilidades/utilidadesR";
import { SeminarioR } from "./resolvers/catalogos/seminarioR";
import { DiezmoR } from "./resolvers/finzanzas/diezmos/diezmoR";
import { IglesiaR } from "./resolvers/privado/iglesia/iglesiaR";

import {AutorLibroW } from "./resolvers/catalogos/autor";



export default makeExecutableSchema({
    typeDefs:[Persona,TipoPersona,TipoProcesoS,GrupoS,EscuelaS,EtapaS,UsuarioS,PermisoS,UtilidadesS,SeminarioS,DiezmoS,IglesiaS,typeDefsx],
    resolvers:[PersonaR,TipoPersonaR,TipoProcesoR,GrupoR,EscuelaR,EtapaR,UsuarioR,PermisoR,UtilidadesR,SeminarioR,DiezmoR,IglesiaR,AutorLibroW]
});





