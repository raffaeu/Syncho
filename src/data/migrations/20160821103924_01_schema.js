exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('apps', function (table) {
            table.increments('id').primary();
            table.string('name');
            table.string('description');
            table.string('url');
            table.string('sdk');
            table.string('image');
            table.boolean('is_beta');
            table.boolean('is_premium');
            table.integer('version');
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
        }),

        knex.schema.createTable('queries', function (table) {
            table.increments('id').primary();
            table.string('name');
            table.string('description');
            table.timestamps();
            table.integer('appId').references('id').inTable('apps');
        }),

        knex.schema.createTable('categories', function (table) {
            table.increments('id').primary();
            table.string('name');
            table.string('description');
            table.timestamps();
        }),

        knex.schema.createTable('apps_categories', function (table) {
            table.increments('id').primary();
            table.integer('appId').references('id').inTable('apps');
            table.integer('catId').references('id').inTable('categories');
        })
    ])
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('events'),
        knex.schema.dropTable('actions'),
        knex.schema.dropTable('queries'),
        knex.schema.dropTable('categories'),
        knex.schema.dropTable('apps_categories'),
        knex.schema.dropTable('apps')
    ])
};
