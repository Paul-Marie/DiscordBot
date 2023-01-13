import { Schema, model } from 'mongoose';

// Channel's model used topost RSS flows
const channelSchema = new Schema({
  guild:   { type: String, required: true },
  channel: { type: String, required: true },
  author:  { type: String, required: true }
});

export default model("Channel", channelSchema);