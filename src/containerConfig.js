/* DI container */
var container = require('kontainer-di');

/* Configurations */
var dbConfig = require('./config/database');
var serverConfig = require('./config/server');

/* Data Facade */
var databaseFactory = require('./data/database');
var ormFactory = require('./data/mapper');
var appV1ServiceFactory = require('./data/v1/app_service');

/* Http Api */
var serverFactory = require('./controllers/server');
var homeController = require('./controllers/home_controller');
var appsV1Controller = require('./controllers/v1/app_controller');
var odataFactory = require('./controllers/odata_service');

/* Dependencies */
container.register('dbConfig', [], dbConfig);
container.register('serverConfig', [], serverConfig);

container.register('database', ['dbConfig'], databaseFactory);
container.register('orm', ['database'], ormFactory);
container.register('appV1Service', ['orm'], appV1ServiceFactory);

container.register('server', ['serverConfig', 'database'], serverFactory);
container.register('odata', [], odataFactory);
container.register('homeApi', ['server'], homeController);
container.register('appV1Api', ['server', 'appV1Service', 'odata'], appsV1Controller);

module.exports = container;