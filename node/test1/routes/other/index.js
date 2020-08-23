'use strict';
module.exports = function({config}) {
  var otherApp = require('express')();
  otherApp.all("/one", require('./one')({config}));
  otherApp.get("/two", function(req, res){
    res.write('<h1>Two</h1>');
  });
  return otherApp;
};