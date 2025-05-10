import { Schema, model } from "mongoose";

const skillSchema = new Schema({
  name: {
    type: String,
    required: true, 
  },
  rating: {
    type: Number,
    required: true, // rating from 1 to 10
    min: 1,
    max: 10,
  },
});

export default skillSchema;