'use strict';

var ODataFactory = function(){

    /*  */
    function toList(data){
        return data;
    }

    function toSingle(data){
        return data;
    }

    return{
        toList: toList,
        toSingle: toSingle
    };

};

module.exports = ODataFactory;
