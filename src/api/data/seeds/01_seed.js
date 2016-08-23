exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries

    return Promise.all([
        // Delete all events
        knex('events').del(),
        knex('actions').del(),
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
            name: 'New E-mail',
            description: 'Event triggered when a new e-mail is received.',
            appId: 1,
            created_at: new Date(),
            updated_at: new Date()
        }),
        knex('events').insert({
            name: 'New E-mail matching criteria',
            description: 'Event triggered when a new e-mail, that matches certain criteria, is received.',
            appId: 1,
            created_at: new Date(),
            updated_at: new Date()
        }),
        knex('events').insert({
            name: 'New E-mail with Label',
            description: 'Event triggered when a new e-mail, set with a certain Label, is received.',
            appId: 1,
            created_at: new Date(),
            updated_at: new Date()
        }),
        knex('events').insert({
            name: 'New E-mail Thread',
            description: 'Event triggered when a new e-mail thread is started.',
            appId: 1,
            created_at: new Date(),
            updated_at: new Date()
        }),
        knex('actions').insert({
            name: 'Create E-mail',
            description: 'Create a new E-mail Message and send it.',
            appId: 1,
            created_at: new Date(),
            updated_at: new Date()
        }),
        knex('actions').insert({
            name: 'Create Draft',
            description: 'Create a new E-mail Message but does not send it.',
            appId: 1,
            created_at: new Date(),
            updated_at: new Date()
        }),
        knex('actions').insert({
            name: 'Create Label',
            description: 'Create a new Label.',
            appId: 1,
            created_at: new Date(),
            updated_at: new Date()
        })

    ]);
};
