"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const escuelaSchema = new _mongoose.Schema({
  tipo: String,
  color: String,
  idEscuela: String,
  colorTextoNegro: Boolean
});
const tipoProcesoSchema = new _mongoose.Schema({
  tipo: String
});
const grupoSchema = new _mongoose.Schema({
  tipo: String,
  color: String
});
const seminarioSchema = new _mongoose.Schema({
  tipo: String,
  color: String
});
const personaSchema = new _mongoose.Schema({
  codIglesia: String,
  cedula: String,
  primerNombre: String,
  segundoNombre: String,
  primerApellido: String,
  segundoApellido: String,
  fechaNacimiento: String,
  telefono: String,
  celular: String,
  direccion: String,
  email: String,
  sexo: String,
  foto: String,
  tipoPersona: String,
  estado: Boolean,
  nombreIglesiaOrigen: String,
  cargoEjercido: String,
  tiempoPermanencia: Number,
  tieneCartaAutorizacion: Boolean,
  iglesiaLocal: Boolean,
  fechaLlegada: String,
  invitadoPor: String,
  observacionUbicacion: String,
  actividadLlegada: String,
  oracionFe: Boolean,
  fechaOracionFe: String,
  lugarOracionFe: String,
  responsableOracionFe: String,
  bautizmo: Boolean,
  fechaBautizmo: String,
  lugarBautizmo: String,
  responsableBautizmo: String,
  //escuelas: [{ type: Schema.Types.ObjectId }],
  escuelas: [{
    type: _mongoose.Schema.Types.ObjectId
  }],
  tipoProcesos: [{
    type: _mongoose.Schema.Types.ObjectId
  }],
  grupos: [{
    type: _mongoose.Schema.Types.ObjectId
  }],
  seminarios: [{
    type: _mongoose.Schema.Types.ObjectId
  }],
  //escuelas: [escuelaSchema],
  //tipoProcesos: [tipoProcesoSchema],
  //grupos: [grupoSchema],
  //seminarios:[seminarioSchema],
  fechaRegistro: String
});

var _default = (0, _mongoose.model)("Persona", personaSchema);
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


exports.default = _default;
//# sourceMappingURL=Persona.js.map