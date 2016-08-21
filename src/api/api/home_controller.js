'use strict';
var HomeApiFactory = function (express) {
    var app = express.app;

    /* Map '/' root method */
    function getHome(request, response) {
        response.status(200).send('Status OK');
    }

    app.get('/', getHome);

    return {
        getHome: getHome
    };
};

module.exports = HomeApiFactory;
