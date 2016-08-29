/* Initialize IoC */
var container = require('./containerConfig');

/* Initialize Data Tier */
var knex = container.get('database');

/* Migrate, then start Web Server */
knex.migrate.latest()
    .then(function () {

        /* Seeding */
        knex.seed.run();
        console.log('SQL Lite Database ready.');

        /* Initialize Controllers */
        var appV1Controller = container.get('appV1Api');
        var homeController = container.get('homeApi');

        /* Initialize Web Server and Web Api */
        var server = container.startModule('server', {async: true})
            .then(function (server) {
                console.log('Web Api ready');
            });
});
