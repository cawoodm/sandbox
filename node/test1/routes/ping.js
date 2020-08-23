'use strict';
module.exports = function({config}) {
  return function(req, res) {
    console.log('ping called');
    res.write('<h1>Ping</h1>');
    res.write(`${process.platform}<br>`);
    for (let c in config) {
      res.write(`${c}=${config[c]}<br>`);
    }
    res.end();
  };
};
