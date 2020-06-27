// Require the Aylien npm package
const aylien = require("aylien_textapi")
const dotenv = require('dotenv');
dotenv.config();
// You could call it aylienapi, or anything else

console.log(`Your API key is ${process.env.API_KEY}`);

const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });

  module.exports = textapi;
