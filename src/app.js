const express = require('express');
const routes = require('./routes');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use('/api', routes);

// Error handler
app.use(errorHandler);

module.exports = app;