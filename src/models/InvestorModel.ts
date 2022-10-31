import { Investor as Entity } from 'entities/Investor';
import mongoose, { Document, Model } from 'mongoose';

type InvestorDocument = Document & Entity;

const investorSchema = new mongoose.Schema<InvestorDocument>({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  interest: { type: String, required: true },
  email: { type: String, required: true },
  area_of_interests: [{ type: String }],
});

export const InvestorModel = mongoose.model<InvestorDocument, Model<InvestorDocument>>(
  'InvestorModel',
  investorSchema,
  'investors'
);
