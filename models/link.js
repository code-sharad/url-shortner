const mongoose = require("mongoose");

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

const Link = mongoose.model("Link", linkSchema);
module.exports = Link;
