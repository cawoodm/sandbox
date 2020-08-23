'use strict';
module.exports = function({config}) {
  const fetch = global.fetch || require('node-fetch');
  return {
    sayHello(to) {
      return `Hello ${to}`;
    },
    async returnIP() {
      let res = await fetch('http://whatismyip.akamai.com/');
      return res.text();
    },
    async returnObject() {
      let res = await fetch('http://foo.com/');
      return await res.json();
    },
    async returnDataArray(params) {
      const res = await fetch('https://gist.githubusercontent.com/cbmgit/852c2702d4342e7811c95f8ffc2f017f/raw/InsuranceCompanies.json');
      const results = await res.json();
      const data = results['InsuranceCompanies']['Top Insurance Companies'];
      return pipe(data)(
        doMap,
        (d) => doFilter(d, 'name', params.searchTerm),
        (d) => doSort(d, params.sort, params.sortDir),
        (d) => doPaging(d, params.page, params.pageSize),
      );
    },
  };
  function pipe(x) {
    return (...fns) => fns.reduce((v, f) => f(v), x);
  }
  function apply(data, ...functions) {
    return functions.forEach((f) => {data = f(data);}) || data;
  }
  function doMap(data) {
    return data.map((d) => ({
      id: parseInt(d.No, 10),
      name: d.Name,
    }));
  }
  function doFilter(data, field, searchTerm) {
    return data.filter((d) => searchTerm ? d[field].indexOf(searchTerm) >= 0 : true);
  }
  function doSort(data, sort, sortDir) {
    const mul = sortDir === '0' ? -1 : 1;
    return sort ? data.sort((a, b) => mul * a[sort].localeCompare(b[sort])) : data;
  }
  function doPaging(data, page, pageSize) {
    return data.filter((d, i) => i >= (page - 1) * pageSize && i < page * pageSize);
  }
};
