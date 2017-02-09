var express = require('express'), // Require express framework
    router = express.Router(), // ??
    db = require('../models'), // ??
    ses = require('node-ses'), // Require node-ses module (Amazon SES Integration)
    i18n = require('i18n'); // Require il8n multilanguage framework

module.exports = function(app) { // Use il8n ??
  app.use('/', router);
  app.use(i18n.init);
  app.locals.__ = i18n.__;
  app.locals.__n = i18n.__n;
};

router.get('/', function(req, res, next) { // ??
  res.render('index', {
    //title: 'Generator-Express MVC',
    //articles: articles,
    //banners: banners,
    //services: services
  });
});

// API Access Key, Secret and SES server URL.
client = ses.createClient({ key: 'AKIAIHUZGJ2VJOICOJ3A', secret: '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', amazon: 'https://email.us-east-1.amazonaws.com' });

router.post('/contact', function(req, res, next){  // Recive by post contact form data
  client.sendEmail( //Send email via node-ses with given input by user. 
  {  to: 'lwainer@wainersecurity.com' 
   , from: 'WebApp@wainersecurity.com' // Only verified accounts/domains on SES while running on SandBox.
   , subject: 'WainerSec WebApp received a contact request'
   , message: 'Hello,<br> I received an a contact request from <b>' + req.body.name + '</b> on the WainerSec WebApp <br> <br>' + '<b>Message:</b> <br>              '+ req.body.message + '<br><br>' + 'Name: ' + req.body.name + '<br>' + 'E-Mail Address: ' + req.body.email + '<br>' + 'Phone number: ' + req.body.phone
  }, 
  function (err, data, res) {} );  // Inform about mail sending status
  res.render('contact', {
      title: 'Contact',
      msg: 'Message sent! Thank you.',
      err: false,
      page: 'contact'
  });
});