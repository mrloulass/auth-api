'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require('./api-server/src/error-handlers/500.js');
const notFound = require('./api-server/src/error-handlers/404.js');
const authRoutes = require('./auth-server/src/auth/routes.js');
// const v1Routes = require('./api-server/src/routes/v1.js');
const v2Routes = require('./api-server/src/routes/v2.js')
const logger = require ('./api-server/src/middleware/logger.js')
// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(logger);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(authRoutes);
app.use('/api/v2', v2Routes);
// Catchalls
app.use('*',notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log(`Server Up on ${PORT}`);
    });
  },
};
