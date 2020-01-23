var logManager = function()
{
    var oldConsoleLog = null;
    var pub = {};

    pub.enableLogger =  function enableWindowConsoleLog() {
        if(oldConsoleLog === null) {
            return;
        }   
        try{
            window['console']['log'] = oldConsoleLog;
        }catch(err) { }
    };

    pub.disableLogger = function disableWindowConsoleLog(){
        oldConsoleLog = console.log;
        try{
            window['console']['log'] = function() {};
        }catch(err) { }
    };

    return pub;
}();

export default logManager;
