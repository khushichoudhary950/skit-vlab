const mongoose = require('mongoose');

const labSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subjectCode: { type: String, required: true },
  semester: { type: Number, required: true },
  branch: { type: String, required: true },
  description: { type: String }
});

module.exports = mongoose.model('Lab', labSchema);
