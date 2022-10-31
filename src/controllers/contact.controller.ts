import { NextFunction, Request, Response } from 'express';
import { HR_EMAIL } from '../configs/environments';

import { Contact } from '../database/entities/Contact';
import { transporter } from '../libraries/mail';
import { ContactModel } from '../models/ContactModel';

export class ContactController {
  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const contact = new Contact(req.body);
      await ContactModel.create(contact);

      await transporter.sendMail({
        to: contact.email,
        from: 'hr@butterfly22x.com',
        subject: 'Thank you for your contact.',
        text: 'We have received your communication',
      });

      await transporter.sendMail({
        to: HR_EMAIL,
        from: contact.email,
        subject: `${contact.name} ,have contacted through the website.`,
        text: contact.message,
      });

      res.status(201).send('Contact has been created.');
    } catch (e) {
      next(e);
    }
  };
}
