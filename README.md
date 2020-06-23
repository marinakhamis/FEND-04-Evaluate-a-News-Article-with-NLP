# Steps of the project 

0. Initial step
```
npm install
```
```
npm start 
```

1. Setting up webpack & webpack-cli

```
npm i webpack webpack-cli
```

- Add the new build npm script to your package.json ``` "build": "webpack" ```

2. Add the config file: webpack.config.js
```javascript
const path = require(‘path’) 
const webpack = require('webpack')

module.exports = {
//adding an entry point 
entry: './src/client/index.js'
}
```

3. Add a new webpack npm script to your package.json
```
"build": "webpack"
```

4. Running webpack 
```
npm run build
```
5. Setup babel using npm

```
npm i -D @babel/core @babel/preset-env babel-loader
```
6. Create the .babelrc file ( the configuration file for babel)

7. Getting webpack to use babel
```javascript
    module: {
            rules: [
                    {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
                    }
            ]
    }
```
8. Install a plugin to create dynamic references to our bundled files
```
npm i -D html-webpack-plugin
```