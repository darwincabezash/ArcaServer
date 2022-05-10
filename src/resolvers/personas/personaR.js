import Persona from "../../models/personas/Persona.js";
import {Schema, model  } from "mongoose";


export const PersonaR = {
    Query: {

        //CONSULTA UNA UNICA PERSONA
        async persona(_, { input }) {
            //#region Ejemplo de consumo
            /*
                query{
                    persona(input:{_id:"61c3a9d0d508c857e7505cba"}) {
                        _id
                    }
                }
            */
            //#endregion
              return await Persona.find({ "_id": input._id }).limit(1); 
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
            return await Persona.find({ estado: { $in: [true, null] } });
        },
        
        //CONSULTA LAS PERSONAS AGERGANDO UNA DATO ADICIONAL (POBLACION O UNION DE DOS DOCUMENTOS) REQUIERE EL CODIGO DE LA IGLESIA
        async personasIglesia(_, { input }) {
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
                } ,{
                    $lookup: {
                        from: "tipoprocesoms",  //COLECCION FORANEA: poner el nombre de la coleccion de la base
                        localField: "tipoProcesos",   //CAMPO LOCAL   
                        foreignField: "_id",    //CAMPO FORANEO
                        as: "tipoProcesosRef",    //ALIAS
                    }
                } ,{
                    $lookup: {
                        from: "grupoms",  //COLECCION FORANEA: poner el nombre de la coleccion de la base
                        localField: "grupos",   //CAMPO LOCAL   
                        foreignField: "_id",    //CAMPO FORANEO
                        as: "gruposRef",    //ALIAS
                    }
                },{
                    $lookup: {
                        from: "seminarioms",  //COLECCION FORANEA: poner el nombre de la coleccion de la base
                        localField: "seminarios",   //CAMPO LOCAL   
                        foreignField: "_id",    //CAMPO FORANEO
                        as: "seminariosRef",    //ALIAS
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
            //console.log(input);
            return await Persona.findByIdAndUpdate(_id, input, { new: true });

      
        }

        
    }

}








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