'use strict';
var AppApiFactory = function (express, appService) {

    var api = express.app;

    /* Get all apps ordered by Name Ascending */
    function getAllApps(request, response) {
        appService.getApps(request.query.$expand).then(function (apps) {
            response.status(200).send(apps);
            })
            .catch(function (err) {
                console.error('Error occurred in Apps Api: ' + err);
                response.status(400).send(err);
        });
    }

    /* Get a single app by uid, if doesn't exist, returns 404 */
    function getApp(request, response) {
        appService.getApp(request.params.id, request.query.$expand).then(function (app) {
                if (app) {
                    response.status(200).send(app);
                } else {
                    response.status(404).send('Not found');
                }
            })
            .catch(function (err) {
                console.error('Error occurred in Apps Api: ' + err);
                response.status(400).send(err);
            });
    }

    /* Create a new App and return the record with a 301 */
    function postApp(request, response) {
        appService.addApp(request.body).then(function (app) {
                response.status(301).send(app);
            })
            .catch(function (err) {
                console.error('Error occurred in Apps Api: ' + err);
                response.status(400).send(err);
            });
    }

    /* Delete an existing App and Events */
    function deleteApp(request, response) {
        appService.deleteApp(request.params.id).then(function (app) {
                response.status(200).send('Record Deleted');
            })
            .catch(function (err) {
                console.error('Error occurred in Apps Api: ' + err);
                response.status(400).send(err);
            });
    }

    /* Get all related Events of an App */
    function getEvents(request, response) {
        appService.getEvents(request.params.id).then(function (app) {
                response.status(200).send(app);
            })
            .catch(function (err) {
                console.error('Error occurred in Apps Api: ' + err);
                response.status(400).send(err);
            });
    }

    /* Routing */
    api.get('/apps', getAllApps);
    api.get('/apps/:id', getApp);
    api.post('/apps', postApp);
    api.delete('/apps/:id', deleteApp);
    api.get('/apps/:id/events', getEvents);

    return {
        getAllApps: getAllApps,
        getApp: getApp,
        postApp: postApp,
        deleteApp: deleteApp,
        getEvents: getEvents
    };
};

module.exports = AppApiFactory;