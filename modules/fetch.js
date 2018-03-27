require('es6-promise').polyfill();
const fetch = require('isomorphic-fetch');
const utils = require('./utils');

module.exports = function promiseFactory(params) {
  const query = Object.assign({}, params.query);
  const queryString = Object.getOwnPropertyNames(query).length ?
  `?${utils.serialize(query)}` :
  '';
  const protocol = (params.protocol || 'http');
  const port = (params.port ? `:${params.port}` : '');
  const key = (params.key ? `${params.key}@` : '');
  const basePath = (params.basePath || '');
  const version = (params.version ? `/${params.version}` : '');
  const url = `${protocol}://${key}${params.host}${port}${basePath}${version}${params.path}${queryString}`;
  const body = params.method &&
  ['post', 'put'].includes(params.method.toLowerCase()) ?
  JSON.stringify(params.body || {}) :
  undefined;
  return fetch(url, {
    method: params.method,
    headers: params.headers || {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  })
  .then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.text().then(function(text) {
        return Object.assign((text ? JSON.parse(text) : {}), {
          code: response.status,
        });
      });
    }
    return response.json().then((error) => {
      throw Object.assign(error, {
        code: response.status,
      });
    });
  });
};
