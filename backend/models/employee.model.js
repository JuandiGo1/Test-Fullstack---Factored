import { model, Schema } from "mongoose"
import Skill from "./skill.model.js"

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  skills: {
    type: [Skill],
    default: [],
  },
})

export default model("Employee", employeeSchema);