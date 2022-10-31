import nodemailer from 'nodemailer';
import { SMTP_PASSWORD, SMTP_USERNAME } from '../configs/environments';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: SMTP_USERNAME,
    pass: SMTP_PASSWORD,
  },
});
