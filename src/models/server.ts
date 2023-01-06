import * as mongoose from 'mongoose';
import * as config from "../config.json";

// Discord' server model
const serverSchema = new mongoose.Schema({
  id:     { type: String, required: true,  unique: true                  },
  name:   { type: String, required: true                                 },
  lang:   { type: String, required: true,  default: "fr-FR"              },
  prefix: { type: String, required: false, default: config.defaultPrefix }
});

export default mongoose.model("Server", serverSchema);
