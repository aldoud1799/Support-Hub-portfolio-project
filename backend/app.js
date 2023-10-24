const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

// Set up the middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve the static files for the HTML pages
app.use(express.static(__dirname + '/public'));

// Handle POST requests from the request-service.html form
app.post('/request-service', (req, res) => {
    const { name, email, service, message } = req.body;

    // Create a transporter object to send the email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'supporthub0@gmail.com',
            pass: 'Supporthub@1@@'
        }
    });

    // Set up the email options
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'recipient-email@example.com',
        subject: `New service request from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Handle POST requests from the consultation.html form
app.post('/consultation', (req, res) => {
    const { name, email, phone, message } = req.body;

    // Create a transporter object to send the email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'supporthub0@gmail.com',
            pass: 'Supporthub@1@@'
        }
    });

    // Set up the email options
    const mailOptions = {
        from: 'supporthub0@gmail.com',
        to: 'supporthub0@gmail.com',
        subject: `New consultation request from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Handle POST requests from the contacts.html form
app.post('/contacts', (req, res) => {
    const { name, email, message } = req.body;

    // Create a transporter object to send the email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'supporthub0@gmail.com',
            pass: 'your-email-password'
        }
    });

    // Set up the email options
    const mailOptions = {
        from: 'supporthub0@gmail.com',
        to: 'supporthub0@gmail.com',
        subject: `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
