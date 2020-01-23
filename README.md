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
npm install mustache
npm install fs
npm install require-all
npm install glob
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

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Index Page</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script type="text/javascript" src="main.js"></script>
    </head>
    <body>
        <div>Index Page</div>
    </body>
</html>
```

### Notes

Error: ERROR in ./node_modules/require-all/index.js Module not found: Error: Can't resolve 'fs'
Solution: Add into module.exports of file webpack.config.js, the lines below:

```javascript
    node: { fs: 'empty' },
    target: 'web'
```