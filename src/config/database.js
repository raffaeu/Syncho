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
    seeds: {
        directory: __dirname + '/../data/seeds'
    },
    useNullAsDefault: true
};