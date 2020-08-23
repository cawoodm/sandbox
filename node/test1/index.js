'use strict';
const begin = (app, config) => {
  console.log(`Listening on http://localhost:${config.port}`);
  app.get('/', require('./routes/root')());
  app.all('/foo*', require('./routes/foo')({config}));
  app.use('/other', require('./routes/other')({config}));
  app.get('/ping', require('./routes/ping')({config}));
};
var sub2 = require('express')();
sub2.get("/", function(req, res){
  res.json({
    foo: "bar",
    baz: "quux"
  });
});

const app = require('express')();
const config = require('./config')({env: process.env});
begin(app, config);
app.listen(config.port);
