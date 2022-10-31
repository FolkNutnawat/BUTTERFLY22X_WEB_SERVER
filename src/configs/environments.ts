import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 5000;
export const DATABASE_URL = process.env.DATABASE_URL || '';

export const GCS_BUCKET = process.env.GCS_BUCKET || '';

export const HR_EMAIL = process.env.HR_EMAIL || '';
export const SMTP_USERNAME = process.env.SMTP_USERNAME || '';
export const SMTP_PASSWORD = process.env.SMTP_PASSWORD || '';
