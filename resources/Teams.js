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
    upsertTask: {
      path: '/containers/teams/:teamId',
      method: 'PUT',
    },
  });
  return resource;
};
