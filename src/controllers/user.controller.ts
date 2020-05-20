import { User } from '../models/user.model';
import { Request, Response } from 'express';

// const list = (request: Request, response: Response, next: any) => controller.list(request, response, next, User);
function list(request: Request, response: Response, next: any) {
  // const { limit = 50 } = request.query;

  return User.findAll({ limit: 50 })
    .then(entities => response.json(entities))
    .catch((e: any) => console.log(e));
}

export default {
  list,
};
