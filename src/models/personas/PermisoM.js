import mongoose from 'mongoose';
const Schema = mongoose.Schema;



const permisoSchema = new Schema({
    permiso: { type: String },
});

export const PermisoM = mongoose.model('PermisoM', permisoSchema);

