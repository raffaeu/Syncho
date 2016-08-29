'use strict';

var ODataFactory = function(){

    /* return an OData formatted List of items */
    function toList(data){
        var formatter = {
            "@odata.context": "abc",
            "@odata.count": data.length,
            value:[]
        };
        formatter.value = data;
        return formatter;
    }

    /* return a single OData formatted item */
    function toSingle(data){
        return data;
    }

    return{
        toList: toList,
        toSingle: toSingle
    };

};

module.exports = ODataFactory;
