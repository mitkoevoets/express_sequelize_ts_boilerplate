import { User } from '../models/user.model';
import { Request, Response } from 'express';
import controller from './controller';

const list = (request: Request, response: Response, next: any) => controller.list(request, response, next, User);

export default {
  list,
};
