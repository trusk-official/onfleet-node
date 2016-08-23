const Resource = require('../modules/Resource');

module.exports = function Destinations(api) {
  const resource = new Resource(api);
  resource.endpoints({
    create: {
      path: '/destinations',
      method: 'POST',
    },
    retrieve: {
      path: '/destinations/:destinationId',
      method: 'GET',
    },
  });
  return resource;
};
