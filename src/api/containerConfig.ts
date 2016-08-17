/**
 * Created by raffa on 8/16/2016.
 */
/// <reference path="def/node.d.ts" />

/* DI container */
var container = require('kontainer-di');

/* Configurations */
var dbConfig = require('./cfg/database');
var serverConfig = require('./cfg/server');

/* Data Facade */
var databaseFactory = require('./data/database');
var usersServiceFactory = require('./data/user_service');

/* Http Api */
var serverFactory = require('./api/server');

/* Dependencies */
container.register('dbConfig', [], dbConfig);
container.register('serverConfig', [], serverConfig);
container.register('database', ['dbConfig'], databaseFactory);
container.register('userService', ['database'], usersServiceFactory);
container.register('server', ['serverConfig'], serverFactory);

module.exports = container;