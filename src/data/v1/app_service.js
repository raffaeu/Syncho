'use strict';
var AppServiceFactory = function (orm) {

    /* An App */
    var App = orm.Model.extend({
        tableName: 'apps',
        events: function () {
            return this.hasMany(Event, 'appId');
        },
        actions: function () {
            return this.hasMany(Action, 'appId');
        },
        queries: function(){
            return this.hasMany(Queries, 'appId');
        },
        categories: function(){
            return this.belongsToMany(Category, 'apps_categories', 'appId', 'catId');
        }
    });

    /* An Event for an App */
    var Event = orm.Model.extend({
        tableName: 'events',
        app: function () {
            return this.belongsTo(App);
        }
    });

    /* An Action for an App */
    var Action = orm.Model.extend({
        tableName: 'actions',
        app: function () {
            return this.belongsTo(App);
        }
    });

    /* A Query for an App */
    var Queries = orm.Model.extend({
       tableName: 'queries',
       app:function(){
           return this.belongsTo(App);
       }
    });

    /* An App Category */
    var Category = orm.Model.extend({
       tableName:'categories',
       app:function(){
           return this.belongsToMany(App, 'apps_categories', 'catId', 'appId');
       }
    });

    /* retrieve expands
        TODO this should be refactored into a Utility class
     */
    function splitExpand($expand) {
        return $expand.split(',');
    }

    return {

        /* Get all available Apps */
        getApps: function ($expand) {
            /*
            var premise = App.query(function(qb){
                qb.offset(0).limit(100);
            });
            if ($expand) {
                return premise.fetch({withRelated: splitExpand($expand)});
            } else {
                return premise.fetch();
            }
            */
            return App.collection().fetch();
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

        /* Delete an existing App and related children */
        deleteApp: function (id) {
            return Promise.all([
                orm.knex('events')
                    .del()
                    .where('appId', id),
                orm.knex('actions')
                    .del()
                    .where('appId', id),
                orm.knex('queries')
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
