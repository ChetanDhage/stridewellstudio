import { Schema, model } from "mongoose";
import { ROLES } from "./config/roles";

const roleSchema = new Schema({
  name: {
    type: String,
    required: true,
    enum: Object.values(ROLES),
    unique: true,
  },
});

export default model("Role", roleSchema);
