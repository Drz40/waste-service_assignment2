var api_key = '5974484c870467cdc853551dd89e7acb';
var domain = 'sandboxXXX.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var binEvents = require('./events');

var  messageHandler = function(m) {
         // The Payload
        var data = {
            from: 'WIT BSc IT <me@wit.ie>',
            to: JSON.parse(m).email,
            subject: 'Welcome',
            text: 'Welcome to the company!!!'
          };

          mailgun.messages().send(data, function (error, body) {
            console.log(body);
          });
        }

binEvents.subscribe('create_bin_events', messageHandler)