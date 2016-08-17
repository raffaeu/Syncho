/**
 * Created by raffa on 8/16/2016.
 */
/// <reference path="def/node.d.ts" />
/* Initialize IoC */
var container = require('./containerConfig');
/* Initialize Data Tier */
var knex = container.get('database');
knex.migrate.latest()
    .then(function () {
    console.log('SQL Lite Database ready.');
});
/* Initialize Web Server and Web Api */
var server = container.startModule('server', { async: true })
    .then(function (server) {
    console.log('Web Api ready');
});
//# sourceMappingURL=app.js.map