var $ = require('jquery');
var bcCometd = require('./bcCometd').default;
var docUtil = require('./docUtil').default;
//var logManager = require('./logManager').default;


$(document).ready(function(){ 
    try{
        if(bcCometd.isProductionMode()) {
//            logManager.disableWindowConsoleLog();
        }else{
            docUtil.displayInfo("Loaded libraries: jquery, cometd");
        }
    }catch(err) {
        console.error(err);
    }
});

module.exports = bcCometd;

