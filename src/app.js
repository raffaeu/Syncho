/* Initialize IoC */
var container = require('./containerConfig');

/* Initialize Data Tier */
var knex = container.get('database');
knex.migrate.latest()
    .then(function () {
        knex.seed.run();
        console.log('SQL Lite Database ready.');

        /* Initialize Apis */
        var appV1Controller = container.get('appV1Api');
        var homeController = container.get('homeApi');

        /* Initialize Web Server and Web Api */
        var server = container.startModule('server', {async: true})
            .then(function (server) {
                console.log('Web Api ready');
            });
});
