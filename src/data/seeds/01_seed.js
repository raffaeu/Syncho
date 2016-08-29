exports.seed = function (knex, Promise) {

    // apps
    var apps = require('./apps_seed.json');
    var events = require('./events_seed.json');
    var actions = require('./actions_seed.json');
    var queries = require('./queries_seed.json');
    var categories = require('./categories_seed.json');
    var app_categories = require('./app_categories_seed.json');

    return Promise.all([


        // Delete all events
        knex('events').del(),
        knex('actions').del(),
        knex('queries').del(),
        knex('apps_categories').del(),
        knex('categories').del(),
        knex('apps').del(),

        // Inserts seed entries
        knex.batchInsert('apps', apps),
        knex.batchInsert('categories', categories),
        knex.batchInsert('apps_categories', app_categories),
        knex.batchInsert('events', events),
        knex.batchInsert('actions', actions),
        knex.batchInsert('queries', queries),
    ]);
};
