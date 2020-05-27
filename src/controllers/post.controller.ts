import { Post } from '../models/post.model';
import { Request, Response } from 'express';
import controller from './controller';
import { LoadedRequest } from '../bootstrap/LoadedRequest';

const load = async (request: Request, response: Response, next: any, id: number) =>
  controller.load(request, response, next, id, Post);
const get = (request: LoadedRequest, response: Response) => controller.get(request, response);
const create = (request: LoadedRequest, response: Response, next: any) => controller.create(request, response, next, Post);
const update = (request: LoadedRequest, response: Response, next: any) => controller.update(request, response, next);
const list = (request: LoadedRequest, response: Response, next: any) => controller.list(request, response, next, Post);

export default {
  load,
  get,
  create,
  update,
  list,
};
