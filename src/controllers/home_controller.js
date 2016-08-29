'use strict';
var path = require('path');

var HomeControllerFactory = function (express) {
    var app = express.app;

    /* Map '/' root method */
    function getHome(request, response) {
        response.sendFile(path.resolve(__dirname + '/../public/index.html'));
    }

    app.get('/', getHome);

    return {
        getHome: getHome
    };
};

module.exports = HomeControllerFactory;
