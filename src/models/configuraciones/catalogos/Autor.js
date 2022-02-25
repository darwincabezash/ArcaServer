import {Schema, model  } from "mongoose";



const autorSchema = new Schema({
  name: String,
  libros: [{ type: Schema.Types.ObjectId}]
});
export default model("Autor",autorSchema);
