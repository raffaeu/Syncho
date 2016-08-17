/**
 * Created by raffa on 8/17/2016.
 */
/// <reference path="../def/node.d.ts" />
'use strict';
var UserServiceFactory = function (database) {
    return {
        /*
         Returns all available Users
         */
        getUsers: function () {
            return database('User').select().orderBy('createdAt', 'desc');
        }
    };
};
module.exports = UserServiceFactory;
//# sourceMappingURL=user_service.js.map