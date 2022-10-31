import cors from 'cors';
import express, { Express } from 'express';
import morgan from 'morgan';
import Multer from 'multer';

import { ContactController } from '../controllers/contact.controller';
import { InvestorController } from '../controllers/invertor.controller';
import { RecruitController } from '../controllers/recruit.controller';
import { uploadFile } from '../libraries/google-storage';

const Contact = new ContactController();
const Investor = new InvestorController();
const Recruit = new RecruitController();

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 25 * 1024 * 1024, // no larger than 5mb, you can change as needed.
  },
});

export const getRouter = (app: Express) => {
  // middleware
  app.use(morgan('tiny'));
  app.use(cors({ origin: '*' }));
  app.use(express.json());

  // routes
  app.post('/contact', Contact.create);
  app.post('/investor', Investor.create);
  app.post('/recruit', Recruit.create);
  app.post('/upload', multer.array('files'), async (req, res, _next) => {
    if (!req.files || req.files.length === 0) {
      return res.status(400).send('No file uploaded.');
    }

    const files = await Promise.all(
      (req.files as Express.Multer.File[]).map((file) => {
        return uploadFile(file, req.body.ref || '');
      })
    );

    return res.status(200).send(files);
  });
};
