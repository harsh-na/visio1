// models/File.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fileSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ["file", "folder"], required: true },
  parent: { type: Schema.Types.ObjectId, ref: "File" },
  children: [{ type: Schema.Types.ObjectId, ref: "File" }],
});

module.exports = mongoose.model("File", fileSchema);
