'use strict';
var AppServiceFactory = function (orm) {

    var Apps = orm.Model.extend({
        tableName: 'apps'
    });

    return {

        /* Get all available apps, order by Name Ascending */
        getApps: function () {
            return Apps.collection().fetch();
        },

        /* Get a single app by uid, if the app doesn't exist, throws an error */
        getApp: function (uid) {
            return Apps.where('uid', uid).fetch();
        }
    };
};

module.exports = AppServiceFactory;
