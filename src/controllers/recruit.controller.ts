import { NextFunction, Request, Response } from 'express';
import { Recruit } from '../entities/Recruit';
import { RecruitModel } from '../models/RecruitModel';

export class RecruitController {
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await RecruitModel.create(new Recruit(req.body));
      res.status(201).send('Recruit has been created.');
    } catch (e) {
      next(e);
    }
  };
}
