"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _schema = require("@graphql-tools/schema");

var _persona = require("./schemas/personas/persona.js");

var _tipoPersona = require("./schemas/catalogos/tipoPersona.js");

var _tipoProcesoS = require("./schemas/catalogos/tipoProcesoS.js");

var _grupoS = require("./schemas/catalogos/grupoS.js");

var _escuelaS = require("./schemas/catalogos/escuelaS.js");

var _etapaS = require("./schemas/catalogos/etapaS.js");

var _usuarioS = require("./schemas/personas/usuarioS");

var _permisoS = require("./schemas/catalogos/permisoS");

var _utilidadesS = require("./schemas/utilidades/utilidadesS");

var _seminarioS = require("./schemas/catalogos/seminarioS");

var _diezmoS = require("./schemas/finanzas/diezmos/diezmoS");

var _iglesiaS = require("./schemas/privado/iglesia/iglesiaS");

var _typeDefsx = require("./schemas/catalogos/typeDefsx");

var _personaR = require("./resolvers/personas/personaR.js");

var _tipoPersonaR = require("./resolvers/catalogos/tipoPersonaR.js");

var _tipoProcesoR = require("./resolvers/catalogos/tipoProcesoR.js");

var _grupoR = require("./resolvers/catalogos/grupoR.js");

var _escuelaR = require("./resolvers/catalogos/escuelaR.js");

var _etapaR = require("./resolvers/catalogos/etapaR.js");

var _usuarioR = require("./resolvers/personas/usuarioR");

var _permisoR = require("./resolvers/catalogos/permisoR");

var _utilidadesR = require("./resolvers/utilidades/utilidadesR");

var _seminarioR = require("./resolvers/catalogos/seminarioR");

var _diezmoR = require("./resolvers/finzanzas/diezmos/diezmoR");

var _iglesiaR = require("./resolvers/privado/iglesia/iglesiaR");

var _autor = require("./resolvers/catalogos/autor");

//Schemas
//Resolvers
var _default = (0, _schema.makeExecutableSchema)({
  typeDefs: [_persona.Persona, _tipoPersona.TipoPersona, _tipoProcesoS.TipoProcesoS, _grupoS.GrupoS, _escuelaS.EscuelaS, _etapaS.EtapaS, _usuarioS.UsuarioS, _permisoS.PermisoS, _utilidadesS.UtilidadesS, _seminarioS.SeminarioS, _diezmoS.DiezmoS, _iglesiaS.IglesiaS, _typeDefsx.typeDefsx],
  resolvers: [_personaR.PersonaR, _tipoPersonaR.TipoPersonaR, _tipoProcesoR.TipoProcesoR, _grupoR.GrupoR, _escuelaR.EscuelaR, _etapaR.EtapaR, _usuarioR.UsuarioR, _permisoR.PermisoR, _utilidadesR.UtilidadesR, _seminarioR.SeminarioR, _diezmoR.DiezmoR, _iglesiaR.IglesiaR, _autor.AutorLibroW]
});

exports.default = _default;
//# sourceMappingURL=schema.js.map