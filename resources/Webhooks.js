const Resource = require('../modules/Resource');

module.exports = function Webhooks(api) {
  const resource = new Resource(api);
  resource.endpoints({
    create: {
      path: '/webhooks',
      method: 'POST',
    },
    list: {
      path: '/webhooks',
      method: 'GET',
    },
    delete: {
      path: '/webhooks/:webhookId',
      method: 'DELETE',
    },
  });
  return resource;
};
