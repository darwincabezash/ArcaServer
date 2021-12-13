"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _schema = require("@graphql-tools/schema");

var _persona = require("./schemas/personas/persona.js");

var _tipoPersona = require("./schemas/personas/tipoPersona.js");

var _tipoProcesoS = require("./schemas/configuraciones/tipoProcesoS.js");

var _grupoS = require("./schemas/configuraciones/grupoS.js");

var _escuelaS = require("./schemas/configuraciones/escuelaS.js");

var _etapaS = require("./schemas/configuraciones/etapaS.js");

var _usuarioS = require("./schemas/personas/usuarioS");

var _permisoS = require("./schemas/configuraciones/permisoS");

var _personaR = require("./resolvers/personas/personaR.js");

var _tipoPersonaR = require("./resolvers/personas/tipoPersonaR.js");

var _tipoProcesoR = require("./resolvers/configuraciones/tipoProcesoR.js");

var _grupoR = require("./resolvers/configuraciones/grupoR.js");

var _escuelaR = require("./resolvers/configuraciones/escuelaR.js");

var _etapaR = require("./resolvers/configuraciones/etapaR.js");

var _usuarioR = require("./resolvers/personas/usuarioR");

var _permisoR = require("./resolvers/configuraciones/permisoR");

//Schemas
//Resolvers
var _default = (0, _schema.makeExecutableSchema)({
  typeDefs: [_persona.Persona, _tipoPersona.TipoPersona, _tipoProcesoS.TipoProcesoS, _grupoS.GrupoS, _escuelaS.EscuelaS, _etapaS.EtapaS, _usuarioS.UsuarioS, _permisoS.PermisoS],
  resolvers: [_personaR.PersonaR, _tipoPersonaR.TipoPersonaR, _tipoProcesoR.TipoProcesoR, _grupoR.GrupoR, _escuelaR.EscuelaR, _etapaR.EtapaR, _usuarioR.UsuarioR, _permisoR.PermisoR]
});

exports.default = _default;
//# sourceMappingURL=schema.js.map