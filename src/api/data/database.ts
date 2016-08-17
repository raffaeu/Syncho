/**
 * Created by raffa on 8/17/2016.
 */
/// <reference path="../def/node.d.ts" />
'use strict';

var knex = require('knex');
var DatabaseFactory = function (dbConfig) {
    return knex(dbConfig);
}

module.exports = DatabaseFactory;