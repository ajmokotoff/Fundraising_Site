var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var braintree = require("braintree");
var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "9nvmxhjqcpqwszms",
  publicKey: "dxdcjxgf6cnnfm4t",
  privateKey: "fc9acc07683648b534d790a35f21cb88"
});

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'amokotoff@gmail.com',
        pass: 'sgzursbslvwhcuyv',
        host:"smtp.gmail.com",
        ssl:true
    }
});

app.get('/client_token', function (req, res) {
  console.log('hiasdf');
  gateway.clientToken.generate({}, function (err, response) {
    res.send(response.clientToken);
  });
});

/**
  (Brain Tree) Recieves payment nonce from client
*/
app.post('/checkout', function (req, res) {
  console.log('hi');
  // Use payment method nonce here
  gateway.transaction.sale({
    amount: '10.00',
    paymentMethodNonce: "fake-valid-visa-nonce",
  }, function (err, result) {
    if (result) {
      if (result.success) {
        console.log("Transaction ID: " + result.transaction.id)
      } else {
        console.log(result.message)
      }
    } else {
      console.log(err)
    }
    res.sendFile(__dirname + '/public/index.html');
  });
});

// send mail with defined transport object
app.post('/sendMail', function(req, res) {
  var contents = req.body;
  var mailOptions = {
      from: contents['name'] + ' ✔ <amokotoff@gmail.com>', // sender address
      to: 'ajmokotoff@fijiwpi.com', // list of receivers
      subject: contents['subject'], // Subject line
      text: contents['message'] + '\n\nRecieved From: ' + contents['email'] // plaintext body
  };
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });
  res.sendFile(__dirname + '/public/index.html');
});


var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
