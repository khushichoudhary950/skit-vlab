const mongoose = require('mongoose');

const experimentSchema = new mongoose.Schema({
  labId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lab', required: true },
  order: { type: Number, required: true },
  title: { type: String, required: true },
  objective: { type: String, required: true },
  theory: { type: String, required: true },
  steps: { type: [String], required: true },
  requiredTools: { type: [String], default: [] },
  sampleTask: { type: String, required: true }
});

module.exports = mongoose.model('Experiment', experimentSchema);
