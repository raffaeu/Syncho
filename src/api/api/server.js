'use strict';
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var Promise = require('bluebird');

/*
 Initialize the Server Factory with a Configuration
 @param config A Configuration File
 */
var ServerFactory = function (config) {
    var app = express();
    var server = http.createServer(app);
    app.use(bodyParser.json());

    function start() {
        var listenPromise = Promise.promisify(server.listen, server);
        return listenPromise(config.port, config.url)
            .then(function () {
            var host = server.address().address;
            var port = server.address().port;
            console.log('Express is listening on', host + ':' + port);
        });
    }

    function stop() {
        server.close();
    }

    return {
        start: start,
        stop: stop,
        app: app,
        server: server
    };
};

module.exports = ServerFactory;
