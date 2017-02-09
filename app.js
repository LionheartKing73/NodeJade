	//fs = require('fs'), // Require file-system
var http = require('http'), // Require SSL/HTTPS
    express = require('express'), // Require express framework
    favicon = require('serve-favicon'); // Require serve-favicon 
    i18n = require('i18n'); // Require il8n, multilanguage front-end
 
app		= express(); // Define variable app
config  = require('./config/config'), // Define variable config

require('./config/express')(app, config); // Configure express to use app and config

//app.use(favicon(__dirname + '/public/img/favicon.ico')); //favicon

i18n.configure // il8n multilanguage configuration settings
({ 
  locales: ['en', 'de', 'es', 'ru'],
  defaultLocale: 'es',
  directory: __dirname + '/locales'
});

app.use(i18n.init); // use il8n
app.locals.__ = i18n.__;
app.locals.__n = i18n.__n;

http.createServer(app).listen(3000); // Create HTTP Server