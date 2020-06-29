# Steps of the project (Step by step)
## WARNING: I wrote each and every step so you might actually get bored so grab a smoothie and follow along

0. Initial step
- Install npm and start it
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
  13. Set up Sass with Webpack
  ```
  npm i -D style-loader node-sass css-loader sass-loader
  npm i -D style-loader node-sass css-loader sass-loader
  ```
  - Then add this test case to the rules array in your dev webpack config.
    ```javascript
    {
            test: /\.scss$/,
            use: [ 'style-loader', 'css-loader', 'sass-loader' ]
    }
    ```
14. Fixing JS functionality 
- Add an output for JS in webpack.dev.js
```javascript
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.min.js',
        libraryTarget: 'var',
        library: 'Client'
    },
```
15. API time:
- Sign up for [Aylien](https://developer.aylien.com/signup)
- In the rootFolder/src/server/ Create a new file called (aylienAPI.js) or whatever you like to have a file for calling the API 
- Inside the aylienAPI.js : 
  ```javascript
    // Require the Aylien npm package
    const aylien = require("aylien_textapi")
  ```
- For your privacy and security, it's better to put your ID and Key in a separate file, So in the root folder create a file called ".env" and place your ID & KEY inside it 
- Then, in the aylienAPI.js we should tell it to get the ID & Key from the .env file
    ```javascript
    const dotenv = require('dotenv');
    dotenv.config();
    console.log(`Your API key is ${process.env.API_KEY}`);
    const textapi = new aylien({
        application_id: process.env.API_ID,
        application_key: process.env.API_KEY
    });
    ```
16. Time for Offline functionality:
 - In webpack.prod.js config file, 
   - Require the plugin, by appending the new plugin statement
    ```
    const WorkboxPlugin = require('workbox-webpack-plugin');
    ```
    - Instantiate the new plugin in the plugin list:
    ```
    new WorkboxPlugin.GenerateSW()
    ```
- On the terminal, install the plugin using 
``` npm install workbox-webpack-plugin --save-dev ```
- In the rootFolder/src/client/views/index.html above the closing body tag 
 ```html 
    <script>
    // Check that service workers are supported
    if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js');
        });
    }
    </script>
 ```

17. Jest time
  - Install Jest by using ```npm install --save-dev jest```
  - Follow along this [Jest tutorial](https://www.valentinog.com/blog/jest/)

18. Validation using regex 
#### I hope i didn't miss anything or any step, but if i did you'll find helpful comments inside each file
