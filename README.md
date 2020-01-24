## cometdchatjavascript

A script for integrating Cometd based chat functionality into a Java Web Apps

#### This project has been integrated into ![poshjosh/cometdchat](https://github.com/poshjosh/cometdchat). All the necessary information have been moved to that project. This project is only maintained for reference purposes. 

### Building the script

- Open command prompt

- Change to the project folder, e.g:

```
>cd C:\Users\USER\Documents\NetBeansProjects\cometdchatjavascript
```

- Install some required scripts

```
npm install jquery
npm install cometd
```

- Run command: npm run build, e.g:

```
C:\Users\USER\Documents\NetBeansProjects\cometdchatjavascript>npm run build
```

The npm run build command does the following:

1. Packages script at src/index.js with all dependencies.

2. Minifies the packaged/combined script and saves it to dist/main.js

### Structure of output

- dist
    - index.html
    - main.js
    - sounds
        - beep.m4a
        - beep.mp3
        - beep.ogg
        - beep.wav
- src
    - index.js

### Sample index.html 
Put the link to the script at the bottom of the page, inside the body tag

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Chat Page</title>
        <link type="text/css" rel="stylesheet" href="comet.chat.css"/>
    </head>
    <body>
        
        <form>
            <p>
                Username: <input type="text" name="chatuser" id="chatuser"/><span id="chatuserMessage"></span>
            </p>
            <p><input type="button" onclick="joinChatRoom('chatuser');" value="Join Chat"></p>
        </form>

        <div>Online Users <small>(Click a <em>username</em> to chat)</small></div>

        <div id="members"></div>
        
        <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
        <script type="text/javascript" src="main.js"></script>
        <script type="text/javascript">
            
            $(document).ready(function(){ 
                
                var config = {
                    /** 'id' of a 'div' or 'span' tag which keeps list of online users */
                    memberListContainerID: 'members',   /** required = false, text */
                    userDisplayName: 'me',              /** required = false, text */
                    windowBackground: '#31B404',        /** required = false, color */
                    logLevel: 'debug'                   /** required = false, [warn|info|debug], default=info */
                };
                
                bcCometd.init(config);
            });
            
            function joinChatRoom(usernameElemId) {
                
                var username = $('#' + usernameElemId).val();
                
                if(!username) {
                    
                    $("#" + usernameElemId + "Message").css("color", "red").val("Invalid username");

                }else{
                
                    bcCometd.joinChat(username, function(){

                        $("#" + usernameElemId + "Message").css("color", "green").val("Successfully joined chat as: " + username);
                    });
                }
            }
        </script>
    </body>
</html>
```

