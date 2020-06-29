var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const textapi = require('./aylienAPI.js')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(express.static('dist'))
app.use(cors())
app.use(bodyParser.json())

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(2525, function () {
    console.log('Awesome app listening on port 2525!')
})

app.post('/api/call', function (req, res) {
    // res.send(mockAPIResponse)
    console.log(req.body)
textapi.sentiment({
        url: req.body.url,
        mode: 'document' //Document mode is used in the case of long text 
      }, function(error, response) {
        if (error === null) {
          console.log(response);
          res.send(response);
        }
    });
})
