/* DI container */
var container = require('kontainer-di');

/* Configurations */
var dbConfig = require('./cfg/database');
var serverConfig = require('./cfg/server');

/* Data Facade */
var databaseFactory = require('./data/database');
var ormFactory = require('./data/mapper');
var appV1ServiceFactory = require('./data/v1/app_service');

/* Http Api */
var serverFactory = require('./api/server');
var homeController = require('./api/home_controller');
var appsV1Controller = require('./api/v1/app_controller');

/* Dependencies */
container.register('dbConfig', [], dbConfig);
container.register('serverConfig', [], serverConfig);

container.register('database', ['dbConfig'], databaseFactory);
container.register('orm', ['database'], ormFactory);
container.register('appV1Service', ['orm'], appV1ServiceFactory);

container.register('server', ['serverConfig'], serverFactory);
container.register('homeApi', ['server'], homeController);
container.register('appV1Api', ['server', 'appV1Service'], appsV1Controller);

module.exports = container;