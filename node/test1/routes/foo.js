'use strict';
module.exports = function({config}) {
  const foo = require('../services/foo')({config});
  return async function(req, res) {
    console.log('foo called');
    const params = requestToParams(req);
    const a = await foo.returnDataArray(params);
    res.send(a);
  };
  function requestToParams(req) {
    return {
      name: req.query.name,
      searchTerm: req.query.searchTerm,
      pageSize: parseInt(req.query.pageSize, 10) || 10,
      page: parseInt(req.query.page, 10) || 1,
      sort: req.query.sort,
      sortDir: req.query.sortDir,
    };
  }
};
