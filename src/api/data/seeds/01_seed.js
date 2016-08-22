exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries

    return Promise.all([
        // Delete all events
        knex('events').del(),
        knex('apps').del(),

        // Inserts seed entries
        knex('apps').insert({
            id: 1,
            name: 'Gmail',
            description: '   E-mail web service provided by Google.',
            url: 'https://mail.google.com',
            sdk: 'https://developers.google.com/gmail/api/',
            created_at: new Date(),
            updated_at: new Date()
        }),
        knex('events').insert({
            id: 1,
            name: 'New E-mail',
            description: 'Event triggered when a new e-mail is received.',
            appId: 1,
            created_at: new Date(),
            updated_at: new Date()
        })
    ]);
};
