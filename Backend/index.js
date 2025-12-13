const cors = require('cors');
const express = require('express');
const connectDB = require('./db');
const {default: mongoose} = require('mongoose');
require('dotenv').config();
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT;

// Connecting to MongoDB

connectDB();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const projectSchema = new mongoose.Schema({
    id: Number,
    title: String,
    languages: String,
    description: String,
    code: String,
    live: String,
    image: String,
    date: Date
});

const Pro = mongoose.model('Pro', projectSchema, 'projects');

app.get('/project', async (req, res) => {
    try{
        const proList = await Pro.find();
        res.json(proList);
    }
    catch(err){
        res.status(500).json({ error: err.message });
    }
}); 

app.post('/mail', async(req, res) => {
    const { name, sender, subject, message } = req.body;

    try{
        // Create email transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.APP_PASS,
            },
        });

        // Email options
        const mailOptions = {
            from: sender,
            to: "lutadesahil@gmail.com",
            replyTo: sender,
            subject: subject,
            text: `
            Name: ${name},

            ${message}
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: "Email sent successfully",
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
});

app.listen(PORT);
console.log(`Server started http://127.0.0.1:${PORT}`);