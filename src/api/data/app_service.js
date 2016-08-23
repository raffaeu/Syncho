'use strict';
var AppServiceFactory = function (orm) {

    var App = orm.Model.extend({
        tableName: 'apps',
        events: function () {
            return this.hasMany(Event, 'appId');
        },
        actions: function(){
            return this.hasMany(Action, 'appId');
        }
    });

    var Event = orm.Model.extend({
        tableName: 'events',
        app: function () {
            return this.belongsTo(App);
        }
    });

    var Action = orm.Model.extend({
        tableName: 'actions',
        app: function(){
            return this.belongsTo(App);
        }
    });

    function splitExpand($expand){
        return $expand.split(',');
    }

    return {

        /* Get all available Apps */
        getApps: function ($expand) {
            if ($expand) {
                return App.collection().fetch({withRelated: splitExpand($expand)});
            } else {
                return App.collection().fetch();
            }
        },

        /* Get a single App by id */
        getApp: function (id, $expand) {
            if ($expand) {
                return App.where('id', id).fetch({withRelated: splitExpand($expand)});
            } else {
                return App.where('id', id).fetch();
            }
        },

        /* Create a new App */
        addApp: function (app) {
            return new App({
                name: app.name,
                description: app.description,
                url: app.url,
                sdk: app.sdk,
                created_at: new Date(),
                updated_at: new Date()
            }).save();
        },

        /* Delete an existing App and related Events */
        deleteApp: function (id) {
            return Promise.all([
                orm.knex('events')
                    .del()
                    .where('appId', id),
                orm.knex('apps')
                    .del()
                    .where('id', id)
            ]);
        },

        /* Get all Events of an App */
        getEvents: function (id) {
            return Event.where('appId', id).fetch();
        }
    };
};

module.exports = AppServiceFactory;
