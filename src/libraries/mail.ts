import nodemailer from 'nodemailer';
import { SMTP_PASSWORD, SMTP_USERNAME } from '../configs/environments';
console.log(SMTP_PASSWORD, SMTP_USERNAME);
export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: SMTP_USERNAME,
    pass: SMTP_PASSWORD,
  },
});
