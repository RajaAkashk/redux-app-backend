const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  grade: { type: String, required: true },
  gender: { type: String, required: true },
  marks: { type: Number, required: true },
  attendance: { type: Number, required: true },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = { Student };
