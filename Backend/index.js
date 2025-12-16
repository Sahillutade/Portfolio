const cors = require('cors');
const express = require('express');
const connectDB = require('./db');
const {default: mongoose} = require('mongoose');
require('dotenv').config();
const nodemailer = require('nodemailer');
const { default: axios } = require('axios');

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

    if(!sender || !sender.includes("@")){
        return res.status(400).json({ error: "Invalid sender email" });
    }

    try{
        // Create email transporter
        const transporter = nodemailer.createTransport({
            host: "smtp-relay.brevo.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.BREVO_EMAIL,
                pass: process.env.APP_PASS,
            },
            connectionTimeout: 10000,
            greetingTimeout: 10000,
            socketTimeout: 10000,
        });

        // Email options
        const mailOptions = {
            from: {
                name: name,
                address: process.env.RECEIVER_EMAIL,
            },
            to: process.env.RECEIVER_EMAIL,
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