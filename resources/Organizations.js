const Resource = require('../modules/Resource');

module.exports = function Organizations(api) {
  const resource = new Resource(api);
  resource.endpoints({
    details: {
      path: '/organization',
      method: 'GET',
    },
    delegateeDetails: {
      path: '/organizations/:organizationId',
      method: 'GET',
    },
    upsertTask: {
      path: '/containers/organizations/:organizationId',
      method: 'PUT',
    },
  });
  return resource;
};
