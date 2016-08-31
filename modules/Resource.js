const fetch = require('./fetch');
const utils = require('./utils');

function Resource(api) {
  Object.assign(this, api);
}

Resource.prototype.endpoints = function endpoints(endpts) {
  const that = this;
  Object.keys(endpts).forEach((key) => {
    that[key] = (...args) => {
      let arglist = Array.prototype.slice.call(args, 0);
      let lastarg = arglist[arglist.length - 1];
      const callback = (utils.isFunction(lastarg) ? lastarg : undefined);
      arglist = callback ? arglist.slice(0, -1) : arglist;
      lastarg = arglist[arglist.length - 1];
      const body = (utils.isObject(lastarg) ? lastarg : undefined);
      arglist = body ? arglist.slice(0, -1) : arglist;
      lastarg = arglist[arglist.length - 1];
      const path = utils.matchPath(endpts[key].path, arglist);
      const call = fetch(Object.assign({}, that.api, {
        path,
        method: endpts[key].method,
        body: endpts[key].method.toLowerCase() === 'get' ? undefined : body,
        query: endpts[key].method.toLowerCase() === 'get' ? body : undefined,
      }));
      return callback ? call.then((data) => {
        callback(null, data);
      }).catch((e) => {
        callback(e);
      }) : call;
    };
  });
};

module.exports = Resource;
