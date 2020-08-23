'use strict';
module.exports = function({env}) {
  return {
    app_name: 'Test1',
    app_code: 'test1',
    port: env.PORT || 8080,
  };
};
