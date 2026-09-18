const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  experimentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Experiment', required: true },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['submitted', 'evaluated'], default: 'submitted' },
  marks: { type: Number, default: null },
  feedback: { type: String, default: null },
  evaluatedAt: { type: Date, default: null }
});

// Prevent duplicate submissions per student per experiment, speeds up progress queries
submissionSchema.index({ experimentId: 1, studentId: 1 }, { unique: true });

module.exports = mongoose.model('Submission', submissionSchema);
