const Resource = require('../modules/Resource');

module.exports = function Tasks(api) {
  const resource = new Resource(api);
  resource.endpoints({
    create: {
      path: '/tasks',
      method: 'POST',
    },
    list: {
      path: '/tasks/all',
      method: 'GET',
    },
    retrieve: {
      path: '/tasks/:taskId',
      method: 'GET',
    },
    update: {
      path: '/tasks/:taskId',
      method: 'PUT',
    },
    complete: {
      path: '/tasks/:taskId/complete',
      method: 'POST',
    },
    delete: {
      path: '/tasks/:taskId',
      method: 'DELETE',
    },
  });
  return resource;
};
