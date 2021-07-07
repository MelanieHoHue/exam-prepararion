// Importing required modules
const cors = require('cors');
const express = require('express');
const methodOverride = require('method-override');
const router = require('./routes/index');
const layouts = require("express-ejs-layouts");


// parse env variables
require('dotenv').config();

require("./helpers/db/mongodb.js")();

// Configuring port
const port = process.env.PORT || 9000;

const app = express();

//app.set('view engine', 'html');
app.set('view engine', 'ejs');

// register layouts (ejs)
app.use(layouts);

// body parsing
app.use(
    express.urlencoded({
        extended: false
    })
);

// Configure middlewares
app.use(cors());
app.use(express.json());

// use methodOverride as middleware.
app.use(
    methodOverride("_method", {
        methods: ["POST", "GET"]
    })
);

/** CHANGED: for loading layout.ejs as root-handler */
// Static folder
//app.use(express.static(__dirname + '/views/'));
app.use(express.static("public"));

// Defining route middleware
app.use('/api', require('./routes/api'));
app.use('/users', require('./routes/users'));

app.use("/", router);

if (process.env.NODE_ENV !== 'test') {
// Listening to port
    app.listen(port);
    console.log(`Listening On http://localhost:${port}/api`);
}
module.exports = app;
