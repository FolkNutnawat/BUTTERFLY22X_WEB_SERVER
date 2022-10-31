import { NextFunction, Request, Response } from 'express';

import { Contact } from '../database/entities/Contact';
import { ContactModel } from '../models/ContactModel';

export class ContactController {
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await ContactModel.create(new Contact(req.body));
      res.status(201).send('Contact has been created.');
    } catch (e) {
      next(e);
    }
  };
}
