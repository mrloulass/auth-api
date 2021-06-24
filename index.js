'use strict';

const {db} = require('./indexModel.js');

const server = require('./server.js');

db.sync().then(()=> {
  server.start(3000);
});
