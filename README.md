## cometdchatjavascript

A script for integrating Cometd based chat functionality into a Java Web Apps

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
        <title>Index Page</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <div>Index Page</div>
        <script type="text/javascript" src="main.js"></script>
    </body>
</html>
```

