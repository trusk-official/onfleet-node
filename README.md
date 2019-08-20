# Onfleet node.js bindings [DEPRECATED]

The onfleet team finally made its [own node.JS wrapper](https://github.com/onfleet/node-onfleet), use it instead.

## Installation

  npm install onfleet

## API Overview

Every resource is accessed via your `onfleet` instance:

```js
var onfleet = require('onfleet')('YOUR_ONFLEET_API_KEY');
```

Every resource method accepts an optional callback as the last argument:

```js
onfleet.tasks.create(
  { ... },
  function(error, task) {
    error; // null if no error occurred
    task; // the created task object
  }
);
```

Additionally, every resource method returns a promise, so you don't have to use the regular callback. E.g.

```js
// Create a new task :
onfleet.tasks.create(
  { ... }
).then(function(task) {
  // New task created
}).catch(function(err) {
  // Deal with an error
});
```

## Available resources & methods

*Where you see `params` it is a plain JavaScript object, e.g. `{ email: 'foo@example.com' }`*

* organizations
  * [`details()`](http://docs.onfleet.com/docs/organizations#get-details)
  * [`delegateeDetails(organizationId)`](http://docs.onfleet.com/docs/organizations#get-delegatee-details)
  * [`upsertTask(organizationId)`](http://docs.onfleet.com/docs/containers)
* administrators
  * [`create([params])`](http://docs.onfleet.com/docs/administrators#create-new-administrator)
  * [`list()`](http://docs.onfleet.com/docs/administrators#list-administrators)
  * [`update(adminId, [params])`](http://docs.onfleet.com/docs/administrators#update-administrator)
  * [`delete(adminId)`](http://docs.onfleet.com/docs/administrators#delete-administrator)
* workers
  * [`create([params])`](http://docs.onfleet.com/docs/workers#create-new-worker)
  * [`list()`](http://docs.onfleet.com/docs/workers#list-workers)
  * [`retrieve(workerId)`](http://docs.onfleet.com/docs/workers#get-single-worker)
  * [`update(workerId, [params])`](http://docs.onfleet.com/docs/workers#update-worker)
  * [`delete(workerId)`](http://docs.onfleet.com/docs/workers#delete-worker)
  * [`upsertTask(workerId)`](http://docs.onfleet.com/docs/containers)
* teams
  * [`list()`](http://docs.onfleet.com/docs/teams#list-teams)
  * [`retrieve(teamId)`](http://docs.onfleet.com/docs/teams#get-single-team)
  * [`create([params])`](http://docs.onfleet.com/docs/teams#create-team)
  * [`update(teamId, [params])`](http://docs.onfleet.com/docs/teams#update-team)
  * [`upsertTask(teamId)`](http://docs.onfleet.com/docs/containers) **NB**: You can only append tasks using an offset and not overwrite a team's tasklist (as of 2019-03-11), contrary to what the documentation indicates.
  * [`delete(teamId)`](http://docs.onfleet.com/docs/teams#delete-team)
* destinations
  * [`create([params])`](http://docs.onfleet.com/docs/destinations#create-new-destination)
  * [`retrieve(destinationId)`](http://docs.onfleet.com/docs/destinations#get-single-destination)
* recipients
  * [`create([params])`](http://docs.onfleet.com/docs/recipients#create-new-recipient)
  * [`update(recipientId, [params])`](http://docs.onfleet.com/docs/recipients#update-recipient)
  * [`findByName(recipientName)`](http://docs.onfleet.com/docs/recipients#find-recipient)
  * [`findByPhone(recipientPhone)`](http://docs.onfleet.com/docs/recipients#find-recipient)
  * [`retrieve(recipientId)`](http://docs.onfleet.com/docs/recipients#get-single-recipient)
* tasks
  * [`create([params])`](http://docs.onfleet.com/docs/tasks#create-task)
  * [`list()`](http://docs.onfleet.com/docs/tasks#list-tasks)
  * [`retrieve(taskId)`](http://docs.onfleet.com/docs/tasks#get-single-task)
  * [`update(taskId, [params])`](http://docs.onfleet.com/docs/tasks#update-task)
  * [`complete(taskId, [params])`](http://docs.onfleet.com/docs/tasks#complete-task)
  * [`delete(taskId)`](http://docs.onfleet.com/docs/tasks#delete-task)
* webhooks
  * [`create([params])`](http://docs.onfleet.com/docs/webhooks#create-webhook)
  * [`list()`](http://docs.onfleet.com/docs/webhooks#list-webhooks)
  * [`delete(webhookId)`](http://docs.onfleet.com/docs/webhooks#delete-webhook)
