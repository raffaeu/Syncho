exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('apps', function (table) {
            table.increments('id').primary();
            table.string('name');
            table.string('description');
            table.string('url');
            table.string('sdk');
            table.timestamps();
        }),

        knex.schema.createTable('events', function (table) {
            table.increments('id').primary();
            table.string('name');
            table.string('description');
            table.timestamps();
            table.integer('appId').references('id').inTable('apps');
        }),

        knex.schema.createTable('actions', function(table){
            table.increments('id').primary();
            table.string('name');
            table.string('description');
            table.timestamps();
            table.integer('appId').references('id').inTable('apps');
        })
    ])
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('apps'),
        knex.schema.dropTable('events'),
        knex.schema.dropTable('actions')
    ])
};
