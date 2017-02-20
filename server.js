var express = require("express");
var dotenv = require('dotenv');
dotenv.config();

var PORT = process.env.PORT || 8080;

var app = express();

app.use(function(req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'http') {
        next();
    } else {
        res.redirect('http://' + req.hostname + req.url);
    }
})

app.use(express.static('public'));

app.listen(PORT, function() {
    console.log('Express server is up on port ' + PORT);

})
