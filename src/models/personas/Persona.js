import {Schema, model  } from "mongoose";

const escuelaSchema = new Schema({
    tipo:String,
    color: String,
    idEscuela: String,
    colorTextoNegro:Boolean
  });

const tipoProcesoSchema = new Schema({
    tipo:String
});
  
const grupoSchema = new Schema({
    tipo:String,
    color:String
  });

const seminarioSchema = new Schema({
    tipo:String,
    color:String
  });


const personaSchema = new Schema({
    codIglesia:String,
    cedula:String,
    primerNombre:String,
    segundoNombre:String,
    primerApellido:String,
    segundoApellido:String,
    fechaNacimiento:String,
    telefono:String,
    celular:String,
    direccion:String,
    email:String,
    sexo:String,
    foto: String,
    tipoPersona: String,
    estado:Boolean,
    
    nombreIglesiaOrigen:String,
    cargoEjercido:String,
    tiempoPermanencia:Number,
    tieneCartaAutorizacion: Boolean,
    iglesiaLocal:Boolean,
    
    fechaLlegada:String,
    invitadoPor:String,
    observacionUbicacion:String,
    actividadLlegada: String,
    
    oracionFe:Boolean,
    fechaOracionFe:String,
    lugarOracionFe:String,
    responsableOracionFe: String,
    
    bautizmo:Boolean,
    fechaBautizmo:String,
    lugarBautizmo:String,
    responsableBautizmo: String,

    //escuelas: [{ type: Schema.Types.ObjectId }],
    escuelas: [{ type: Schema.Types.ObjectId }],
    tipoProcesos: [{ type: Schema.Types.ObjectId }],
    grupos: [{ type: Schema.Types.ObjectId }],
    seminarios: [{ type: Schema.Types.ObjectId }],
    //escuelas: [escuelaSchema],
    //tipoProcesos: [tipoProcesoSchema],
    //grupos: [grupoSchema],
    //seminarios:[seminarioSchema],

    fechaRegistro:String,
});

export default model("Persona", personaSchema);




/*

import {Schema, model  } from "mongoose";

const escuelaSchema = new Schema({
    tipo:String,
    color: String,
    idEscuela: String,
    colorTextoNegro:Boolean
  });

const tipoProcesoSchema = new Schema({
    tipo:String
});
  
const grupoSchema = new Schema({
    tipo:String,
    color:String
  });

const seminarioSchema = new Schema({
    tipo:String,
    color:String
  });


const personaSchema = new Schema({
    codIglesia:String,
    cedula:String,
    primerNombre:String,
    segundoNombre:String,
    primerApellido:String,
    segundoApellido:String,
    fechaNacimiento:String,
    telefono:String,
    celular:String,
    direccion:String,
    email:String,
    sexo:String,
    foto: String,
    tipoPersona: String,
    estado:Boolean,
    
    nombreIglesiaOrigen:String,
    cargoEjercido:String,
    tiempoPermanencia:Number,
    tieneCartaAutorizacion: Boolean,
    
    fechaLlegada:String,
    invitadoPor:String,
    observacionUbicacion:String,
    actividadLlegada: String,
    
    oracionFe:Boolean,
    fechaOracionFe:String,
    lugarOracionFe:String,
    responsableOracionFe: String,
    
    bautizmo:Boolean,
    fechaBautizmo:String,
    lugarBautizmo:String,
    responsableBautizmo: String,

    //escuelas: [{ type: Schema.Types.ObjectId }],
    escuelas: [{ type: Schema.Types.ObjectId }],
    //escuelas: [escuelaSchema],
    tipoProcesos: [tipoProcesoSchema],
    grupos: [grupoSchema],
    seminarios:[seminarioSchema],

    fechaRegistro:String,
});

export default model("Persona", personaSchema);


*/