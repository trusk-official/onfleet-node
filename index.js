const DEFAULT_HOST = 'onfleet.com';
const DEFAULT_PORT = null;
const DEFAULT_PROTOCOL = 'https';
const DEFAULT_BASE_PATH = '/api';
const DEFAULT_API_VERSION = 'v2';

// Use node's default timeout:
const DEFAULT_TIMEOUT = require('http').createServer().timeout;

const Administrators = require('./resources/Administrators');
const Destinations = require('./resources/Destinations');
const Organizations = require('./resources/Organizations');
const Recipients = require('./resources/Recipients');
const Tasks = require('./resources/Tasks');
const Teams = require('./resources/Teams');
const Workers = require('./resources/Workers');
const Webhooks = require('./resources/Webhooks');

const resources = {
  Administrators,
  Destinations,
  Organizations,
  Recipients,
  Tasks,
  Teams,
  Workers,
  Webhooks,
};

function Onfleet(key, version) {
  if (!(this instanceof Onfleet)) {
    return new Onfleet(key, version);
  }

  this.api = {
    key: null,
    host: DEFAULT_HOST,
    port: DEFAULT_PORT,
    protocol: DEFAULT_PROTOCOL,
    basePath: DEFAULT_BASE_PATH,
    version: DEFAULT_API_VERSION,
    timeout: DEFAULT_TIMEOUT,
  };

  this.setApiKey(key);
  this.setApiVersion(version);
  this.prepResources();
}

Onfleet.resources = resources;

Onfleet.prototype = {
  setApiVersion: function setApiVersion(version) {
    if (version) {
      this.setApiField('version', version);
    }
  },
  setApiKey: function setApiKey(key) {
    if (key) {
      this.setApiField('key', key);
    }
  },
  setApiField: function setApiField(key, value) {
    this.api[key] = value;
  },
  prepResources: function prepResources() {
    Object.keys(resources).forEach((name) => {
      this[name[0].toLowerCase() + name.substring(1)] = new resources[name](this);
    });
  },
};

module.exports = Onfleet;
