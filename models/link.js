import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  longLink: {
    type: String,
    required: true,
  },
  shortLink: {
    type: String,
    required: true,
  },
  clicks: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Link", linkSchema);
