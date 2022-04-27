import Persona from "../../models/personas/Persona.js";
import {Schema, model  } from "mongoose";


export const PersonaR = {
    Query: {
        async personaIglesia(_, { input }) {
            return await Persona.find({"codIglesia":input.codIglesia , estado: { $in: [true, null] }})
        },
        /*async persona(_, { input }) {
            return await Persona.find({"_id":input._id}).limit(1);
        },
        async personas() {
            //return await Persona.find({ "estado": input._id });
            return await Persona.find({ estado: { $in: [true, null] } });
        },*/
    
          async persona(_, { input }) {
              return await Persona.find({ "_id": input._id }).limit(1);
              
              /*return await Persona.aggregate(
                  [
                       
                      {
                          $lookup: {
                              from: "escuelams",  //COLECCION FORANEA: poner el nombre de la coleccion de la base
                              localField: "escuelas",   //CAMPO LOCAL   
                              foreignField: "_id",    //CAMPO FORANEO
                            
                              as: "listaEscuelas"    //ALIAS
                          }
                      }, {
                          $pipeline: [
                              {
                                  "$match": {
                                      "$expr": {
                                          "$eq": [
                                              "$_id",
                                              input._id
                                          ]
                                      }
                                  }
                              },
                              {
                                  "$limit": 1
                              }
                          ],
                      
                    }
                ]
            );*/
              return p;
        },


        async personas() {
            const resultado = await Persona.aggregate(
                [
                    {
                        $lookup: {
                            from: "escuelams",  //COLECCION FORANEA: poner el nombre de la coleccion de la base
                            localField: "escuelas",   //CAMPO LOCAL   
                            foreignField: "_id",    //CAMPO FORANEO
                            as: "listaEscuelas"    //ALIAS
                        }
                    }
                ]
            );
            return resultado;
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
/*
            var personaEliminada = await Persona.updateOne(
                { _id: _id },
                { $addToSet: { estado: false } }
   
            )
            */
            return escuelaEliminada;
        },


        //Actualizar Persona
        async actualizarPersona(_, { _id,input }) {
            console.log(input);
            return await Persona.findByIdAndUpdate(_id, input, { new: true });
        },

        
    }

}
