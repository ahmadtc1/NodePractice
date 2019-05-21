var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ahmadtc2000@gmail.com',
    pass:'baller66'
  }
});

var mailOptions = {
  from:'ahmadtc2000@gmail.com',
  to: 'ahmad.tchaudhry@gmail.com',
  subject: 'NodeJS Email!',
  text: 'This email was sent using NodeJS!'
};
transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error)
  }
  else {
    console.log('Email sent: ' + info.response);
  }
});
