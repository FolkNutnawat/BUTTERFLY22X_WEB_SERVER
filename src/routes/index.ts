import { ContactController } from '../controllers/contact.controller';
import { InvestorController } from '../controllers/invertor.controller';
import { RecruitController } from '../controllers/recruit.controller';
import cors from 'cors';
import { Express } from 'express';
import morgan from 'morgan';

const Contact = new ContactController();
const Investor = new InvestorController();
const Recruit = new RecruitController();

export const getRouter = (app: Express) => {
  app.use(morgan('tiny'));
  app.use(cors({ origin: '*' }));

  app.post('/contact', Contact.create);
  app.post('/investor', Investor.create);
  app.post('/recruit', Recruit.create);
};
