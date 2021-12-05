"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _schema = require("@graphql-tools/schema");

var _persona = require("./schemas/persona.js");

var _tipoPersona = require("./schemas/tipoPersona.js");

var _user = require("./schemas/user.js");

var _task = require("./schemas/task.js");

var _tipoProcesoS = require("./schemas/tipoProcesoS.js");

var _grupoS = require("./schemas/grupoS.js");

var _escuelaS = require("./schemas/escuelaS.js");

var _etapaS = require("./schemas/etapaS.js");

var _usuarioS = require("./schemas/usuarioS.js");

var _personaR = require("./resolvers/personaR.js");

var _tipoPersonaR = require("./resolvers/tipoPersonaR.js");

var _tipoProcesoR = require("./resolvers/tipoProcesoR.js");

var _grupoR = require("./resolvers/grupoR.js");

var _escuelaR = require("./resolvers/escuelaR.js");

var _etapaR = require("./resolvers/etapaR.js");

var _usuarioR = require("./resolvers/usuarioR.js");

//Schemas
//Resolvers
var _default = (0, _schema.makeExecutableSchema)({
  typeDefs: [_persona.Persona, _tipoPersona.TipoPersona, _user.User, _task.Task, _tipoProcesoS.TipoProcesoS, _grupoS.GrupoS, _escuelaS.EscuelaS, _etapaS.EtapaS, _usuarioS.UsuarioS],
  resolvers: [_personaR.PersonaR, _tipoPersonaR.TipoPersonaR, _tipoProcesoR.TipoProcesoR, _grupoR.GrupoR, _escuelaR.EscuelaR, _etapaR.EtapaR, _usuarioR.UsuarioR]
});

exports.default = _default;
//# sourceMappingURL=schema.js.map