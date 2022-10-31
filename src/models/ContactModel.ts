import { Contact as Entity } from 'entities/Contact';
import mongoose, { Document, Model } from 'mongoose';

type ContactDocument = Document & Entity;

const contactSchema = new mongoose.Schema<ContactDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export const ContactModel = mongoose.model<ContactDocument, Model<ContactDocument>>(
  'ContractModel',
  contactSchema,
  'contracts'
);
