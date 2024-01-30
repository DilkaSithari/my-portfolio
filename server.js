
import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dilkasithari255@gmail.com', 
    pass: 'Dilka@gmail', 
  },
});

app.post('/submit-form', (req, res) => {
  const formData = req.body;

  const mailOptions = {
    from: 'dilkasithari255@gmail.com', // Replace with your Gmail email
    to: 'dilkasithari255@gmail.com', // Replace with your email
    subject: 'New Form Submission',
    text: `
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    } else {
      console.log('Email sent:', info.response);
      res.json({ success: true, message: 'Form submitted successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
