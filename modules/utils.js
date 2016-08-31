const utils = {};

utils.serialize = function serialize(obj) {
  const str = [];
  Object.keys(obj).forEach((p) => {
    str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
  });
  return str.join('&');
};

utils.matchPath = function matchPath(path, idArray) {
  let count = 0;
  return path.split('/').map((p) => {
    const key = (p.charAt(0) === ':' && count < idArray.length) ? idArray[count++] : 'NO_KEY';
    return (p.charAt(0) === ':') ? key : p;
  }).join('/');
};

utils.isObject = function isObject(value) {
  const type = typeof value;
  return !!value && (type === 'object' || type === 'function');
};

utils.isFunction = function isFunction(value) {
  const funcTag = '[object Function]';
  const genTag = '[object GeneratorFunction]';
  const tag = this.isObject(value) ? Object.prototype.toString.call(value) : '';
  return tag === funcTag || tag === genTag;
};

module.exports = utils;
