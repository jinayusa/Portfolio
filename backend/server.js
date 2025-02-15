require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

app.post('/send', async (req, res) => {
  const { email, subject, message } = req.body;
  
  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL,
      subject: subject,
      text: message,
    });
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
