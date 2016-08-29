'use strict';
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var Promise = require('bluebird');
var path = require('path');
var favicon = require('serve-favicon');

/*
 Initialize the Server Factory with a Configuration
 @param config A Configuration File
 */
var ServerFactory = function (config) {
    var app = express();
    var server = http.createServer(app);
    app.use(bodyParser.json());

    app.use('/public', express.static(path.resolve(__dirname + '/../public')));
    app.use(favicon(path.resolve(__dirname + '/../public/favicon.ico')));
    app.use('/bower_components', express.static(path.resolve(__dirname + '/../bower_components')));
    app.use('/src', express.static(path.resolve(__dirname + '/../src')));

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
