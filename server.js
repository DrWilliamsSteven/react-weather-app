var express = require("express");
var dotenv = require('dotenv');
dotenv.config();

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static('public'));

app.listen(PORT, function() {
    console.log('Express server is up on port ' + PORT);

})
