import {Schema, model  } from "mongoose";


const libroSchema = new Schema(
  {
    title: String,
    content: String,
    //stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
    //stories: [{ type: Schema.Types.ObjectId }]
  }
);
export default model("Libro",libroSchema);
