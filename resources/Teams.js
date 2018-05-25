const Resource = require('../modules/Resource');

module.exports = function Teams(api) {
  const resource = new Resource(api);
  resource.endpoints({
    list: {
      path: '/teams',
      method: 'GET',
    },
    create: {
      path: '/teams',
      method: 'POST',
    },
    retrieve: {
      path: '/teams/:teamId',
      method: 'GET',
    },
    update: {
      path: '/teams/:teamId',
      method: 'PUT',
    },
    upsertTask: {
      path: '/containers/teams/:teamId',
      method: 'PUT',
    },
    delete: {
      path: '/teams/:teamId',
      method: 'DELETE',
    },
  });
  return resource;
};
