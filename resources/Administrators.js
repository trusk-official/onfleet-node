const Resource = require('../modules/Resource');

module.exports = function Administrators(api) {
  const resource = new Resource(api);
  resource.endpoints({
    create: {
      path: '/admins',
      method: 'POST',
    },
    list: {
      path: '/admins',
      method: 'GET',
    },
    update: {
      path: '/admins/:adminId',
      method: 'PUT',
    },
    delete: {
      path: '/admins/:adminId',
      method: 'DELETE',
    },
  });
  return resource;
};
