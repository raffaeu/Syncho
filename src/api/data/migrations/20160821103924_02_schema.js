exports.up = function (knex, Promise) {
    return Promise.all([

        knex.schema.createTable('apps', function (table) {
            table.increments('uid').primary();
            table.string('name');
            table.string('description');
            table.string('url');
            table.string('sdk');
            table.timestamps();
        })
    ])

};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('users')
    ])
    return Promise.all([
        knex.schema.dropTable('apps')
    ])
};
