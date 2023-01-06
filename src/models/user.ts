import * as mongoose from 'mongoose';

// User model
const userSchema = new mongoose.Schema({
  id:   { type: String, required: true, unique: true     },
  lang: { type: Number, required: true, default: "fr-FR" },
});

export default mongoose.model("User", userSchema);
