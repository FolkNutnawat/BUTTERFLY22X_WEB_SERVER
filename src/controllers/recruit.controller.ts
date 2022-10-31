import { NextFunction, Request, Response } from 'express';
import { HR_EMAIL } from '../configs/environments';
import { Recruit } from '../database/entities/Recruit';
import { transporter } from '../libraries/mail';
import { RecruitModel } from '../models/RecruitModel';

export class RecruitController {
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const recruit = new Recruit(req.body);
      await RecruitModel.create(recruit);
      await transporter.sendMail({
        to: recruit.email,
        from: 'hr@butterfly22x.com',
        subject: 'Thank you for your recruit in own company.',
        text: 'Thank you for your recruit in own company, We will reply you later.',
      });

      await transporter.sendMail({
        to: HR_EMAIL,
        from: recruit.email,
        subject: `${recruit.name} ,have recruit`,
        text: `${recruit.name} ,have interested. In ${recruit.position} phone ${recruit.phone}`,
        attachments: [{ filename: 'CV', path: recruit.cv }],
      });
      res.status(201).send('Recruit has been created.');
    } catch (e) {
      next(e);
    }
  };
}
