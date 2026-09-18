const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Health check — confirms the server is up
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'skit-vlab-backend' });
});

// Route modules will be mounted here as we build them in later steps, e.g.:
// app.use('/auth', require('./routes/authRoutes'));
// app.use('/labs', require('./routes/labRoutes'));
// app.use('/experiments', require('./routes/experimentRoutes'));
// app.use('/submissions', require('./routes/submissionRoutes'));

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Central error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || 'Server error' });
});

module.exports = app;
