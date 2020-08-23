'use strict';
const begin = () => {
  console.log(`Listening on http://localhost:${config.port}`);
  app.get('/', require('./routes/root')());
  app.all('/foo*', require('./routes/foo')({config}));
  app.get('/ping', require('./routes/ping')({config}));
};

const app = require('express')();
const config = require('./config')({env: process.env});
app.listen(config.port, begin);
