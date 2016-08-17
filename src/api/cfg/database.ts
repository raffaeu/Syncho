/**
 * Created by raffa on 8/16/2016.
 */
/// <reference path="../def/node.d.ts" />

//database configuration for knex
module.exports = {

    //SQLite configuration
    client: 'sqlite3',
    connection: {
        filename: './data/syncho.sqlite3'
    },
    migrations: {
        directory: __dirname + "/../data/migrations",
        tableName: "version"
    },
    useNullAsDefault: true
};