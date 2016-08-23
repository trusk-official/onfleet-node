const Resource = require('../modules/Resource');

module.exports = function Recipients(api) {
  const resource = new Resource(api);
  resource.endpoints({
    create: {
      path: '/recipients',
      method: 'POST',
    },
    update: {
      path: '/recipients/:recipientId',
      method: 'PUT',
    },
    findByName: {
      path: '/recipients/name/:recipientName',
      method: 'GET',
    },
    findByPhone: {
      path: '/recipients/phone/:recipientPhone',
      method: 'GET',
    },
    retrieve: {
      path: '/recipients/:recipientId',
      method: 'GET',
    },
  });
  return resource;
};
