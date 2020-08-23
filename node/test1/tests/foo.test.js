'use strict';
const testData = new Map();
testData.set('http://whatismyip.akamai.com/', 'I AM IN TEST MODE');
testData.set(/foo\.com/, {foo: 1, bar: 'Test Mode'});

global.fetch = require('./fetch-mock')({testData});
const foo = require('../services/foo')({});
console.clear();
(async () => {
  let ip = await foo.returnIP();
  console.log(ip);
  let obj = await foo.returnObject();
  console.log(obj.foo, obj.bar);
})();
