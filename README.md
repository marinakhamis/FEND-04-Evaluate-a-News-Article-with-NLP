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
- You should see an index.html file in the dist folder

9. Now the server doesn't know the original folder to display , let's fix that

```javascript
app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

```
10. Oh dear, we'd have a lot of logic errors and If we didn't do the following step: 
- create a webpack.prod.js for "Prouction " environment
- rename the webpack.config.js to be "webpack.dev.js" for the Development environment

11. You actually thought we'd just keep the "build": "webpack" in package.json even after having 2 webpack files ??
- Change the "build": "webpack" to : 

```javascript
    "build-prod": "webpack --config webpack.prod.js", //DON'T FORGET THE COMMA " , " 
    "build-dev": "webpack-dev-server  --config webpack.dev.js --open"
```
12. Adding Convenience in Webpack
- Install Webpack Dev Server 
``` npm i -D webpack-dev-server ```
-Add this line to the package.json :
```
 webpack-dev-server  --config webpack.dev.js --open
```
- Install the clean plugin. 

```
npm i -D clean-webpack-plugin
```
- To make webpack use a plugin, we have to do two things:
  - Add a require statement to the top of the webpack config file:
  ```javascript
  const { CleanWebpackPlugin } = require('clean-webpack-plugin');
  ```
  - Use CleanWebpackPlugin like this:
  ```javascript
            new CleanWebpackPlugin({
                // Simulate the removal of files
                dry: true,
                // Write Logs to Console
                verbose: true,
                // Automatically remove all unused webpack assets on rebuild
                cleanStaleWebpackAssets: true,
                protectWebpackAssets: false
        })
  ```
