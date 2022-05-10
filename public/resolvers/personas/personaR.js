"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PersonaR = void 0;

require("core-js/modules/es.promise.js");

var _Persona = _interopRequireDefault(require("../../models/personas/Persona.js"));

var _mongoose = require("mongoose");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PersonaR = {
  Query: {
    //CONSULTA UNA UNICA PERSONA
    async persona(_, _ref) {
      let {
        input
      } = _ref;
      //#region Ejemplo de consumo

      /*
          query{
              persona(input:{_id:"61c3a9d0d508c857e7505cba"}) {
                  _id
              }
          }
      */
      //#endregion
      return await _Persona.default.find({
        "_id": input._id
      }).limit(1);
    },

    //CONSULTA TODAS LAS PERSONAS (DE TODAS LAS IGLESIAS) SIEMPRE Y CUANDO SU ESTADO SEA ACTIVO
    async personas() {
      //#region  Ejemplo de consumo

      /*
          query{
              personas 
          }
      */
      //#endregion
      return await _Persona.default.find({
        estado: {
          $in: [true, null]
        }
      });
    },

    //CONSULTA LAS PERSONAS AGERGANDO UNA DATO ADICIONAL (POBLACION O UNION DE DOS DOCUMENTOS) REQUIERE EL CODIGO DE LA IGLESIA
    async personasIglesia(_, _ref2) {
      let {
        input
      } = _ref2;
      //#region Ejemplo de consumo

      /*
          query{
              personasIglesia(input:{
                  codIglesia:"61fd5733a432a0b499e74252"
              }){
                  escuelasRef
              }
          }
      */
      //#endregion
      const resultadoPersonas = await _Persona.default.aggregate([{
        $match: {
          $and: [{
            codIglesia: {
              $eq: input.codIglesia
            }
          }, {
            estado: {
              $in: [true, null]
            }
          }]
        }
      }, {
        $lookup: {
          from: "escuelams",
          //COLECCION FORANEA: poner el nombre de la coleccion de la base
          localField: "escuelas",
          //CAMPO LOCAL   
          foreignField: "_id",
          //CAMPO FORANEO
          as: "escuelasRef" //ALIAS

        }
      }, {
        $lookup: {
          from: "tipoprocesoms",
          //COLECCION FORANEA: poner el nombre de la coleccion de la base
          localField: "tipoProcesos",
          //CAMPO LOCAL   
          foreignField: "_id",
          //CAMPO FORANEO
          as: "tipoProcesosRef" //ALIAS

        }
      }, {
        $lookup: {
          from: "grupoms",
          //COLECCION FORANEA: poner el nombre de la coleccion de la base
          localField: "grupos",
          //CAMPO LOCAL   
          foreignField: "_id",
          //CAMPO FORANEO
          as: "gruposRef" //ALIAS

        }
      }, {
        $lookup: {
          from: "seminarioms",
          //COLECCION FORANEA: poner el nombre de la coleccion de la base
          localField: "seminarios",
          //CAMPO LOCAL   
          foreignField: "_id",
          //CAMPO FORANEO
          as: "seminariosRef" //ALIAS

        }
      }]);
      return resultadoPersonas;
    },

    async personasEliminadas() {
      //return await Persona.find({ "estado": input._id });
      return await _Persona.default.find({
        estado: {
          $in: false
        }
      });
    },

    async personaCantidad() {
      return await _Persona.default.count();
    }

  },
  Mutation: {
    //Crear Persona
    async crearPersona(_, _ref3) {
      let {
        input
      } = _ref3;
      console.log(input);
      const nuevaPersona = new _Persona.default(input);
      await nuevaPersona.save();
      return nuevaPersona;
    },

    //Eliminar Persona
    async eliminarPersona(_, _ref4) {
      let {
        _id
      } = _ref4;
      var escuelaEliminada = await _Persona.default.findOneAndUpdate({
        _id: _id
      }, {
        estado: false
      }); //return escuelaEliminada;

      /*
                  var personaEliminada = await Persona.updateOne(
                      { _id: _id },
                      { $addToSet: { estado: false } }
         
                  )
                  */

      return escuelaEliminada;
    },

    //Actualizar Persona
    async actualizarPersona(_, _ref5) {
      let {
        _id,
        input
      } = _ref5;
      //console.log(input);
      return await _Persona.default.findByIdAndUpdate(_id, input, {
        new: true
      });
    }

  }
};
/**
 
import Persona from "../../models/personas/Persona.js";
import {Schema, model  } from "mongoose";


export const PersonaR = {
    Query: {
          async persona(_, { input }) {
              return await Persona.find({ "_id": input._id }).limit(1);
              
        },
        
        async personas() {
            //return await Persona.find({ "estado": input._id });
            return await Persona.find({ estado: { $in: [true, null] } });
        },
        
          
        async personasIglesia(_, { input }) {
            const resultadoPersonas = await Persona.aggregate([
                {
                    $match: {
                        $and: [
                            { codIglesia: { $eq: input.codIglesia } },
                            { estado: { $in: [true, null] } }
                        ]
                    }
                }, {
                    $lookup: {
                        from: "escuelams",  //COLECCION FORANEA: poner el nombre de la coleccion de la base
                        localField: "escuelas",   //CAMPO LOCAL   
                        foreignField: "_id",    //CAMPO FORANEO
                        as: "escuelasRef",    //ALIAS
                    }
                } 
                ]);
            return resultadoPersonas;
        },


        


        async personasEliminadas() {
            //return await Persona.find({ "estado": input._id });
            return await Persona.find({ estado: { $in: false } });
        },
        async personaCantidad() {
            return await Persona.count();
        },
    }, Mutation: {        
        //Crear Persona
        async crearPersona(_, { input }) {
            console.log(input);
            const nuevaPersona = new Persona(input);
            await nuevaPersona.save();
            return nuevaPersona;
        },


        //Eliminar Persona
        async eliminarPersona(_, { _id }) {

            var escuelaEliminada = await Persona.findOneAndUpdate({ _id: _id },{estado:false});
            //return escuelaEliminada;

            return escuelaEliminada;
        },


        //Actualizar Persona
        async actualizarPersona(_, { _id,input }) {
            //console.log(input);
            return await Persona.findByIdAndUpdate(_id, input, { new: true });

      
        }

        
    }

}




*/

exports.PersonaR = PersonaR;
//# sourceMappingURL=personaR.js.map