import { Schema, model } from 'mongoose';
import * as config       from "../config.json";

// User model
const userSchema = new Schema({
  id:        { type: String, required: true, unique: true                   },
  lang:      { type: String, required: true, default: "fr-FR"               },
  balance:   { type: Number, required: true, default: config.defaultBalance },
  lastClaim: { type: Date                                                   },
});

export default model("User", userSchema);
