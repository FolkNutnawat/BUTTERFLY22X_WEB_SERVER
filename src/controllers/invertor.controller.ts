import { NextFunction, Request, Response } from 'express';

import { Investor } from '../database/entities/Investor';
import { InvestorModel } from '../models/InvestorModel';

export class InvestorController {
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await InvestorModel.create(new Investor(req.body));
      res.status(201).send('Investor has been created.');
    } catch (e) {
      next(e);
    }
  };
}
