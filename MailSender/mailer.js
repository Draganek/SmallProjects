import nodemailer from 'nodemailer';
import 'dotenv/config';

export async function sendWelcomeMessage(email) {
    //const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        service: process.env.SERVICE,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    await transporter.sendMail({
        from: 'Radosław z DraganBar <radek.draganek@gmail.com>',
        to: email,
        subject: 'Witaj na liście',
        text: 'Cześć, Fajnie że jesteś',
        html: 'Cześć, <br> dzięki że to wpisałeś.'
    })
}