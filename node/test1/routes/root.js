'use strict';
module.exports = function(opts) {
  return function(req, res) {
    console.log('root called');
    res.send('<h1>Root</h1>');
  };
};
