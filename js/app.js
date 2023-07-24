const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/submit-form', (req, res) => {
  // Retrieve form data
  const name = req.body.Name;
  const email = req.body.Email;
  const message = req.body.Message;

  // Configure nodemailer with your email service credentials
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Replace with your email service
    auth: {
      user: 'Brendan.ballard96@yahoo.com', // Replace with your email
      pass: 'October96', // Replace with your email password
    },
  });

  // Email content
  const mailOptions = {
    from: 'Jamodrik@yahoo.com',
    to: 'Brendan.ballard96@yahoo.com', // Replace with the recipient's email address
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email.');
    } else {
      console.log('Email sent:', info.response);
      res.send('Message sent successfully.');
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
