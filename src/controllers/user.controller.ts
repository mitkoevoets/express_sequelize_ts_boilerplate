import { User } from '../models/user.model';
import { Request, Response } from 'express';
import controller from './controller';
import { LoadedRequest } from '../bootstrap/LoadedRequest';

const load = async (request: Request, response: Response, next: any, id: number) =>
  controller.load(request, response, next, id, User);
const get = (request: LoadedRequest, response: Response) => controller.get(request, response);
const create = (request: LoadedRequest, response: Response, next: any) => controller.create(request, response, next, User);
const update = (request: LoadedRequest, response: Response, next: any) => controller.update(request, response, next);
const list = (request: LoadedRequest, response: Response, next: any) => controller.list(request, response, next, User);

export default {
  load,
  get,
  create,
  update,
  list,
};
