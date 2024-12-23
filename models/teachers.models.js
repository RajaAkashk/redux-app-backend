const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  subject: { type: String, required: true },
  gender: { type: String, required: true },
  yearsOfExperience: { type: Number, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = { Teacher };
