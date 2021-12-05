"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsuarioR = void 0;

require("core-js/modules/es.promise.js");

var _UsuarioM = _interopRequireDefault(require("../models/UsuarioM"));

var _PermisoM = _interopRequireDefault(require("../models/PermisoM"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const UsuarioR = {
  Query: {
    async usuario() {
      return await _UsuarioM.default.find();
      /*
                  UsuarioM.
                  findOne({ title: 'Casino Royale' }).            
                  populate('permisos').
                  exec(function (err, usuario) {
                    console.log('RESULTADO ES: %s', usuario);
                    // prints "The author is Ian Fleming"
                  });
      */
    }

  },
  Mutation: {
    //Crear Usuario

    /*async crearUsuario(_, { input }) {
        console.log(input);
        /*const nuevoUsuario = new UsuarioM(input);
        await nuevoUsuario.save();
        return nuevoUsuario;
    },*/
    async crearUsuario(_, _ref) {
      let {
        input
      } = _ref;
      const permisoM = new _PermisoM.default();
      permisoM.permiso = "mi permiso";
      console.log(permisoM);
      permisoM.save(function (err) {
        if (err) return handleError(err);
      });
      const usuarioM = new _UsuarioM.default();
      usuarioM, usuario = "MI USUARIO";
      usuarioM.clave = "MI CLAVE";
      usuarioM.permisos.push(permisoM._id);
      console.log(usuarioM);
      usuarioM.save(function (err) {
        if (err) return handleError(err);
      });
      /*
                  author.save(function (err) {
                      if (err) return handleError(err);
      
                      const story1 = new Story({
                          title: 'Casino Royale',
                          author: author._id    // assign the _id from the person
                      });
      
                      story1.save(function (err) {
                          if (err) return handleError(err);
                          // that's it!
                      });
                  });*/
    }

  }
};
exports.UsuarioR = UsuarioR;
//# sourceMappingURL=usuarioR.js.map