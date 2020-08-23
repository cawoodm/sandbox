'use strict';
module.exports = function({config}) {
  return function(req, res) {
    console.log('ping called');
    res.write('<h1>One</h1>');
    res.end();
  };
};
