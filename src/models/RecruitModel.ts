import { Recruit as Entity } from 'entities/Recruit';
import mongoose, { Document, Model } from 'mongoose';

type RecruitDocument = Document & Entity;

const recruitSchema = new mongoose.Schema<RecruitDocument>(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    cv: { type: String, required: true },
  },
  { timestamps: true }
);

export const RecruitModel = mongoose.model<RecruitDocument, Model<RecruitDocument>>(
  'RecruitModel',
  recruitSchema,
  'recruits'
);
