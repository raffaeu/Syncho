'use strict';
var AppApiFactory = function (express, appService) {
    var app = express.app;

    /* Get all apps ordered by Name Ascending */
    function getAllApps(request, response) {
        appService.getApps().then(function (apps) {
            response.status(200).send(apps);
        });
    }

    function getApp(request, response) {
        appService.getApp(request.params.uid).then(function (app) {
                if (app) {
                    response.status(200).send(app);
                } else {
                    response.status(404).end();
                }
            })
            .catch(function (err) {
                console.error('Error occurred in Apps Api: ' + err);
                response.status(404).end();
            });
    }

    /* Routing */
    app.get('/apps', getAllApps);
    app.get('/apps/:uid', getApp);

    return {
        getAllApps: getAllApps
    };
};

module.exports = AppApiFactory;