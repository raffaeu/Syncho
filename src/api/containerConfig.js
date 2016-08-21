/* DI container */
var container = require('kontainer-di');

/* Configurations */
var dbConfig = require('./cfg/database');
var serverConfig = require('./cfg/server');

/* Data Facade */
var databaseFactory = require('./data/database');
var ormFactory = require('./data/mapper');
var appsServiceFactory = require('./data/app_service');

/* Http Api */
var serverFactory = require('./api/server');
var homeController = require('./api/home_controller');
var appsController = require('./api/app_controller');

/* Dependencies */
container.register('dbConfig', [], dbConfig);
container.register('serverConfig', [], serverConfig);

container.register('database', ['dbConfig'], databaseFactory);
container.register('orm', ['database'], ormFactory);
container.register('appService', ['orm'], appsServiceFactory);

container.register('server', ['serverConfig'], serverFactory);
container.register('homeApi', ['server'], homeController);
container.register('appApi', ['server', 'appService'], appsController);

module.exports = container;