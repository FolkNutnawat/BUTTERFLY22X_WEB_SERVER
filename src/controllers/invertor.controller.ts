import { NextFunction, Request, Response } from 'express';
import { HR_EMAIL } from '../configs/environments';

import { Investor } from '../database/entities/Investor';
import { transporter } from '../libraries/mail';
import { InvestorModel } from '../models/InvestorModel';

export class InvestorController {
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const investor = new Investor(req.body);
      await InvestorModel.create(investor);

      await transporter.sendMail({
        to: investor.email,
        from: 'hr@butterfly22x.com',
        subject: 'Thank you for your interest in own company.',
        text: 'Thank you for your interest in own company, We will reply you later.',
      });

      await transporter.sendMail({
        to: HR_EMAIL,
        from: investor.email,
        subject: `${investor.name} ${investor.surname} ,have interested in own company.`,
        text: `${investor.name} ${investor.surname} ,have interested in own company. In ${
          investor.interest
        } as ${investor.area_of_interests.join(', ')}`,
      });

      res.status(201).send('Investor has been created.');
    } catch (e) {
      next(e);
    }
  };
}
