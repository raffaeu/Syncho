'use strict';
var bookshelf = require('bookshelf');

var OrmFactory = function (knex) {
    return bookshelf(knex);
};

module.exports = OrmFactory;
