var defaultConfig = {
    
    update: function(cfg) {

        if( ! cfg.hasOwnProperty('userDisplayName')) {
            cfg['userDisplayName'] = 'me';
        }
        
        var contextUrl = location.protocol + "//" + location.host;
        if( ! cfg.hasOwnProperty('chat')) {
            cfg['chat'] = {channel:'privatechat', room: 'demo', endpoint: contextUrl + "/cometd"};
        }
        
        if( ! cfg.hasOwnProperty('members')) {
            cfg['members'] = {channel:'members', room:'demo', endpoint: contextUrl + "/chatMembers"};
        }
        
        if( ! cfg.hasOwnProperty('logLevel')){
            cfg['logLevel'] = 'info';
        }
        
        return cfg;
    }
};

export default defaultConfig;

