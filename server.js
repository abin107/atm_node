const express = require('express');
const mongoClient = require('mongoDb');
const bodyParser = require('body-parser');

const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({extended:true}));

require('./app/routes')(app);
app.listen(port,() => {
    console.log("server running on " + port );
}); 

module.exports = app;