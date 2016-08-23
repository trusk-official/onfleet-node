const Resource = require('../modules/Resource');

module.exports = function Workers(api) {
  const resource = new Resource(api);
  resource.endpoints({
    create: {
      path: '/workers',
      method: 'POST',
    },
    list: {
      path: '/workers',
      method: 'GET',
    },
    retrieve: {
      path: '/workers/:workerId',
      method: 'GET',
    },
    update: {
      path: '/workers/:workerId',
      method: 'PUT',
    },
    delete: {
      path: '/workers/:workerId',
      method: 'DELETE',
    },
    upsertTask: {
      path: '/containers/workers/:workerId',
      method: 'PUT',
    },
  });
  return resource;
};
