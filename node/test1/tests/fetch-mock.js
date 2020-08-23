'use strict';
module.exports = function({testData}) {
  return async function(url, options) {
    const data = testData.get(url) || findData(url) || die(`Could not find test data for url: ${url}`);
    return {
      async text() {
        return data;
      },
      async json() {
        return typeof data === 'string' ? JSON.parse(data) : data;
      },
    };
  };
  function findData(url) {
    // Find the first matching regex from those testData keys which are regular expressions
    return testData.get(Array.from(testData.keys()).filter((k) => k instanceof RegExp).find((r) => r.test(url)));
  }
  function die(m) {throw new Error(m);}
};
